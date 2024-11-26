import React, { useEffect, useState } from 'react'
import './login.css';
import menu from '../../assest/icon-outline-Expand.png'
import '.././element.css';
import buttonIcon from '../../assest/icon-outline-align Bottom.png'
import questionIcon from '../../assest/icon-outline-Question.png'
import cross_icon from '../../assest/icon-outline-Cross.png'
import Menu from '../Menu';
import { useLocation } from 'react-router-dom';

function Template({MiniScreen,MiniButtons}) {
    const location = useLocation();

   
    const [isExpanded, setIsExpanded] = useState(false);
    const [firstrender, setfirstrender] = useState(false);
    const [rules,setrules]=useState(false)
    const [notify,setnotify]=useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    const List=(label="Name",value="KAIFUL HAQUE")=>{
        return(  <div className="kyc-content"><div className="flex ">
            <p className='kyc-left'>Name </p> <span className='kyc-right'>KAIFUL HAQUE</span>
            
        </div><hr></hr></div> )
    }
    useEffect(()=>{
        setfirstrender(false)
    },[])
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        setfirstrender(false)
      };
    return (
       <div className='loginContainer'>

<div className='leftside'>
<div className='notification'  style={notify?{display:"block"}:{}}>
<div className='kyc-detials flex coloum' style={false?{transform: "translate(0,186px)"}:{}}>
    <div className='kycheader' >
    <p className='kycheader'>{false?"Rules":"KYC Details"}</p>
    <img src={cross_icon}></img>
    </div>
{ false?<>
    <ul className='flex coloum ulist' style={{height:"100%" ,justifyContent:"start",
        gap:"8px", margin:"0",alignItems:"left"
    }}>
  <li><strong>Players:</strong><span> 2 players</span></li>
  <li><strong>Tokens:</strong><span> Each player has 2 tokens, but only 1 token needs to reach the finish 🎲</span></li>
  <li><strong>Objective:</strong><span> Be the first to move one token to the final home position.</span></li>
  <li><strong>Game Duration:</strong><span> 10-minute timer ⏰</span></li>
  <li><strong>Movement:</strong><span> Roll the die, and rolling a 6 grants an extra turn.</span></li>
  <li><strong>Killing:</strong><span> Land on an opponent's token to send it back and score points 💥.</span></li>
  <li><strong>Safe Zones:</strong> <span>Certain spaces (⭐) act as safe zones, where tokens cannot be attacked.</span></li>
  <li><strong>Finish Position:</strong><span> Move one token into the finish by an exact die roll.</span></li>
  <li><strong>Victory:</strong><span> First to finish one token or have the higher score wins 🏆.</span></li>
</ul>
</>:<><List></List>
 <List></List>
 <List></List>
 <List></List></>}

</div>
</div>
<div className={`drawer  ${isExpanded ? "expand" : !firstrender? "": "collapse"}`}>
<Menu isExpanded={isExpanded} setIsExpanded={setIsExpanded} toggleExpand={toggleExpand}></Menu>
</div>
<div className='loginbutton'>
    <div style={{display:"flex",
    flexDirection:"row",alignItems:"center"
    ,gap:"0px"
    }}>
        <img style={{cursor:"pointer"}} onClick={toggleExpand} src={menu} className='menuimage'></img>
    <p className='logintext'>LOGO HERE</p>
    </div>
    <label class="switch">
    <input type="checkbox" id="theme-toggle"></input>
    <span class="slider"></span>
  </label>
    {MiniButtons?<MiniButtons></MiniButtons>:<div style={{display:"flex",flexDirection:"row", gap:"10px"}}>
    <div class="theme-switch">
</div>
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
