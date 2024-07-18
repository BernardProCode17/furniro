import products from "../../context/Products.json";
import ProductCard from "../smaller component/ProductCard.jsx";

function DisplayProducts() {

    const allProducts = products.categories.map(category => Object.values(category)[0].products);

    // console.log(allProducts);

    return (
        <section className="Shop_display_products section">
            {allProducts.map(category => {
                category.map(product => {
                    return <ProductCard key={product.product_id} product={product}/>
                })
            })}

        </section>
    )
}

export default DisplayProducts;