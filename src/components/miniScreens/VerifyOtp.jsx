import React from 'react'
import '../Login/login.css';
function VerifyOtp() {
    return (
       <div style={{ width: "346px",
        height: "374px",display: "flex",
        flexDirection: "column",
        gap: "10px",
           marginTop:"83px"
       }}>
        <h1 style={{margin:"0"
}}>
    Verify OTP
</h1>
<p className='textcontent'>
Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
</p>
<label htmlFor="phone-input" className="phone-label">Enter OTP</label>
<input    className="normal-input" style={{height:"48px",padding:0}}></input>
<button className='modern-button full'>login</button>
<p>Resend OTP</p>
</div>
    )
}

export default VerifyOtp
