import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import fb from "./FooterIcon/facebook.png";
import insta from "./FooterIcon/instagram.png";
import tweet from "./FooterIcon/twitter.png";
import linkedin from "./FooterIcon/linkedin.png";

function Footer() {
  return (
    <div className="footer-main-div">
      <div className="first-div">
        <div className="footer-link center-div-footer">
          <h2>Links</h2>
          <hr />
          <ul>
            <li>
              <NavLink to="/donate">Donate</NavLink>
            </li>
            <li>
              <NavLink to ="/contact">Adopt</NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-social center-div-footer">
          <h2>Social Media</h2>
          <hr />
          <ul>
            <li>
              <NavLink>
                <img src={fb} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={insta} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={tweet} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={linkedin} alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-contact center-div-footer">
          <h2>Contact us</h2>
          <hr />
          <ul>
          <li>Sharda Nagar,ITC Road, Saharanpur-247001(U.P.)</li>
          <li>8868063012</li>
          <li>helpinghand@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="second-div">
        <span className="dTag">
          Created by <span className="dName">Vikrant Sharma</span>
        </span>
        <span className="copy">&ensp;|&ensp;CopyRights © 2024</span>
      </p>
    </div>
  );
}

export default Footer;
