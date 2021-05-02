import React,{Component} from 'react'

class Media extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="about-us-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="abbout-us-wrapper mb-30">
                        <div className="section-title mb-40">
                            <span><i className="far fa-heart-circle" /> media</span>
                            <p className="mr-50">Do you want to get some latest news and updates about our welfare trust organization? If yes, then this media page will help you. Right through our media corner, we would be presenting latest news about the organization. To have a sneak peek into our welfare trust, we would be giving you a complete check about the welfare trust gallery outlook too. We have the audit report for you. We would even present the video gallery for you along with the press releases and photo releases.</p>
                            <p className="mr-50">We believe in making it easy for you!</p>
                            <p className="mr-50">Get in touch with us now!</p>
                        </div>
                        <div className="row mb-25">
                            <div className="col-xl-6 col-lg-6">
                            <div className="about-us-text mb-30">
                                <div className="inner-about">
                                <div className="about-us-icon f-left">
                                    <i className="far fa-check" />
                                </div>
                                <div className="about-us-info">
                                    <h4>Trusred Fund</h4>
                                </div>
                                </div>
                                <p>Sed quia consequuntur agni dolores eos qui ratoluptatem sequi nesciun porquis</p>
                            </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                            <div className="about-us-text mb-30">
                                <div className="inner-about">
                                <div className="about-us-icon f-left">
                                    <i className="far fa-check" />
                                </div>
                                <div className="about-us-info">
                                    <h4>Awards Winning</h4>
                                </div>
                                </div>
                                <p>Sed quia consequuntur agni dolores eos qui ratoluptatem sequi nesciun porquis</p>
                            </div>
                            </div>
                        </div>
                        <div className="about-button">
                            <a className="btn" href="causes-details.html">Learn more <i className="far fa-long-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30 pos-rel">
                        <div className="about-img">
                            <img src="assets/img/about/01.png" alt="" />
                            <div className="shape-img bounce-animate">
                            <img src="assets/img/shape/shape-5.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Media;