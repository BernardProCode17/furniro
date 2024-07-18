import ShopBanner from "../components/Shop/ShopBanner.jsx";
import DisplayProducts from "../components/Shop/DisplayProducts.jsx";

function Shop() {
    return (
        <main className="shop">
            {/* ShopBanner component */}
            <ShopBanner/>

            {/* Filter Component */}

            {/* Display Products Component */}
            <DisplayProducts/>
        </main>

    )
}

export default Shop