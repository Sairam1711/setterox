import React from 'react'
import './element.css';
import iconone from "../assest/diamond-solid-svgrepo-com 1.png"
import icontow from "../assest/wallet-2-svgrepo-com.png"

function MiniButtons() {
    return (
        <>
        <div style={{display:"flex",flexDirection:"row", gap:"10px"}}>
        <div style={{
            display:"flex",flexDirection:"row", gap:"11px",
            alignItems:"center",
            justifyContent:"center",
            width: "56px",
            height: "32px",
            padding:"0",
          border:"1px solid #D9D9D9"
            
        }} className='modern-button small primary' > <img className='icon' src={iconone} alt="" /><span style={{width:"10px"}}>{0}</span></div>
        <div  className='modern-button small primary' style={{ display:"flex",flexDirection:"row", gap:"11px",
            alignItems:"center",
            justifyContent:"center",
            width: "56px",
            height: "32px",
            padding:"0",border:"1px solid #D9D9D9"}}> <img className='icon' src={icontow} alt="" /><span style={{width:"10px"}}>{"0"} </span> </div>
    </div>
        </>
    )
}

export default MiniButtons
