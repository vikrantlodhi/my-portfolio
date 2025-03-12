import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1><span>Hi, I'm Vikrant,</span> A Java MERN Stack Developer</h1>
        <p>
          Building dynamic, scalable web applications fueled by a passion for solving complex problems, mastering backend development, and leveraging cutting-edge web technologies.
        </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><button>Connect With Me</button></AnchorLink></div>
          <div className="hero-resume"><button>My Resume</button></div>
        </div>
      </div>
      <img src={profile_img} alt="Profile" className="hero-img" />
    </div>
  );
}

export default Hero;
