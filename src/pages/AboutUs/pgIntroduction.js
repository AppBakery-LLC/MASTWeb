import React,{Component} from 'react'

class Introduction extends Component{
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
                            <span><i className="far fa-heart-circle" /> introduction</span>
                            <h1>Aims &amp; Objects</h1>
                            <br/><br/>
                            <h4>History of {this.props.appState.wlflongname}</h4>
                            <p className="mr-50">{this.props.appState.wlflongname} is serving the indigent and underprivileged humanity for the betterment of the society. Established by Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a dignified life and spreading happiness. We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. We feed thousands of hungry people each day, hundreds more are given the hope of life through medical health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially. Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe, saw the poor at close quarters realized that apart from food, a major problem of theirs was health, therefore in 2014 he founded the “MUJADDID ALF SANI (R.A) WELFARE TRUST” to institutionalize philanthropic work and to provide free of cost medicines and medical care to the poor. Then as they say, Log saathaataygaye, or Karwaan Banta Gaya, likeminded people joined him in this cause The trust is helping the poor and needy in almost every field of life, of them health and education being the most important.</p>
                        </div>
                        <div className="row mb-25">
                            <div className="col-xl-4 col-lg-4">
                            <div className="about-us-text mb-30">
                                <div className="inner-about">
                                <div className="about-us-icon f-left">
                                    <i className="far fa-check" />
                                </div>
                                <div className="about-us-info">
                                    <h4>Philosophy</h4>
                                </div>
                                </div>
                                <p>Alhamdulillah “MUJADDID ALF SANI (R.A) WELFARE TRUST” believes in the philosophy of Welfare for all..without any discrimination of Color, Cast or Creed. Strictly following Islamic Principles  as a guideline for rendering free of cost services to humanity, the organization is extending the domain of its services day by day.

Accountability, being the top priority of the Trust, the welfare activities are carried out to reach every deserving person. We aim at providing relief to the indigent humanity and  to every destitute person who requires a helping hand.

As the famous Chinese proverb goes, “Give a man a fish; you have fed him for today. Teach a man to fish; and you have fed him for a lifetime”, “MUJADDID ALF SANI (R.A) WELFARE TRUST” strives to create opportunities for the people to develop self reliance and to make them a useful member of the society.</p>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                            <div className="about-us-text mb-30">
                                <div className="inner-about">
                                <div className="about-us-icon f-left">
                                    <i className="far fa-check" />
                                </div>
                                <div className="about-us-info">
                                    <h4>AIMS OF MUJADDID ALF SANI (R.A) WELFARE TRUST</h4>
                                </div>
                                </div>
                                <p>Conduct RohaniIjtemat (Gatherings).
Construciton & Renovate of Masajids and Islamic Schools.
Ramdan Aid Package.
Eid Aid Packages.
Arrange Collective Qurbani.
Provide Rationing.
Tajheez-o-Takfeen.
Construct Hospitals.
Nai Zandagi.
Conduct the Well Digging for Arrange of Drinking Water
Employment Schemes.
Provide food and drinking water.
Loan Relief Fund.
Repairing of Houses.
Monthly Allowance Scheme.
Provide the Employment and Employment Scheme.
Provide the Aid for Paying Bills for Poor Families.
Provide  food for prisoners and Legal Aid.
provide on discounted prices Good Quality Milk, and fresh Bread.
Establish new utility centers.</p>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                            <div className="about-us-text mb-30">
                                <div className="inner-about">
                                <div className="about-us-icon f-left">
                                    <i className="far fa-check" />
                                </div>
                                <div className="about-us-info">
                                    <h4>Vision</h4>
                                </div>
                                </div>
                                <p>“MUJADDID ALF SANI (R.A) WELFARE TRUST” has a vision of making Pakistan a great country to live in, where even person has means to feed his family, kids has a right to education, every patient has resources to get treatment. We have and endeavor for a society whose key characteristic is patience and tolerance, something badly needs. We pledge to serve Pakistan and nurture good human beings.</p>
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

export default Introduction;