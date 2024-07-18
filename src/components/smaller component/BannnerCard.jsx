import {Link} from "react-router-dom";


function BannerCard() {
    return (
        <div className="banner_card">
            <p className="banner_card_alert">New Arrival </p>

            <h2 className="banner_card_title">Discover Our New Collection</h2>

            <p className="banner_card_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo
                ducimus vero! Magnam, nam velit</p>

            <Link to='/shop' className="banner_card_button">BUY NOW</Link>
        </div>
    )
}

export default BannerCard