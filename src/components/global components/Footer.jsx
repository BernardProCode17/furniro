import FooterHelpNav from "./FooterHelpNav";
import FooterNavigation from "./FooterNavigation";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo company Info */}
      
      <div className="footer_details">
        <h2 className="details_title">Furnio.</h2>

        <address className="details_address">
          Suite 200400 University Drive Coral GablesCA 33134 USA
        </address>
      </div>

      {/* Links */}
      <div className="footer_nav_container">
        <h5 className="footer_nav_title">Links</h5>
        <FooterNavigation />
      </div>

      {/* Help */}
      <div className="footer_help">
        <h5 className="footer_nav_title">Help</h5>
        <FooterHelpNav/>
      </div>
      {/* News Letter */}
      <div className="footer_newsletter">
         <h5 className="newsletter_title">Newsletter</h5>
         <form action="#" className="newsletter_form">
            <input type="email" className="newsletter_input" placeholder="Enter Your Email Address"/>
            <input type="button" value="SUBSCRIBE" className="newsletter_button" />
         </form>
      </div>


      {/* Copyright section */}
      <div className="footer_copyright">
        <p className="copyright_text">2023 Furniro. All right reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
