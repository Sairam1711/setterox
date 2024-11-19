import React, { useState } from "react";
import icon from '../../assest/cup-star-svgrepo-com 1.png'
import cup from '../../assest/cup-star-svgrepo-com 2.png'
import vs from '../../assest/image 21.png'
// Header Component
const Header = () => (
  <div className="header">
   <div className="line"></div>
   <img style={{width: "20px",
height:" 20px"

}} src={icon}></img><p className="headerText">Classic Mode Rich</p><img style={{width: "20px",
    height:" 20px"
    
    }} src={icon}></img>
    <div className="line"></div>
  </div>
);

// Input Section Component
const InputSection = ({setvalue}) => (
  <div className="input-section">
    <input type="text" placeholder="Amount" className="amount-input" />
    <button onClick={()=>{
      setvalue(true)
    }} className="set-button">Set</button>
  </div>
);

// Challenge Card Component
const ChallengeCard = ({ player1, player2, amount, showPlayButton }) => (
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
    {showPlayButton? 
    <>
    <div className="challenge-content">
      <div className="player">
      <div className="player-avatar"></div>
      <span>{player1}</span>
    
      </div>
      <div className="player">
      <button className="play-button">Play</button>
      </div>
    </div>
 
      </>
    :<><div className="challenge-content">
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
    <span className="amountrs-centered">Rs. {amount}</span>
    </div>
    </>}
    {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
  </div>
);
const ChallengeCard2 = ({ player1, player2, amount, showPlayButton }) => (
  <div className="challenge-card">
    <div className="challenge-header">
    
        <div className="Challengeheader"  style={{textAlign:"left"}}>
          <span style={{
            width:"90%"
          }}>Current Playing: 114</span>
    
         
          </div>
       
      
    </div>

    <>
    <div className="challenge-content">
      <div className="player">
      <img src={cup} ></img>
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
  const [value,setvalue]=useState(false)
  return (
    <div className="classicGames">
      <Header />
      <InputSection setvalue={setvalue} />
     {!value? <>
      <ChallengeCard player1="Kaif" player2="-" amount="50" showPlayButton={true} />
      <ChallengeCard player1="Kaif" player2="-" amount="50" showPlayButton={true} />
      <ChallengeCard player1="Kaif" player2="-" amount="50" showPlayButton={true} />
      <ChallengeCard player1="Kaif" player2="Kaif" amount="50" showPlayButton={false} />
      <ChallengeCard player1="Kaif" player2="Kaif" amount="50" showPlayButton={false} />
      <ChallengeCard player1="Kaif" player2="Kaif" amount="50" showPlayButton={false} /></> : 
       [1,1,1,1,1,1,1,1,1].map(element=><ChallengeCard2 player1="Kaif" player2="-" amount="50" showPlayButton={true} />)}
     
    </div>
  );
};

export default ClassicGame;
