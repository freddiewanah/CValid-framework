import React, { Component } from "react";
import Navbar from "../components/navbar";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer2";

class Roadmap extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <Navbar />
        <PageBanner
          pageTitle="Project Development Plan"
          homePageUrl="/"
          homePageText="Home"
          activePageText="CValid Roadmap"
        />
        <section className="industries-area pb-100">
          <div className="container">
            <div className="section-title">
              <div style={{ padding: "30px" }}>
                <h2>CValid Roadmap</h2>
              </div>
              <p>
                As an intelligent and secure education data management system
                supported by blockchain technology, CValid meets social demands
                with a highly cross-disciplinary background that covers a few
                ARC prioritized fields: distributed applications engineering,
                information technology, education, and commerce management. This
                project shows a promising blueprint to potential investors and
                the specific road map listed in the following section.
              </p>
            </div>

            <div className="tab industries-list-tab">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  {/* Tabs navs */}
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}
                    >
                      <span>
                        <i className="flaticon-machine-learning"></i>
                        <h3>Initiation Stage</h3>
                        <p>Jan 2022 - May 2022</p>
                      </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <span>
                        <i className="flaticon-artificial-intelligence"></i>
                        <h3>Prototyping</h3>
                        <p>May 2022 - Oct 2022</p>
                      </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <span>
                        <i className="flaticon-health"></i>
                        <h3>MVP Product</h3>
                        <p>Oct 2022 - May 2023</p>
                      </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <span>
                        <i className="flaticon-automation"></i>
                        <h3>Tokenization</h3>
                        <p>May 2023 - Jan 2024</p>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-9">
                  <div className="tab_content">
                    {/* Tab item #1 */}
                    <div id="tab1" className="tabs_item">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-img left-img">
                            <img
                              src="/CValidImages/businessRaising.png"
                              alt="Image"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Jan 2022 - May 2022</h3>

                            <p>
                              This stage includes prerequisites such as:
                              depicting the current higher education landscape,
                              identifying industrial challenges, mapping
                              blockchain attributes to problematic areas,
                              involving lifelong learners, consulting with
                              industry senior-level recruiters and eliciting
                              stakeholders&rsquo; requirements
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    landscape Investigation
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Challenges Identification
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Propose Ideal Infrastructure
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Survey
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Consulting Interviews
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Data Analysis
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #2 */}
                    <div id="tab2" className="tabs_item">
                      <div className="row  align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>May 2022 - Oct 2022</h3>
                            <p>
                              Outcomes during the Prototyping stage include:
                              designing the blockchain-origented system
                              architecture, setting up deployment environment,
                              developing back-end server and front-end
                              interfaces
                            </p>
                            <p>
                              Integrating modules and testing the system meets
                              the business requirements
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Architecture Design
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Environment Setup
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Back-end Development
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Front-end Development
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    UI designing
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Integration Testing
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-img right-img">
                            <img src="/CValidImages/Teamwork.png" alt="Image" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #3 */}
                    <div id="tab3" className="tabs_item">
                      <div className="row  align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-img left-img">
                            <img
                              src="/CValidImages/ProductIteration.png"
                              alt="Image"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>Oct 2022 - May 2023</h3>
                            <p>Outcomes during the MVP stage may include:</p>
                            <p>
                              Improving visual designing, running workshops and
                              involving testing users, developing clients
                              community and mobile devices applications
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Workshop Pilots
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    System Iteration
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Users&rsquo; Community
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Initial Marketing
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Mobile Applications
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Initial Coin Offering
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab item #4 */}
                    <div id="tab4" className="tabs_item">
                      <div className="row  align-items-center">
                        <div className="col-lg-6">
                          <div className="industries-content">
                            <h3>May 2023 - Jan 2024</h3>
                            <p>
                              In tokenization stage, work milestones may
                              include:{" "}
                            </p>
                            <p>
                              Launching official tokens and learning essets
                              NFTs, such as learning badges, learning credits
                              and education fund. Integarting credentialing
                              system and the online learning platform. Gaining
                              20 institutions and 2000 enrolled users
                            </p>

                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Education Essets NFTs
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Official Tokens
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Initial Coin Offering (2nd)
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Marketing
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Education Ecosystem
                                  </li>
                                  <li>
                                    <i className="flaticon-checked"></i>
                                    Listing
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="industries-img right-img">
                            <img
                              src="/CValidImages/BusinessRaising2.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Roadmap;
