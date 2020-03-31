import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="info">
          <div className="location">
            <div className="locationImg">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="cityState">Salt Lake City, Utah</div>
          </div>
          <div className="email">
            <div className="emailImg">
              <i class="far fa-envelope"></i>
            </div>
            <div className="emailAddress"> jason@jasonthebotanist.com</div>
          </div>
        </div>

        <div className="end">
          <div className="copywrite">
            Jason W. Baker © All Rights Reserved 2017
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
