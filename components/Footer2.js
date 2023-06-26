import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row footer-space-between">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <Link href="/" className="logo" >
                                        <img src="logo/logo-color.png" alt="Image" style={{height: 50}}/>
                                    </Link>

                                    <p>Blockchain-based system for future crdentialing architecture</p>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Contacts</h3>

                                    <ul className="information">


                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            block4edu@gmail.com
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>Address</span>
                                            20 Exhibition Road, Melbourne Australia
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>

                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright &copy; {currentYear} CValid. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Supported By <i className='bx bx-heart'></i> <a href="https://ace-sip.org/" target="_blank" rel="noreferrer">ACE-SIP</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;