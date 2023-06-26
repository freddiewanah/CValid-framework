import React, {Component, useState} from 'react';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { Grid, Button, Input, RadioGroup, TextField, Box, InputAdornment, IconButton } from '@mui/material';
import {Form, useForm} from "../components/useForm";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SignUp = () => {
    const initialFValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors }
        if ('firstname' in fieldValues)
            temp.firstname = fieldValues.firstname ? "" : "This field is required."
        if ('lastname' in fieldValues)
            temp.firstname = fieldValues.lastname ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('password' in fieldValues)
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?.])[A-Za-z\d#$@!%&*?.]{8,30}$/).test(fieldValues.password) ? "" : "Invalid password (must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one special character)."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const [userType, setUserType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const router = useRouter();
    const handleSubmit = async (event: {
        target: any;
        preventDefault(): void;
    }) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        // check if errors is empty
        if (!validate()) {
            alert("Please fill out all required fields.");
            return;
        }

        // if (userType.length == 0){
        //     alert("Please select a user type.");
        //     return;
        // }


        const res = await fetch("api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value,
                firstname: event.target.firstname.value,
                lastname: event.target.lastname.value,
                userType: userType,
            }),
        });
        if (res.status === 200) {
            //save the AccessToken to local storage
            handleClickOpen();

        } else {
            alert("Signup failed, please contact the administrator.");
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        router.push("/");
    };

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Sign Up"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Sign Up"
            />

            <div className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Create an account!</h3>
                                </div>

                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    variant="outlined"
                                                    name="firstname"
                                                    label="First Name"
                                                    value={values.firstname}
                                                    onChange={handleInputChange}
                                                    error={errors.firstname.length > 0}
                                                    helperText={errors.firstname}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    variant="outlined"
                                                    name="lastname"
                                                    label="Last Name"
                                                    value={values.lastname}
                                                    onChange={handleInputChange}
                                                    error={errors.lastname.length > 0}
                                                    helperText={errors.lastname}
                                                />
                                            </div>
                                        </div>


                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    variant="outlined"
                                                    name="email"
                                                    label="Email"
                                                    value={values.email}
                                                    onChange={handleInputChange}
                                                    error={errors.email.length > 0}
                                                    helperText={errors.email}
                                                />

                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    variant="outlined"
                                                    name="password"
                                                    label="Password"
                                                    type={showPassword ? "text" : "password"}
                                                    value={values.password}
                                                    onChange={handleInputChange}
                                                    error={errors.password.length > 0}
                                                    helperText={errors.password}
                                                    InputProps={{ // <-- This is where the toggle button is added.
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                >
                                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />

                                            </div>
                                        </div>

                                        <div className="col-12">
                                        <p className="role-desc">
                                            I am a:
                                        </p>
                                        </div>
                                        <div className="btn-group" role="group"
                                             aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                                   autoComplete="off"  />
                                                <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={()=>{setUserType('LEARNER')}}>
                                                    Learner</label>

                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onClick={()=>{setUserType('ISSUER')}}
                                                       autoComplete="off" />
                                                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Issuer</label>

                                                    <input type="radio" className="btn-check" name="btnradio" onClick={()=>{setUserType('VERIFIER')}}
                                                           id="btnradio3" autoComplete="off" />
                                                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Verifier</label>
                                        </div>


                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Register Account
                                            </button>
                                        </div>

                                        <div className="col-12">
                                            <p className="account-desc">
                                                Already have an account?
                                                <Link href="/login">
                                                    <a>Login</a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Register Success!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Thank you for registering with us. Please check your email to verify your account.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                Okay
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SignUp;