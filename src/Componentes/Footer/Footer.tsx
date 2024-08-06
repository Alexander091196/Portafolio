import "./Footer.css";
import theme from "../../assets/react.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={theme} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
            magnam officia quidem sint voluptate officiis blanditiis facere
            error eum praesentium vitae corrupti nisi, neque, incidunt impedit
            ex minima amet?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="#" alt="user_icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Suscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Alexander Seclen</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
