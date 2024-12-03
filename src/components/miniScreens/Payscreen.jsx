import React, { useState } from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
function Payscreen() {
  const navigate = useNavigate();
  const [payment, setpayment] = useState();
  return (
    <div className="Payscreen">
      <div className="headerbuttons">
        <button
          className="modern-button small back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={arrowleft}></img> Back
        </button>
        <button className="modern-button  primary guide"> Guide</button>
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
          <div className="challenge-header " style={{ flexDirection: "column" }}>
            <div className="Challengeheader">
              <span>Payment Mode</span>
            </div>
            <span className="wchip">Withdrawal Chips 9.5</span>
          </div>

          <div className="dropdown-container">
            <select
              onChange={(event) => {
                setpayment(event.target.value);
                console.log(event.target.value);
              }}
              className="styled-select"
            >
              <option value="upi">UPI (Instant ⚡)</option>
              <option value="Bank Transfer">Bank Transfer</option>
              {/* <option value="debit">Debit Card</option> */}
            </select>
          </div>
        </div>

        <div
          className="challenge-card"
          style={{ height: "502px", gap: "20px" }}
        >
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Payment Details</span>
            </div>
          </div>
          <div className="amount">
            <label
              htmlFor="phone-input"
              style={{ color: "#344054", fontWeight: "500" }}
              className="phone-label"
            >
              {payment === "Bank Transfer" ? "Account Number" : "UPI ID"}
            </label>
            <input
              className="normal-input"
              placeholder={
                payment === "Bank Transfer"
                  ? "Enter your account number"
                  : "Enter your upi id"
              }
            ></input>
          </div>
          <span style={{ width: "90%", color: "#017C0E", textAlign: "left" }}>
            Bank Name should be same as kaiful haque
          </span>
          <div className="amount">
            <label
              htmlFor="phone-input"
              style={{ color: "#344054" }}
              className="phone-label"
            >
              {payment === "Bank Transfer" ? "IFSC" : " Re Enter UPI ID"}
            </label>
            <input
              className="normal-input"
              placeholder={
                payment === "Bank Transfer"
                  ? "Enter your IFSC"
                  : "Enter your upi id"
              }
            ></input>
          </div>
          {payment === "Bank Transfer" ? (
            ""
          ) : (
            <div className="amount">
              <label
                htmlFor="phone-input"
                style={{ color: "#344054" }}
                className="phone-label"
              >
                Chips
              </label>
              <input className="normal-input" placeholder="Chips"></input>
            </div>
          )}
          <span
           className="centered-text"
          >
            By Continuing, you agree to our{" "}
            <a
             className="textDecorate"
            >
              Legal Terms
            </a>{" "}
            and you are 18 years or older.
          </span>
          <button
            className="modern-button full styled-element"
          
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payscreen;
