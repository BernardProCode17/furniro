import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import Product from '../pages/Product.jsx'
import Header from "../components/global components/Header.jsx";
import Footer from "../components/global components/Footer.jsx";
import GlobalContext from "../context/globalContext.jsx";
import Contact from "../pages/Contact.jsx";
import Cart from "../pages/Cart.jsx";

function App() {
    return (<GlobalContext>
            <Router>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="Shop" element={<Shop/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="*" element={<h1>404 Not Found</h1>}/>
                </Routes>
                <Footer/>
            </Router>
        </GlobalContext>
    );
}

export default App;
