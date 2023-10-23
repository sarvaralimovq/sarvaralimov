import React, { useContext, useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../../Context/Context";
function Header() {
  const { svet, setSvet } = useContext(Context);
  console.log(svet);
  const [active, setActive] = useState(1);
  const [vWidth, setVWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setVWidth(window.innerWidth);
  });
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={svet == true?'Header light' : 'dark Header'}>
      <div className="container">
        <div id="1" className="header__inner">
          <nav className={svet == true?'nav light' : 'dark nav'}>
            <div className="logo">
              <Link >
                <img src={logo} alt="img" />
                <h1>Alimov</h1>
              </Link>
            </div>
            <div className={vWidth <= 838 ? "dropdown " : "header__list"}>
              <a
                className={
                  vWidth <= 838 ? "btn btn-secondary dropdown-toggle" : "none"
                }
                href="#/"
                // role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-list i"></i>
              </a>

              <ul
                className={vWidth <= 838 ? " dropdown-menu  " : "header__list"}
              >
                <li
                  onClick={() => setActive(1)}
                  className={active == 1 ? "active" : null}
                >
                  <a className="dropdown-item" href="#1">
                    About me
                  </a>
                </li>
                <li
                  onClick={() => setActive(2)}
                  className={active == 2 ? "active" : null}
                >
                  <a className="dropdown-item" href="#2">
                    Services
                  </a>
                </li>
                <li
                  onClick={() => setActive(3)}
                  className={active == 3 ? "active" : null}
                >
                  <a className="dropdown-item" href="#3">
                    Contact me
                  </a>
                </li>

                <li className={svet == true?'svet':'btn__header'}>
                  <button onClick={() => setSvet(!svet)}>
                    {svet == true ? "dark" : "light"}
                  </button>
                </li>

                {/* <li
                  onClick={() => setActive(1)}
                  className={active == 1 ? "active" : null}
                >
                  <Link to={2}>About me</Link>
                </li>
                <li
                  onClick={() => setActive(2)}
                  className={active == 2 ? "active" : null}
                >
                  <Link to={3}>Services</Link>
                </li>
                <li
                  onClick={() => setActive(3)}
                  className={active == 3 ? "active" : null}
                >
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
