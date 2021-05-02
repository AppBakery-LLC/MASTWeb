import React,{Component} from 'react'

class Clinic extends Component{
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
                            <span><i className="far fa-heart-circle" /> clinic</span>
                            <p className="mr-50">Our aim is all about building a healthy society and outreaches the communities which are neglected with the superior medical services.

                                To strengthen our primary healthcare system, clinics have been set up for providing medicines and medical facilities. Our team will be available for you all the time bringing specialized treatment and medical assistance to the ailing.

                                We believe in providing cure to the ill!
                            </p>
                            <p className="mr-50">Jabir reported: The Messenger of Allah, peace and blessings be upon him, said,</p>
                            <p className="mr-50">       “Every disease has a cure. If a cure is applied to the disease, it is relieved by the permission of Allah Almighty.”</p>
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

export default Clinic;