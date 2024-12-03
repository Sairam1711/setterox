import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import first from '../../assest/1d863a75ab13fbad6c3bf93814b625f5.png'
import second from '../../assest/79f7a22be89cd2ee0f708eb8a05da6f9.png'
import third from '../../assest/9278a8dac939c859c610832d624b52f9.png'
function OurGames() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      className="our-games-container "
    >
      <p className="our-game-header">Our Games</p>
      <div className="ourgames">
        <img
          className="our-games-image main"
          style={{  width: isMobile?"100%":"385px" }}
          src={first}    ></img>
        <div className="two">
          <img
              style={{ cursor: "pointer", width: isMobile?"80%": " 164px", height: " 164px" }}
            onClick={() => {
              navigate("/classic-game");
            }}
            src={second}          ></img>
          <img
            onClick={() => {
              navigate("/classic-game");
            }}
            className="imgtwo"
            style={{ cursor: "pointer", width: isMobile?"80%": " 164px", height: " 164px" }}
            src={second}          ></img>
        </div>
        <img
          width={ isMobile?"95%": "368px"}
          src={third}></img>
      </div>
    </div>
  );
}

export default OurGames;
