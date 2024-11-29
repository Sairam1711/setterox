import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom'

function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate =useNavigate()
  const Mini_card=({element})=>{
    return(
      <div className="challenge-card mini" style={{justifyContent:"left" }}>
      <div className="challenge-header">
        <div className="Challengeheader" style={{justifyContent:"left"}}>
          <span style={{marginLeft:"8px" ,fontWeight:"500"}}>{element}</span>
        </div>
        
      </div>
     <p style={{margin:"0",marginLeft:"10px" ,width:"100%"}}><strong>0</strong></p>
    </div>
    )
  } 
    return (
        <div className='profile'>
   <div className="challenge-card" style={{ height: "314px" ,gap:"10px",margin:isMobile?"15px":"20px" }}>
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
          onClick={()=>{
            navigate("/kyc")
          }}
        >
          {" "}
          Complete KYC
        </button>
            </div>
          </div>
        </div>
        <div className="challenge-card" style={{ height: "233px" ,gap:"10px",margin:isMobile?"":"20px"}}>
          <div className="challenge-header">
            <div className="Challengeheader">
              <span>Metrics</span>
            </div>
           
          </div>
          <div style={{display:"flex",flexDirection:"row", width:"100%" ,height:"100%",flexWrap:"wrap", justifyContent:"space-around"}}>
          {         ["Games Played","Chip Won","Referral Earning","Penalty"].map((element)=> <Mini_card element={element}></Mini_card>)}
          </div>

         
        </div>
        </div>
    )
}

export default Profile
