import { Link } from "react-router-dom";

function FooterNavigation() {
  return (
    <nav className="footer_nav">
      <ul className="footer_nav_ul">

        <li className="footer_nav_li">
          <Link to="home" className="footer_nav_link">Home</Link>
        </li>
        <li className="footer_nav_li">
          <Link to="shop" className="footer_nav_link">Shop</Link>
        </li>
        <li className="footer_nav_li">
          <Link to="about" v>About</Link>
        </li>
        <li className="footer_nav_li">
          <Link to="contact" className="footer_nav_link">Contact</Link>
        </li>

      </ul>
    </nav>
  );
}

export default FooterNavigation;
