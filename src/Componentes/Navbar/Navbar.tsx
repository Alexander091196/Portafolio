import "./Navbar.css";
import logo from "../../assets/react.svg";
import { useState } from "react";
import underline from "../../assets/react.svg";
import menu_open from "../../assets/menu-open.svg";
import menu_close from "../../assets/menu-close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="Navbar">
      <img src={logo} alt="Protafolio Alexander" />
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={() => setIsMenuOpen(true)}
      />
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => setIsMenuOpen(false)}
        />
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About Me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
