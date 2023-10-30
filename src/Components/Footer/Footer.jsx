import React from "react";
import "./Footer.scss";
import logo from "../../img/logo.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer__inner">
          {/* <div className="logo">
            <a href="#about">
              <img src={logo} alt="img" />
              <h2>Alimov Sarvar</h2>
            </a>
          </div> */}
       
          <ul className='f-list'>
        <li className='f-list-item'>
          <a href="#/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://github.com/sarvaralimovq" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://instagram.com/ali____mov1?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://t.me/Gross2008" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="bi bi-telegram"></i>
          </a>
        </li>
      </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
