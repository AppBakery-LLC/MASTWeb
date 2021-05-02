import CasesArea from "./CasesArea"
import FeaturesArea from "./FeaturesArea"
import MainSlider from "./MainSlider"
import ServicesArea from "./ServicesArea"
import DonationsArea from "./DonationsArea"
import VideoArea from "./VideoArea"

function Body(props){
    let appState = props.appState
    console.log("Body", appState)
    return (
        <main>
            <div className="slider-area">
                <MainSlider appState={appState}/>
            </div>
            <FeaturesArea appState={appState}/>
            <ServicesArea appState={appState}/>
            <CasesArea appState={appState}/>
            <DonationsArea appState={appState}/>
            <VideoArea appState={appState}/>
        </main>
    )
}

export default Body