import ProductCard from "../smaller component/ProductCard"

function Products() {
  return (
    <section className="products section">
      <h2 className="products_title">Our Products</h2>

      {/* products card component */}
      <div className="products_list">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
    </section>
  )
} 

export default Products