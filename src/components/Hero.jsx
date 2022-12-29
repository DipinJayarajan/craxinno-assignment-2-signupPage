import React from 'react';
import "./Hero.css";
import bgImg from "../assets/BackgroundHero(1).png";
import Logo from "../assets/Logo(2).png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="bg-img">
        <img src={bgImg} alt="bg-img" />
      </div>
      <div className='navmenu'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='navbutton'>
          <span>Sign In</span>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="glass-container">
      <form className="glass-form">
        <h1 className="glass-form-title">Create Your Own Account</h1>
        <div className="glass-form-group">
          
          <input className="glass-form-input" type="text" id="username" placeholder='username' />
        </div>
        <div className="glass-form-group">
          
          <input className="glass-form-input" type="email" id="email"  placeholder='Enter your mail address' />
        </div>
        <div className="glass-form-group">
          
          <input className="glass-form-input" type="password" id="password" placeholder='Password' />
        </div>
        <p className='glass-form-p'>By Clicking “Register” you agree <span>Privacy Policy</span></p>
        <button className="glass-form-button" type="submit">Register</button>
      </form>
      <p className="glass-form-footer">Already have an account? <a href="/signin">Sign In</a></p>
    </div>
    <div className='banner-content'>
      <div>
        <h1 className='banner-content-heading'>Advanced analytics to grow your business</h1>
      </div>
      <div>
        <p className='banner-content-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam ut id nisl tellus rhoncus, imperdiet</p>
      </div>
    </div>
    </div>
  )
}

export default Hero;