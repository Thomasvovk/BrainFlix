import { Link } from "react-router-dom";
import "../Header/Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="Logo" />
        </div>
      </Link>

      {/* Search Bar  */}
      <div className="header__container">
        <input
          className="header__search-input"
          type="search"
          placeholder="Search"
        />

        <img
          className="header__profile-img"
          src={profileImage}
          alt="profile image"
        />
        {/* Upload Button */}
        <Link className="header__button" to="/upload">
          <button>UPLOAD</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
