import "./Perfil.css";
import perfil_img from "../../assets/PHOTO I.png";

const Perfil = () => {
  return (
    <div className="Perfil">
      <img src={perfil_img} alt="Alexander" />
      <h1><span>I'm Alexander,</span>  frontend develep </h1>
      <p>soy nuevo en esto</p>
      <div className="perfil-action">
        <div className="perfil-connect">Connect with me</div>
        <div className="perfil-resume">My resume</div>
      </div>
    </div>
  );
};

export default Perfil;
