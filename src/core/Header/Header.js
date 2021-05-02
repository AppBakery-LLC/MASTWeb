import React, {Component} from 'react';
import HeaderTop from './HeaderTop'

class Header extends Component 
{
    constructor(){
        super();
        this.mobilemenu = React.createRef();
        this.stickyheader = React.createRef();
    }

    componentDidMount(){
        if(this.mobilemenu && this.mobilemenu.current)
            window.exMeanMenu(this.mobilemenu.current);

        if(this.stickyheader && this.stickyheader.current)
            window.exStickyHeader(this.stickyheader.current);

        //console.log("on mount",this.props.appState)
    }

    componentDidUpdate(){
        //console.log("on update",this.props.appState)
        if(this.mobilemenu && this.mobilemenu.current)
            window.exMeanMenu(this.mobilemenu.current);

        if(this.stickyheader && this.stickyheader.current)
            window.exStickyHeader(this.stickyheader.current);
    }

    render(){
        let appState = this.props.appState
        return (
            <header>
                <HeaderTop appState={appState} />
                <div ref={this.stickyheader} className="main-menu-area green-bg">
                    <div className="">
                    <div className="row" style={{marginRight:'0px'}}>
                        <div className="col-xl-2 col-lg-2 d-flex align-items-center">
                        <div className="logo" style={{paddingLeft:'25px'}}>
                            <a href="/"><img src={(appState && appState.applogourl)?appState.applogourl : ""} alt=""/></a>
                        </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                        <div className="main-menu text-center">
                            <nav ref={this.mobilemenu}>
                            <ul>
                                {
                                    (appState.approutes)?
                                    appState.approutes.map((item,i)=>
                                    <li className=""><a href={item.redirecttolink}>{item.title} 
                                    {
                                        (item.subroutes && item.subroutes.length > 0)?
                                        <i className="far fa-angle-down" />
                                        :
                                        <></>
                                    }
                                    </a>
                                        {
                                            (item.subroutes && item.subroutes.length > 0)?
                                            <ul className="sub-menu text-left">
                                                {
                                                    item.subroutes.map((subroute,j)=>
                                                        <li><a href={subroute.redirecttolink}>{subroute.title}</a>
                                                        
                                                        {
                                                            (subroute.subroutes && subroute.subroutes.length > 0)?
                                                            <ul className="ssub-menu text-left">
                                                                {
                                                                    subroute.subroutes.map((ssubroute,j)=>
                                                                        <li><a href={ssubroute.redirecttolink}>{ssubroute.title}</a></li>
                                                                    )
                                                                }
                                                            </ul>
                                                            :
                                                            <></>
                                                        }

                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            :
                                            <></>
                                        }
                                    </li>
                                    )
                                    :
                                    <></>
                                }
                                {/* <li className="active"><a href="index.html">home <i className="far fa-angle-down" /></a>
                                <ul className="sub-menu text-left">
                                    <li><a href="index.html">home 1</a></li>
                                    <li><a href="index-2.html">home 2</a></li>
                                    <li><a href="index-3.html">home 3</a></li>
                                </ul>
                                </li>
                                <li><a href="about-us.html">about</a> </li>
                                <li><a href="causes-01.html">Cases <i className="far fa-angle-down" /></a>
                                <ul className="sub-menu text-left">
                                    <li><a href="causes-01.html">cases 01</a></li>
                                    <li><a href="causes-02.html">cases 02</a></li>
                                    <li><a href="causes-details.html">causes details</a></li>
                                </ul>
                                </li>
                                <li><a href="events.html">events <i className="far fa-angle-down" /></a>
                                <ul className="sub-menu text-left">
                                    <li><a href="events.html">events</a></li>
                                    <li><a href="events-02.html">events 02</a></li>
                                    <li><a href="events-details.html">events-details</a></li>
                                </ul>
                                </li>
                                <li><a href="blog-grid.html">blog <i className="far fa-angle-down" /></a>
                                <ul className="sub-menu text-left">
                                    <li><a href="blog-grid.html">blog grid</a></li>
                                    <li><a href="blog-standard.html">blog standard</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                </ul>
                                </li>
                                <li><a href="#">pages <i className="far fa-angle-down" /></a>
                                <ul className="sub-menu text-left">
                                    <li><a href="about-us.html">about us</a></li>
                                    <li><a href="volunteer.html">volunteer</a></li>
                                    <li><a href="faq.html">faq</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                                </li>
                                <li><a href="contact.html">contact</a></li> */}
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                        <div className="header-right" style={{paddingRight:'25px'}}>
                            <div className="header-right-info f-right d-none d-lg-block">
                            <div className="header-right-text text-right f-left">
                                <h5>
                                    <img src="assets/img/icon/icon.png" alt="" width={40} style={{paddingRight:'15px'}} />
                                    Conatct Us
                                </h5>
                                {
                                    (appState.appcontact && appState.appcontact.phonenumbers)?
                                    <span style={{fontSize:'12px'}}>
                                        {
                                            appState.appcontact.phonenumbers.map((item,i)=>
                                                item.phnumber
                                            ).join(", ")
                                        }
                                    </span>
                                    
                                    :
                                    <></>
                                }
                            </div>
                            {/* <div className="heder-right-icon f-right">
                                
                            </div> */}
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="mobile-menu" />
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
