import {Link} from "react-router-dom";
import formatPrice from "../../functions/price.js";
import ProductCardHover from "./ProductCardHover.jsx";

function ProductCard({product}) {

    const {name, price, short_description, image} = product;


    return (
        <Link to={`/product/${name}`} className="product_card_link">
            <article className="product_card">
                <img src={image} alt="" className="product_image"/>

                <div className="product_card_info">
                    <h5 className="product_title">{name}</h5>
                    <p className="product_description">{short_description}</p>
                    <span className="product_price">{`$${formatPrice(price)}`}</span>
                </div>
            </article>
            <ProductCardHover/>
        </Link>
    );
}

export default ProductCard;
