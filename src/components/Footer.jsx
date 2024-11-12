import React from 'react';
import '../Footer.css';
import arrow  from '../assets/images/shape.png'
import logwhite  from '../assets/images/Group (1).png'
import facebook  from '../assets/images/Vector (4).png'
import insta  from '../assets/images/Vector (6).png'
import twtter  from '../assets/images/Vector (5).png'
import linkedin  from '../assets/images/Vector (7).png'
import youtube  from '../assets/images/Vector (8).png'
import tictock  from '../assets/images/Group 63.png'

const Footer = () => (
  <div className="footer-container">
    {/* Newsletter Signup Section */}
    <div className="newsletter-section">
      <div style={{width:"30%" ,display:"flex" ,flexDirection:"column",justifyContent:"center", gap:"50px"}}>
      <div className='newsletter-sectionin'>
      <h1 style={{margin:0}}>Newsletter</h1>
      <h2>Signup</h2>
      </div>
      <p className="newsletter-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      </div>
      <div className="email-input-container">
        <input type="email" placeholder="Your Email Address" />
        <button className="submit-btn"  > <img src={arrow}></img></button>
      </div>
    </div>

    {/* Footer Links Section */}
    <div className="footer-links-section">
      <div className="footer-left">
        <div style={{display:'flex',flexDirection:"row"}}>
        <img src={logwhite}></img>
        <h3 style={{padding:0,margin:0,marginTop:"50px"}}>Setterox</h3>
        </div>
       
        <p className="footer-description" style={{color:"white"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <ul style={{display:'flex',flexDirection:"column",gap:"10px"}} >
          <li>Products <span>{'>'}</span></li>
          <li>Softwares <span>{'>'}</span></li>
          <li>Application <span>{'>'}</span></li>
          <li>Offers <span>{'>'}</span></li>
        </ul>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>
      <div className="footer-links">
        <div>
          <h4>3D Printers</h4>
          <p>Bambu Lab</p>
          <p>Phrozen</p>
          <p>Creality</p>
        </div>
        <div>
          <h4>3D Filaments</h4>
          <p>Polymaker</p>
          <p>Bambu Lab</p>
          <p>eSUN</p>
          <p>JAMG HE</p>
        </div>
        <div>
          <h4>3D Printing Resins</h4>
          <p>Phrozen</p>
          <p>eSUN</p>
          <p>JAMG HE</p>
        </div>
        <div>
          <h4>3D Scanner</h4>
          <p>3DMAKERPRO</p>
        </div>
        <div>
          <h4>Accessories & Spare Parts</h4>
          <p>Bambu Lab</p>
          <p>Phrozen</p>
          <p>Creality</p>
        </div>
      </div>
      <div className="footer-applications" >
        <div style={{width:"100%"}}>
        <h4>Application</h4>
        <div style={{height:'160px' ,width:"90%", display:'flex',flexDirection:"column",flexWrap:"wrap"}}>
     
        <p>3D Printing Services</p>
        <p>Aerospace & Defense</p>
        <p>Automotive</p>
        <p>Architecture</p>
        <p>Education</p>
        <p>Healthcare</p>
        <p>Jewellery</p>
        <p>Research</p>
        <p>Product design</p>
        <p>Professional Individuals</p>
        <p>Manufacturing</p>
        <p>Engineering</p>
        <p>Rapid prototyping</p>
        <p>Consumer Electronics</p>
       
        </div>
        </div>
     
        <div style={{width:"30%"}}> 
          <h4>softwares</h4>
          <p>Polymaker</p>
          <p>Bambu Lab</p>
          <p>eSUN</p>
          <p>JAMG HE</p>
        </div>
      </div>
      </div>
     
    </div>
    <div className='thin-linec' >   <hr class="thin-line"></hr></div>
  
    {/* Footer Bottom Section */}
    <div className="footer-bottom">
      <div style={{display:'flex',flexDirection:"row" ,width:"100%" ,justifyContent:"space-around", gap:"200px"}}>
      <div className="social-icons">
        {/* Add icons here (replace with actual icons in production) */}
       <img className='ficon' src={facebook}></img>
       <img  className='ficon' src={twtter}></img>
       <img  className='ficon' src={insta}></img>
       <img  className='ficon' src={linkedin}></img>
       <img  className='ficon' src={youtube}></img>
       <img  className='ficon' src={tictock}></img>
        <img className='money-card' src='https://s3-alpha-sig.figma.com/img/46c7/66ad/a4780fedd9cb04cde2e045a08122e154?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9BrRbKo0-V3AUZRGQR8NP-5dtoJbEX6oX6jzVcwRQ7ekgeJ1LerzGbtdeNGWleBoV-JSFSN2O2R3bHAqECpTNvmrj0qwjlS7K7~RjFFF1eaM5Qn5khQ6AySk1634zg6Zh1OZUJSoltU-39~pFDLwgo9JZZK0vSsXqCyzZHwwIoiquy2uGX7IvfEwVF6slqHRiO61BslnKYcuybvWjaI5jbtTvg2iu8vRLPDsWoz-FOEGioINC1c3xu1D3pKpNkdOaU7m9zzwdu7AXZ0FL7LG7NUHiZEaW8NlPXZVuxFSOVu0cNDBQLfRV1cr7aV3HURViVEzK9td1baFDOJClUElQ__'></img>
      </div>
    
      <div className="footer-buttons">
        <button>Login/Register</button>
        <button>Customer Service</button>
        <button>Change Country</button>
        <select className="language-select">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>

      </div>
    
      <div  style={{display:'flex',flexDirection:"row" ,width:"100%" ,justifyContent:"space-around",gap:"180px"}}>
      <div className="legal-links">
        <p>Privacy policy</p>
        <p>Cookie policy</p>
        <p>Cookie settings</p>
        <p>Terms and conditions</p>
      </div>
      <p className="copyright">
        © All rights reserved by Setterox. Made by SetoTechnologies
      </p>
      </div>
     
    </div>
  </div>
);

export default Footer;
