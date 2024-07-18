import ShopBanner from "./ShopBanner.jsx";
import DisplayProducts from "./DisplayProducts.jsx";
import ProductFilter from "./ProductFilter.jsx";
import ServiceGuarantees from "../smaller component/ServiceGuarantees.jsx";

function ShopPage() {
    return (
        <main className="shop">

            {/*Shopp Banner */}
            <ShopBanner/>

            {/* Product filter */}
            <ProductFilter/>

            {/*Display Products*/}
            <DisplayProducts/>

            {/* Service garantees */}
            <ServiceGuarantees/>
        </main>
    )
}

export default ShopPage