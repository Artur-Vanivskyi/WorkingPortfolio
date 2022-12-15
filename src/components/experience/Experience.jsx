import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h4>What Skills I Have</h4>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__fronted">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>RESTful APIs</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Knex</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>
          </div>
        </div>
      <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Mocha</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Chai</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Knex</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Heroku</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NPM</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience__skills">
          <h3>Additional Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spanish</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe Suite</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Microsoft Suite</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Project Management</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Leadership</h4>
                {/* <small className="text-light">Experiensed</small> */}
              </div>
            </article>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
