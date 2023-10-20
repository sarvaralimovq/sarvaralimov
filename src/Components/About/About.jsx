// import React, { useState } from "react";
import "./About.scss";
import about__img from '../../img/img__about.jpg'
function About() {
//  const [animeshin , setAnimeshin] = useState(false)
//  console.log(animeshin);
  return (
    <div id="1" className="About">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div className="about__info">
              <h2>Hi, I am Alimov Sarvarbek</h2>
              <span>
                <p>
                Frontend Developer
                </p>
              </span>
            </div>
            <div className="about__more">
                <button><a href="#about__more">Learn More</a></button>
            </div>
          </div>
          <div  className="about__right">
            <span  className='about__right__span ' >
            <img src={about__img} alt="img" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
