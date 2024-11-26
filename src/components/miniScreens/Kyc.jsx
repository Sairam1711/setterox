import React from 'react'
import arrowleft from "../../assest/arrow-left.png";
import alert from "../../assest/Group 41.png";
import { useNavigate } from "react-router-dom";

function Kyc() {
    const navigate =useNavigate()
    return (
        <div className="wallet">
         
        <div className="headerbuttons">
          <button
            className="modern-button small"
            style={{
              borderRadius: "4px",
              background: " #4DB1F1",
              textAlign: "center",
              alignItems: "center",
              width: "104px",
              height: "35px",
            }}
            onClick={() => {
              navigate(-1)
            }}
          >
            <img src={arrowleft}></img> Back
          </button>
          <button
            className="modern-button  primary"
            style={{
              border: "2px solid #4DB1F1",
              borderRadius:"4px",
              color: "#4DB1F1",
              textAlign: "center",
              alignItems: "center",
  
              width: "160px",
              height: "35px",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: " 600",
            }}
          >
            {" "}
            Guide
          </button>
        </div>
        <div className='important flex'>
            <img className='iicon' src={alert}></img>
            <p>IMPORTANT :- <span>आप केवल उसी बैंक खाते में पैसे निकाल सकते हैं जिसका नाम आपके</span> KYC Document <span> के नाम से मिलता है।</span> 
            </p>
        </div>

        <div className="challenge-card" style={{ height: "356px" ,gap:"15px",margin:"20px",justifyContent:"start" }}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>KYC</span>
            </div>
          </div>
          <div className="amount">
          <label htmlFor="normal-input" style={{color:"#344054" ,fontWeight:"500"}} className="phone-label">
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
            <label htmlFor="normal-input" style={{color:"#344054" ,fontWeight:"500"}} className="phone-label">
            Email Address
            </label>
           
            <input className="normal-input" placeholder="Enter your mobile" style={{
}}></input>


            
           
          </div>
          <span style={{width:"90%",textAlign:"center",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "400",
          
            
          }}>By Continuing, you agree to our <a style={{textDecoration:"underline",textUnderlineOffset:"3px",textDecorationThickness:"1px", textAlign:"left"   }}>Legal Terms</a > and you are 18 years or older.</span>
          <button
            className="modern-button full"
            style={{
              width: "95%",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: " 600",
              borderRadius: "4px",
            }}
          >
     Request for KYC
          </button>
        </div>
        </div>
    )
}

export default Kyc
