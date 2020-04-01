import React from "react";
import {NavLink} from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = () => {
  return <nav className='side-drawer'>
      <ul><li><NavLink to='/'>Home</NavLink></li></ul>
      <ul><li><NavLink to='/about-me'>Home</NavLink></li></ul>
      <ul><li><NavLink to='/contact'>Contact</NavLink></li></ul>
  </nav>;
};

export default SideDrawer;
