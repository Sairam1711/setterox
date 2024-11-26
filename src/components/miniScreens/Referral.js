import React from "react";
import whatsapp_icon from "../../assest/Vector (18).png";
function Referral() {
  return (
    <div className="profile">
      <div
        className="challenge-card"
        style={{ height: "134px", gap: "0px", margin: "20px" }}
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Your Referral Earning</span>
          </div>
        </div>
        <div className="flex refered">
          <div style={{ textAlign: "center" }}>
            <p className="referedp">Refered Players</p>
            <span className="refered-span">₹ 0</span>
          </div>
          <div className="vrline"></div>
          <div style={{ textAlign: "center" }}>
            <p className="referedp">Referral Earning</p>
            <span className="refered-span">₹ 0</span>
          </div>
        </div>
      </div>
      <div
        className="challenge-card"
        style={{ height: "598px", gap: "0px", margin: "20px" }}
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Metrics</span>
          </div>
        </div>

        <img
          className="referral-image"
          src="https://s3-alpha-sig.figma.com/img/9642/63b9/ec0d8da76700b4a4ee34baaaaa1edf13?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdltjY5oJ7kIdI58f4YO-twQMZiZGbD-fVfSqX2q1VRuX42lmr1ESPSJHziq0Bz9arBOVQiJDFyT0WQt80qc-nTMuXCBZPE-JF1ohqLHvDcV2jWeZfc-5f1FdzCRjeR2RP9FXCNoP6WqCR7CRaTp1r8ttm1zyXZp3Wqw0kMYKj89~v-qfdW4NlwTADlVa6RONccFJuF9Y25ezNKOor6E63V6IK9ZvpOfzdRmqCfsJa-rLQ55iH3513ZXBOEgyMkt~ifGDXrSOzuLgiQYIOoRFP5SmDJmVicUZNlrBX3MhkA0VPcbNCHURafQSIOedqE~V0cEMZDEPdq~FwPTi2tI2Q__"
        ></img>
        <div className="input-section" style={{ marginBottom: "0px" }}>
          <input
            type="text"
            placeholder="Enter Number"
            className="amount-input"
          />
          <button className="set-button">Copy</button>
        </div>
        <p className="kycheader" style={{ textAlign: "center" }}>
          OR
        </p>
        <div className="flex coloum" style={{height:"100%" ,justifyContent:"start", gap:"16.6px" }}>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background: "#198754",
          }}
        >
          {" "}
          <img src={whatsapp_icon} alt="" />
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Share On Whatsapp"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background: "#6C757D",
          }}
        >
          {" "}
          <img src={whatsapp_icon} alt="" />
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Copy To Clipboard"}{" "}
          </span>{" "}
        </div>
        </div>
      </div>
      <div
        className="challenge-card"
        style={{ height: "224px", gap: "0px", margin: "20px" }}
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>How it Works</span>
          </div>
        </div>
        <div className="flex refered coloum" style={{ justifyContent:"start",alignItems:"center"}}>
          <div style={{ textAlign: "center" }}>
            <p style={{width:"332px" }} className="referedp2">You can refer and <span>Earn 1%</span> of your referral winning, every time</p>
         
          </div>
          <hr style={{width:"90%",border: "1px solid #D9D9D9", margin:"0"}}></hr>
          <div style={{ textAlign: "center" }}>
            <p style={{width:"361px", marginTop:"17px"}} className="referedp2">Like if your player plays for <span>₹10000 </span>and wins, You will get <span>₹100</span> as referral amount.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
