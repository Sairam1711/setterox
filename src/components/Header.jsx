import React, { useState } from 'react'
import '../App.css';
import { header_title, headericons } from '../utils/constant'
import { headermenu } from '../utils/constant';
import logo from '../assets/images/Group.png'
import searchIcon from '../assets/images/path996@2x.png'
import AccountIcon from '../assets/images/Vector.png'
import ContactIcon from '../assets/images/Vector@2x.png'
import CartIcon from '../assets/images/Group 10.png'
import product from '../assets/images/Mask group (2).png'
import star from '../assets/images/Group 36.png'
import shape1 from '../assets/images/shape (1).png'
import shape2 from '../assets/images/shape (2).png'
import FirstDrop from './dropDown/FirstDrop'
function Header() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const productImages = [product, "https://s3-alpha-sig.figma.com/img/dbdd/e0ec/438d3da86655d455be6133e442ff6036?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnHnupYO-fnaOxPGAEFjYH8Q1rFuq7PS8mafMD8a8Apstws4RjJVovvPsJiuqYObHUvv2B63lJio-6YVmxyA29r2ggMBsY~wyqvGFlx77mFGp8gN-7m9er-9G9~4ekHAylkmQWTfLc-yeR5HO9cE7QrqkaHmnMhpVf0t82KeDVOwe4oNjgIo3lWkPp26TyTlQkMgRVLXjGUx5u8qJcHmAQgY~WXTkeScKLMZVKRXQXlCg4KyjxfIlsEmihjSLprvpPzGeYJR14YX~6nlCYea19lPu~EQxIvz~V~4GoJfPW246ZHShUaaHbflTqKET08oPn2nfa3acrDjcRMuKcj1GQ__"]; // add all product images here

    // Function to go to the next image
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous image
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        );
    };
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='header-banner'>
            <header className='header'>
                <marquee scrollamount="10"  >
                    <div className='sliding-text' >
                        {
                            header_title.map((element, index) => {
                                return (<span  key={index}>{element}</span>)
                            })
                        }
                    </div >
                </marquee>
                <div className='menuHeader'>
                    <img className='logo' src={logo} />

                    <div className='menu'>

                        {
                            headermenu.map((element, index) => {
                                return <p onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} key={index}>{element}</p>
                            })
                        }
                    </div>


                    <div className='menuIcons'>
                    <img className='icon' src={ContactIcon} />
                        <img className="icon" src={searchIcon} />
                       
                        <img className='icon' src={AccountIcon} />
                        <img className='icon' src={CartIcon} />
                    </div>
                </div>
            </header>
            <div className='banner'>
                <div className="product-info">
                    <h1>Workhorse 3D Printer</h1>
                    <h3>Bambu Lab P1S</h3>
                    <div className="buttons">
                        <div className='buttonDiv'><button className="buy-now">Buy Now</button>
                            <button className="contact-us">Contact Us</button></div>
                        <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
                            <p className="description">Lorem Ipsum Dolor Sit Amet</p>
                            <div className="rating">
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                                <img src={star}></img>
                            </div>
                        </div>

                    </div>

                </div>
                <img className='productimg' src={productImages[currentImageIndex]} alt="" />

                <div className='videoDiv'>
                    <img className='videoDivimg' src="https://s3-alpha-sig.figma.com/img/dbdd/e0ec/438d3da86655d455be6133e442ff6036?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnHnupYO-fnaOxPGAEFjYH8Q1rFuq7PS8mafMD8a8Apstws4RjJVovvPsJiuqYObHUvv2B63lJio-6YVmxyA29r2ggMBsY~wyqvGFlx77mFGp8gN-7m9er-9G9~4ekHAylkmQWTfLc-yeR5HO9cE7QrqkaHmnMhpVf0t82KeDVOwe4oNjgIo3lWkPp26TyTlQkMgRVLXjGUx5u8qJcHmAQgY~WXTkeScKLMZVKRXQXlCg4KyjxfIlsEmihjSLprvpPzGeYJR14YX~6nlCYea19lPu~EQxIvz~V~4GoJfPW246ZHShUaaHbflTqKET08oPn2nfa3acrDjcRMuKcj1GQ__" alt="" />
                    <div className="navigation">
                        <div className='group-button'>
                            <button className="nav-button" onClick={handlePrevImage}><img src={shape2} alt="" /></button>
                            <button className="nav-button" onClick={handleNextImage}><img src={shape1} alt="" /></button>
                        </div>
                        <div className='view-product'>
                            <button> view product </ button>
                        </div>
                    </div>


                </div>
                <div className='drawer' onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} style={{ opacity: isHovered ? 1 : 0 }}>
                  <FirstDrop></FirstDrop>
                </div>
            </div>

        </div>
    )
}

export default Header
