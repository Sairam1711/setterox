import React from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function Buy() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate =useNavigate()
  return (
    <div className="wallet">
      <div className="headerbuttons">
        <button
          className="modern-button small back"
        
          onClick={() => {
            navigate(-1)
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
      <div className="cardlist margin-top" >
        <div
          className="challenge-card buy-card"
        
        >
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Buy Chips</span>
            </div>
          </div>

          <div className="amount">
            <label htmlFor="phone-input" className="phone-label lablecolor">
              Enter Amount
            </label>
            <input className="normal-input" placeholder="Amount"></input>
          </div>
          <span
          className="min20"
       
          >
            Min:{20}
          </span>
          <div className="moneychip">
            {[50, 100, 200, 500, 1000].map((element) => (
              <div
                className="modern-button  primary chipbt"
               
              >
                {" "}
                + {element}
              </div>
            ))}
          </div>
          <button
            className="modern-button full paybt"
     
            onClick={()=>{
  
}}
          >
            Pay
          </button>
        </div>

        <div className="challenge-card buy-card2" >
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Summary</span>
            </div>
          </div>
          <div className="summary-detils">
            <span
            className="deposit"
          
            >
              Deposit Amount (Excl. Govt. Tax ){" "}
              <div
              className="a"
              
              >
                <span
                className="text-style "
                 
                >
                  A
                </span>
              </div>{" "}
            </span>{" "}
            <span className="green" >₹ 0. 00</span>
          </div>
          <div className="summary-detils">
            <span
             className="deposit"
             
            >
              Govt Tax (28%){" "}
            </span>{" "}
            <span>₹ 0. 00</span>
          </div>
          <hr className="lineb" ></hr>
          <div className="summary-detils">
            <span
             className="deposit"
             
            >
              Total{" "}
            </span>{" "}
            <span>₹ 0. 00</span>
          </div>
          <div className="summary-detils">
            <span
             className="deposit"
             
            >
              Cashback Bonus
              <div
              className="a"
               
              >
                <span
                   className="text-style "
                
                >
                  B
                </span>
              </div>{" "}
            </span>{" "}
            <span className="green" >₹ 0. 00</span>
          </div>
          <hr className="lineb" ></hr>
          <div className="summary-detils">
            <span
            className="text-row"
         
            >
              Add To Wallet Balance
              <div
              className="a"
              
              >
                <span
                   className="text-style "
               
                >
                  A
                </span>
              </div>{" "}
              +
              <div
              className="a"
             
              >
                <span
                   className="text-style "
                
                >
                  B
                </span>
              </div>{" "}
            </span>{" "}
            <span className="green" >₹ 0. 00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
