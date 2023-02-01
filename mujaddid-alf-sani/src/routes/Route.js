import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../views/Intro';
import ChairmanMessage from '../views/ChairmanMessage';
import Contact from '../views/Contact';
import CashAndCheque from '../views/CashAndCheque';
import HifzNazra from '../views/HifzNazra';
import QaidaSchooling from '../views/QaidaSchooling';
import DarsNizami from '../views/DarsNizami';
import Adoption from '../views/Adoption';
import CollectiveQurbani from '../views/CollectiveQurbani';
import TajheezTakfeen from '../views/TajheezTakfeen';
import NaiZindagi from '../views/NaiZindagi';
import Dasterkhwan from '../views/Dastarkhwan';
import Ration from '../views/Ration';
import EidPackage from '../views/EidPackage';
import Ramadhan from '../views/Ramadhan';
import Renovate from '../views/Renovate';
import RoPlant from '../views/RoPlant';
import Istekhara from '../views/Istekhara';
import Sadaqah from '../views/Sadaqa';
import Aqeqah from '../views/Aqeqah';
import University from '../views/University';
import City from '../views/City';
import JobBank from '../views/JobBank';
import QuranAdmission from '../views/QuranAdmission';
import QuranApp from '../views/QuranApp';
import BloodBank from '../views/BloodBank';
import Clinic from '../views/Clinic';
import News from '../views/News';
import PhotoGallery from '../views/PhotoGallery';
import VideoGallery from '../views/VideoGallery';
import PressRelease from '../views/PressRelease';
import Downloads from '../views/Downlaods';
import OnlineDonate from '../views/OnlineDonate';
import Donation from '../views/Donation';
import WireTransfer from '../views/WireTransfer';
import AllServices from '../views/AllServices';
import AuditReport from '../views/AuditReport';
import TaxDocs from '../views/TaxDocs';
import AllProjectsList from '../components/Services/AllProjectsList';
import SingleSerivce from '../views/SingleService';
import SingleService from '../views/SingleService';
import SingleProject from '../views/SingleProject';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <Header />
                <RouteSwitch>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<Intro />}></Route>
                    <Route exact path="/about/philosophy" element={<Intro />}></Route>
                    <Route exact path="/about/vision" element={<Intro />}></Route>
                    <Route exact path="/about/chairman" element={<ChairmanMessage />}></Route>
                    <Route exact path="/service/:serviceId" element={<SingleService />}></Route>
                    <Route exact path="/services/hifz-nazra" element={<HifzNazra />}></Route>
                    <Route exact path="/services/qaida-schooling" element={<QaidaSchooling />}></Route>
                    <Route exact path="/services/dars-e-nizami" element={<DarsNizami />}></Route>
                    <Route exact path="/services/family-adoption" element={<Adoption />}></Route>
                    <Route exact path="/services/collective-qurbani" element={<CollectiveQurbani />}></Route>
                    <Route exact path="/services/tajheez-o-takfeer" element={<TajheezTakfeen />}></Route>
                    <Route exact path="/services/nai-zindagi" element={<NaiZindagi />}></Route>
                    <Route exact path="/services/darterkhwan" element={<Dasterkhwan />}></Route>
                    <Route exact path="/services/ration" element={<Ration />}></Route>
                    <Route exact path="/services/eid-package" element={<EidPackage />}></Route>
                    <Route exact path="/services/ramadhan-package" element={<Ramadhan />}></Route>
                    <Route exact path="/services/renovate-masjid" element={<Renovate />}></Route>
                    <Route exact path="/services/ro-plant" element={<RoPlant />}></Route>
                    <Route exact path="/services/istekhara" element={<Istekhara />}></Route>
                    <Route exact path="/services/saqaqah" element={<Sadaqah />}></Route>
                    <Route exact path="/services/Aqiqah" element={<Aqeqah />}></Route>
                    <Route exact path="/all-services" element={<AllServices />}></Route>
                    <Route exact path="/project/:projectId" element={<SingleProject />}></Route>
                    <Route exact path="/future-projects/university" element={<University />}></Route>
                    <Route exact path="/future-projects/city" element={<City />}></Route>
                    <Route exact path="/future-projects/job-bank" element={<JobBank />}></Route>
                    <Route exact path="/future-projects/online-quran-admission" element={<QuranAdmission />}></Route>
                    <Route exact path="/future-projects/quran-app" element={<QuranApp />}></Route>
                    <Route exact path="/future-projects/blood-bank" element={<BloodBank />}></Route>
                    <Route exact path="/future-projects/clinic" element={<Clinic />}></Route>
                    <Route exact path="/all-projects" element={<AllProjectsList />}></Route>
                    <Route exact path="/news" element={<News />}></Route>
                    <Route exact path="/media/photo-gallery" element={<PhotoGallery />}></Route>
                    <Route exact path="/media/video-gallery" element={<VideoGallery />}></Route>
                    <Route exact path="/media/press-release" element={<PressRelease />}></Route>
                    <Route exact path="/downloads" element={<Downloads />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/cashAndCheque" element={<CashAndCheque />}></Route>
                    <Route exact path="/online-donate" element={<OnlineDonate />}></Route>
                    <Route exact path="/donation" element={<Donation />}></Route>
                    <Route exact path="/wire-transfer" element={<WireTransfer />}></Route>
                    <Route exact path="/audit-reports" element={<AuditReport />}></Route>
                    <Route exact path="/tax-docs" element={<TaxDocs />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer />
            </Router>
        </div>
    )
}