import React from 'react'
import AD from '../assets/video/1369b65d6492070b8b23101bff14736fd10e5210.mov'
import '../App.css';
function AdBanner() {
    return (
        <>
        <div  className='ADvideo'>
        <video autoPlay loop muted playsInline>
            <source  src='https://res.cloudinary.com/dopyogopf/video/upload/f_auto:video,q_auto/t0kosepfh8f3i9gylqdt'  type='video/mp4'></source>
        </video>
        </div>
        </>
    )
}

export default AdBanner
