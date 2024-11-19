import React, { useState } from 'react'
import './login.css';
import menu from '../../assest/icon-outline-Expand.png'
import '.././element.css';
import buttonIcon from '../../assest/icon-outline-align Bottom.png'
import questionIcon from '../../assest/icon-outline-Question.png'
import Menu from '../Menu';

function Template({MiniScreen,MiniButtons}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };
    return (
       <div className='loginContainer'>

<div className='leftside'>
<div className={`drawer  ${isExpanded ? "visibility" : ""}`}>
<Menu isExpanded={isExpanded} setIsExpanded={setIsExpanded} toggleExpand={toggleExpand}></Menu>
</div>
<div className='loginbutton'>
    <div style={{display:"flex",
    flexDirection:"row",alignItems:"center"
    ,gap:"20px"
    }}>
        <img style={{cursor:"pointer"}} onClick={toggleExpand} src={menu} className='menuimage'></img>
    <p className='logintext'>LOGO HERE</p>
    </div>
    {MiniButtons?<MiniButtons></MiniButtons>:<div style={{display:"flex",flexDirection:"row", gap:"10px"}}>
        <button className='modern-button small primary'> <img className='icon' src={buttonIcon} alt="" /> Get App </button>
        <button className='modern-button small primary'> <img className='icon' src={questionIcon} alt="" /> Guide  </button>
    </div>}

</div>

<div className='liftbottom'>

<MiniScreen></MiniScreen>
</div>
</div>
<div className='rightside'>
    <div style={{display:"flex",
        flexDirection:"column",
        alignItems:"center"
        ,justifyContent:"end",
        height:"50%"

    }}>
      
    <img  className='imageRight' src="https://s3-alpha-sig.figma.com/img/894d/8a74/8fbe4bb05ab7ebf5bb8aea1de9fd3bc6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pyYlhgobwHZiUpH7L1yT88Btb3gviK-qJTGpPWGCXrcvOxsIR8~Kevn~S4gHjO3iVOtcKQyW7ZivpGlM47uLFDw5WZ0STctyUxXbh9sLt0uZT4RER-2AxEAMuLzlERvTmGSMaZluomD5Ri5VI7Crwq4n8Ka3v2iNrzp9NfOWaKYl921JkZX5R5QCmFvqypiKDuOxT4xQkSKBKFtTyGAjP8Xo0v9KUFOKXhkBkUd3NHBqOa9cCPtoW6v48sFhsbLPn2oc-HMTytYTd~oCNy0DEe~x8IdEZzNYXT5xsdSaw63vi0s9sYZVcEms-eOWOmteTLh7VEg20KFPy~BZ~B6q5A__" alt="" />

    </div>
    <div style={{display:"flex",
        flexDirection:"column",
        alignItems:"center"
        ,justifyContent:"start",
        height:"50%",
        gap:"100px"

    }} >
        <div>
        <h1 className='logohere' >Logo Here</h1>
        <h3 className='tagline'>Tagline here</h3>
        </div>
   
<p className='endp' style={{top:"723px"}}>For best experience, open <a style={{textDecoration:"underline",textUnderlineOffset:"3px",textDecorationThickness:"1px", textAlign:"left"   }}>LudoPlayers.com</a> on chrome mobile</p>

    </div>

</div>

       </div>
    )
}

export default Template
