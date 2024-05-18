import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="src/assets/profile_img.jpg" alt="" />
      <h1><span>I'm Hillary Gilbert, </span> a Full Stack Software Engineer.</h1>
      <p>Crafting digital experiences from concept to execution, I specialize in shaping innovative solutions with React, Express, Node.js, and MongoDB.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>

      </div>
    </div>
  );
};

export default Hero;
