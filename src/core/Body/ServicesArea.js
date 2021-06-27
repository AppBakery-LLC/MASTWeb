import React, { Component } from "react";

class ServicesArea extends Component {
  render() {
    let appState = this.props.appState;
    return appState.Services ? (
      <div
        className="services-area pt-130 pb-100"
        style={{ backgroundImage: "url(assets/img/bg/bg-01.jpg)" }}
      >
        <div className="container">
          <div className="row mb-65">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="section-title white-title-1 mb-15">
                <span>
                  <i className="far fa-heart-circle" /> what we do
                </span>
                <h1>{appState.Services.displaytext}</h1>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="ser-button text-md-right mb-15">
                <a className="btn" href="/">
                  view all services <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {appState.Services.listServices &&
            appState.Services.listServices.length > 0 ? (
              appState.Services.listServices.map((item, i) => (
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="services-wrapper text-center mb-30">
                    <div className="services-icon">
                      <img src={item.bgImage} alt="" />
                    </div>
                    <div className="services-text">
                      <h4>{item.displaytext}</h4>
                      <p>{item.shortdescription}</p>
                      <div className="b-button">
                        <a href={item.redirecttolink}>
                          <span>Read More</span>{" "}
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default ServicesArea;
