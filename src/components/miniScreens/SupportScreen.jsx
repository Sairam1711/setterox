import React from 'react'
import whatsapp_icon from "../../assest/Vector (18).png";
import instgaram_icon from "../../assest/insta-svgrepo-com 1 1.png";
import chat_icon from "../../assest/chat-round-line-svgrepo-com.png";
import { useMediaQuery } from 'react-responsive';

function SupportScreen() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
     <div>
        <img className='support-img' style={{width:"100%"}} src='https://s3-alpha-sig.figma.com/img/1959/16ab/fe8c7907428e15546b39600787e08b07?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTzBe9XeX2dCcbLw~pImAQvmynxIUGMXSIp2MznLjzovUJhIxWRXil5ZJ-ySpodR8yBOTqear21cBw4o0Y2b63hSe-RQwnML7UgmLUW8XF-3~ymZBXt5B00AMqdr2JVvgIixGfQTCrsE0vNFYY2srdRRNpio~-gkOVb4NVZH~8o86aTcE~-SLxS43SrkaFjqdcpu5Gwsn1nULEaL9t6n5pusyuzH5MTZzsarzooE4i3ILNR9Lc0IdyPAzkSLBtFE2MjuSjvAPBziUBBqKeH8~5CL7mYS1XPD9xc6GMavETh97xPVjXVMuAZYpVeJMkUX4wOlENBVef2naQHbN-e5lg__'> 
        </img>
        <div className="flex coloum" style={{height:"auto", width:"100%" ,justifyContent:"start", gap:"16.6px" }}>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:isMobile?"85%": "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background:" #0D6EFD",
            border:"none",
            borderRadius:"4px"

          }}
        >
          {" "}
          <img src={chat_icon} alt="" />
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Live Chat"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:isMobile?"85%": "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
              border:"none",
            borderRadius:"4px",
        background: "linear-gradient(90deg, #EB7E37 0%, #C9216D 100%)"

          }}
        >
          {" "}
          <img src={instgaram_icon} alt="" />
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Connect On Instagram"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:isMobile?"85%": "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background: "#198754",
              border:"none",
            borderRadius:"4px"
          }}
        >
          {" "}
          <img src={whatsapp_icon} alt="" />
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Connect on Whatsapp"}{" "}
          </span>{" "}
        </div>
        </div>
     </div>
    )
}

export default SupportScreen
