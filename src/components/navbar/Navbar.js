import React, { useState } from "react";
import '../sideDrawer/DrawerToggleButton'
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";

const Navbar = () => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-logo">
          <NavLink to="/" className="name">
            Jason W. Baker - Botanical Consultant
          </NavLink>
        </div>
        <div className='spacer'>
          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-me">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className='drawer'><DrawerToggleButton/> </div>

        </div>
      </nav>
    </header>
    // <div className="header">
    //   <div className="name">Jason W. Baker - Botanical Consultant</div>
    //   <div className="hamburger">
    //     <div className="home"> Home</div>
    //     <div className="options">
    //       <div className="about">About Me</div>
    //       <div className="contact">Contact Me</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
