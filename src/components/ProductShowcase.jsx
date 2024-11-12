import React from 'react';
import '../Showcase.css';
import secureIcon from '../assets/images/Vector (3).png'
// Replace these paths with the actual paths to your icons
// const secureIcon = '../assets/images/Vector (3).png';
import deliveryIcon from '../assets/images/Vector (1).png';
import helpCenterIcon from '../assets/images/Vector (2).png';

const Showcase = () => {
  return (<>
    <div className="showcase-container">
      <div className="showcase-header">
        <h2 className="showcase-title">Bambu Lab X1-Carbon <br /> Combo 3D Printer</h2>
        <p className="showcase-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
     
    </div>
     <div className="showcase-footer">
     <div className="showcase-footer-item">
       <img src={secureIcon} alt="Secure Payment" className="footer-icon" />
       <h3 className="footer-title">Secure <span style={{fontFamily:"sans-serif"}} >&</span> Flexible Payment options </h3>
       <p className="footer-description">
         Spread the cost of your purchase with our flexible payment options.
       </p>
     </div>
     <div className="showcase-footer-item">
       <img src={deliveryIcon} alt="Free Delivery" className="footer-icon" />
       <h3 className="footer-title">Free <span style={{fontFamily:"sans-serif"}} >&</span> Fast Delivery</h3>
       <p className="footer-description">
         Free delivery for all orders over AED 999.
       </p>
     </div>
     <div className="showcase-footer-item">
       <img src={helpCenterIcon} alt="Customer Help Centre" className="footer-icon" />
       <h3 className="footer-title">Customer Help Centre</h3>
       <p className="footer-description">
         Expect advice and support from our UAE customer service team.
       </p>
     </div>
   </div>
   </>
  );
};

export default Showcase;
