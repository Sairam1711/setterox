import React, { useState } from 'react'
import menuicon from '../assest/chevrons-left.png'
import hand from '../assest/IMG-20241118-WA0009.png'
import profile from '../assest/IMG-20241118-WA0009 (1).png'
import dice from '../assest/dice-6-svgrepo-com.png'
import support from '../assest/support-help-headset-svgrepo-com.png'
import wallet from '../assest/wallet.png'
import profile1 from '../assest/Vector (13).png'
import refrence from '../assest/Vector (14).png'

import arrow from '../assest/Icon (1).png'
import { useNavigate } from 'react-router-dom'
function Menu({isExpanded, setIsExpanded ,toggleExpand}) {
    
const navigate = useNavigate()


   
    return (
        <div className={`menu `}>
            <header className='menu-header'>
          <p className='header-header'>LOGO HERE </p>  
            <img onClick={toggleExpand} src={menuicon}></img>
            </header>
         <div className='sceond-header'>
             <h1 className='hey'>Hey, Kaif... </h1> 
             <img src={hand}></img>
             <img src={profile}></img>
             </div>  
             <div onClick={()=>{
              toggleExpand(false)
              navigate("/lobby")
             }} className='menu-list'>
                <div className='menu-1'>  <img className='iconmenu' src={dice}></img> <p className='menu-content'>Play</p></div>
              <img src={arrow}></img>
             </div>
             <div 
              onClick={()=>{
                toggleExpand(false)
                navigate("/Wallet")
               }}className='menu-list'>
                <div className='menu-1'>  <img  className='iconmenu' src={wallet}></img> <p className='menu-content'>Wallet</p></div>
              <img src={arrow}></img>
             </div>
             <div 
              onClick={()=>{
                toggleExpand(false)
                navigate("/history")
               }}className='menu-list'>
                <div className='menu-1'>  <img className='iconmenu' src={dice}></img> <p className='menu-content'>History</p></div>
              <img src={arrow}></img>
             </div>
             <div
              onClick={()=>{
                toggleExpand(false)
                navigate("/Profile")
               }} className='menu-list'>
                <div className='menu-1'>  <img className='iconmenu' src={profile1}></img> <p className='menu-content'>Profile</p></div>
              <img src={arrow}></img>
             </div>
             <div
              onClick={()=>{
                toggleExpand(false)
                navigate("/referral")
               }} className='menu-list'>
                <div className='menu-1'>  <img className='iconmenu' src={refrence}></img> <p className='menu-content'>Refer & Earn</p></div>
              <img src={arrow}></img>
             </div>
             <div
              onClick={()=>{
                toggleExpand(false)
                navigate("/support")
               }} className='menu-list'>
                <div className='menu-1'>  <img className='iconmenu' src={support}></img> <p className='menu-content'>Support</p></div>
              <img src={arrow}></img>
             </div>
        </div>
    )
}

export default Menu
