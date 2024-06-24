import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = ({actif}) => {
  const [active, setActive] = useState(actif);
  return (
    <div className="navbar">
      <img src={assets.logo} alt="alt" />
      <div className="navbar-line"></div>
      <ul className="nav-list">
        <li
          className={active === "home" ? "nav-item active" : "nav-item"}
          
        >
          <Link onClick={() => {
            setActive("home");
          }} className="link" to="/">
            <span>00</span> HOME
          </Link>
        </li>
        <li
          className={active === "destination" ? "nav-item active" : "nav-item"}
          
        >
          <Link onClick={() => {
            setActive("destination");
          }} className="link" to="/destination">
            {" "}
            <span>01</span> DESTINATION
          </Link>
        </li>
        <li
          className={active === "crew" ? "nav-item active" : "nav-item"}
        >
          <Link onClick={() => {
            setActive("crew");
          }} className="link" to="/crew">
            {" "}
            <span>02</span> CREW
          </Link>
        </li>
        <li
          className={active === "technology" ? "nav-item active" : "nav-item"}
          onClick={() => {
            setActive("technology");
          }}
        >
           <Link onClick={() => {
            setActive("crew");
          }} className="link" to="/technology">
            <span>03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  );
};
