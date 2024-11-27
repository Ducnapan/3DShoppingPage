import Banner3D from "./Banner3D";
import FeatureTab from "./FeatureTab";


function Home(){
    return(
        <div>
            <Banner3D/>
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

    )
}
export default Home;