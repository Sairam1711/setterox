import React, { useState } from 'react'
import '../Login/login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [countryCode, setCountryCode] = useState("+91");
    const [phoneNumber, setPhoneNumber] = useState("");
  const navigate =useNavigate()
    const handleCountryChange = (event) => {
      setCountryCode(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhoneNumber(event.target.value);
    };
    return (
        <div style={{ width: "346px",
          height: "374px",display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop:"83px"
         }}>
        <h1 style={{margin:"0"
}}>
    Login
</h1>
<p className='textcontent'>
Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
</p>
<div style={{display:"flex",flexDirection:"column"}}>
<div className="phone-input-container">
      <label htmlFor="phone-input" className="phone-label">Phone Number</label>
      <div className="phone-input-wrapper"     style={{width:"346px"}}>
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
    </div>
</div>
<div style={{display:"flex",flexDirection:"row"}}>
<input style={{borderRadius:"4px",width:"20px",height:"20px",margin:"auto",marginLeft:"0" ,marginRight:"10px"}} type='checkbox'></input><p className='checktext'>You agree to our friendly  <a style={{textDecoration:"underline",textUnderlineOffset:"3px",textDecorationThickness:"1px", textAlign:"left"   }}>privacy policy</a>. </p>
</div>
<button className='modern-button full' onClick={()=>{
navigate("verify")
}}>login</button>
<p style={{textAlign:"center",fontWeight:"500"}}>Don't have an account? <a href='/#/registation' style={{color: "#0D6EFD"}}>Register</a></p>
</div>
    )
}

export default Login
