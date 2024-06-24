import React, { useState } from "react";
import "./Destination.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import data from "../../assets/data";
export const Destination = () => {
    let desti = data.destinations
   const  [destination, setDestination] = useState(0)
  return (
    <div className="destination">
      <Navbar actif={'destination'}/>
      <h1 className="title">
        <span>01</span>PICK YOUR DESTINATION
      </h1>
      <div className="destination-main">
        <img src={desti[destination].images.png} alt="moon" />
        <div className="content">
            <ul className="tab-content">
              <li className={desti[destination].name === 'Moon' ? "tab-item destination-active" : "tab-item" }onClick={()=>setDestination(0)}>MOON</li>
              <li className={desti[destination].name === 'Mars' ? "tab-item destination-active" : "tab-item" }onClick={()=>setDestination(1)}>MARS</li>
              <li className={desti[destination].name === 'Europa' ? "tab-item destination-active" : "tab-item" } onClick={()=>setDestination(2)}>EUROPA</li>
              <li className={desti[destination].name === 'Titan' ? "tab-item destination-active" : "tab-item" }onClick={()=>setDestination(3)}>TITAN</li>
            </ul>
          <h2>{desti[destination].name}</h2>
          <p>
          {desti[destination].description}
          </p>
          <hr />
          <div className="destination-sub-menu">
            <div className="distance">
                <h3>AVG. DISTANCE</h3>
                <p>{desti[destination].distance}</p>
            </div>
            <div className="distance">
                <h3>EST. TRAVEL TIME</h3>
                <p>{desti[destination].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;