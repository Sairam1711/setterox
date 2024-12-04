import React from "react";
import arrowleft from "../../assest/arrow-left.png";
import alert from "../../assest/Group 41.png";
import { useNavigate } from "react-router-dom";

function Kyc({ notify, setnotify, rules, setrules }) {
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
          Guide
        </button>
      </div>
      <div className="important flex">
        <img className="iicon" src={alert}></img>
        <p>
          IMPORTANT :-{" "}
          <span>
            आप केवल उसी बैंक खाते में पैसे निकाल सकते हैं जिसका नाम आपके
          </span>{" "}
          KYC Document <span> के नाम से मिलता है।</span>
        </p>
      </div>

      <div
        className="challenge-card kyc-card "
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>KYC</span>
          </div>
        </div>
        <div className="amount">
          <label
            htmlFor="normal-input f-2-c"
          
            className="phone-label"
          >
            Select Varification Method
          </label>
          <div className="dropdown-container">
            <select className="styled-select">
              <option value="upi">Select Method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </select>
          </div>
        </div>
        <div className="amount">
          <label
            htmlFor="normal-input f-2-c"
          
            className="phone-label"
          >
            Email Address
          </label>

          <input
            className="normal-input"
            placeholder="Enter your mobile"
          
          ></input>
        </div>
        <span
         className="agument"
        
        >
          By Continuing, you agree to our{" "}
          <a
          className="textunderline"
           
          >
            Legal Terms
          </a>{" "}
          and you are 18 years or older.
        </span>
        <button
          className="modern-button full requestbt"
         
          onClick={() => {
            setrules(false);
            setnotify(true);
          }}
        >
          Request for KYC
        </button>
      </div>
    </div>
  );
}

export default Kyc;
