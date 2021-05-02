
function Footer(props) {
    let appState = props.appState
    return (
        <footer>
            <div className="footer-top-area black-soft-bg pt-50 pb-20">
                <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-2">
                    <div className="footer-logo mb-30">
                        <a href="/"><img src={(appState && appState.applogourl)?appState.applogourl : ""} alt="" /></a>
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="footer-icon mb-30">
                    {
                        (appState.appsociallinks)?
                        appState.appsociallinks.map((item,i)=>
                            <a href={item.sociallink}><i className={item.iconurl} /></a>        
                        )
                        :
                        <></>
                    }
                        {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                        <a href="#"><i className="fab fa-behance" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a> */}
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="footer-img mb-30">
                        <a href="#"><img src="assets/img/footer/01.png" alt="" /></a>
                        <a href="#"><img src="assets/img/footer/02.png" alt="" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-middle-area pt-80 pb-25" style={{backgroundImage: 'url(/assets/img/bg/bg-05.jpg)'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-wrapper mb-30">
                        <h3 className="footer-title">Contact Us (UK)</h3>
                        <ul className="contact-link">
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-map-marker-alt" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>26 Simpson Avenue <br /> Harrisburg,  USA</span> */}
                            {
                                (appState.appcontactUK && appState.appcontactUK.addresses)?
                                <span >
                                    {
                                        appState.appcontactUK.addresses.map((item,i)=>
                                            item.address
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-envelope-open" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>support@gmail.com</span> */}
                            {
                                (appState.appcontactUK && appState.appcontactUK.emails)?
                                <span >
                                    {
                                        appState.appcontactUK.emails.map((item,i)=>
                                            item.email
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-phone" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>+012 (3456) 7788</span> */}
                            {
                                (appState.appcontactUK && appState.appcontactUK.phonenumbers)?
                                <span >
                                    {
                                        appState.appcontactUK.phonenumbers.map((item,i)=>
                                            item.phnumber
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="footer-wrapper mb-30">
                        <h3 className="footer-title">Contact Us (PAK)</h3>
                        <ul className="contact-link">
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-map-marker-alt" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>26 Simpson Avenue <br /> Harrisburg,  USA</span> */}
                            {
                                (appState.appcontactPAK && appState.appcontactPAK.addresses)?
                                <span >
                                    {
                                        appState.appcontactPAK.addresses.map((item,i)=>
                                            item.address
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-envelope-open" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>support@gmail.com</span> */}
                            {
                                (appState.appcontactPAK && appState.appcontactPAK.emails)?
                                <span >
                                    {
                                        appState.appcontactPAK.emails.map((item,i)=>
                                            item.email
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        <li>
                            <div className="contact-address-icon">
                            <i className="far fa-phone" />
                            </div>
                            <div className="contact-address-text">
                            {/* <span>+012 (3456) 7788</span> */}
                            {
                                (appState.appcontactPAK && appState.appcontactPAK.phonenumbers)?
                                <span >
                                    {
                                        appState.appcontactPAK.phonenumbers.map((item,i)=>
                                            item.phnumber
                                        ).join(", ")
                                    }
                                </span>
                                
                                :
                                <></>
                            }
                            </div>
                        </li>
                        </ul>
                    </div>
                    
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="footer-wrapper mb-30">
                        <h3 className="footer-title">Company</h3>
                        <div className="footer-link">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our History</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Meet Doctors</a></li>
                            <li><a href="#">Success History</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-wrapper pl-80 mb-30">
                        <h3 className="footer-title">Quick Link</h3>
                        <div className="footer-link">
                        <ul>
                            <li><a href="#">Need A Job ?</a></li>
                            <li><a href="#">Become A Menber ?</a></li>
                            <li><a href="#">Appointment</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Setting &amp; Privacy</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-6">
                    <div className="footer-wrapper pl-70 mb-30">
                        <h3 className="footer-title">Photo Gallery</h3>
                        <ul className="footer-2-img">
                        <li><a href="#"><img alt="" src="/assets/img/instagram/01.jpg" /> </a> </li>
                        <li><a href="#"><img alt="" src="/assets/img/instagram/02.jpg" /></a></li>
                        <li><a href="#"><img alt="" src="/assets/img/instagram/03.jpg" /></a></li>
                        <li><a href="#"><img alt="" src="/assets/img/instagram/04.jpg" /></a></li>
                        <li><a href="#"><img alt="" src="/assets/img/instagram/05.jpg" /></a></li>
                        <li><a href="#"><img alt="" src="/assets/img/instagram/06.jpg" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom-area pt-25 mt-45">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="copyright text-center">
                        <p><i className="far fa-copyright" /> 2020 <a href="#">Fundee.</a> All Rights Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
