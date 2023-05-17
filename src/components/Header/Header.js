import "../Header/Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <div className="header">
      <logo className="header__logo">
        <img className="header__logo-img" src={logo} alt="Logo" />
      </logo>
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

        <button className="header__button">UPLOAD</button>
      </div>
    </div>
  );
}

export default Header;
