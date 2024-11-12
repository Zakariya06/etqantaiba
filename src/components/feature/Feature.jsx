import { useState } from "react";
import "./Feature.css";
import FeatureSlider from "./featureSlider/FeatureSlider";
import { FaWhatsapp } from "react-icons/fa";
import AllProject from "./allProject/AllProject";

const Feature = () => {
   const [show , setShow] = useState(false)
   
  return (
    <section className="featureSection" id="Projects">
      <div className="featureContainer">
        <h1 className="mdHeading text-center">KEY PROJECTS</h1>
  
        <div className="featureSliderContainer">
          <FeatureSlider />
        </div>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          setShow(true)
          }} className="mainBtn mx-auto">
          <span>All Projects</span>
        </a>
      </div>

      <div className="projectContactInfo">
        <h1 className="mdHeading">START EXECUTING YOUR PROJECT TODAY</h1>
        <a href="https://wa.me/966541120478" target="_blank" rel="noopener noreferrer" className="mainBtn">
          <span><FaWhatsapp className="whatsappIcon"/>  +966 54 112 0478</span>
        </a>
      </div>
      <AllProject show={show} handleClose={setShow} />
    </section>
  );
};

export default Feature;
