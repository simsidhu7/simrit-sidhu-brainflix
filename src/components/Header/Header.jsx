import "./Header.scss";
import {Link} from 'react-router-dom';

function Header() {


  return (
    <header className="header">
      <div className="header__logo">
        <Link to= "/">
        <img
            className="header__logo-image"
            src="../../src/assets/images/BrainFlix-logo.svg"
            alt="BrainFlix logo"
          />
        </Link>
      </div>
      <section className="header__search-container">
        <input className="header__input" name="search" placeholder="Search" />
        <button className="header__tablet-button"><Link to= "/UploadPage" className="header__tablet-button-link">Upload</Link></button>
        <img
          className="header__profile-image"
          src="../../src/assets/images/Mohan-muruge.jpg"
          alt="Mohan Profile Picture"
        />
      </section>
      <div className="header__button-container">
        <button className="header__button">UPLOAD</button>
      </div>
    </header>
  );
}
export default Header;
