// @ts-ignore
import {User} from "./hooks/useUser";
import {useContext, useState} from "react";
import {AuthContext} from "./context/authContext";
import {PeraWalletConnect} from '@perawallet/connect';
import algosdk, { waitForConfirmation } from 'algosdk';
import {useConnectWallet, peraWallet} from "../pages/api/connector";

interface TxnToSign {
    txn: any;
    signers: string[];
}

const token = {
    'X-API-key':  "",
}

export const useCredentialCreatePera =  () =>{

    let client: any = null;
    const {user} = useContext(AuthContext);
    // peraWallet
    const {connectWallet} = useConnectWallet();
    function getARC69(filename : any, description : any) {
        let arcFormat = {
            "standard": "arc69",
            "description": description,
            "mime_type": "image/png",
            "properties": {
                "event": "NFT Hackathon",
            } //TODO: add properties
        }
        return arcFormat
    }
    const setupClient = async () => {
        if (client == null) {
            // @ts-ignore
            client = new algosdk.Algodv2("", process.env.NEXT_PUBLIC_MAINNET_SERVER, 443);
        } else {
            return client;
        }
        return client;
    }

    async function waitForConfirmation(algodclient: any, txId: any) {
        let response = await algodclient.status().do();
        let lastround = response["last-round"];
        while (true) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
                //Got the completed Transaction
                console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
                break;
            }
            lastround++;
            await algodclient.statusAfterBlock(lastround).do();
        }
    }

    const createAssetPera = async (values: any) =>{

        const algodclient = await setupClient();

        let params = await algodclient.getTransactionParams().do();
        // console.log(params);
        let enc = new TextEncoder();
        let note = enc.encode(JSON.stringify(getARC69(values.filename, values.description)));; // arbitrary data to be stored in the transaction; here, none is stored
        // Whether user accounts will need to be unfrozen before transacting
        let defaultFrozen = false;
        // integer number of decimals for asset unit calculation
        let decimals = 0;
        // total number of this asset available for circulation
        let totalIssuance = 1;
        // Used to display asset units to user
        let unitName = values.unitName;
        // Friendly name of the asset
        let assetName = values.fullName;
        let assetURL = values.filename;
        // Optional hash commitment of some sort relating to the asset. 32 character length.
        let assetMetadataHash = undefined;
        // let assetMetadataHash = new Uint8Array(

        if(!user?.walletAddress){
            throw new Error("User wallet address invalid.")        
        }

        const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
            user?.walletAddress,
            note,
            totalIssuance,
            decimals,
            defaultFrozen,
            process.env.NEXT_PUBLIC_ADMIN_ADDRESS,
            process.env.NEXT_PUBLIC_ADMIN_ADDRESS,
            process.env.NEXT_PUBLIC_ADMIN_ADDRESS,
            user?.walletAddress,
            unitName,
            assetName,
            assetURL,
            assetMetadataHash,
            params);
        const txns : TxnToSign[] = [{ txn, signers: [user?.walletAddress] }]

        // sign transaction
        const requestParams = [txns];

        let connectWalletRes;
        try{
            connectWalletRes = await connectWallet()
        }catch(err){
            console.log(err)
            throw err
        }

        let ptx;
        let txnId;
        try{
            const signedTx = await peraWallet.signTransaction(requestParams);
            const { txId } = await algodclient.sendRawTransaction(signedTx).do();
            txnId = txId;

            await waitForConfirmation(algodclient, txId);
            ptx = await algodclient.pendingTransactionInformation(txId).do();


        } catch (err) {
            console.log(err)
            throw err
        }
        // @ts-ignore
        return {
            assetIndex: ptx["asset-index"],
            txnId: txnId
        }
    }
    return {createAssetPera}
}