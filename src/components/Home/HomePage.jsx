import Banner from "./Banner";
import Categories from "./Categories";
import Products from "./Products";

function HomePage() {
  return (
    <main className="home">
      
      {/* Banner */}
      <Banner />

      {/* Category range  */}
      <Categories />

      {/* Products */}
      <Products/>
      {/* inspiration  */}

      {/* #Sharing  */}
    </main>
  );
}

export default HomePage;
