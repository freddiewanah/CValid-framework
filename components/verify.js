import React, { Component } from "react";


class Verification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transID: "U5XNDMTKXTW2GX6AVGLESZ4JEZ5WUSYWOMVFK3LEOTEULMN2MHGQ", //store the NFT transaction ID here
      verified: false,
    };
    this.verify = this.verify.bind(this);
  }

  verify(e) {
    const transID = e.target.querySelector('input[type="transactionID"]').value; 
    const pass = transID == this.state.transID; //compare transID with this.state.transID, if they are match, change verified to true;
    this.setState({
      verified: pass,
    });
  }

  render() {

    const verify = (
      <div className="container">
        <div className="form-heading text-center">
          <div className="row">
            <form className="form-group" action="#" onSubmit={this.verify}>
              
              <input className="form-control" type="transactionID" placeholder="certificate-transactionID" />

              <button onClick={this.verify} class="default-btn">Verify</button>

            </form>
          </div>
        </div>




      </div>
    );

    const verifyResult = (
      <ul>
        <li>Pass all verification steps!</li>
        <li>It is a Verified Credential!</li>
      </ul>
    );

    return (
      <div className="container">
        <div className="form-heading text-center">
          <div id="verification">
            <h3 class="form-title">{this.state.verified ? "The verification result" : "Type in credentialID:"}</h3>
            {this.state.verified ? verifyResult : verify}
          </div>
        </div>

      </div>

    );
  }
}

export default Verification