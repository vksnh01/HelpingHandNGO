import React from "react";
import Footer from "../../FooterSection/Footer";
import "../../HeaderSection/HeaderButton/HeaderButton.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  const [formDetail, setFormDetail] = React.useState({
    name: "",
    contact: "",
    city: "",
    state: "",
    subject: "",
    message: "",
  });

  const InputHandler = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="contact-main-div">
        <div className="contact-div">
          <div className="title">
            <h1>Contact us</h1>
          </div>
          <div className="address-section">
            <h1>Shelter Address:</h1>
          </div>
          <div className="address-detail">
            <span>
              <IoLocationSharp className="icon" />
              Sharda Nagar,ITC Road, Saharanpur-247001(U.P.)
            </span>
            <span>
              <FaWhatsapp className="icon" />
              8868063012
            </span>
            <span>
              <FaPhoneAlt className="icon" />
              8868063012
            </span>
            <span>
              <SiGmail className="icon" />
              helpinghandsre@gmail.com
            </span>
          </div>
          <hr />
          <div className="contact-form-section">
            <form action="">
              <input
                type="text"
                placeholder="Your Name"
                onChange={InputHandler}
              />
              <input
                type="number"
                placeholder="Your Contact Number"
                onChange={InputHandler}
              />
              <input type="text" placeholder="City" onChange={InputHandler} />
              <input type="text" placeholder="State" onChange={InputHandler} />
              <input
                type="text"
                placeholder="Subject"
                onChange={InputHandler}
              />
              <textarea
                name=""
                id=""
                onChange={InputHandler}
                rows={10}
                cols={20}
                placeholder="Message"
              ></textarea>
              <button className="contact-button">Send Message</button>
            </form>
            <hr />
            <div className="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912.93125166015!2d77.52582103013991!3d29.966045729459076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb1e2baa2acd%3A0x6e5fdb0f1fa1787a!2sGanesha%20Pet%20Care%20Centre!5e0!3m2!1sen!2sin!4v1715456599045!5m2!1sen!2sin"
                width="600"
                height="540"
                id="locationMap"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
