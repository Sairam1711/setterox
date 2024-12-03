import React from 'react'

function Resgistation() {
    return (
   <div className='resgistation-div' >
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
<div className='flex'><input className='r-input'type='checkbox'></input><p className='checktext'>You agree to our friendly privacy <a>policy.</a> </p>
</div>

<button className='modern-button full'>login</button>

</div> 
    )
}

export default Resgistation
