import React, { useState } from "react";
import "./Technology.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import data from "../../assets/data";
export const Technology = () => {
  let tech = data.technology;
  const [active, setActive] = useState(0);
  return (
    <div className="technology">
      <Navbar actif={"technology"} />
      <div className="main">
        <div className="content">
            
            <div className="text">
            <h1 className="title">
              <span>03</span> SPACE LAUNCH 101
            </h1>
              <ul>
                <li className={active === 0 ? "actif" : ""} onClick={()=>setActive(0)}>1</li>
                <li className={active === 1 ? "actif" : ""} onClick={()=>setActive(1)}>2</li>
                <li className={active === 2 ? "actif" : ""} onClick={()=>setActive(2)}>3</li>
              </ul>
              <div>
                <span className="name">THE TERMINOLOGY...</span>
                <h1 className="chap">{tech[active].name}</h1>
                <p className="paragraph">{tech[active].description}</p>
              </div>
          </div>
          <img src={tech[active].images.portrait} alt="" />
        </div>
      </div>
    </div>
  );
};
