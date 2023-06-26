import React, {Component, useContext, useState} from "react";
import Navbar from "../components/navbar";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import { AuthContext } from "../components/context/authContext";
import {User} from "../components/hooks/useUser";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {useForm} from "../components/useForm";

interface LoginResponse {
  ChallengeParameters: string;
  AuthenticationResult: {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string;
    RefreshToken: string;
  };
}

export const RouteByToken = async (token: string, router: NextRouter, setUser:  (user: (User | null)) => void ) => {

  const userRes = await fetch("api/users", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  if (userRes.status === 200) {
    const user = await userRes.json();
    setUser({
      email: user[0].email,
      id: user[0].id,
      firstname: user[0].firstname,
      lastname: user[0].lastname,
      role: user[0].user_type,
      walletAddress: user[0].wallet_address,
      authToken: token,
    });
    if (user[0].wallet_address?.length > 0) {
      router.push(
          user[0].user_type === "ISSUER"
              ? "/issuerDashboard"
              : "/learner-dashboard"
      );
    } else {
      router.push("/connect-wallet");
    }

  } else {
    alert("Internal error, please contact the site manager.");
  }
}

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);
  const initialFValues = {
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

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = async (event: {
    target: any;
    preventDefault(): void;
  }) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    if (!validate()) {
      alert("Please fill out all required fields.");
      return;
    }
    const res = await fetch("api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    });
    if (res.status === 200) {
      //save the AccessToken to local storage
      const apiResponse: LoginResponse = await res.json();
      localStorage.setItem(
        "AccessToken",
        apiResponse.AuthenticationResult.AccessToken
      );
      localStorage.setItem("IdToken", apiResponse.AuthenticationResult.IdToken);
      localStorage.setItem(
        "RefreshToken",
        apiResponse.AuthenticationResult.RefreshToken
      );
      localStorage.setItem(
        "ExpiresIn",
        apiResponse.AuthenticationResult.ExpiresIn.toString()
      );

      await RouteByToken(apiResponse.AuthenticationResult.AccessToken, router, setUser);
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Login"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Login"
      />
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Login to your account</h3>
                </div>

                <form method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    {/*<div className="col-lg-4 col-md-4 col-sm-12">*/}
                    {/*  <a href="#" className="default-btn mb-30">*/}
                    {/*    <i className="bi bi-google"></i> Google*/}
                    {/*  </a>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-4 col-md-4 col-sm-12">*/}
                    {/*  <a href="#" className="default-btn mb-30">*/}
                    {/*    <i className="bi bi-facebook"></i> Facebook*/}
                    {/*  </a>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-4 col-md-4 col-sm-12">*/}
                    {/*  <a href="#" className="default-btn mb-30">*/}
                    {/*    <i className="bi bi-twitter"></i> Twitter*/}
                    {/*  </a>*/}
                    {/*</div>*/}

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

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password">
                        <a className="forget">Forgot my password?</a>
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Log In Now
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member?
                        <Link href="/sign-up">
                          <a>Register</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
