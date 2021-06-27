import React, { Component } from "react";

class FeaturesArea extends Component {
  render() {
    let appState = this.props.appState;
    return appState.Features ? (
      <div className="features-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center mb-80">
                <span>
                  <i className="far fa-heart-circle" /> our features
                </span>
                <h1>{appState.Features.displaytext}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {appState.Features.listFeatures &&
            appState.Features.listFeatures.length > 0 ? (
              appState.Features.listFeatures.map((item, i) => (
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="features-wrapper mb-30">
                    <div className="features-img pos-rel">
                      <div className="fix">
                        <img src={item.bgImage} alt="" />
                      </div>
                      <div className="features-item text-center">
                        <div className={item.icon}>
                          <a href={item.redirecttolink}>
                            <i className={item.hoverIcon} />
                          </a>
                        </div>
                        <div className="features-content">
                          <h3>{item.hoverText}</h3>
                          <p>{item.hoverDescription}</p>
                        </div>
                      </div>
                    </div>
                    <div className="features-inner text-center">
                      <div className="features-inner-item">
                        <div className="features-icon">
                          <a href="about-us.html">
                            <i className="flaticon-care" />
                          </a>
                        </div>
                        <div className="features-text">
                          <h3>{item.displaytext}</h3>
                        </div>
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

export default FeaturesArea;
