import React, { Component } from "react";

class VideoArea extends Component {
  render() {
    let appState = this.props.appState;
    console.log(appState)
    return (
      <>
        <div className="video-area">
          <div className="container">
            <div
              className="video-bg pt-190"
              style={(appState.Video)?{ backgroundImage: "url("+appState.Video.thumbnail +")" } : {}}
            >
              <div className="row">
                <div className="col-xl-7 col-lg-7">
                  <div className="video-wrapper text-center mb-30">
                    <div className="video-icon">
                      <a
                        className="popup-video play-btn-style"
                        href={(appState.Video)? appState.Video.vidLink : ""}
                        target="_blank"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                    <div className="video-text">
                      <h2>Watch Latest Videos</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-lg-5">
                  <div className="single-video-wrapper mb-30">
                    <div className="video-icon-img pos-rel">
                      <img src="assets/img/icon/icon-3.png" alt="" />
                      <div className="video-content">
                        <h3>Thanks For Watching</h3>
                        <p>
                          Great explorer the truth master-builder of human
                          happiness. No one rejects dislik oavoids pleasure
                          itself pleasure{" "}
                        </p>
                        <div className="b-button">
                          <a href="about-us.html">
                            <span>Donate Now</span>{" "}
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area pt-160 pb-100 fix"></div>
      </>
    );
  }
}

export default VideoArea;
