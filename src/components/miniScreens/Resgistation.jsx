import React from 'react'

function Resgistation() {
    return (
   <div style={{ width: "346px",
    height: "374px",display: "flex",
    flexDirection: "column",
    gap: "10px",
  marginTop:"83px"
   }}>
     <h1 style={{margin:"0"
}}>
Register
</h1>
<p className='textcontent'>
Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
</p>
<label htmlFor="phone-input" className="phone-label">Full Name</label>
<input    className="normal-input"></input>
<label htmlFor="phone-input" className="phone-label">Phone Number</label>
<input    className="normal-input"></input>
<label htmlFor="phone-input" className="phone-label">Refferal</label>
<input    className="normal-input"></input>
<button className='modern-button full'>login</button>
<div style={{display:"flex",flexDirection:"row"}}>
<input style={{borderRadius:"4px",width:"20px",height:"20px",margin:"auto",marginLeft:"0" ,marginRight:"10px"}} type='checkbox'></input><p className='checktext'>You agree to our friendly privacy <a>policy.</a> </p>
</div>
<p>Resend OTP</p>
</div> 
    )
}

export default Resgistation
