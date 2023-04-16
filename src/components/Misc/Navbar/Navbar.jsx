import { NavLink } from "react-router-dom";

import React, { useState } from "react";
import "./Navbar.css";
import hamburguer from "../../../assets/hamburger.svg";
import logo from "../../../assets/images/Backgrounds/logo2-removebg.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo" width="50" height="50" />
        </div>

        <button className="nav-toggle-btn" onClick={handleClick}>
          <img src={hamburguer} alt="" role="button" draggable="false" />
        </button>

        <div className={click ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <NavLink to="/socialFeed" onClick={handleClick}>
                Social Feed
              </NavLink>
            </li>
            <li>
              <NavLink to="/astroFeed" onClick={handleClick}>
                Astro Feed
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={handleClick}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/notifications" onClick={handleClick}>
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink href="#" onClick={handleClick}>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
