import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
function Header() {
  const [active, setActive] = useState(0)
  const [vWidth, setVWidth] = useState(window.innerWidth)
  window.addEventListener('resize', ()=>{
    setVWidth(window.innerWidth)
  })
  return (
    <div className="Header">
      <div className="container">
        <div className="header__inner">
          <nav className="nav">
            <div className="logo">
              <Link  >
                <img src={logo} alt="img" />
                <h1>Alimov</h1>
              </Link>
            </div>
            <div className={ vWidth<=770?'dropdown ' :"header__list"}>
  <a  className={vWidth<=770?'btn btn-secondary dropdown-toggle':'none'} href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-list i"></i>
  </a>

  <ul className= {vWidth<=770?' dropdown-menu  ':'header__list'} >
    <li onClick={() => setActive(1)} className={active == 1 ? 'active' : null}><a className='dropdown-item' href="#/">About me</a></li>
    <li onClick={() => setActive(2)} className={active == 2 ? 'active' : null}><a className='dropdown-item' href="#/">Services</a></li>
    <li onClick={() => setActive(3)} className={active == 3 ? 'active' : null}><a className='dropdown-item' href="#/">Contact me</a></li>


    {/* <li onClick={() => setActive(1)} className={active == 1 ? 'active' : null}>
                <Link to={2}>About me</Link>
              </li>
              <li onClick={() => setActive(2)} className={active == 2 ? 'active' : null}>
                <Link to={3}>Services</Link>
              </li>
              <li onClick={() => setActive(3)} className={active == 3 ? 'active' : null}>
                <Link to={4}>Contact me</Link>
              </li> */}
  </ul>
</div>
            
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
