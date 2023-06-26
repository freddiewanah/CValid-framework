import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section id="education-providers" className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/*<span>For Education Providers</span>*/}
                        <h2>Benefits For Education Providers</h2>
                        <p>The most secure and efficient way to issue and store certificates for graduates</p>
                        
                    </div>

                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src="/CValidImages/Certification-rafiki.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>01 <i className="flaticon-technical-support"></i></span>
                                        <h3>Improve Operation Efficiency</h3>
                                        <p>CValid offers a user-friendly tool for issuing digital and verifiable credentials, saving time and money compared to traditional credentials</p>
                                    </li>
                                    <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Ensure Data Security</h3>
                                        <p>CValid is built on decentralized blockchain network to avoid single point failure, which can best secure your learners&rsquo; records</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Increase Education Reputation</h3>
                                        <p>CValid prevents trust and security vulnerabilities from existing systems, ensure credentials&rsquo; authenticity and enhance your education reputation</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                       

             
                       
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
