import React from "react";

function LocationSection() {
  return (
    <section id="location">
      <div className="cityPic">
        <div className="locationContainer">
          <div className="row">
            <div className="hoursMapTainer col-sm-12 col-md-12 col-lg-12 col-xl-6 row">
              <div className="hoursContainer col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p>Monday thru Thursday</p>
                <p>8am - 10pm</p>
                <p>Friday & Saturday</p>
                <p>10am - 12pm</p>
                <p>Sunday</p>
                <p>12pm - 10pm</p>
              </div>
              <div
                id="map"
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
              ></div>
            </div>
            <div className="middleButton col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <button type="button" className="btn btn-outline-light button">
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
