import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-right">
            <div className="about-para">
                <p>I’m Vikrant Lodhi, a Java MERN Stack Developer with a strong focus on backend development and Data Structures & Algorithms (DSA). I’m passionate about building scalable and efficient web applications, always striving to create solutions that address real-world challenges.</p>
                <p>I am dedicated to continuous learning and growth, staying up-to-date with the latest technologies. My goal is to contribute to dynamic teams, collaborate on innovative projects, and further enhance my skills in the ever-evolving tech space.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>JAVA</p><hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Node.js</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>Express.js</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>React.js</p><hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>MongoDB & SQL</p><hr style={{width:"90%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of experience*</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Projects completed*</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>35+</h1>
            <p>Hour's working in a week*</p>
        </div>
      </div>
    </div>
  );
}

export default About;