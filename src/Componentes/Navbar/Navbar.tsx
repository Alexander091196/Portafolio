import "./Navbar.css";
import logo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="Protafolio Alexander" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portafolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect with Me
      </div>
    </div>
  );
};

export default Navbar;
