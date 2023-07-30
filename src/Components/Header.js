import "./Header.css";
import logoImg from "../images/icons8-burger-100.png";

function Header({ textChange }) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logoImg} alt="burger-icon" />
          <h2>Recipe Finder</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" onChange={textChange} />
        </div>
      </div>
    </div>
  );
}

export default Header;
