import React from "react";
import vs from "../../assest/image 21.png";
import { useMediaQuery } from "react-responsive";
function Matchmaking() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      className="profile flex coloum matchmaking-container "
     
    >
      <div className="challenge-card margin-top-large" >
        <div className="challenge-header"></div>

        <>
          <div className="challenge-content">
            <div className="player">
              <div className="player-avatar"></div>
              <span>Kaif</span>
            </div>
            <img src={vs}></img>
            <div className="player">
              <div className="player-avatar"></div>
              <span>Kaif</span>
            </div>
          </div>
          <div className="challenge-header">
            <span
              className="amountrs-centered rs-text"
             
            >
              Rs. 50
            </span>
          </div>
        </>
        {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
      </div>
      <div
        className="challenge-card waiting-room"
    
      >
        <p className="matchp">Waiting for creating room</p>
      </div>
      <div  className="game-result"><p>Game Result</p></div>
      <div
        className="flex coloum action-buttons"
        style={{width: isMobile?"100%" : "" }}
      >
        <div
          className="modern-button full primary won-button"
         
        >
          {" "}
          <span
          
          >
            {"I Won"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary lost-button"
       
        >
          {" "}
          <span
           
          >
            {"I Lost"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary cancel-button"
         
        >
          {" "}
          <span
        
          >
            {"Cancel"}{" "}
          </span>{" "}
        </div>
      </div>
      <div
        className="challenge-card penalty-card"
        
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Penalty</span>
          </div>
        </div>
        <div
          className="flex refered coloum penalty-details "
        
        >
          <div className="textalingn-center">
            <p
             className="penalty-text mobile-font"
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
          <hr
          className="penalty-divider"
          ></hr>
          <div className="textalingn-center">
            <p
           className="penalty-text mobile-font"
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
          <hr
             className="penalty-divider"
          ></hr>
          <div className="textalingn-center">
            <p
            className="penalty-text mobile-font"
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matchmaking;

