import React,{Component} from 'react'

class ChairmanMsg extends Component{
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
                            <span><i className="far fa-heart-circle" /> chairman's message</span>
                            <h1>Maulana Zakir Ahmad Naqshbandi</h1>
                            <p className="mr-50">All praises be to Allah SWT, the Almighty, the Merciful and the creator of the Universe. And peace and blessings be upon Prophet Mohammed, the source of mercy to every existence in the Universe. I am truly humbled to share this message as the Chairman of Mujaddid Alf Sani Welfare Trust International. I am also grateful to Allah SWT, my beloved Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe and all the members for ordaining this huge responsibility on me. My Shaykh has started this mission in a year 2015 and dedicated all his life toward its prosperity. With Allah’s guidance and blessings of Prophet Mohammed (Peace Be Upon Him) my Shaykh managed to help and support hundreds of people and made their lives better in terms of both religiously and worldly development.</p>
                            <p className="mr-50">As the Chairman Its my duty bound to embrace my Master`s visions and strive hard to continue the mission and make sure his legacy of this charity trust is going strength to strength. I will dedicate myself and work hard to raise the profile of the charity trust. There is no denying that there is a strong future need for the trust to exist and continue to help and support people around us. However, I strongly believe, this is our journey together, a journey to help and support people to bring health, happiness and prosperity in their lives. Every contribution makes a difference and will continue to do so long after we are all gone. The trust is here because of people like you who not only care and acknowledge the need in our society but also render all the help and support. Undoubtedly, the success of the trust would not be possible without your generosity. Lastly, with all sincerity I take this opportunity to thank everyone for their ongoing support. And I assure you, inshallah your help and support is equally acknowledged and will have lasting effect in your lives here and eternal life hereafter.</p>
                        </div>
                        {/* <div className="row mb-25">
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
                        </div> */}
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

export default ChairmanMsg;