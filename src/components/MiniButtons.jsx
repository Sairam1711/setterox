import React from 'react'
import './element.css';
import iconone from "../assest/diamond-solid-svgrepo-com 1.png"
import icontow from "../assest/wallet-2-svgrepo-com.png"

function MiniButtons() {
    return (
        <>
        <div style={{display:"flex",flexDirection:"row", gap:"10px"}}>
        <button className='modern-button small primary' style={{border:"2px solid #4DB1F1",gap:"10px"}}> <img className='icon' src={iconone} alt="" />{0}</button>
        <button className='modern-button small primary' style={{border:"2px solid #03C91E"}}> <img className='icon' src={icontow} alt="" />{20}  </button>
    </div>
        </>
    )
}

export default MiniButtons
