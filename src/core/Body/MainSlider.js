import React, {Component} from 'react'

class MainSlider extends Component{

    constructor(){
        super();
        this.slideractive = React.createRef();
    }

    componentDidMount(){
        console.log("I am called mount")
        console.log(this.props)
        if(this.props && this.slideractive && this.slideractive.current){
            window.exMainSlider(this.slideractive.current)
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("I am called updt")
        console.log(this.props)
        if(this.props && this.slideractive && this.slideractive.current){
            window.exMainSlider(this.slideractive.current)
        }
        console.log(prevProps)
        if(prevProps){

        }
    }

    render(){
        let appState = this.props.appState
        return(
            (appState.MainSlider)?
            <div className="slider-active" ref={this.slideractive}>
                {
                    appState.MainSlider.map((item,i)=>
                    <div className="single-slider slider-03-height d-flex align-items-center" data-background="assets/img/slider/slider-1.jpg" style={{backgroundImage : 'url(assets/img/slider/slider-1.jpg)'}}>
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 ">
                            <div className="slider-content">
                                <span data-animation="fadeInUp" data-delay=".3s"><i className={item.CharityPillIcon} /> {item.CharityPillText}</span>
                                <h1 data-animation="fadeInLeft" data-delay=".5s">{item.displaytext}</h1>
                                <div className="slider-button">
                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn" href="causes-details.html">Donate now <i className="far fa-long-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    )
                }
                </div>
            :
            <></>
        )
    }
}

export default MainSlider;