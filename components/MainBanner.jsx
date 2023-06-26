import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const MainBanner = () => {
  return (
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
          <div
            className="jumpx-slider-item"
            style={{ backgroundImage: `url(/images/slider1new.jpeg)` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="jumpx-slider-text overflow-hidden one">
                    <h1>CValid: A Blockchain-based Credentialing System</h1>
                    <p>
                      {" "}
                      A decentralised platform for managing, sharing, and
                      validating education and employment qualifications. The
                      tamper-proof credentialing system depicts the blueprint
                      for future credentialing architecture.
                    </p>
                    <div className="slider-btn">
                      <Link href="/sign-up">
                        <a className="default-btn active">Register Now</a>
                      </Link>



                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="jumpx-slider-item"
            style={{ backgroundImage: `url(/images/slider2new.jpg)` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="jumpx-slider-text overflow-hidden two">
                    <span>For Lifelong Learners</span>
                    <h1>
                      A secure place to manage all of your education assets
                    </h1>
                    <p>
                      Managing, sharing and verifying credentials empowered by
                      Blockchain Technology
                    </p>

                    <div className="slider-btn">
                      {/*<Link href="/sign-up">*/}
                      {/*  <a className="default-btn active">Register Now</a>*/}
                      {/*</Link>*/}
                      <Link href="/#learners">
                        <a className="default-btn white">Learn More</a>
                      </Link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="jumpx-slider-item"
            style={{
              backgroundImage: `url(/images/home-five/slider3new.jpeg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="jumpx-slider-text overflow-hidden three">
                    <span>
                      Education Check, Background Check, Reference Check
                    </span>
                    <h1>Recruiters’ Time-saver</h1>
                    <p>
                      Drive down the cost of recruitment. See the trustworthy
                      results with one click
                    </p>

                    <div className="slider-btn">
                      {/*<Link href="/sign-up">*/}
                      {/*  <a className="default-btn active">Register Now</a>*/}
                      {/*</Link>*/}
                      <Link href="/#business-owners">
                        <a className="default-btn white">Learn More</a>
                      </Link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainBanner;
