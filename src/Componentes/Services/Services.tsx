import "./Services.css";
import theme from "../../assets/react.svg";
import services_data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="Services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((Services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{Services.serv_id}</h3>
              <h2>{Services.serv_name}</h2>
              <p>{Services.serv_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src="#" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
