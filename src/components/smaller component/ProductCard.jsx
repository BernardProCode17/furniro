import AddToCart from "./AddToCart";

function ProductCard({product}) {

    const {name, price, short_description, image} = product;
    console.log(image)

    return (
        <article className="product_card">
            <img src={image} alt="" className="product_image"/>

            <div>
                <h5 className="product_title">{name}</h5>
                <span className="product_price">{`$${price}`}</span>
                <p className="product_description">{short_description}</p>
                <AddToCart/>
            </div>

        </article>
    );
}

export default ProductCard;
