import React, { Component } from "react";
import './Home.css'

const Home = () => {
  return (
    <div className= "homeComp">
      <div className="parallax">

      </div>
      <div className="intro">
        My name is Jason W. Baker and I am an independent botanical consultant
        specializing in plant identification and botanical surveys in the
        intermountain mountain west as well as the Great Basin and Mojave
        Deserts. I have 15+ years experience as a botanist, horticulturist, and
        wildlife/botanical photographer.
        <br />
        <br/>
        If you would like to inquire about my services and pricing, please
        message me through the Contact Me link at the top of the page.
        <br />
        <br />

        For more information about me, and to see my photography, follow me on
        social media. Links are at the bottom of the page.
      </div>{" "}
      <div className="serviceList">
        <ul>
          <li>Vegetation surveys</li>
<br/>
          <li>Plant identification</li>
<br/>
          <li>Vegetation community mapping</li>
<br/>
          <li>Water-wise landscape consulation</li>
<br/>
          <li>Botanical photography</li>
<br/>
          <li>Field guide consulation</li>
<br/>
          <li>Article writing and editing</li>
<br/>
          <li>Threatened flora surveys and mapping</li>
<br/>
          <li>Botanical surveys for wetland delineation</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
