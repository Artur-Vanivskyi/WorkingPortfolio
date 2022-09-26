import React from 'react';
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/artur-vanivskyi/" target="_blank"><AiFillLinkedin /></a>
      <a href="https://github.com/Artur-Vanivskyi" target="_blank"><AiFillGithub /></a>
      
    </div>
  );
};

export default HeaderSocials ;