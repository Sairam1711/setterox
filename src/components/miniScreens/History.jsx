import React from 'react'
import icon from '../../assest/Ellipse 2.png'
function History() {
    return (
        <div className='history'>
            <div className="moneychip" style={{margin:"20px"}}>
            {["All", "Wallet", "Diamond", "Games",].map((element,index) => (
              <div
                className="modern-button  primary"
                style={{
                  border:index===0?"1px solid #0D6EFD":" 1px solid #898989",
               background:index===0?"#0D6EFD":"",
               color:index===0?"white":"#000000",
                  textAlign: "left",
                  alignItems: "center",
                  padding: "0",
                  width: "87px",
                  height: "35px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  borderRadius: "15px",
                  fontWeight: " 600",
                }}
              >
               {element}
              </div>
            ))}
            
          </div>
          <div className="input-section">
    <input type="text" placeholder="Enter Room Code or UTR Number" className="amount-input" />
    <button className="set-button">Set</button>
  </div>
 { [1,1,1,1,1,1,1,1].map( element=> <><div className='listelement'>
    <div style={{display:"flex",flexDirection:"column", width:"50px"}}>
        <img style={{width:"30px",height:"30px"}} src={icon} alt="" />
        <span className='hspan'>13 Sep</span>
        <span className='hspan'>1:08 am</span>
    </div>
    <div class="vertical-line"></div>

    <div className='history-text' >
        <div style={{width:"100%" ,display:"flex",flexDirection:"row",justifyContent:"space-between"}}> <span className='htext'>Lost Against Malik_Sahab </span> <span className='htext' style={{color:"#D60000"}}>(-) 30</span></div>
        <div style={{width:"100%" ,display:"flex",flexDirection:"row",justifyContent:"space-between"}}> <span className='htext2'>Room Code: 0974674839</span>   <span className='htext2'>Closing Balance : 250.99</span> </div>
       </div>
   
  </div>
  <hr className='line' style={{width:"90%" ,color:"#D9D9D9" ,height:"1px"}} /></>)}
        </div>
    )
}

export default History
