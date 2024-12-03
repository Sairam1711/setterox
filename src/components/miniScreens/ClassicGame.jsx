import React, { useState } from "react";
import icon from "../../assest/cup-star-svgrepo-com 1.png";
import cup from "../../assest/cup-star-svgrepo-com 2.png";
import vs from "../../assest/image 21.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// Header Component
const Header = () => (
  <div className="header">
    <div className="line"></div>
    <img className="iconimg" src={icon}></img>
    <p className="headerText">Classic Mode Rich</p>
    <img className="iconimg"  src={icon}></img>
    <div className="line"></div>
  </div>
);

// Input Section Component
const InputSection = ({ setvalue }) => (
  <div className="input-section">
    <input type="text" placeholder="Amount" className="amount-input" />
    <button
      onClick={() => {
        setvalue(true);
      }}
      className="set-button"
    >
      Set
    </button>
  </div>
);

// Challenge Card Component
const ChallengeCard = ({ player1, player2, amount, showPlayButton }) => {
  const [buttonlable, setbuttonlable] = useState("");
  const [buttonlable2, setbuttonlable2] = useState("REJECT");
  const navigate = useNavigate();
  return (
    <div className="challenge-card">
      <div className="challenge-header">
        {showPlayButton ? (
          <>
            <div className="Challengeheader">
              <span>Challenge set by</span>

              <span className="amountrs">Rs. {amount}</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {showPlayButton ? (
        <>
          <div className="challenge-content">
            <div className="player">
              <div className="player-avatar"></div>
              <span>{player1}</span>
            </div>
            <div className="player">
              {buttonlable ? (
                <>
                  {" "}
                  <button
                    className="play-button"
                    style={{
                      minWidth: buttonlable === "REQUESTED" ? "100px" : "77px",
                    }}REQUESTED
                    onClick={() => {
                      // navigate("/match")
                      setbuttonlable("REQUESTED");
                      setbuttonlable2("CANCEL");
                    }}
                  >
                    {buttonlable}
                  </button>
                  <button
                    className="play-button bg-red"
                   
                  >
                    {buttonlable2}
                  </button>
                </>
              ) : (
                <button className="play-button" onClick={()=>{
                  setbuttonlable("REQUESTED")
                  setbuttonlable2("CANCEL")
                }}>PLAY</button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="challenge-content">
            <div className="player">
              <div className="player-avatar"></div>
              <span>{player1}</span>
            </div>
            <img src={vs}></img>
            <div className="player">
              <div className="player-avatar"></div>
              <span>{player2}</span>
            </div>
          </div>
          <div className="challenge-header">
            <span
              className="amountrs-centered"
            
            >
              Rs. {amount}
            </span>
          </div>
        </>
      )}
      {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
    </div>
  );
};
const ChallengeCardfrom = ({ player1, player2, amount, showPlayButton }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [buttonlable, setbuttonlable] = useState("START");
  const [buttonlable2, setbuttonlable2] = useState("REJECT");
  const navigate = useNavigate();
  return (
    <div className="challenge-card">
      <div className="challenge-header">
        {showPlayButton ? (
          <>
            <div className="Challengeheader" style={{gap:isMobile?"0px": "60px"}}>
              <span>Challenge from {player1}</span>

              <div className="player">
            
                
                  {" "}
                  <button
                    className="play-button"
                    style={{
                      width:isMobile?"57px": "77px",
                      height:"30px"
                    }}
                    onClick={() => {
                      // navigate("/match")
                      // setbuttonlable("REQUESTED");
                      // setbuttonlable2("CANCEL");
                    }}
                  >
                    {buttonlable}
                  </button>
                  <button
                    className="play-button"
                    style={{ background: "#ff0020" , height:"30px",  width:isMobile?"57px": "77px", }}
                  >
                    {buttonlable2}
                  </button>
             
            
            </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {showPlayButton ? (
        <>
          <div className="challenge-content custom-translate-style" >
          <div className="flex custom-container" >
            <div className="fconatain flex coloum" >
              <p className="fheader">ENTRY FEE</p>
              <span className="famount">100</span>
            </div>
            <div className="fconatain flex coloum" >
              <p className="fheader">PRIZE</p>
              <span className="famount">200</span>
            </div>
          </div>
            <div className="player custom-column-style-c">
              <div className="player-avatar margin-0" ></div>
              <span>{player1}</span>
            </div>
       
          </div>
        </>
      ) : (
        <>
          <div className="challenge-content">
            <div className="player">
              <div className="player-avatar"></div>
              <span>{player1}</span>
            </div>
            <img src={vs}></img>
            <div className="player">
              <div className="player-avatar"></div>
              <span>{player2}</span>
            </div>
          </div>
          <div className="challenge-header">
            <span
              className="amountrs-centered"
           
            >
              Rs. {amount}
            </span>
          </div>
        </>
      )}
      {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
    </div>
  );
};
const ChallengeCard2 = ({ player1, player2, amount, showPlayButton }) => (
  <div className="challenge-card">
    <div className="challenge-header">
      <div className="Challengeheader text-left">
        <span
        className="width-90"
        >
          Current Playing: 114
        </span>
      </div>
    </div>

    <>
      <div className="challenge-content">
        <div className="player">
          <img src={cup}></img>
          <span className="amountrs">Rs. {amount}</span>
        </div>
        <div className="player">
          <button className="play-button">Play</button>
        </div>
      </div>
    </>

    {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
  </div>
);
// Main App Component
const ClassicGame = () => {
  const [value, setvalue] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="classicGames">
      <Header />
      <InputSection setvalue={setvalue} />
      {!value ? (
        <>
              <ChallengeCardfrom
            player1="Kaif"
            player2="-"
            amount="50"
            showPlayButton={true}
          />
          <ChallengeCard
            player1="Kaif"
            player2="-"
            amount="50"
            showPlayButton={true}
          />
          <ChallengeCard
            player1="Kaif"
            player2="-"
            amount="50"
            showPlayButton={true}
          />
       
          <ChallengeCard
            player1="Kaif"
            player2="-"
            amount="50"
            showPlayButton={true}
          />
          <ChallengeCard
            player1="Kaif"
            player2="Kaif"
            amount="50"
            showPlayButton={false}
          />
          <ChallengeCard
            player1="Kaif"
            player2="Kaif"
            amount="50"
            showPlayButton={false}
          />
          <ChallengeCard
            player1="Kaif"
            player2="Kaif"
            amount="50"
            showPlayButton={false}
          />
        </>
      ) : (
        [1, 1, 1, 1, 1, 1, 1, 1, 1].map((element) => (
          <ChallengeCard2
            player1="Kaif"
            player2="-"
            amount="50"
            showPlayButton={true}
          />
        ))
      )}
    </div>
  );
};

export default ClassicGame;
