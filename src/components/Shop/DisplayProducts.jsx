import products from "../../context/Products.json";
import ProductCard from "../smaller component/ProductCard.jsx";

function DisplayProducts() {

    const allProducts = products.categories.map(category => Object.values(category)[0].products);

    return (
        <section className="shop_display_products">

            {allProducts.map(category => (
                category.map((product, index) =>
                    <ProductCard key={index} product={product}/>
                )
            ))}

            {/* page pagination*/}
        </section>
    )
}

export default DisplayProducts;