import React from 'react'

function Profile() {
    return (
        <div className='profile'>
   <div className="challenge-card" style={{ height: "314px" ,gap:"10px",margin:"20px" }}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Payment Details</span>
            </div>
          </div>
          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054" ,fontWeight:"500"}} className="phone-label">
            Username
            </label>
            <div style={{display:"flex",flexDirection:"row", gap:"5px"}}>
            <input className="normal-input" placeholder="Enter your name" style={{width:"307px",background: "#EDEDED"
}}></input>

<button
className="modern-button full"
style={{
  width: "79px",
  height:"44px",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: " 600",
  borderRadius: "4px",
}}
>
Edit
</button>
            </div>
           
          </div>
          <div className="amount">
            <label htmlFor="phone-input" style={{color:"#344054" ,fontWeight:"500"}} className="phone-label">
            Mobile Number
            </label>
           
            <input className="normal-input" placeholder="Enter your mobile" style={{background: "#EDEDED"
}}></input>


            
           
          </div>
          <div className='redbox'>
            <div className='redbox1'>
                <span style={{width:"90%" ,  fontSize: "14px",
            fontWeight: " 400",}}>KYC Status</span>
                <span style={{width:"90%",
                      fontSize: "20px",
                      fontWeight: " 700",
                }}>Pending</span>
            </div>
            <div className='redbox2'>
            <button
          className="modern-button  primary"
          style={{
            border: "1px solid #D60000",
            borderRadius:"6px",
            color: "#D60000",
            textAlign: "center",
            alignItems: "center",

            width: "140px",
            height: "35px",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: " 500",
          }}
        >
          {" "}
          Complete KYC
        </button>
            </div>
          </div>
        </div>
        <div className="challenge-card" style={{ height: "314px" ,gap:"10px",margin:"20px" }}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Metrics</span>
            </div>
          </div>
         
        </div>
        </div>
    )
}

export default Profile
