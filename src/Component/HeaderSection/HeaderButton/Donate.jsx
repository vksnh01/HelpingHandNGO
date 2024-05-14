import React from "react";
import { NavLink } from "react-router-dom";
import Footer from '../../FooterSection/Footer'
function Donate() {
  React.useEffect(() => {
    const rzpPaymentForm = document.getElementById("payment-form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_O9vObP1UHaOL7n";
      rzpPaymentForm.appendChild(script);
    }
  });

  return (
    <>
      <div className="donate-main-div">
        <div className="grid-section-donate">
          <div className="left-grid-donate">
            <div className="donate-section">
              <h1>Your money will go towards:</h1>
              <ul>
                <li>Medicines, and medical checkups for animals</li>
                <li>Transportation expenses for animal rescues</li>
                <li>maintenance for shelter</li>
                <li>Vet and animal welfare staff salaries</li>
              </ul>
            </div>
            <div className="donate-section">
              <h2>
                <span>NOTE:</span>Please ensure to bring your Aadhar card with
                you for verification when you visit.
              </h2>
              <h1>Planning to visit us?</h1>
              <p>
                <NavLink to="/contact/#locationMap">Helping Hand</NavLink>
                ,<br />
                Sharda Nagar,ITC road,Saharanpur-247001(U.P.) <br />
                8868063012
              </p>
            </div>
          </div>
          <div className="right-grid-donate">
            <div className="payment-div">
              <form id="payment-form"></form>
              <h1>Click the button & Donate now </h1>
            </div>
            <hr />
            <div className="donate-section">
              <h1>What to bring</h1>
              <p>
                Day visits are mostly spent hanging out with the animals. Best
                way to befriend them is to bring them snacks!
              </p>
              <ul>
                <li>Bananas</li>
                <li>Rotis</li>
                <li>Jaggery</li>
                <li>Carrots</li>
                <li>Apples</li>
                <li>Cabbage</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="donate-section">
          <h1>Location: </h1>
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
        <Footer />
      </div>
    </>
  );
}

export default Donate;
