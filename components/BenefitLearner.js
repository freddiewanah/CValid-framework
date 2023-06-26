import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section id="learners" className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/*<span>For Lifelong Learners</span>*/}
                        <h2>Benefits for Learners</h2>
                        <p>Have you experienced cumbersome procedure of getting certified credentials?</p>
                        <p> CValid allows individuals to have complete control over their education data </p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>01 <i className="flaticon-technical-support"></i></span>
                                        <h3>Manage Your Education Assets Securely</h3>
                                        <p>Secure your credentials with a cryptographically guarded wallet </p>
                                    </li>
                                    <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Access Your Credentials Anywhere Anytime</h3>
                                        <p>Ensure timely access to your credentials no matter where you are</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Easy Certifying</h3>
                                        <p>Certify your documents without third party involvement</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-img" >
                                <img src="/CValidImages/Education-rafiki.png" alt="Image" />
                            </div>
                            
                        </div>

             
                       
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
