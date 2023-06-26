import React, { Component } from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
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
                            {/*<div className="privacy">*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            <Link href="/">*/}
                            {/*                <a>Terms & Conditions</a>*/}
                            {/*            </Link>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <Link href="/">*/}
                            {/*                <a>Privacy Policy</a>*/}
                            {/*            </Link>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
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

export default Footer;