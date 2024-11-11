import React, { useRef, useState } from 'react'
import '../App.css';
import CartIcon from '../assets/images/Vector (12).png'
function Topselling() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
    return (
        <div className='topselling'>
<h1 className='topTitle'>Lorem Ipsum</h1>
<p className='topsellContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<div className='sliderwarper'>
<div className='topsellerSlider'   ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} >
    {[1,2,3,4,5,6].map((element,index)=>{
      return(
      
         <div className='sellerCard' key={index}>
            <button className="cart-button"><img src={CartIcon} alt="" /></button>
          <span className='topsller'>
          Top Seller
          </span>
         <button className='orderNow'>Order now</button>
        <img className='sellerCardImg' src='https://s3-alpha-sig.figma.com/img/94b5/7130/1c1eabeda44c5f2f7a2b540737165427?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dguviLTsYuBra0QGKhwsjWtqK6lM9mUSQeiWoXOa1Q4AFDz88W1nrTFGXBnxGhYS4gXacHRwahyQtd~R1BUwNP9MutdfEazZBObhQdSGP0F-7YWgDMaT3oWLRIOy4zJ-xyz7r-jefTGlXOMNzJmxSg43sutZh0iTOiD6soZlgFo6yv6aTbw-GbEWcTykrNk8xjeLAuIi2lwLvevnAA52~uBfyQSOzZk1w-jmUo1elrj9QO10g-EASOessdrcNUquUEzrQ4Lpe6VYWyqn9NLLQZ7OV3V0MbWbaTST0lpvNf8-bRKzLZ46nxxa0T9j7XWiNdM8WpMR5ry-Lgm7CWhRCw__'>
        </img>
        <div className='card-bottom' >
            <span className='span1'>Bambu Lab X1 Carbon 
            Combo</span>
            <sapn className='span2'>
            $999.00
            </sapn>
      
        </div>
      
        </div>
       
        )
    })}
    
   

</div></div>
        </div>
    )
}

export default Topselling
