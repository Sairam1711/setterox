import React, { useEffect, useState } from 'react'
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
import c1 from '../assets/images/1.png'
import c2 from '../assets/images/2.png'
import c3 from '../assets/images/3.png'
function Header({ isHovered2, setIsHovered2, searchdiv, setsearchdiv }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false );

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


    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    const handleMouseLeaveGeneral = (value, fun = () => { }) => {
        fun(value);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log("object");
        setIsHovered(false);
    };
    const clickme = () => {
        setsearchdiv(true)
        handleMouseLeave2()
    }
    const clickmenot = () => {
        setsearchdiv(false)
    }

    return (
        <div className='header-banner' onMouseEnter={handleMouseLeave}>
            <header className='header'>
                <marquee scrollamount="10"  >
                    <div className='sliding-text' >
                        {
                            header_title.map((element, index) => {
                                return (<span key={index}>{element}</span>)
                            })
                        }
                    </div >
                </marquee>
                <div className='menuHeader'>
                    <img className='logo' src={logo} />

                    <div className='menu'>

                        {
                            headermenu.map((element, index) => {
                                return <div className='manuelement'>
                                    <p className='headermenu' onMouseEnter={handleMouseEnter}
                                        key={index}>{element}</p>

                                    {index !== 4 && <hr class="thin-lineh"  ></hr>}
                                </div>
                            })
                        }
                    </div>


                    <div className='menuIcons'>
                        <img className='icon' src={ContactIcon} />
                        <img className="icon" src={searchIcon} onClick={clickme} />

                        <img className='icon' onClick={clickme} src={AccountIcon} />
                        <img className='icon' src={CartIcon} />
                    </div>
                </div>
            </header>
            <div className='banner' >
                <div className='circle' >
                    {/* <img className='circleImage1' src={c1}></img> */}
                    <div class="image-layer-container" style={{ opacity: isHovered3 ? 0 : 1 }}>
                        <img src={c1} class="layer-img img-small" alt="Small Image" />
                        <img src={c2} class="layer-img img-medium" alt="Medium Image" />
                        <img src={c3} class="layer-img img-large" alt="Large Image" />
                    </div>
                    <div className='rate' onMouseEnter={() => {
                        handleMouseLeaveGeneral(true, setIsHovered3)
                    }} onMouseLeave={() => {
                        handleMouseLeaveGeneral(false, setIsHovered3)
                    }} style={{ opacity: isHovered3 ? 1 : 0 }}>
                        <p>Best Price</p>
                    </div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div className='circle2' >
                    {/* <img className='circleImage1' src={c1}></img> */}
                    <div class="image-layer-container" style={{ opacity: isHovered4 ? 0 : 1 }}>
                        <img src={c1} class="layer-img img-small" id='' alt="Small Image" />
                        <img src={c2} class="layer-img img-medium" alt="Medium Image" />
                        <img src={c3} class="layer-img img-large" alt="Large Image" />
                    </div>
                    <div onMouseEnter={() => {
                        handleMouseLeaveGeneral(true, setIsHovered4)
                    }} onMouseLeave={() => {
                        handleMouseLeaveGeneral(false, setIsHovered4)
                    }} style={{ opacity: isHovered4 ? 1 : 0 }} className='rate'>
                        <p>Best Price</p>
                    </div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div className="product-info">
                    <h1>Workhorse 3D Printer </h1>
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
                        <div className='group-button' style={{ visibility: "hidden" }}>
                            <button className="nav-button" onClick={handlePrevImage}><img src={shape2} alt="" /></button>
                            <button className="nav-button" onClick={handleNextImage}><img src={shape1} alt="" /></button>
                        </div>
                        <div className='view-product'>
                            <button> view product </ button>
                        </div>
                    </div>


                </div>
                <div className='drawer' onMouseLeave={handleMouseLeave} style={{ opacity: isHovered ? 1 : 0 }}>
                    <FirstDrop></FirstDrop>
                </div>
            </div>
            <div className='searchdiv' onClick={clickmenot} style={{ visibility: searchdiv ? "visible" : "hidden", zIndex: searchdiv ? 8 : 0 }}>

            </div>
            <div className='searchdiv2' style={{ visibility: searchdiv ? "visible" : "hidden" }}>
                <div className='searchinput'>
                    <img className='iconinput' src={searchIcon} style={{ opacity: isHovered2 ? 0 : 1 }} />
                    <input type="text" onMouseEnter={handleMouseEnter2} className='inputelement' placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header
