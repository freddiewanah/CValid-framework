import React, {Component, useContext, useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useTable from "./useTable";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material/';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Popup from "./Popup";
import CredentialCreateForm from "./CredentialCreateForm";
import {AuthContext} from "./context/authContext";
import {User} from "./hooks/useUser";
import {useCredentialCreatePera} from "./CredentialCreatePera";
import {useCredentialTransferPera} from "./CredentialTransferPera";

const headCells = [
    { id: 'credentialID', label: 'Credential ID' },
    { id: 'credentialName', label: 'Credential Name' },
    { id: 'studentEmail', label: 'Email Address' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]
const AssetCreate = (credentials: any) => {

    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: (items: any) => { return items; } })
    useEffect(() => {
        // check if credentials is an array
        console.log("credentials", credentials)
        console.log(Array.isArray(credentials.credentials))
        setRecords(credentials.credentials)
    }, [credentials])
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    const {createAssetPera } = useCredentialCreatePera();
    const {transferAssetPera} = useCredentialTransferPera();
    const addOrEdit = (values: any, resetForm: () => void) => {
        resetForm()
        // createAsset(values)
        createAssetPera(values)
        // TODO: get data from the backend and update table

        setOpenPopup(false)
    }

    const handleClickOpen = () => {
        setOpenPopup(true);
    };
    const handleClose = () => {
        setOpenPopup(false);
    };

    const handleTransfer = (credential:any) => {

        transferAssetPera(credential).then(async (res) => {
            console.log(res);
            if (res) {
                //call the api to get the updated list of credentials
                const dbRes = await fetch("api/credentials?action=transfer", {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("AccessToken"),
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        txnId: credential.txn_id,
                        to: credential.to_address,
                        from: credential.from_address
                    }),
                });
                // console.log("response from db", dbRes);
                if (dbRes.status === 200) {
                    alert("Transfer successfully");
                    //refresh the page
                    window.location.reload();
                } else {
                    alert("Transfer failed");
                }
            } else {
                alert("Transfer failed");
            }
        }).catch((err) => {
            alert("Transfer failed");
        });
    };

    return (
        <div>
            <Paper className='paper-wrap'>
            <div className="function-wrap">
                <div className="search-wrap">
                    <TextField
                        sx={{width: '100%'}}
                        label="Search credential"
                        id="outlined-size-small"
                        placeholder="Name or address"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </div>
                <div className="others-options">
                        <button className="default-btn btn-two" onClick={handleClickOpen}>
                            <i className="bi bi-plus-square fa-4x"></i> &nbsp;  Create credential
                        </button>
                </div>
            </div>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.asset_index}>
                                    <TableCell>{item.asset_index}</TableCell>
                                    <TableCell>{item.asset_name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                        {(item.status === "OPT_IN")&&(
                                            <button className="default-btn btn-two" onClick={() => handleTransfer(item)}>Transfer</button>
                                        )}
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />

            </Paper>
            <Popup
                title="Create a credential"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <CredentialCreateForm recordForEdit={recordForEdit}
                                      addOrEdit={addOrEdit} />

            </Popup>
        </div>
    );
}

export default AssetCreate;