// @ts-ignore
import {User} from "./hooks/useUser";
import {useContext, useState} from "react";
import {AuthContext} from "./context/authContext";
import {PeraWalletConnect} from '@perawallet/connect';
import algosdk, { waitForConfirmation } from 'algosdk';
import {peraWallet, useConnectWallet} from "../pages/api/connector";

interface TxnToSign {
    txn: any;
    signers: string[];
}
export const useCredentialOptInPera =  () =>{

    let client: any = null;
    const {user} = useContext(AuthContext);
    // peraWallet
    const {connectWallet} = useConnectWallet();
     const setupClient = async () => {
        if (client == null) {
            // @ts-ignore
            client = new algosdk.Algodv2('',process.env.NEXT_PUBLIC_MAINNET_SERVER, 443);
        } else {
            return client;
        }
        return client;
    }

    const transferAssetPera = async (values: any) =>{
        let algodclient = await setupClient();

        let params = await algodclient.getTransactionParams().do();
        if(! user?.walletAddress){
            return;
        }
        const assetIndex = parseInt(values.asset_index);
        let txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(
            {
                from: values.from_address,
                to: values.to_address,
                amount: 1,
                assetIndex: assetIndex,
                suggestedParams: params,
            });
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

        let confirmResult;
        let signedTx;
        try{
            signedTx = await peraWallet.signTransaction(requestParams);
            const { txId } = await algodclient.sendRawTransaction(signedTx).do();
            confirmResult = await waitForConfirmation(algodclient, txId, 2);
            // console.log(signedTx);
        } catch (err) {
            console.log(err)
            throw err
        }
        return true;
    }


    const optInAssetPera = async (values: any) =>{
        let algodclient = await setupClient();

        let params = await algodclient.getTransactionParams().do();

        if(! user?.walletAddress){
            console.log("no wallet address");
            return false;
        }

        // string to number
        const assetIndex = parseInt(values.asset_index);
        let txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(
            {
                from: user?.walletAddress,
                to: user?.walletAddress,
                amount: 0,
                assetIndex: assetIndex,
                suggestedParams: params,
            });
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

        let signedTx;
        let confirmResult;
        try{
            signedTx = await peraWallet.signTransaction(requestParams);
            const { txId } = await algodclient.sendRawTransaction(signedTx).do();
            confirmResult = await waitForConfirmation(algodclient, txId, 2);
        } catch (err) {
            console.log(err)
            throw err
        }

        return true;
        // await transferAssetPera(values);


    }
    return {optInAssetPera}
}