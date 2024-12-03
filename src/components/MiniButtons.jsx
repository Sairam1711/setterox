import React from "react";
import "./element.css";
import iconone from "../assest/diamond-solid-svgrepo-com 1.png";
import icontow from "../assest/wallet-2-svgrepo-com.png";

function MiniButtons() {
  return (
    <>
      <div className="minibtdiv">
        <div
      
          className="modern-button small primary bt1"
        >
          {" "}
          <img className="icon" src={iconone} alt="" />
          <span style={{ width: "10px" }}>{0}</span>
        </div>
        <div
          className="modern-button small primary bt1"
       
        >
          {" "}
          <img className="icon" src={icontow} alt="" />
          <span style={{ width: "10px" }}>{0} </span>{" "}
        </div>
      </div>
    </>
  );
}

export default MiniButtons;
