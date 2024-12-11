import React, { useContext } from "react";
import "./element.css";
import iconone from "../assest/diamond-solid-svgrepo-com 1.png";
import icontow from "../assest/wallet-2-svgrepo-com.png";
import { ProfileContext } from "./ProfileProvider";

function MiniButtons() {
  const { profile, loading } = useContext(ProfileContext);
  return (
    <>
      <div className="minibtdiv">
        <div
      
          className="modern-button small primary bt1"
        >
          {" "}
          <img className="icon" src={iconone} alt="" />
          <span className="width-10" >{0}</span>
        </div>
        <div
          className="modern-button small primary bt1"
       
        >
          {" "}
          <img className="icon" src={icontow} alt="" />
          <span className="width-10" >{profile.Wallet_balance} </span>{" "}
        </div>
      </div>
    </>
  );
}

export default MiniButtons;
