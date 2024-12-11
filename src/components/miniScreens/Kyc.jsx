import React, { useState } from "react";
import arrowleft from "../../assest/arrow-left.png";
import alert from "../../assest/Group 41.png";
import { useNavigate } from "react-router-dom";
import { apiRoutes, validateForm } from "../../Utils/constant";
import useAxios from "../../api/useAxios";

function Kyc({ notify, setnotify, rules, setrules }) {
  const navigate = useNavigate();
  const axiosData = useAxios()
  const [formData, setFormData] = useState({
    aadharNumber: "",
    email: "",
    method: "not",
  });

  const [errors, setErrors] = useState({});

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
          aadhaar_number:formData.aadharNumber,email:formData.email
        }
        const response = await axiosData.post(apiRoutes.otpKyc,{ payload  })
     
    } catch (error) {
      console.log(error);
    }  
      setrules(false);
      setnotify(true);
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
        <button
          className="modern-button  primary guide"
      
        >
          {" "}
          Guide
        </button>
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

      <div
        className="challenge-card kyc-card gap-20"
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>KYC</span>
          </div>
        </div>
        <div className="amount">
          <label
            htmlFor="normal-input f-2-c"
          
            className="phone-label"
          >
            Select Varification Method
          </label>
          <div className="dropdown-container">
            <select className="styled-select"
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
          <label
            htmlFor="normal-input f-2-c"
          
            className="phone-label"
          >
            Aadhar Card Number
          </label>

          <input
            className="normal-input"
            placeholder="Enter Aadhar Card Number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}

          ></input>
           {errors.aadharNumber && <p className="error margin-0">{errors.aadharNumber}</p>}
        </div>
        <div className="amount">
          <label
            htmlFor="normal-input f-2-c"
          
            className="phone-label"
          >
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
      
        <span
         className="agument"
        
        >
          By Continuing, you agree to our{" "}
          <a
          className="textunderline"
           
          >
            Legal Terms
          </a>{" "}
          and you are 18 years or older.
        </span>
        <button
          className="modern-button full requestbt"
         
          onClick={(e) => {
           handleSubmit(e)
          }}
        >
          Request for KYC
        </button>
      </div>
    </div>
  );
}

export default Kyc;
