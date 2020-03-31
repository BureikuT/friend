import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import AboutMe from "../aboutMe/AboutMe";
import ContactForm from "../contactForm/ContactForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="contact" component={ContactForm} />
    </Switch>
  );
};

export default Routes;
