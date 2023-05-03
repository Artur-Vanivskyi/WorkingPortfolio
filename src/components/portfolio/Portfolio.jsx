import React from "react";
import "./portfolio.css";
import {data} from "../../data/data";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, livesite, text, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* <p>{text}</p> */}
              <p>{tech}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
                {title !== "GrubDash" && title!== "WeLoveMovies" && (
                <a href={livesite} className="btn btn-primary" target="_blank">
                   Live Site
                </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
