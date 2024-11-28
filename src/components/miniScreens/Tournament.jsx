import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import cup from '../../assest/cup-star-svgrepo-com 2.png'
import { useNavigate } from 'react-router-dom';
function Tournament() {
    const [click,setclick]=useState(false)
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [progress, setProgress] = useState(50); // Initial progress: 50%
    const navigate =useNavigate()
    const handleIncrease = () => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increase by 10%
    };
  
    const handleDecrease = () => {
      setProgress((prev) => (prev > 0 ? prev - 10 : 0)); // Decrease by 10%
    };
    return (
       <div className='tournament flex coloum'>
        <div className='flex sa t-header'>
            <p className='th2' onClick={()=>{
                setclick(false)
            }}>Tournament</p>
            <p onClick={()=>{
                setclick(true)
            }} style={{fontWeight:"400"}} className='th2'>Your Tournament</p>
        </div>
        <div className={`tunderline flex `}>
            <hr className={`tline ${click?"left":"right"}`} />
        </div>
        <img
          width={ isMobile?"95%": "444px"}
          style={{height:"194px"}}
          src="https://s3-alpha-sig.figma.com/img/9fc4/ed5e/9278a8dac939c859c610832d624b52f9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVCrbSGIe9DsH7G~zb5b-nz-tIt0BskmvPbga41ZO-rw2K60dUSIsYrNAm~Mv0N8dL0~RtvLfqU1jLW9lTqLLAs6UPAOkxmxKK8bgRCu9VDZBHMwpEiiSXNLc4nJZqZiWiNJ46tgE9ZZReAAMYc~RZ6zn0THSODxoP8hlQM5~cA06axoTnKjrHEqrenS692Rll5s8Z~B-45yu0p0uUjEtuqvZTYnrRdZfn9QoMy2Wjctmzbezwc0V6rfajcWcer63-ZWx0oRQ9tsRSky4AoNfvt7PCMtsQca~22gsdkfboUEYwNkrEA-qYjwiuHcqhofwtP2FNELzu5gt9v-lg59fA__"
        ></img>

        <div className='t-list flex coloum'>
 {[1,1,1,1,1,1,1,1,1,1].map(elelment=><div className="challenge-card" style={{height:"182px", border:"1px solid #0d6efd", flexDirection:"row"}}>
<div className='sessionleft flex coloum'>
   { [1,2,3].map(elelment=>
   <div className='flex'  style={{gap:"5px",width:"85%", justifyContent:"start"}}>
    <img style={{width:"28px",height:"28px", }} src={cup} alt="" />
<div>
   <p className='ttext'>
First Price
   </p>
   <p  className='ttext'>
50
   </p>
</div>
    </div>)}

</div>
<div className='sessionright flex coloum' >
<p style={{textAlign:"left" ,width:"86%", color: "#d60000",
fontSize:'14px',
    fontWeight: "500",
    minHeight: "22px",margin:"5px"}}>
    Closing Soon
</p>
<div>
    <p style={{fontSize:"14px",fontWeight:"500", margin:"0"}}>
        Tournament Entries
    </p>
<div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p style={{fontSize:"14px",fontWeight:"400", margin:"0"}}>
      152/180 filled
    </p>
</div>
<button onClick={()=>{
navigate("/tournament-detials")
}} className='modern-button small' style={{width:"90%",alignItems:"center", justifyContent:"center", fontSize:"14px",fontWeight:"400"}}>
Enter for 5
</button>
</div>
 </div>)}
        </div>
       </div>
    )
}

export default Tournament
