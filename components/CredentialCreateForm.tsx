import React, {useState, useEffect, ChangeEvent, useContext} from 'react'
import { Grid, Button, Input, RadioGroup, TextField, Box} from '@mui/material';
import { useForm, Form } from './useForm';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { NFTStorage, Blob } from 'nft.storage';
import {useCredentialCreatePera} from './CredentialCreatePera';
import {AuthContext} from "./context/authContext";
// import fs from 'fs';



const initialFValues = {
    fullName: '',
    description: '',
    unitName: '',
    email: '',
    studentAddress: '',
}

export default function CredentialCreateForm(props: { addOrEdit: any; recordForEdit: any; }) {
    const { addOrEdit, recordForEdit } = props
    const { user, setUser } = useContext(AuthContext);
    const [filename, setFilename] = useState("");
    const [fileStatus, setFileStatus] = useState("");
    const {createAssetPera} = useCredentialCreatePera();
    async function upload(fileData: any) {
        const endpoint = 'https://api.nft.storage' // the default
        const token = process.env.NEXT_PUBLIC_NFTSTORAGE_KEY // your API key from https://nft.storage/manage
        // @ts-ignore
        const storage = new NFTStorage({ endpoint, token })
        // const data = await fs.promises.readFile(filename)
        const cid = await storage.storeBlob(new Blob([fileData]))
        return `ipfs://${cid}`;
    }

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        // set fileName to uploading in progress
        setFileStatus("Uploading... Please wait");

        const file = e.target.files[0];
        // upload file to ipfs
        const fileURL = await upload(file);
        console.log(fileURL);
        setFilename(fileURL);
        setFileStatus("File uploaded successfully");
    };

    const validate = (fieldValues = values) => {
        let temp = {
            ...errors }
        console.log(fieldValues)
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('unitName' in fieldValues)
            temp.unitName = fieldValues.unitName ? "" : "This field is required."
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('studentAddress' in fieldValues)
            temp.studentAddress = fieldValues.studentAddress.length > 57 ? "" : "Invalid address (length should be 58)."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (validate()) {
            // check if image uploaded
            if (filename == "") {
                alert("Please upload a file");
                return;
            }
            // create a new credential with filename added to values
            // @ts-ignore
            const result = await createAssetPera({...values, filename});
            // addOrEdit(values, resetForm)
            // console.log('hhhh', result, result.txnId, result.assetIndex);
            // get user address from context
            // contact api to create a new credential
            const res = await fetch("api/credentials", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("AccessToken"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    assetIndex: result.assetIndex,
                    txnId: result.txnId,
                    from: user?.walletAddress,
                    to: values.studentAddress,
                    assetURL: filename,
                    assetName: values.fullName,
                }),
            });
            if (res.status === 200) {
                console.log(res)
                alert("Credential created successfully!");

                // refresh page
                window.location.reload();
                // reset form
                // resetForm();
            } else {
                alert("Failed to communicate with the server.");
            }

        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        sx={{ marginBottom: '10px',width: '80%' }}
                        variant="outlined"
                        name="fullName"
                        label="Credential Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName.length > 0}
                        helperText={errors.fullName}
                    />
                    <TextField
                        sx={{ marginBottom: '10px',width: '80%' }}
                        variant="outlined"
                        name="unitName"
                        label="Unit Name"
                        value={values.unitName}
                        onChange={handleInputChange}
                        error={errors.unitName.length > 0}
                        helperText={errors.unitName}
                    />
                    <TextField
                        sx={{ marginBottom: '10px',width: '80%' }}
                        variant="outlined"
                        name="description"
                        label="Credential Description"
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description.length > 0}
                        helperText={errors.description}
                    />
                    <TextField
                        sx={{ marginBottom: '10px',width: '80%' }}
                        variant="outlined"
                        label="Student Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email.length > 0}
                        helperText={errors.email}
                    />
                    <TextField
                        sx={{ marginBottom: '10px',width: '80%' }}
                        variant="outlined"
                        label="Student Address"
                        name="studentAddress"
                        value={values.studentAddress}
                        onChange={handleInputChange}
                        error={errors.studentAddress.length > 0}
                        helperText={errors.studentAddress}
                    />
                    <Button
                        component="label"
                        variant="outlined"
                        startIcon={<UploadFileIcon />}
                        sx={{ marginRight: "1rem" }}
                    >
                        Upload PNG
                        <input type="file" accept=".png" hidden onChange={handleFileUpload} />
                    </Button>
                    <Box>{fileStatus}</Box>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}