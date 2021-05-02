import React,{Component} from 'react'

class University extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="about-us-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="abbout-us-wrapper mb-30">
                        <div className="section-title mb-40">
                            <span><i className="far fa-heart-circle" /> university</span>
                            <p className="mr-50">In the future projects, we often pertain ahead in striving to build high quality and best university education center for the deserving students. Our primary aim over the university establishment is all about imparting the quality education in Science and Technology and the promotion of applied and basic research. Our mission is to equip our students with world-class education, so they become compassionate leaders, independent thinkers, and creative problem solvers of tomorrow. Student’s selection will be done on the merit basis criteria within the required course. Our welfare trust has been focused on making education accessible to the poor and destitute. It believes that every child deserves a chance to be educated; not only does it promote learning in terms of the regular curriculum, it also fine-tunes students to become productive and efficient human beings in all walks of life.</p>
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

export default University;