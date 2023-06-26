import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <div className="features-area mt-minus-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-artificial-intelligence"></i>
                                <h3>For Education Providers</h3>
                                <p> CValid provides an efficient way to issue verifiable education credentials.</p>

                                <Link href="/#education-providers">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-machine-learning"></i>
                                <h3>For Lifelong Learners</h3>
                                <p>CValid provides a secure place to manage all of your education essets.</p>
                                
                                <Link href="/#learners">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>For Business Owners</h3>
                                <p>CValid drives down the cost of recruitment and saves your screening time.</p>
                                
                                <Link href="/#business-owners">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;