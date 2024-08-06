import "./Contact.css";
import theme from "../../assets/react.svg";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            itaque pariatur tempore quo. Vero quas obcaecati, architecto, quidem
            quaerat fugiat tempore doloribus ipsam in fugit non quae minus
            corporis consequuntur?
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="#" alt="email" /> <p>cseclen09@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="#" alt="telefono" /> <p>+51-954842466</p>
            </div>
            <div className="contact-detail">
              <img src="#" alt="ubicacion" /> <p>Casa</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Whrit your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter message your"
          ></textarea>
          <button type="submit" className="contact-submit">Submit now </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
