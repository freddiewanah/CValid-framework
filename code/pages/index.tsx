import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import MainBanner2 from "../components/MainBanner2";
import About from "../components/About";
import BenefitLearner from "../components/BenefitLearner";
import BenefitProvider from "../components/BenefitProvider2";
import BenefitBusiness from "../components/BenefitBusiness";
import WorkFlow from "../components/CredentialingProcedure";
import News from "../components/News";
import React, { Component } from "react";
import Footer from "../components/Footer2";

//const Home: NextPage = () =>

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <MainBanner />

      <Features />

      <div>
        <About />
      </div>

      <div>
        <BenefitLearner />
      </div>

      <div>
        <BenefitProvider />
      </div>

      <div>
        <BenefitBusiness />
      </div>

      <WorkFlow />

      <div>
        <News />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
