import React, { useContext, useRef, useState } from "react";
import arrowleft from "../../assest/arrow-left.png";
import alert from "../../assest/Group 41.png";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRoutes, paths, validateForm } from "../../Utils/constant";
import useAxios from "../../api/useAxios";
import { ProfileContext } from "../ProfileProvider";

function Kyc({ notify, setnotify, rules, setrules }) {
  const navigate = useNavigate();
  const axiosData = useAxios();
  const [verifyScreen ,setVerifyScreen]=useState(true)
  const {showSnackbar } = useContext(ProfileContext);
  const [formData, setFormData] = useState({
    aadharNumber: "",
    email: "",
    method: "not",
  });

  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);
  const location = useLocation();
  const handleChangeOtp = (value, index) => {
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last entered character
    setOtp(newOtp);

    // Focus the next input field
    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const onSubmit = async () => {
    const twofactor_code = otp.join("");
    try {
      const payload = {
        Phone: location.state.phone,
        otp: twofactor_code,
      };
      const response = await axiosData.post(apiRoutes.verifyAadharOtp, payload, {});
      
      

      // navigate(-1);
    } catch (error) {
      console.log(error);
      showSnackbar("error","error")
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const payload = {
          aadhaar_number: formData.aadharNumber,
          email: formData.email,
        };
        const response = await axiosData.post(apiRoutes.otpKyc, { payload });
       
      } catch (error) {
        console.log(error);
      }
      setVerifyScreen(false)

    }
  };
  return (
    <div className="wallet gap-41">
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

      {verifyScreen ? (
        <div className="challenge-card kyc-card gap-20">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>KYC</span>
            </div>
          </div>
          <div className="amount">
            <label htmlFor="normal-input f-2-c" className="phone-label">
              Select Varification Method
            </label>
            <div className="dropdown-container">
              <select
                className="styled-select"
                name="method"
                value={formData.method}
                onChange={handleChange}
              >
                <option value=" ">Select Method</option>
                <option value="Aadhar">Aadhar Vai Card</option>
              </select>
            </div>
            {errors.method && <p className="error margin-0">{errors.method}</p>}
          </div>
          <div className="amount">
            <label htmlFor="normal-input f-2-c" className="phone-label">
              Aadhar Card Number
            </label>

            <input
              className="normal-input"
              placeholder="Enter Aadhar Card Number"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
            ></input>
            {errors.aadharNumber && (
              <p className="error margin-0">{errors.aadharNumber}</p>
            )}
          </div>
          <div className="amount">
            <label htmlFor="normal-input f-2-c" className="phone-label">
              Email Address
            </label>

            <input
              className="normal-input"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className="error margin-0">{errors.email}</p>}
          </div>

          <span className="agument">
            By Continuing, you agree to our{" "}
            <a className="textunderline">Legal Terms</a> and you are 18 years or
            older.
          </span>
          <button
            className="modern-button full requestbt"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Request for KYC
          </button>
        </div>
      ) : (
        <div className="challenge-card kyc-card  gap-20 h-50">
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>KYC</span>
            </div>
          </div>
          <p className="w-90">
            Enter OTP Sent to Mobile Number registered with your Aadhar Card
          </p>
          <div className="flex gap-8">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                className="normal-input otp-input"
                onChange={(e) => handleChangeOtp(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)} // Assign the input element to the ref array
              />
            ))}
          </div>

          <div className="w-90 flex sb">
            <button className="modern-button  primary guide" onClick={handleSubmit}>
              {" "}
              Resend OTP
            </button>
            <button
              className="modern-button  "
              onClick={() => {
               onSubmit()
              }}
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kyc;
