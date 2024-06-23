import AddToCart from "./AddToCart";
import productImage from "../../assets/productImage1.png";

function ProductCard() {
  return (
    <article className="product_card">
      <img src={productImage} alt="" className="product_image" />

      <div>
        <p className="product_title">Product title</p>
        <span className="product_price">Product price $100 </span>
        <AddToCart />
      </div>
      
    </article>
  );
}

export default ProductCard;
