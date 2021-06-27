import React, { Component } from "react";

class DonationsArea extends Component {
  render() {
    let appState = this.props.appState;
    return (
      <div
        className="cta-area pt-130 pb-290"
        style={{ backgroundImage: "url(assets/img/bg/bg-02.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="cta-wrapper">
                <div className="section-title white-title text-center mb-35">
                  <span>
                    <i className="far fa-heart-circle" /> donation
                  </span>
                  <h1>We are always waiting for your helping hands</h1>
                  <p>
                    some great pleasure. To take a trivial example, which of us
                    ever undertakes laborious physical exercise, except to
                    obtain some advantage
                  </p>
                </div>
                <div className="inner-cta text-center">
                  <div className="cta-button mr-40">
                    <a className="btn" href="about-us.html">
                      donate now <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="cta-info">
                    <div className="cta-icon">
                      <img src="assets/img/icon/icon-2.png" alt="" />
                    </div>
                    <div className="cta-text">
                      <h5>Conatct Us</h5>
                      {appState.appcontact &&
                      appState.appcontact.phonenumbers ? (
                        <span>
                          {appState.appcontact.phonenumbers
                            .map((item, i) => item.phnumber)
                            .join(", ")}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationsArea;
