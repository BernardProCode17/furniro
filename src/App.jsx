import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Product from './pages/Product'
import Header from "./components/global components/Header";
import Footer from "./components/global components/Footer";
function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
