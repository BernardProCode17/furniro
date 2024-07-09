import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import Product from '../pages/Product.jsx'
import Header from "../components/global components/Header.jsx";
import Footer from "../components/global components/Footer.jsx";
import GlobalContext from "../context/globalContext.jsx";

function App() {
    return (
        <GlobalContext>
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
        </GlobalContext>
    );
}

export default App;
