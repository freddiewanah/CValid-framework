import React, { Component } from "react";
import Navbar from "../components/navbar";
import PageBanner from "../components/PageBanner";
import Verification from "../components/verify";
import Footer from "../components/Footer2";

class VerifiPage extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Verify Credentials"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Verification"
        />

        <Verification />

        <div className="pb-50"></div>

        <Footer />
      </>
    );
  }
}

export default VerifiPage;
