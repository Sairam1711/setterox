import React from 'react'
import arrowleft from '../../assest/arrow-left.png'
import { useNavigate } from 'react-router-dom'
function Wallet() {
  const navigate =useNavigate()

    return (
     <div className='wallet'>
        <div className='headerbuttons'>
        <button className='modern-button small' style={{borderRadius:"5px",background:" #4DB1F1"
           ,textAlign:"center" ,alignItems:"center" , width: "104px",
            height: "35px"
            
            
        }} onClick={()=>{
          navigate(-1)
        }}><img src={arrowleft}></img> Back</button>
        <button className='modern-button  primary' style={{border:"2px solid #4DB1F1",color:"#4DB1F1",textAlign:"center" ,alignItems:"center" 

,width: "160px",
height: "35px",
fontFamily: "Inter",
fontSize: "16px",
fontWeight:" 600",





        }}> Wallet History</button>

        </div>
        <div className='cardlist'>
        <div className="challenge-card" style={{height:"291px"}}>
    <div className="challenge-header">
    <div className="Challengeheader">
          <span>Deposit Chips</span>
    
         
          </div>
    </div>
    <div className='bluefiled'>
    यह चिप्स Spin & Win एवं Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा सकते है || Bank या UPI में निकाला नहीं जा सकता 
    </div>
    <p className='chipstext'>Chips</p>
    <p className='chipstext2'>200.93</p>
    <button className='modern-button full' style={{width:"95%",fontFamily: "Inter",
fontSize: "24px",
fontWeight:" 600",

}} onClick={()=>{
  navigate("/buy")
}}>Add</button>
  </div>

  <div className="challenge-card" style={{height:"291px"}}>
    <div className="challenge-header">
    <div className="Challengeheader">
          <span>Deposit Chips</span>
    
         
          </div>
    </div>
    <div className='bluefiled'>
    यह चिप्स Spin & Win एवं Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा सकते है || Bank या UPI में निकाला नहीं जा सकता 
    </div>
    <p className='chipstext'>Chips</p>
    <p className='chipstext2'>200.93</p>
    <button className='modern-button full' style={{width:"95%",fontFamily: "Inter",
fontSize: "24px",
fontWeight:" 600",

}}>Withdraw</button>
  </div>
 
  </div>
     </div>
    )
}

export default Wallet
