import React,{Component} from 'react'

class CasesArea extends Component{
    constructor(){
        super();
        this.casesslider = React.createRef();
    }

    componentDidMount(){
        if(this.props && this.casesslider && this.casesslider.current){
            window.exCasesSlider(this.casesslider.current)
        }
        
    }

    componentDidUpdate()
    {
        if(this.props && this.casesslider && this.casesslider.current){
            window.exCasesSlider(this.casesslider.current)
        }
    }

    render(){
        let appState = this.props.appState
        return(
            (appState.Causes)?
            <div className="case-area black-bg pos-rel pt-130 pb-205">
                <div className="shape d-none d-xl-block">
                    <div className="shape-item case-01 bounce-animate"><img src="assets/img/shape/shape-1.png" alt="" /></div>
                    <div className="shape-item case-02"><img src="assets/img/shape/shape-2.png" alt="" /></div>
                    <div className="shape-item case-03"><img src="assets/img/shape/shape-4.png" alt="" /></div>
                    <div className="shape-item case-04 bounce-animate"><img src="assets/img/shape/shape-3.png" alt="" /></div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                        <div className="section-title white-title text-center mr-40 ml-40 mb-75">
                        <span><i className="far fa-heart-circle" /> our popular causes</span>
                        <h1>{appState.Causes.displaytext}</h1>
                        </div>
                    </div>
                    </div>
                    <div className="row services-active arrow-style" ref={this.casesslider}>
                        {
                            (appState.Causes.listCauses && appState.Causes.listCauses.length >0)?
                                appState.Causes.listCauses.map((item,i)=>
                                <div className="col-xl-12">
                                    <div className="case-wrapper white-bg">
                                    <div className="case-text">
                                        <h3><a href="causes-details.html">{item.displaytext}</a></h3>
                                        {/* <div className="case-name">
                                        <div className="case-say-img">
                                            <img src="assets/img/case/01.png" alt="" />
                                        </div>
                                        <div className="case-say-content">
                                            <span>Donald C. Snead</span>
                                        </div>
                                        </div> */}
                                    </div>
                                    <div className="case-img">
                                        <a href={item.redirecttolink}><img src={item.bgImage} alt="" /></a>
                                    </div>
                                    {/* <div className="case-meta">
                                        <div className="f-cat f-left">
                                        <a href="causes-details.html">Food</a>
                                        </div>
                                        <div className="f-meta-list f-right">
                                        <span><i className="far fa-comment" /> (5k)</span>
                                        <span><i className="far fa-comment" /> (1k)</span>
                                        </div>
                                    </div>
                                    <div className="single-skill mb-25">
                                        <div className="bar-title">
                                        <h5>$25,000 <span className="raise">Raise of</span> <span className="used-count">$30,000</span></h5>
                                        </div>
                                        <div className="progress">
                                        <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: '85%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1s" data-wow-delay=".5s">
                                            <span>85%</span>
                                        </div>
                                        </div>
                                    </div> */}
                                    <div className="case-info">
                                        <p>{item.shortdescription}</p>
                                        <div className="b-button">
                                        <a href="causes-details.html"><span>Donate Now</span> <i className="far fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                )
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
            :
            <></>
        )
    }
}

export default CasesArea;