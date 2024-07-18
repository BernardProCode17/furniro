import {Link} from "react-router-dom";
import formatPrice from "../../functions/price.js";

// eslint-disable-next-line react/prop-types
function ProductCard({product}) {

    const {name, price, short_description, image} = product;

    return (
        <article className="product_card">
            <img src={image} alt="" className="product_image"/>

            <div className="product_card_info">
                <Link to={`/product/${name}`} className="product_card_link">
                    <h5 className="product_title">{name}</h5>
                </Link>
                <p className="product_description">{short_description}</p>
                <span className="product_price">{`$${formatPrice(price)}`}</span>
            </div>
        </article>

    );
}

export default ProductCard;
