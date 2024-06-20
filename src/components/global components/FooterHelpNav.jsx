import { Link } from "react-router-dom";
function FooterHelpNav() {
  return (
    <nav className="footer_nav">
      <ul className="footer_nav_ul">
        <li className="footer_nav_li">
          <Link to="payment" className="footer_nav_link">Payment Options</Link>
        </li >
        <li className="footer_nav_li">
          <Link to="returns" className="footer_nav_link">Returns</Link>
        </li>
        <li className="footer_nav_li">
          <Link to="privacy" className="footer_nav_link">Privacy Policies</Link>
        </li>
    
      </ul>
    </nav>
  );
}

export default FooterHelpNav;
