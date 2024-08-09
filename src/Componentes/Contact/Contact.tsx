import React from "react";
import "./Contact.css";
import theme from "../../assets/react.svg";

const Contact = () => {
  const [, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e2e7841-9373-4933-8683-616c0118c657");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="Contact">
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
        <form onSubmit={onSubmit} className="contact-right">
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
          <button type="submit" className="contact-submit">
            Submit now{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
