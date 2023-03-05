import React, { useState } from "react";
import Resume from "../../assets/Resume.pdf";

const CTA = ({handleClickShow}) => {
 

  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a
        href="#game"
        className={`btn btn-primary`}
      onClick={handleClickShow}
      >
        Let's Play
      </a>
    </div>
  );
};

export default CTA;
