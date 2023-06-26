import React, { Component } from 'react';
import Link from 'next/link';

class News extends Component {
    render() {
        return (
            <section id="news" className="news-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Our Recent News </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum fugit temporibus possimus itaque accusamus voluptatibus dignissimos nobis eaque.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="https://acesummerschool.github.io/">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <img src="/images/blog/ACE-summerschool.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>2nd February 2023</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>

                                                <a target="_blank" rel="noopener noreferrer">
                                                    <i className="flaticon-user"></i> CValid
                                                </a>

                                        </li>
                                    </ul>

                                    <Link href="https://acesummerschool.github.io/">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <h3>ACE-SIP Summer School 2023</h3>
                                        </a>
                                    </Link>

                                    <p>The 1st ACE-SIP Summer School will be held in Melbourne Australia from 2nd to 3rd Feb, 2023.</p>
                                    
                                    <Link href="https://acesummerschool.github.io/">
                                        <a className="read-more" target="_blank" rel="noopener noreferrer">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="https://link.springer.com/chapter/10.1007/978-3-031-23020-2_33">
                                        <a  target="_blank" rel="noopener noreferrer">
                                            <img src="/images/blog/NSSBestPaper.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>8th December 2022</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>

                                                <a>
                                                    <i className="flaticon-user"></i> CValid
                                                </a>

                                        </li>
                                    </ul>

                                    <Link href="https://link.springer.com/chapter/10.1007/978-3-031-23020-2_33">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <h3>Best Paper Award in NSS 2022</h3>
                                        </a>
                                    </Link>

                                    <p>Our most recent academic publication has received Best Paper Award in NSS conference 2022</p>
                                    
                                    <Link href="https://link.springer.com/chapter/10.1007/978-3-031-23020-2_33">
                                        <a className="read-more" target="_blank" rel="noopener noreferrer">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="https://drive.google.com/file/d/1wwXm2kGBeKSI252JQL5GzGDejdsqWTcq/view?usp=sharing">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <img src="/images/blog/CValidTechReport.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>22 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>

                                                <a target="_blank" rel="noopener noreferrer">
                                                    <i className="flaticon-user"></i> CValid
                                                </a>

                                        </li>
                                    </ul>

                                    <Link href="https://drive.google.com/file/d/1wwXm2kGBeKSI252JQL5GzGDejdsqWTcq/view?usp=sharing">
                                        <a target="_blank" rel="noopener noreferrer">
                                            <h3>CVallet Technical Report Version1.0</h3>
                                        </a>
                                    </Link>

                                    <p>CVallet technical report version 1.0 updated the most recent development stage</p>


                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;