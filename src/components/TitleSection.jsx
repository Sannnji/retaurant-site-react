import React from "react";
import Logo from "../images/title/logo.png";

function TitleSection() {
  return (
    <section id="titleSection">
      <div className="titlePic">
        <div className="titleContainer">
          <div className="logoResize">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div id="navbar" className="row">
            <a href="#displaySection" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">Menu</a>
            <a href="#location" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">Reservation</a>
            <a href="#location" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">Location</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitleSection;