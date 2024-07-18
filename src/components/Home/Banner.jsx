import bannerImage from "../../assets/bannerImage.png";
import BannerCard from "../smaller component/BannnerCard";

function Banner() {
    return (
        <div className="home_banner">
            <h1 className="banner_title">Furniro</h1>
            <img src={bannerImage} alt="" width="100%" className="banner_image"/>
            <BannerCard/>
        </div>
    );
}

export default Banner;
