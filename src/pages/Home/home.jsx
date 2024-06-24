import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <Navbar actif={'home'}/>
      <div className="home-main">
        <div className="home-content">
          <span>SO, YOU WANT TO TRAVEL TO</span> <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this world experience! 
          </p>
        </div>
        <button>EXPLORE</button>
      </div>
    </div>
  );
};
