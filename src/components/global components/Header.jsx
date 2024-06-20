import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/furniro-logo.svg";
import HeaderNavigation from "./HeaderNavigation";
import heartIcon from '../../assets/heartIcon.svg'
import searchIcon from '../../assets/searchIcon.svg'
import shoppingCart from '../../assets/shoppingCart.svg'
import menuIcon from '../../assets/menuIcon.svg'
import closeIcon from '../../assets/closeIcon.svg'
import SearchBox from "../smaller component/SearchBox";

function Header() {

  const [menuFunction, setMenuFunction] = useState(false)
  const [styleClass, setStyleClass] = useState('menu_close')
  const [buttonHidden, setButtonHidden] = useState('')

  const buttonFunction = () => {
    if(menuFunction){
      setStyleClass('menu_open')
      setButtonHidden('menu_button-hidden')
    }else{
      setStyleClass('menu_close')
      setButtonHidden('menu_button')   
    }

    setMenuFunction(!menuFunction)
  }

  const searchOverLay = () => {
    <SearchBox />
  }

  return (
    <header className="header">

      {/* Logo */}
      <div className="header_logo">
        <Link to='/' className="logo_link">
        <img src={logo} alt="a house logo in orange gold colour" className="logo_image" />
        <span className="logo_text">Furniro</span>
        </Link>
      </div>

      {/* menu open button */}
      <button className={buttonHidden} onClick={() => buttonFunction()}><img src={menuIcon} alt="menu icon with three horizontal lines" width={'50px'}className="menu_open_icon" /></button>

      {/* menu */}
      <div className={styleClass}>
      <button className='close_button' onClick={() => buttonFunction()}><img src={closeIcon} alt="menu close icon with two line crossing each other'X'" width={'30px'} className="menu_close_icon" /></button>

      {/* Header Navigation */}
      <HeaderNavigation menuFunction={buttonFunction}/> 

      {/* Icons */}
      <div className="header_icons">
         <button className="icons_button" onClick={() => searchOverLay()}><img src={searchIcon} alt="magnifing glass icon" className="icons_search"/></button>
         <Link to='/favorites' className="icons_fav" onClick={buttonFunction}><img src={heartIcon} alt="heart shape icon" className="icons_fav-image"/></Link>
         <Link to='/cart' className="icons_cart" onClick={buttonFunction}><img src={shoppingCart} alt="shopping cart icon" className="icons_cart-image"/></Link>
      </div>

      </div>
    </header>
  );
}

export default Header;
