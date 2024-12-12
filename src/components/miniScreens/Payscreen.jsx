import React, { useContext, useEffect, useState } from "react";
import arrowleft from "../../assest/arrow-left.png";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../ProfileProvider";
import { apiRoutes, validatePaymentDetails } from "../../Utils/constant";
import useAxios from "../../api/useAxios";

function Payscreen() {
  const axiosData = useAxios();
  const { profile, loading,showSnackbar } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [payment, setPayment] = useState("upi");
  const [paymentDetails, setPaymentDetails] = useState({
    accountNumber: "",
    ifsc: "",
    upiId: "",
    reEnterUpiId: "",
    chips: "",
  });

  const [errors, setErrors] = useState({});
useEffect(()=>{
  setErrors({})
},[payment])
  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  // Handle submit validation
  const handleSubmit = async() => {
    const validationErrors = validatePaymentDetails(payment, paymentDetails);
    console.log(validationErrors);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Process the submission (e.g., API call)
     const payload= {
      amount:paymentDetails.chips,type:payment,payment_gatway:"manualupi"
     }
      const response= await axiosData.post(apiRoutes.withdrawMoney, payload, {
        
      });
if(!response.data.success){
  showSnackbar(response.data.msg,"error")
}
      console.log("Payment details submitted:", paymentDetails);
    }
  };

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
      <div className="challenge-card container-style-p">
        <div className="challenge-header coloum">
          <div className="Challengeheader">
            <span>Payment Mode</span>
          </div>
          <span className="wchip">Withdrawal Chips {profile.withdrawAmount}</span>
        </div>

        <div className="dropdown-container">
          <select
            onChange={(event) => setPayment(event.target.value)}
            className="styled-select"
          >
            <option value="upi">UPI (Instant ⚡)</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      <div className="challenge-card container-style-h">
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Payment Details</span>
          </div>
        </div>

        <div className="amount">
          <label className="phone-label text-style-c2">
            {payment === "Bank Transfer" ? "Account Number" : "UPI ID"}
          </label>
          <input
            className="normal-input"
            placeholder={
              payment === "Bank Transfer" ? "Enter your account number" : "Enter your UPI ID"
            }
            name={payment === "Bank Transfer" ? "accountNumber" : "upiId"}
            onChange={handleChange}
          />
          {errors.accountNumber && <p className="error margin-0">{errors.accountNumber}</p>}
          {errors.upiId && <p className="error margin-0">{errors.upiId}</p>}
        </div>

        <span className="text-left-style">
          Bank Name should be same as {profile.Name}
        </span>

        <div className="amount">
          <label className="phone-label color-3">
            {payment === "Bank Transfer" ? "IFSC" : "Re-enter UPI ID"}
          </label>
          <input
            className="normal-input"
            placeholder={
              payment === "Bank Transfer" ? "Enter your IFSC" : "Enter your UPI ID again"
            }
            name={payment === "Bank Transfer" ? "ifsc" : "reEnterUpiId"}
            onChange={handleChange}
          />
          {errors.ifsc && <p className="error margin-0">{errors.ifsc}</p>}
          {errors.reEnterUpiId && <p className="error margin-0">{errors.reEnterUpiId}</p>}
        </div>

        {payment !== "Bank Transfer" && (
          <div className="amount">
            <label className="phone-label color-3">Chips</label>
            <input
              className="normal-input"
              placeholder="Chips"
              name="chips"
              onChange={handleChange}
            />
            {errors.chips && <p className="error margin-0">{errors.chips}</p>}
          </div>
        )}

        <span className="centered-text">
          By Continuing, you agree to our{" "}
          <a className="textDecorate" >
            Legal Terms
          </a>{" "}
          and you are 18 years or older.
        </span>

        <button className="modern-button full styled-element" onClick={handleSubmit}>
          Submits
        </button>
      </div>
    </div>
    </div>
  );
}

export default Payscreen;
