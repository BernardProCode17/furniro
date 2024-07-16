import AddToCart from "./AddToCart.jsx";
import {CiHeart, CiShare2} from "react-icons/ci";

function ProductCardHover() {
    return (
        <div className="card_hover">
            <AddToCart/>

            <div className="card_icons_container">
                <button className="card_icons">
                    <CiShare2/>
                    <span className="card_icons-text">Share</span>
                </button>

                <button className="card_icons">
                    <CiHeart/>
                    <span className="card_icons-text">Like</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCardHover;