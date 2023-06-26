import React, { useContext } from 'react';
import { AuthContext } from "./context/authContext";


const ProfileInfo = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="profile-container">


            <div className="col-xl-8 order-xl-1">
                <div className="card bg-secondary shadow">
                    {/* card header */}
                    <div className="card-header bg-white border-0 ">
                        <div className="row align-items-center">
                            <div className="col-8">
                            <h4 className="mb-0">Account Information</h4>
                            </div>

                        </div>
                    </div>

                    {/* card body */}
                    <div className="card-body">
                        <form>
                            <h6 className="heading-small text-muted mb-4">Registered User Information</h6>
                            <div className="pl-lg-4">
                                <div className="profilerow">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <div >
                                                <label className="form-control-label">User Name</label>
                                            </div>
                                            <div id="input-username" className="form-control form-control-alternative">
                                                <p> {user?.firstname + ' ' + user?.lastname}</p>
                                            </div>
                                        </div>
                                    </div>
                                   {/*  <div className="col-lg-6">
                                        <div className="form-group focused">
                                           <div >
                                                <label className="form-control-label">User ID</label>
                                            </div>
                                            
                                            <div id="input-username" className="form-control form-control-alternative">
                                                <p>{user?.id}</p>
                                            </div>
                                            
                                        </div>
                                    </div> */}
                                   
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <div >
                                                <label className="form-control-label">Email</label>
                                            </div>
                                            <div id="input-username" className="form-control form-control-alternative">
                                                <p>{user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <div >
                                                <label className="form-control-label">Wallet Address</label>
                                            </div>
                                            <div id="input-username" className="form-control form-control-alternative">
                                                <p>{user?.walletAddress}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        {/*
                            <h6 className="heading-small text-muted mb-4">Contact information</h6>
                            <div className="pl-lg-4">
                                <div className="profilerow">
                                    <div className="col-md-12">
                                        <div className="form-group focused">
                                            <label className="form-control-label" id="input-address">Address</label>
                                            <input id="input-address" className="form-control form-control-alternative" placeholder="Address" value="" type="text" />
                                        </div>
                                    </div>
                                </div>


                                <div className="profilerow">
                                    <div className="col-md-12">
                                        <div className="form-group focused">
                                            <label className="form-control-label" id="input-city">City</label>
                                            <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group focused">
                                            <label className="form-control-label" id="input-country">Country</label>
                                            <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-control-label" id="input-country">Postal code</label>
                                            <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-4 text-right">
                                <input type="submit" className="default-btn btn-two" value="Save" />
                            </div>
                                */}

                        </form>
                    </div>

                </div>

            </div >

















        </div >



    )

}

export default ProfileInfo;