import {
  FaUser,
  FaGlobe,
  FaQuestionCircle,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa'; // React Icons for social media
import appStore from '../../assets/appstore.png'; // App Store logo path
import googlePlay from '../../assets/googleplay.png'; // Google Play logo path
import logo from '../../assets/logo.png'; // Your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Logo and Info Section */}
            <div className="col-md-3 footer-logo-section">
              <img src={logo} alt="Logo" className="footer-logo" />
              <ul className="footer-info">
                <li>
                  <FaUser /> Freelancer Ol
                </li>
                <li>
                  <FaGlobe /> Language (English)
                </li>
                <li>
                  <FaQuestionCircle /> S.S.S & Support
                </li>
              </ul>
            </div>

            {/* Freelancer Links */}
            <div className="col-md-3 footer-column">
              <h5>Freelancer</h5>
              <ul className="footer-links">
                <li>Categories</li>
                <li>Projects</li>
                <li>Contests</li>
                <li>Freelancers</li>
                <li>Categories</li>
                <li>Projects</li>
                <li>Contests</li>
                <li>Freelancers</li>
              </ul>
            </div>

            {/* Another Freelancer Links */}
            <div className="col-md-3 footer-column">
              <h5>Freelancer</h5>
              <ul className="footer-links">
                <li>Categories</li>
                <li>Projects</li>
                <li>Contests</li>
                <li>Freelancers</li>
                <li>Categories</li>
                <li>Projects</li>
                <li>Contests</li>
                <li>Freelancers</li>
              </ul>
            </div>

            {/* App Links and Social Icons */}
            <div className="col-md-3 footer-column">
              <h5>App</h5>
              <div className="app-badges">
                <a href="#">
                  <img src={appStore} alt="App Store" className="app-badge" />
                </a>
                <a href="#">
                  <img
                    src={googlePlay}
                    alt="Google Play"
                    className="app-badge"
                  />
                </a>
              </div>

              <div className="social-icons">
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container d-flex justify-content-between align-items-center">
        <p className="footer-copyright">Copyright © 2024 bidabi</p>
        <img src={logo} alt="Logo" className="footer-small-logo" />
      </div>
    </footer>
  );
};

export default Footer;
