import React from 'react'
import shape1 from '../../assets/images/shape (1).png'
import '../../dropDown.css';
import { productCatagery } from '../../utils/constant';

function FirstDrop() {
    return (
        <div className='Dcard' style={{display:"flex",flexDirection:"row",gap:"50px",justifyContent:"center"}}>
       { productCatagery.map((element)=>(
        <div style={{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center"}}>  
        <div style={{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center"}} >
        <h3>{element.tiTle}</h3>
              <img className="DropImage" style={{ borderRadius:"10px"}}
              
              src={element.image}></img>
              </div>
        <div className="dlist"  style={{display:'flex',flexDirection:"column",textAlign:"left", gap:"10px"}}>
            {element.list.map(element =>(<span >
               { element} <img src={shape1} alt="" />
            </span>))}
           
        </div>
        </div>))} 
       
        </div>
    )
}

export default FirstDrop
