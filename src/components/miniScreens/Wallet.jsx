import React from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
function Wallet() {
  const navigate = useNavigate();

  return (
    <div className="wallet">
      <div className="headerbuttons">
        <button
          className="modern-button small back"
       
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={arrowleft}></img> Back
        </button>
        <button
          className="modern-button  primary guide"
        
        >
          {" "}
          Wallet History
        </button>
      </div>
      <div className="cardlist">
        <div className="challenge-card height-291 margin-10">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Deposit Chips</span>
            </div>
          </div>
          <div className="bluefiled">
            यह चिप्स Spin & Win एवं Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा
            सकते है || Bank या UPI में निकाला नहीं जा सकता 
          </div>
          <p className="chipstext">Chips</p>
          <p className="chipstext2">200.93</p>
          <button
            className="modern-button full wallbutn"
           
            onClick={() => {
              navigate("/buy");
            }}
          >
            Add
          </button>
        </div>

        <div className="challenge-card height-291">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Deposit Chips</span>
            </div>
          </div>
          <div className="bluefiled">
            यह चिप्स Spin & Win एवं Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा
            सकते है || Bank या UPI में निकाला नहीं जा सकता 
          </div>
          <p className="chipstext">Chips</p>
          <p className="chipstext2">200.93</p>
          <button
            className="modern-button full wallbutn"
           
            onClick={() => {
              navigate("/pay");
            }}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
