import React, { useContext, useState } from "react";
import "../Login/login.css";
import { useNavigate } from "react-router-dom";
import { apiRoutes, commonStings, validatePhoneNumber } from "../../Utils/constant";
import useAxios from "../../api/useAxios";
import { ProfileContext } from "../ProfileProvider";

function Login() {
  const axiosData = useAxios();
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { showSnackbar } = useContext(ProfileContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
    setErrors({}); // Clear errors when country code changes
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrors({}); // Clear errors when phone number changes
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const validationErrors = validatePhoneNumber(countryCode, phoneNumber);

    if (Object.keys(validationErrors).length === 0) {
   const payload={
    Phone:phoneNumber
   }
      const response= await axiosData.post(apiRoutes.login, payload, {
        
      });
// console.log(response.data);
if(response.data.code===401){
  showSnackbar(response.data.message, 'error')
}else{
  showSnackbar("Login Success", commonStings.success)
  navigate("verify",{state:{...response.data,...{phone:phoneNumber}}});
}
    
      //  alert(`Phone number submitted: ${countryCode} ${phoneNumber}`);
      setPhoneNumber('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // const handleCountryChange = (event) => {
  //   setCountryCode(event.target.value);
  // };

  // const handlePhoneChange = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  return (
    <div
    className="login-div"
    
    >
      <h1 >Login</h1>
      <p className="textcontent">
        Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet
      </p>
      <div >
        <div className="phone-input-container">
          <label htmlFor="phone-input" className="phone-label">
            Phone Number
          </label>
          <div className="phone-input-wrapper w-346">
            <select
              value={countryCode}
              onChange={handleCountryChange}
              className="country-code-dropdown"
            >
              <option value="+91">IN (+91)</option>
              <option value="+1">US (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+81">JP (+81)</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="tel"
              id="phone-input"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="555 000-0000"
              className="phone-number-input"
            />
          </div>
          {errors.phone && <p className="error-text" >{errors.phone}</p>}
        </div>
      </div>
      <div className="flex2">
        <input
        className="checkbox"
       
          type="checkbox"
        ></input>
        <p className="checktext">
          You agree to our friendly{" "}
          <a
        className="textDecorate"
           
          >
            privacy policy
          </a>
          .{" "}
        </p>
      </div>
      <button
        className="modern-button full"
        onClick={() => {
          // navigate("verify");
          handleSubmit()
        }}
      >
        login
      </button>
      <p  className='account' >
        Don't have an account?{" "}
        <a href="/#/registation" className="color2">
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;
