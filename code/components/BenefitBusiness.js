import React, { Component } from 'react';
import Link from 'next/link';

class MakeYourBusiness extends Component {
    render() {
        return (
            <section id="business-owners" className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Benefits for Business Owners</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Cut Down Verification Cost</h3>
                                <p> CValid allows your business to get rid of screening services and reduce recruitment budget. CValid ensures that all academic credentials, certificates, and badges you receive are official and originating with the issuing organization.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Improve Recruitment Efficiency</h3>
                                <p>You can easily get the valid results of your employment candidates with just one click. CVallet provides a trustworthy and fault-tolerant verification tool for business organisations to improve their traditional recruitment efficiency.</p>
                            </div>

                            {/*<div className="business-btn">*/}
                            {/*    <Link href="/about-2">*/}
                            {/*        <a className="default-btn">*/}
                            {/*            Know Details*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="*">
                                <img src="/CValidImages/Hiring-amico.png" alt="Image" />
                                 </div>

                               

                                

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MakeYourBusiness;