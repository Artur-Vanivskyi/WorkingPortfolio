import React from "react";
import "./portfolio.css";
import {data} from "../../data/data";

// import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Crypto Currentcy dashboard1",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Crypto Currentcy dashboard2",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Crypto Currentcy dashboard3",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: "Crypto Currentcy dashboard4",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: "Crypto Currentcy dashboard5",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: "Crypto Currentcy dashboard6",
//     github: "https://github.com",
//     demo: "https://github.com/Artur-Vanivskyi/Local_library",
//   },
// ];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                   Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
