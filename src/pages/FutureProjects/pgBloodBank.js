import React,{Component} from 'react'

class BloodBank extends Component{
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
                            <span><i className="far fa-heart-circle" /> blood bank and thalssemia center</span>
                            <p className="mr-50">Our recently established Blood Bank and Thalassemia Centre is furnished with modern equipment, well trained technicians, leading Hematologists, Pediatricians, and General Physicians, and offers free of cost supply of blood and blood components to the poor and the needy. Free and effective screening, counseling and continuous medical care is provided to the deserving patients with Thalassemia and other haemoglobinopathies.</p>
                            <p className="mr-50">Aims and objectives of our Blood Bank & Thalassemia Center are as under:
                                Providing awareness about Thalassemia.
                                Thalassemia screening and diagnosis.
                                Safe blood transfusion.
                                Thalassemic patients need post transfusion chelation therapy. This highly expensive therapy is also provided completely free of cost to patients</p>
                            <p className="mr-50">We aim to conduct extensive research in the areas of thalassemia and other blood related diseases in order to keep patients, their families and the extended medical community abreast of modern research & developments.</p>
                            <p className="mr-50">Abu Huraira narrated that the Messenger of Allah [pbuh] said:</p>
                            <p className="mr-50">       O servants of Allah! Seek medical treatment, because Allah did not make a disease without making a cure for it save old age”

[Bukhari and Muslim].</p>
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

export default BloodBank;