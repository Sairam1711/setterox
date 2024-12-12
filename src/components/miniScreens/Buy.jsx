import React, { useState } from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { calculateDeposit, gstRate } from "../../Utils/constant";
function Buy() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const [depositAmount, setdepositAmount] = useState(0);
  const [errors, setErrors] = useState('');
const onchange=(value)=>{
setdepositAmount(Number(value))
validation()
  }
  const validation =()=>{
    if (!depositAmount || depositAmount <= 0) {
      setErrors('Amount must be greater than zero');
      return;
    } else {
      setErrors('');
    } 
  }
  const handleSubmit=()=>{
    validation()
  }
  const handleWheel = (e) => {
    // Prevent scroll on this input field
    e.preventDefault();
  };
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
        <button className="modern-button  primary guide"> Guide</button>
      </div>
      <div className="cardlist margin-top">
        <div className="challenge-card buy-card">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Buy Chips</span>
            </div>
          </div>

          <div className="amount">
            <label htmlFor="phone-input" className="phone-label lablecolor">
              Enter Amount
            </label>
            <input
              className="normal-input"
              placeholder="Amount"
              type='number'
              value={depositAmount}
              onWheel={(e) => {
                e.preventDefault();
                e.target.blur();
              }}
              onChange={(e)=>onchange(e.target.value)}
            ></input>
             <p className="error margin-0">{depositAmount||!depositAmount===0?"":errors}</p>
          </div>
          <span className="min20">Min:{20}</span>
          <div className="moneychip">
            {[50, 100, 200, 500, 1000].map((element) => (
              <div
                className="modern-button  primary chipbt"
                onClick={() => {
                  setdepositAmount(element);
                  validation()
                }}
              >
                {" "}
                + {element}
              </div>
            ))}
          </div>
          <button className="modern-button full paybt" onClick={() => {
            handleSubmit()
          }}>
            Pay
          </button>
        </div>

        <div className="challenge-card buy-card2">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Summary</span>
            </div>
          </div>
          <div className="summary-detils">
            <span className="deposit">
              Deposit Amount (Excl. Govt. Tax ){" "}
              <div className="a">
                <span className="text-style ">A</span>
              </div>{" "}
            </span>{" "}
            <span className="green">₹{depositAmount?depositAmount.toFixed(2):0}</span>
          </div>
          <div className="summary-detils">
            <span className="deposit">Govt Tax (28%) </span>{" "}
            <span>₹ {calculateDeposit(depositAmount,gstRate.toFixed(2)).govtTax.toFixed(2)}</span>
          </div>
          <hr className="lineb"></hr>
          <div className="summary-detils">
            <span className="deposit">Total </span> <span>₹ {calculateDeposit(depositAmount,gstRate).totalAmount.toFixed(2)}</span>
          </div>
          <div className="summary-detils">
            <span className="deposit">
              Cashback Bonus
              <div className="a">
                <span className="text-style ">B</span>
              </div>{" "}
            </span>{" "}
            <span className="green">₹ {calculateDeposit(depositAmount,gstRate).cashbackBonus.toFixed(2)}</span>
          </div>
          <hr className="lineb"></hr>
          <div className="summary-detils">
            <span className="text-row">
              Add To Wallet Balance
              <div className="a">
                <span className="text-style ">A</span>
              </div>{" "}
              +
              <div className="a">
                <span className="text-style ">B</span>
              </div>{" "}
            </span>{" "}
            <span className="green">₹ {calculateDeposit(depositAmount,gstRate).walletBalance.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
