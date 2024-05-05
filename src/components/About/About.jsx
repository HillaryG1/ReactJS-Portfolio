import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Selected in top 2% of applicants for a program offered to high-potential individuals  preparing for a Software Engineering role. </p>
            <p>Trained 500+ hours and assessed on software development skills by instructional coaches, professionals, and mentors.
</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/> </div>
            <div className="about-skill"><p>React </p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Express </p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>500+</h1>
          <p>HOURS OF TRAINING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>MERN STACK PROJECTS COMPLETED </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5000+</h1>
          <p> LINES OF CODE WRITTEN</p>
        </div>
      </div>
    </div>
  )
}

export default About
