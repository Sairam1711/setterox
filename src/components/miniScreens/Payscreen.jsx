import React from 'react'
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from 'react-router-dom';
function Payscreen() {
  const navigate =useNavigate()
    return (
        <div className='Payscreen'>
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
      <div className="cardlist">
        <div
          className="challenge-card"
          style={{
            height: "183px",
            justifyContent: "start",
            gap: "13px",
          }}
        >
          <div className="challenge-header" style={{flexDirection:"column"}}>
            <div className="Challengeheader">
              <span>Payment Mode</span>
            </div>
            <span className='wchip'>
         Withdrawal Chips 9.5
         </span>
          </div>
        
        
         <div className="dropdown-container">
      <select className="styled-select">
        <option value="upi">UPI (Instant ⚡)</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
      </select>
    </div>
        </div>

        <div className="challenge-card" style={{ height: "502px" ,gap:"20px" }}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Payment Details</span>
            </div>
          </div>
          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054" ,fontWeight:"500"}} className="phone-label">
            UPI ID
            </label>
            <input className="normal-input" placeholder="Enter your upi id"></input>
          </div>
          <span style={{width:"90%",color:"#017C0E",textAlign:"left"}}>Bank Name should be same as kaiful haque</span>
          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054"}} className="phone-label">
            Re Enter UPI ID
            </label>
            <input className="normal-input" placeholder="Enter your upi id"></input>
          </div>
          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054"}} className="phone-label">
            Chips 
            </label>
            <input className="normal-input" placeholder="Chips"></input>
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
              fontSize: "24px",
              fontWeight: " 600",
              borderRadius: "4px",
            }}
          >
           Submit
          </button>
        </div>
      </div>
        </div>
    )
}

export default Payscreen
