import React from 'react'
import Body from './core/Body/Body';
import Footer from './core/Footer/Footer'
import Header from './core/Header/Header'
import { GetAppData } from './utils/serviceUtils'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Introduction from './pages/AboutUs/pgIntroduction';
import ChairmanMsg from './pages/AboutUs/pgChairmanMsg';
import ContactUs from './pages/AboutUs/pgContactUs';
import Education from './pages/Services/pgEducation';
import Services from './pages/Services/pgServices';
import Hifz from './pages/Services/pgHifz';
import Nazra from './pages/Services/pgNazra';
import Qaida from './pages/Services/pgQaida';
import Darsenizami from './pages/Services/pgDarseNizami';
import Schooling from './pages/Services/pgSchooling';
import Welfare from './pages/Services/pgWelfare';
import FamilyAdoption from './pages/Services/pgFamilyAdoption';
import NaiZindagi from './pages/Services/pgNaiZindagi';
import Qurbani from './pages/Services/pgQurbani';
import TahjeezOTakfeen from './pages/Services/pgTajheezoTakfeen';
import Dasterkhwan from './pages/Services/pgDasterkhwan';
import Rationing from './pages/Services/pgRationing';
import EidPackages from './pages/Services/pgEidPackages';
import RamadhanPackages from './pages/Services/pgRamadhanPackages';
import Construction from './pages/Services/pgCosntruction';
import MasjidRenovation from './pages/Services/pgMasjidRenovation';
import SchoolRenovation from './pages/Services/pgSchoolRenovation';
import ROPlant from './pages/Services/pgROPlant';
import Taweezat from './pages/Services/pgTaweezat';
import Sadqah from './pages/Services/pgSadqah';
import Aqiqah from './pages/Services/pgAqiqah';
import University from './pages/FutureProjects/pgUniversity';
import City from './pages/FutureProjects/pgCity';
import JobBank from './pages/FutureProjects/pgJobBank';
import OnlineAdmission from './pages/FutureProjects/pgOnlineAdmission';
import OnlineQuranAcademy from './pages/FutureProjects/pgOnlineQuranAcademy';
import QuranTafteesh from './pages/FutureProjects/pgQuranTafteesh';
import MedicalComplex from './pages/FutureProjects/pgMedicalComplex';
import BloodBank from './pages/FutureProjects/pgBloodBank';
import Clinic from './pages/FutureProjects/pgClinic';
import Media from './pages/Media/pgMedia';
import News from './pages/Media/pgNews';
import Packages from './pages/Donation/pgPackages';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      data : {}
    }
  }
  componentDidMount(){
    GetAppData((data)=>{
      console.log("GetAppData success", data)
      this.setState({data : data})
    },
    ()=>{
      console.log("GetAppData error")
    })
  }
  render(){
    return (
      <>
        <Header appState={this.state.data}/>
        <Router>
          <Switch>
              <Route exact path='/' component={()=><Body appState={this.state.data}/>} />

              <Route exact path='/AboutUs/Introduction' component={()=><Introduction appState={this.state.data}/>} />
              <Route exact path='/AboutUs/chairmansmessage' component={()=><ChairmanMsg appState={this.state.data}/>} />
              <Route exact path='/AboutUs/contactus' component={()=><ContactUs appState={this.state.data}/>} />              
              
              <Route exact path='/services' component={()=><Services appState={this.state.data}/>} />
              <Route exact path='/services/mast-community-education-programme' component={()=><Education appState={this.state.data}/>} />
              <Route exact path='/services/MAST/hifz' component={()=><Hifz appState={this.state.data}/>} />
              <Route exact path='/services/MAST/nazra' component={()=><Nazra appState={this.state.data}/>} />
              <Route exact path='/services/MAST/qaida' component={()=><Qaida appState={this.state.data}/>} />
              <Route exact path='/services/MAST/darsenizami' component={()=><Darsenizami appState={this.state.data}/>} />
              <Route exact path='/services/MAST/schooling' component={()=><Schooling appState={this.state.data}/>} />
              <Route exact path='/services/welfare' component={()=><Welfare appState={this.state.data}/>} />
              <Route exact path='/services/welfare/familyadoption' component={()=><FamilyAdoption appState={this.state.data}/>} />
              <Route exact path='/services/welfare/naizindagi' component={()=><NaiZindagi appState={this.state.data}/>} />
              
              <Route exact path='/services/collectivequrbani' component={()=><Qurbani appState={this.state.data}/>} />
              <Route exact path='/services/tahjeezotakfeen' component={()=><TahjeezOTakfeen appState={this.state.data}/>} />
              <Route exact path='/services/naizindagi' component={()=><NaiZindagi appState={this.state.data}/>} />
              <Route exact path='/services/mezban/dasterkhwan' component={()=><Dasterkhwan appState={this.state.data}/>} />
              <Route exact path='/services/mezban/rationing' component={()=><Rationing appState={this.state.data}/>} />
              <Route exact path='/services/mezban/eidaidpackages' component={()=><EidPackages appState={this.state.data}/>} />
              <Route exact path='/services/mezban/ramadhan' component={()=><RamadhanPackages appState={this.state.data}/>} />
              <Route exact path='/services/construction' component={()=><Construction appState={this.state.data}/>} />
              <Route exact path='/services/construction/renovatemasajids' component={()=><MasjidRenovation appState={this.state.data}/>} />
              <Route exact path='/services/construction/renovateschools' component={()=><SchoolRenovation appState={this.state.data}/>} />
              <Route exact path='/services/roplant' component={()=><ROPlant appState={this.state.data}/>} />
              <Route exact path='/services/istekhara' component={()=><Taweezat appState={this.state.data}/>} />
              <Route exact path='/services/onlinesadqah' component={()=><Sadqah appState={this.state.data}/>} />
              <Route exact path='/services/onlineaqiqah' component={()=><Aqiqah appState={this.state.data}/>} />

              <Route exact path='/futureprojects/university' component={()=><University appState={this.state.data}/>} />
              <Route exact path='/futureprojects/city' component={()=><City appState={this.state.data}/>} />
              <Route exact path='/futureprojects/jobbank' component={()=><JobBank appState={this.state.data}/>} />
              <Route exact path='/futureprojects/onlinequranacademy' component={()=><OnlineQuranAcademy appState={this.state.data}/>} />
              <Route exact path='/futureprojects/onlineadmission' component={()=><OnlineAdmission appState={this.state.data}/>} />
              <Route exact path='/futureprojects/qurantafteesh' component={()=><QuranTafteesh appState={this.state.data}/>} />
              <Route exact path='/futureprojects/medicalcomplex' component={()=><MedicalComplex appState={this.state.data}/>} />
              <Route exact path='/futureprojects/bloodbank' component={()=><BloodBank appState={this.state.data}/>} />
              <Route exact path='/futureprojects/clinic' component={()=><Clinic appState={this.state.data}/>} />

              <Route exact path='/media/media' component={()=><Media appState={this.state.data}/>} />
              <Route exact path='/media/news' component={()=><News appState={this.state.data}/>} />

              <Route exact path='/donation/Packages' component={()=><Packages appState={this.state.data}/>} />

              <Route component={()=> <Redirect to="/" />}/>
          </Switch>
          </Router>
        <Footer appState={this.state.data}/>
      </>
    );
  }
  
}

export default App;
