import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutComp">
      <div className="aboutMe"> ABOUT ME</div>

      <div className="jwb">About Jason W. Baker</div>
      <div className="title">Botanic Gardens</div>
      <div className="descriptions">
        Since 2006 when I completed my Bachelor of Science in Botany from Weber
        State University I have worked as the Curator of Plant Records for a
        botanical garden where I have maintained a database (both Microsoft
        Access and BRAHMS from the University of Oxford) with more than 20,000
        active records coupled with an ESRI GIS map of approximately 25 acres of
        planted gardens.
      </div>
      <div className="title">Botanical Consulting</div>
      <div className="descriptions">
        After settling in as the curator for the botanical garden, I began
        providing botanical expertise for both the public and private sector by
        performing baseline land surveys for conservation easements, pre and
        post vegetation restoration surveys, botanical surveys for wetland
        delineations, native seed mix recommendations, and countless plant
        identifications.
      </div>
      <div className="title">Botanical Education</div>
      <div className="descriptions">
        Over the past 15+ years I have been a tutor for basic botany and plant
        taxonomy during college, a field botany instructor for Prescott College,
        and currently an instructor for Red Butte Garden and Arboretum where I
        teach classes such as Botany for Gardeners, Gardening with Penstemons,
        101 Plants to Know, as well as give short informational presentations
        for staff and volunteers.
      </div>
    </div>
  );
};

export default AboutMe;
