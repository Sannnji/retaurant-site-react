import React from "react";

import AboutPic from "../images/aboutPic.jpg";

function AboutSection() {
  return (
    <section id="about">
      <div className="row aboutRow">
        <div className="picContainer col-md-12 col-lg-6 col-xl-6">
          <img
            className="aboutPic"
            src={AboutPic}
            alt="Staff Pic"
          />
        </div>

        <div className="aboutText col-md-12 col-lg-6 col-xl-6">
          <h4>Since 1982...</h4>
          <p className="">
            Established by John Guigino, we've been delivering amazing food made
            by world class chefs, using the freshest local ingredients picked by
            the chefs themselves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
