import React from "react";
import whatsapp_icon from "../../assest/Vector (18).png";
import { useMediaQuery } from "react-responsive";
function Referral() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="profile">
      <div
        className="challenge-card referral-card"
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Your Referral Earning</span>
          </div>
        </div>
        <div className="flex refered">
          <div className="textalingn-center">
            <p className="referedp">Refered Players</p>
            <span className="refered-span">₹ 0</span>
          </div>
          <div className="vrline"></div>
          <div className="textalingn-center">
            <p className="referedp">Referral Earning</p>
            <span className="refered-span">₹ 0</span>
          </div>
        </div>
      </div>
      <div
        className="challenge-card referral-large-card"
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Refer A Friend</span>
          </div>
        </div>

        <img
          className="referral-image"
          src="https://s3-alpha-sig.figma.com/img/9642/63b9/ec0d8da76700b4a4ee34baaaaa1edf13?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdltjY5oJ7kIdI58f4YO-twQMZiZGbD-fVfSqX2q1VRuX42lmr1ESPSJHziq0Bz9arBOVQiJDFyT0WQt80qc-nTMuXCBZPE-JF1ohqLHvDcV2jWeZfc-5f1FdzCRjeR2RP9FXCNoP6WqCR7CRaTp1r8ttm1zyXZp3Wqw0kMYKj89~v-qfdW4NlwTADlVa6RONccFJuF9Y25ezNKOor6E63V6IK9ZvpOfzdRmqCfsJa-rLQ55iH3513ZXBOEgyMkt~ifGDXrSOzuLgiQYIOoRFP5SmDJmVicUZNlrBX3MhkA0VPcbNCHURafQSIOedqE~V0cEMZDEPdq~FwPTi2tI2Q__"
        ></img>
        <div className="input-section margin-0" >
          <input
            type="text"
            placeholder="Enter Number"
            className="amount-input"
          />
          <button className="set-button">Copy</button>
        </div>
        <p className="kycheader textalingn-center justify-center " >
          OR
        </p>
        <div className="flex coloum referral-flex-column" >
        <div
          className="modern-button full primary referral-button"
          
        >
          {" "}
          <img src={whatsapp_icon} alt="" />
          <span
            className="referral-text"
          >
            {"Share On Whatsapp"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary referral-button gray"
         
        >
          {" "}
          <img src={whatsapp_icon} alt="" />
          <span
          className="referral-text"
         
          >
            {"Copy To Clipboard"}{" "}
          </span>{" "}
        </div>
        </div>
      </div>
      <div
        className="challenge-card card-style"
        
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>How it Works</span>
          </div>
        </div>
        <div className="flex refered coloum center-align" >
          <div className="textalingn-center" >
            <p   className="referedp2 p2">You can refer and <span>Earn 1%</span> of your referral winning, every time</p>
         
          </div>
          <hr className="separator-line"></hr>
          <div className="textalingn-center" >
            <p  className="referedp2 p3">Like if your player plays for <span>₹10000 </span>and wins, You will get <span>₹100</span> as referral amount.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
