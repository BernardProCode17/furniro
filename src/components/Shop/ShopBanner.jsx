import shopBannerImage from '../../assets/shop_page_banner_image.png';
import BreadCrumb from "../smaller component/BreadCrumb.jsx";

function ShopBanner() {
    return (
        <section className="shop_banner">
            <h1 className="shop_banner_title">Shop</h1>
            <img className="banner_image" src={shopBannerImage}
                 alt="blurred background image of a table with flower pots and pictures frames"/>
            <BreadCrumb/>
        </section>
    )
}

export default ShopBanner;
