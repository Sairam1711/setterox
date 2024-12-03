import React, { useState, useRef } from 'react';
import '../Login/login.css';

function VerifyOtp() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputs = useRef([]);

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

    return (
        <div
        className='verfiy-div'
           
        >
            <h1 style={{ margin: "0" }}>Verify OTP</h1>
            <p className="textcontent">
                Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet
            </p>
            <label htmlFor="phone-input" className="phone-label">Enter OTP</label>
            <div className="flex" style={{ gap: "8px" }}>
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
            <button className="modern-button full">Login</button>
            <p style={{ textAlign: "center" }}>Resend OTP</p>
        </div>
    );
}

export default VerifyOtp;
