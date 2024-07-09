import ProductCard from "../smaller component/ProductCard";
import products from "../../context/Products.json";

function Products() {

    const allProducts = products.categories.map(category => Object.values(category)[0].products);
    const shuffledProducts = allProducts.flat().sort(() => 0.5 - Math.random());
    const limitedCards = shuffledProducts.slice(0, 8);

    return (
        <section className="products section">
            <h2 className="products_title">Our Products</h2>

            {/* products card component */}
            <div className="products_list">
                {limitedCards && limitedCards.map(product =>
                    <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </section>
    )
}

export default Products