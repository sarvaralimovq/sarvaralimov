import React from "react";
import "./About.scss";
import about__img from '../../img/img__about.jpg'
function About() {
  return (
    <div id="2" className="About">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div className="about__info">
              <h2>Hi, I am Alimov Sarvarbek</h2>\
              <span>
                <p>
                Frontend Developer
                </p>
              </span>
            </div>
            <div className="about__more">
                <button>Learn More</button>
            </div>
          </div>
          <div className="about__right">
            <span className="about__right__span">
            <img src={about__img} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
