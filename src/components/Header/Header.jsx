import "./Header.scss";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/BrainFlix-logo.svg";
import headerImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo-image"
            src={logoImage}
            alt="BrainFlix logo"
          />
        </Link>
      </div>
      <section className="header__search-container">
        <input className="header__input" name="search" placeholder="Search" />
        <Link to="/UploadPage" className="header__tablet-button-link">
        <button className="header__tablet-button">
            UPLOAD
        </button>
        </Link>
        <div className="header__image-container">
          <img
            className="header__profile-image"
            src={headerImage}
            alt="Mohan Profile Picture"
          />
        </div>
      </section>
      <div className="header__button-container">
      <Link to="/UploadPage" className="header__mobile-upload-link">
        <span className="header__button">
            UPLOAD
        </span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
