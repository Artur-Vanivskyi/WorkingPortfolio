import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <AiFillHome />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/artur.vanivskyi" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/artur-vanivskyi/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
