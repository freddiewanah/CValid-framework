import React, { Component } from "react";
import Navbar from "../components/navbar";
import PageBanner from "../components/PageBanner";
import About from "../components/About2";

import Footer from "../components/Footer2";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="About CValid"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Introduction"
        />

        <About />

        <div className="pb-50"></div>

        <Footer />
      </>
    );
  }
}

export default AboutUs;
