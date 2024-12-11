import React, { useState } from "react";
import { apiRoutes, validateRegistrationForm } from "../../Utils/constant";
import useAxios from "../../api/useAxios";
function Resgistation() {
  const axiosData = useAxios();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    referral: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegistrationForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        Name: formData.fullName,
        Phone: formData.phoneNumber,
        referral: formData.referral,
      };
      const response = await axiosData.post(apiRoutes.register, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

      alert("resgister successfully!");
      setFormData({
        fullName: "",
        phoneNumber: "",
        referral: "",
        agreed: false,
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="resgistation-div">
      <h1 className="margin-0">Register</h1>
      <p className="textcontent">
        Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet
      </p>
      <label htmlFor="phone-input" className="phone-label">
        Full Name
      </label>
      <input
        className="normal-input"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      ></input>
      {errors.fullName && (
        <p className="phone-label error margin-0">{errors.fullName}</p>
      )}

      <label htmlFor="phone-input" className="phone-label">
        Phone Number
      </label>
      <input
        className="normal-input"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      ></input>
      {errors.phoneNumber && (
        <p className="phone-label error margin-0">{errors.phoneNumber}</p>
      )}
      <label htmlFor="phone-input" className="phone-label">
        Refferal
      </label>
      <input className="normal-input"></input>
      <div className="flex">
        <input className="r-input" type="checkbox"></input>
        <p className="checktext">
          You agree to our friendly privacy <a>policy.</a>{" "}
        </p>
      </div>

      <button className="modern-button full" onClick={handleSubmit}>
        login
      </button>
    </div>
  );
}

export default Resgistation;
