import React, { useState, useRef } from "react";
import "../Login/login.css";
import { apiRoutes, paths } from "../../Utils/constant";
import useAxios from "../../api/useAxios";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {
  const axiosData = useAxios();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);
  const location=useLocation();
  const navigate = useNavigate();
  const handleChange = (value, index) => {
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
        Phone:location.state.phone,
        twofactor_code: twofactor_code,
        secretCode:location.state.secret
      };
      const response = await axiosData.post(apiRoutes.verifyOtp, payload, {
      });
      console.log(response);
      if(response.data.token){
        const token=response.data.token
        localStorage.setItem('authToken',token);
        navigate(paths.lobby)
      }
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="verfiy-div ai ">
      <h1 className=" margin-0">Verify OTP</h1>
      <p className="textcontent">
        Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet
      </p>
      <label htmlFor="phone-input" className="phone-label">
        Enter OTP
      </label>
      <div className="flex gap-8">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            className="normal-input otp-input"
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)} // Assign the input element to the ref array
          />
        ))}
      </div>
      <button className="modern-button full" onClick={onSubmit}>
        Login
      </button>
      <p className="textalingn-center  "> <span className="pointer hover user-select"> Resend OTP</span></p>
    </div>
  );
}

export default VerifyOtp;
