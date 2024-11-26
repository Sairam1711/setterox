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
<div className='flex' style={{gap:"8px"}}>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
<input    className="normal-input" style={{height:"48px",padding:0,
    width:"50px",
    height:"48px",
    borderRadius: "8px" ,
    border:" 1px solid #D0D5DD ",

    
}}></input>
</div>

<button className='modern-button full'>login</button>
<p style={{textAlign:"center"}}>Resend OTP</p>
</div>
    )
}

export default VerifyOtp
