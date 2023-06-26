import React, { Component } from 'react';
import Link from 'next/link';
import YouTube from "react-youtube";

class About extends Component {

    

    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/logo/AlgoMU.jpeg" alt="Image" />

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">

                                <h2>About CValid</h2>
                                <p><em>The society is facing serious education credentialing problems and is calling for a new credentialing infrastructure
                                    – CValid, a blockchain-based solution comes to the spotlight.</em></p>
                                <p>Jointly supported by <a href='https://www.algorand.foundation/ace'>Algorand Centre of Excellence</a> and <a href='https://www.monash.edu/blockchain'>Monash Blockchain Technology Centre</a>, CValid, as a flagship project of <a href='https://www.algorand.foundation/ace-university/monash-university'>ACE-SIP</a>, aims to create, pilot, and evaluate a decentralised platform for managing, sharing, and validating education and employment qualifications.
                                </p>
                                <p> CVallet depicts the blueprint for future credentialing architecture, accelerates the evolution of blockchain technology 2.0, and benefits broad social aspects (e.g. technical improvements, socioeconomic efficiency, and regulatory support) while carrying out the social responsibility of addressing contemporary challenges in education credentialing and labour market recognition processes.</p>
                                <div className="row">


                                </div>


                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="container">
                            <div className="video pt-100 pb-70">
                                <h2>About ACE-SIP</h2>
                                <p>ACE-SIP (Algorand Centre of Excellence on Sustainability Informatics for the Pacific), funded by Algorand Foundation under the competitive Algorand Centres of Excellence (ACE) Program, is the only Australian ACE among the 10 winners in the world. It is a multi-university team advancing the state-of-the-art Algorand blockchain technology, the world’s most powerful and sustainable blockchain, from research and education to provide sustainability in the Pacific Region. </p>
                                <p>Led by Monash University in Australia, the team benefits from the expertise of researchers from other universities including University of Queensland (Australia), University of Sydney (Australia), Swinburne University of Technology (Australia), Hong Kong Polytechnic University (Hong Kong), University of Fiji (Fiji), University of the South Pacific (Fiji) and two research institutes the Oceania Cyber Security Centre (Australia) and the Climateworks Centre (Australia and Indonesia).</p>

                                <YouTube videoId="BMM_Y4DRCto"
                                    onReady={this._onReady}/>

                            </div>

                        </div>
            </section>
        );
    }
}

export default About;