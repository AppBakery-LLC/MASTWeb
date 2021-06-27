import React, { Component } from "react";

class MainSlider extends Component {
  constructor() {
    super();
    this.slideractive = React.createRef();
  }

  componentDidMount() {
    console.log("I am called mount");
    console.log(this.props);
    if (this.props && this.slideractive && this.slideractive.current) {
      window.exMainSlider(this.slideractive.current);
    }
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("I am called updt");
    console.log(this.props);
    if (this.props && this.slideractive && this.slideractive.current) {
      window.exMainSlider(this.slideractive.current);
    }
    console.log(prevProps);
    if (prevProps) {
    }
  }

  render() {
    let appState = this.props.appState;
    return appState.MainSlider ? (
      <div className="slider-active" ref={this.slideractive}>
        {appState.MainSlider.map((item, i) => (
          <div
            className="single-slider slider-03-height d-flex align-items-center"
            data-background={item.bgImage}
            style={{ backgroundImage: item.bgImage }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8 ">
                  <div className="slider-content">
                    {item.showCharityPill ? (
                      <span data-animation="fadeInUp" data-delay=".3s">
                        <i className={item.CharityPillIcon} />{" "}
                        {item.CharityPillText}
                      </span>
                    ) : (
                      <></>
                    )}
                    <h2
                      style={{ color: "white", lineHeight: "50px" }}
                      data-animation="fadeInLeft"
                      data-delay=".5s"
                    >
                      {item.displaytext}
                    </h2>
                    {item.showDonationButton ? (
                      <div className="slider-button">
                        <a
                          data-animation="fadeInLeft"
                          data-delay=".8s"
                          className="btn"
                          href="causes-details.html"
                        >
                          Donate now <i className="far fa-long-arrow-right" />
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <></>
    );
  }
}

export default MainSlider;
