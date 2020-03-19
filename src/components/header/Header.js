import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="name">Jason W. Baker - Botanical Consultant</div>
      <div className="home"> Home</div>
      <div className="options">
        <div className="about">About Me</div>
        <div className="contact">Contact Me</div>
      </div>
    </div>
  );
};

export default Header;
