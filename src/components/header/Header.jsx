import React from "react";
import "./header.css";
import CTA from "./CTA";
import robot from "../../assets/robot.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Artur Vanivskyi</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={robot} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
