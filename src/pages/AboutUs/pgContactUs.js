import React,{Component} from 'react'

class ContactUs extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="about-us-area pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="abbout-us-wrapper mb-30">
                                <div className="section-title mb-40">
                                    <span><i className="far fa-heart-circle" /> contact us</span>
                                    {/* <h1>We are trusted charity fund not corruption</h1> */}
                                    <p className="mr-50">For further queries, and information, feel free to contact us. You can also contact us for knowing about our donation process and upcoming events. Get in touch with our team to learn more about our work and how you can get involved. </p>
                                    <p className="mr-50">We’re here to make donations easy for you!</p>
                                </div>
                                <div className="row mb-25">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-us-text mb-30">
                                            <div className="inner-about">
                                                <div className="about-us-icon f-left">
                                                    <i className="far fa-check" />
                                                </div>
                                                <div className="about-us-info">
                                                    <h4>Pakistan Address</h4>
                                                </div>
                                            </div>
                                            <p>
                                                <text>
                                                    Email us at: info@mujaddidalifsani.com<br/>
                                                    Landline: +92 21 36740009<br/>
                                                    Cell: +92 300 2230155<br/>
                                                    Visit us at: House No 83, Sector 4F, Mujhaid Colony, Orangi Town, S.I.T.E, Karachi<br/>
                                                </text>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-us-text mb-30">
                                            <div className="inner-about">
                                                <div className="about-us-icon f-left">
                                                    <i className="far fa-check" />
                                                </div>
                                                <div className="about-us-info">
                                                    <h4>UK Address</h4>
                                                </div>
                                            </div>
                                            <p className="mr-50">
                                                <text>
                                                    Email us at: info@mujaddidalifsani.com<br/>
                                                    Cell: 00447972377903<br/>
                                                    Visit us at: 20 Gunthorpe Drive Sherwood Nottingham NG5 3DW<br/>
                                                </text>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-us-text mb-30">
                                            <div className="inner-about">
                                                <div className="about-us-icon f-left">
                                                    <i className="far fa-check" />
                                                </div>
                                                <div className="about-us-info">
                                                    <h4>Account Details</h4>
                                                </div>
                                            </div>
                                            <p className="mr-50">
                                                <text>
                                                    Beneficiary Name: MUJADDID ALF SANI R A WELFARE<br/>
                                                    Bank Name: United Bank<br/>
                                                    Beneficiary Account Number / IBAN: PK16UNIL0109000231037332<br/>
                                                </text>
                                            </p>
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

export default ContactUs;