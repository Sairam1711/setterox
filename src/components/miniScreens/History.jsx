import React from 'react'
import icon from '../../assest/Ellipse 2.png'
import { useMediaQuery } from 'react-responsive';
function History() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div className='history'>
            <div className="moneychip m-20">
            {["All", "Wallet", "Diamond", "Games",].map((element,index) => (
              <div
              className={`modern-button primary font-res hbts ${index === 0 ? 'selected' : 'default'}`}
             
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
    <div className='flex coloum w-50'>
        <img className='img30-30'  src={icon} alt="" />
        <span className='hspan'>13 Sep</span>
        <span className='hspan'>1:08 am</span>
    </div>
    <div class="vertical-line"></div>

    <div className='history-text' >
        <div className='flex fullwidth sb' > <span className='htext'>Lost Against Malik_Sahab </span> <span className='htext color-4' >(-) 30</span></div>
        <div className='flex fullwidth sb'  > <span className='htext2'>Room Code: 0974674839</span>   <span className='htext2'>Closing Balance : 250.99</span> </div>
       </div>
   
  </div>
  <hr className='line styled-line'  /></>)}
        </div>
    )
}

export default History
