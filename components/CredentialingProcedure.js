import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="offer-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>WorkFlow</span>
                        <h2>How does it work?</h2>
                        <p>CValid is built on Algorand blockchain with low fee and high transaction speed. It connects the institutions, learners and recruiters, making knowledge certificate management easier for everyone.</p>
                    </div>


                    <section className="slider-area">
                        <Swiper
                            navigation={true}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="hero-swiper"
                        >
                            <SwiperSlide>
                                <div>
                                    
                                    <p></p>
                                    <img src="/CValidImages/ProcessSignUp.png" alt="Image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    
                                    <p></p>
                                    <img src="/CValidImages/ProcessIssue.png" alt="Image" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    
                                    <img src="/CValidImages/ProcessShareVerify.png" alt="Image" />
                                </div>
                            </SwiperSlide>




                        </Swiper>





                    </section>

                    <div className="row">









                    </div>


                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Services;