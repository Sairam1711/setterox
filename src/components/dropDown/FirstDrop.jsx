import React from 'react'
import shape1 from '../../assets/images/shape (1).png'
import '../../dropDown.css';
import { productCatagery } from '../../utils/constant';

function FirstDrop({ productCatagery, borderRadius ,height,width }) {
    return (
        <div className='Dcard' style={{ display: "flex", flexDirection: "row", gap: "50px", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "50px", justifyContent: "center" }}>
                {productCatagery.map((element, index) => (
                    <div key={index} style={{
                        display: "flex", flexDirection: "column", gap: "20px",alignItems:"center" ,justifyContent:width?"center":"flex-start"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }} >
                            <h3>{element?.tiTle}</h3>
                            {element?.image && <img className="DropImage" style={{height:height?"270px":"",width:width?"270px":"", borderRadius: borderRadius ? borderRadius : "20px" }}

                                src={element?.image}></img>}
                        </div>
                        <div className="dlist" style={{ display: 'flex', flexDirection: "column", textAlign: "left", gap: "10px",alignItems:"center", justifyContent:"center", }}>
                            {element?.list?.map(element => (

                                <div key={element} className="drecord" style={{ display: 'flex', flexDirection: "row", }}><span style={{width:width?"200px":""}} >
                                    {element}
                                </span><img src={shape1} alt="" /></div>))}

                        </div>
                    </div>))}
            </div>


        </div>
    )
}

export default FirstDrop
