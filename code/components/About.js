import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/CValidImages/Certification-amico.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>A Blueprint for Future Credentialing Infrastructure</h2>
                                <p>CValid, a reliable and tamper-proof credentialing system for managing, sharing, and validating education and employment qualifications. CVallet depicts the blueprint for future credentialing architecture, accelerates the evolution of blockchain technology 3.0, and benefits broad social aspects  while carrying out the social responsibility of addressing contemporary challenges in education credentialing and labour market recognition processes.
</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Immutability
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Transparency
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Self-soverignty
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Privacy-preserving
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Efficiency
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Cost-saving
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-us">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
