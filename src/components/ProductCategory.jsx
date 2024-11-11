import React from 'react'
import '../product.css';
import { productData, productData2 } from '../utils/constant';
import arrow  from '../assets/images/shape.png'
import CartIcon from '../assets/images/Vector (12).png'
function ProductCategory() {
    return (
        <>
        <div className="grid-container">
       
        <div className="card-container">
    
     <img src={productData[0].image} alt={productData[0].title} className="card-image" />
   
      <div className="card-content">
        <h3 className="card-title">{productData[0].title}</h3>
        <p className="card-description">{productData[0].description}</p>

     
      </div>
      <button className="cart-button"><img src={CartIcon} alt="" /></button>
    
      <button className="card-button"><img src={arrow}></img></button>
      
    </div>
    <div className="card-container">
     <img src={productData[1].image} alt={productData[1].title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{productData[1].title}</h3>
        <p className="card-description">{productData[1].description}</p>
    
     
      </div>
      <button className="cart-button"><img src={CartIcon} alt="" /></button>
      <button className="card-button"><img src={arrow}></img></button>
      
    </div>
        </div>
        <div className="grid-container">
       
       <div className="card-container">
    <img src={productData2[0].image} alt={productData2[0].title} className="card-image" />
     <div className="card-content">
       <h3 className="card-title">{productData2[0].title}</h3>
       <p className="card-description">{productData2[0].description}</p>
     
    
     </div>
     <button className="cart-button"><img src={CartIcon} alt="" /></button>
     <button className="card-button"><img src={arrow}></img></button>
     
   </div>
   <div className="card-container">
    <img src={productData2[1].image} alt={productData2[1].title} className="card-image" />
     <div className="card-content">
       <h3 className="card-title">{productData2[1].title}</h3>
       <p className="card-description">{productData2[1].description}</p>
      
    
     </div>
     <button className="cart-button"><img src={CartIcon} alt="" /></button>
     <button className="card-button"><img src={arrow}></img></button>
     
   </div>
   <div className="card-container">
    <img src={productData2[2].image} alt={productData2[2].title} className="card-image" />
     <div className="card-content">
       <h3 className="card-title">{productData2[2].title}</h3>
       <p className="card-description">{productData2[2].description}</p>
      
    
     </div>
     <button className="cart-button"><img src={CartIcon} alt="" /></button>
     <button className="card-button"><img src={arrow}></img></button>
     
   </div>
       </div>
        </>
    
    )
}

export default ProductCategory
