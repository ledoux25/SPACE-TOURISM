import React, { useState } from "react";
import "./Crew.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import data from "../../assets/data";
export const Crew = () => {
  let crew = data.crew;
  const [member, setMember] = useState(0);
  return (
    <div className="crew">
      <Navbar actif={'crew'} />
      <div className="crew-main">
        <div className="crew-content">
          <h1 className="titles">
            <span>02</span> MEET YOUR CREW
          </h1>

          <div>
          <span className="name">{crew[member].role}</span>
          <h1 className="chap">{crew[member].name}</h1>
          <p className="paragraph">{crew[member].bio}</p>
          </div>
          <div className="tabs">
            <div
              className={member === 0 ? "tab actif" : "tab"}
              onClick={() => setMember(0)}
            ></div>
            <div
              className={member === 1 ? "tab actif" : "tab"}
              onClick={() => setMember(1)}
            ></div>
            <div
              className={member === 2 ? "tab actif" : "tab"}
              onClick={() => setMember(2)}
            ></div>
            <div
              className={member === 3 ? "tab actif" : "tab"}
              onClick={() => setMember(3)}
            ></div>
          </div>
        </div>
        <div className="shadow">
          <img src={crew[member].images.png} alt="crew member" />
        </div>
      </div>
    </div>
  );
};
