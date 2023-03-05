import React from "react";
import "./about.css";
import computer from "../../assets/computer.jpeg";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={computer} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3200 + clients </small>
            </article> */}

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>4 + Couple in progress</small>
            </article>
          </div>

          <p>
            Full-Stack software engineer proficient in using Javascript for
            front-end and back-end programming, React, HTML, CSS, API
            implementing, Node.JS, Express, PostgreSQL, and frameworks like
            Bootstrap. Problem solver with past experience developing logical
            and methodical solutions to scientific problems. Has a keen eye for
            design, allowing for development of visually pleasing and
            user-friendly website designs.
          </p>
          <div className="place">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
