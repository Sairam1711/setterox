import React from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
function Buy() {
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
      <div className="cardlist">
        <div
          className="challenge-card"
          style={{
            height: "291px",
            justifyContent: "start",
            gap: "13px",
          }}
        >
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Buy Chips</span>
            </div>
          </div>

          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054"}} className="phone-label">
              Enter Amount
            </label>
            <input className="normal-input" placeholder="Amount"></input>
          </div>
          <span
            style={{
              width: "90%",
              textAlign: "left",
              color: " #667085",
            }}
          >
            Min:{20}
          </span>
          <div className="moneychip">
            {[50, 100, 200, 500, 1000].map((element) => (
              <div
                className="modern-button  primary"
                style={{
                  border: "2px solid #4DB1F1",
                  color: "#4DB1F1",
                  textAlign: "left",
                  alignItems: "center",
                  padding: "0",
                  width: "67px",
                  height: "35px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  borderRadius: "7px",
                  fontWeight: " 600",
                }}
              >
                {" "}
                + {element}
              </div>
            ))}
          </div>
          <button
            className="modern-button full"
            style={{
              width: "95%",
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: " 600",
              borderRadius: "4px",
            }}
            onClick={()=>{
  navigate("/pay")
}}
          >
            Pay
          </button>
        </div>

        <div className="challenge-card" style={{ height: "291px" }}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Summary</span>
            </div>
          </div>
          <div className="summary-detils">
            <span
              style={{
                width: "300px",
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
              }}
            >
              Deposit Amount (Excl. Govt. Tax ){" "}
              <div
                style={{
                  width: " 21px",
                  height: "24px",
                  background: "#C6DAFD",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0D6EFD",

                    fontFamily: "Inter",
                    fontSize: " 14px",
                    fontWeight: " 600",
                    textAlign: "center",
                  }}
                >
                  A
                </span>
              </div>{" "}
            </span>{" "}
            <span style={{ color: "#017C0E" }}>₹ 0. 00</span>
          </div>
          <div className="summary-detils">
            <span
              style={{
                width: "300px",
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
              }}
            >
              Govt Tax (28%){" "}
            </span>{" "}
            <span>₹ 0. 00</span>
          </div>
          <hr style={{ width: "90%", height: "1px" }}></hr>
          <div className="summary-detils">
            <span
              style={{
                width: "300px",
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
              }}
            >
              Total{" "}
            </span>{" "}
            <span>₹ 0. 00</span>
          </div>
          <div className="summary-detils">
            <span
              style={{
                width: "300px",
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
              }}
            >
              Cashback Bonus
              <div
                style={{
                  width: " 21px",
                  height: "24px",
                  background: "#C6DAFD",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0D6EFD",

                    fontFamily: "Inter",
                    fontSize: " 14px",
                    fontWeight: " 600",
                    textAlign: "center",
                  }}
                >
                  B
                </span>
              </div>{" "}
            </span>{" "}
            <span style={{ color: "#017C0E" }}>₹ 0. 00</span>
          </div>
          <hr style={{ width: "90%", height: "1px" }}></hr>
          <div className="summary-detils">
            <span
              style={{
                width: "300px",
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
                fontFamily: "Inter",
                fontSize: " 14px",
                fontWeight: "800",
              }}
            >
              Add To Wallet Balance
              <div
                style={{
                  width: " 21px",
                  height: "24px",
                  background: "#C6DAFD",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0D6EFD",

                    fontFamily: "Inter",
                    fontSize: " 14px",
                    fontWeight: " 600",
                    textAlign: "center",
                  }}
                >
                  A
                </span>
              </div>{" "}
              +
              <div
                style={{
                  width: " 21px",
                  height: "24px",
                  background: "#C6DAFD",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0D6EFD",

                    fontFamily: "Inter",
                    fontSize: " 14px",
                    fontWeight: " 600",
                    textAlign: "center",
                  }}
                >
                  B
                </span>
              </div>{" "}
            </span>{" "}
            <span style={{ color: "#017C0E" }}>₹ 0. 00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
