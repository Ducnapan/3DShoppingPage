import BannerCollection3D from "./BannerCollection3D";
import FeatureTab from "./FeatureTab";


function Home(){
    return(
        <div>
            <BannerCollection3D/>
           

            <div className="d-flex flex-column justify-content-center align-self-center mb-5">
            <div className="d-flex flex-column justify-content-center align-self-center bg-white rounded border-rounded" style={{width:'80%'}}>
            <FeatureTab
            title = {"Recommend for You"}
            />
            <FeatureTab
            title = {"You might also like"}
            />
            <FeatureTab
            title = {"Related to your views"}
            />
            </div>
        </div>
        </div>
       

    )
}
export default Home;