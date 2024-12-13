import React, { useContext, useEffect, useRef, useState } from "react";
import "./login.css";
import menu from "../../assest/icon-outline-Expand.png";
import ".././element.css";
import buttonIcon from "../../assest/icon-outline-align Bottom.png";
import questionIcon from "../../assest/icon-outline-Question.png";
import cross_icon from "../../assest/icon-outline-Cross.png";
import Menu from "../Menu";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useAxios from "../../api/useAxios";
import { apiRoutes } from "../../Utils/constant";
import { ProfileContext } from "../ProfileProvider";

function Template({
  MiniScreen,
  MiniButtons,
  notify,
  setnotify,
  rules,
  setrules,
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { profile, loading } = useContext(ProfileContext);
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstrender, setfirstrender] = useState(false);
  const [data, setdata] = useState();
  const axiosData = useAxios();

  const homeRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const List = ({ label = "Name", value = "KAIFUL HAQUE" }) => {
    return (
      <div className="kyc-content">
        <div className="flex">
          <p className="kyc-left"> {label} </p>{" "}
          <span className="kyc-right">{value}</span>
        </div>
        <hr></hr>
      </div>
    );
  };
  useEffect(() => {
    setfirstrender(false);
  }, []);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setfirstrender(true);
  };
  return (

    <div className="loginContainer" ref={homeRef}>
      <div className="leftside">
        <div
          className="notification"
          style={notify ? { display: "block" } : {}}
        >
          <div
            className="kyc-detials flex coloum"
            style={rules ? { transform: "translate(0,186px)" } : {}}
          >
            <div className="kycheader">
              <p className="kycheader">{rules ? "Rules" : "KYC Details"}</p>
              <img
                src={cross_icon}
                onClick={() => {
                  setnotify(false);
                }}
              ></img>
            </div>
            {rules ? (
              <>
                <ul className="flex coloum ulist t-container">
                  <li>
                    <strong>Players:</strong>
                    <span> 2 players</span>
                  </li>
                  <li>
                    <strong>Tokens:</strong>
                    <span>
                      {" "}
                      Each player has 2 tokens, but only 1 token needs to reach
                      the finish 🎲
                    </span>
                  </li>
                  <li>
                    <strong>Objective:</strong>
                    <span>
                      {" "}
                      Be the first to move one token to the final home position.
                    </span>
                  </li>
                  <li>
                    <strong>Game Duration:</strong>
                    <span> 10-minute timer ⏰</span>
                  </li>
                  <li>
                    <strong>Movement:</strong>
                    <span>
                      {" "}
                      Roll the die, and rolling a 6 grants an extra turn.
                    </span>
                  </li>
                  <li>
                    <strong>Killing:</strong>
                    <span>
                      {" "}
                      Land on an opponent's token to send it back and score
                      points 💥.
                    </span>
                  </li>
                  <li>
                    <strong>Safe Zones:</strong>{" "}
                    <span>
                      Certain spaces (⭐) act as safe zones, where tokens cannot
                      be attacked.
                    </span>
                  </li>
                  <li>
                    <strong>Finish Position:</strong>
                    <span>
                      {" "}
                      Move one token into the finish by an exact die roll.
                    </span>
                  </li>
                  <li>
                    <strong>Victory:</strong>
                    <span>
                      {" "}
                      First to finish one token or have the higher score wins
                      🏆.
                    </span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <List label="Name" value={profile.Name}></List>
                <List label="Email"></List>
                <List></List>
                <List></List>
              </>
            )}
          </div>
        </div>
        {firstrender === true ? (
          <>
            <div
              className={`drawer  ${
                isExpanded ? "expand" : !firstrender ? "" : "collapse"
              }`}
            >
              <Menu
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                toggleExpand={toggleExpand}
              ></Menu>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="loginbutton">
          <div className="styled-element-flex">
          { !loading && <img
              onClick={toggleExpand}
              src={menu}
              className="menuimage c-p"
            ></img>}
            <p className="logintext">LOGO HERE</p>
          </div>
          {/* <label class="switch">
    <input type="checkbox" id="theme-toggle"></input>
    <span class="slider"></span>
  </label> */}
          {MiniButtons ? (
            <MiniButtons></MiniButtons>
          ) : (
            <div className="tflex">
              <div></div>
              <button className="modern-button small primary">
                {" "}
                <img className="icon" src={buttonIcon} alt="" /> Get App{" "}
              </button>
              <button className="modern-button small primary">
                {" "}
                <img className="icon" src={questionIcon} alt="" /> Guide{" "}
              </button>
            </div>
          )}
        </div>

        <div className="liftbottom">
          <MiniScreen ref={homeRef}></MiniScreen>
        </div>
      </div>
      {!isMobile && (
        <div className="rightside">
          <div className="styled-element-r">
            <img
              className="imageRight"
              src="https://s3-alpha-sig.figma.com/img/894d/8a74/8fbe4bb05ab7ebf5bb8aea1de9fd3bc6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pyYlhgobwHZiUpH7L1yT88Btb3gviK-qJTGpPWGCXrcvOxsIR8~Kevn~S4gHjO3iVOtcKQyW7ZivpGlM47uLFDw5WZ0STctyUxXbh9sLt0uZT4RER-2AxEAMuLzlERvTmGSMaZluomD5Ri5VI7Crwq4n8Ka3v2iNrzp9NfOWaKYl921JkZX5R5QCmFvqypiKDuOxT4xQkSKBKFtTyGAjP8Xo0v9KUFOKXhkBkUd3NHBqOa9cCPtoW6v48sFhsbLPn2oc-HMTytYTd~oCNy0DEe~x8IdEZzNYXT5xsdSaw63vi0s9sYZVcEms-eOWOmteTLh7VEg20KFPy~BZ~B6q5A__"
              alt=""
            />
          </div>
          <div className="styled-element-r2 ">
            <div>
              <h1 className="logohere">Logo Here</h1>
              <h3 className="tagline">Tagline here</h3>
            </div>

            <p className="endp top-234">
              For best experience, open{" "}
              <a className="textDecorate">LudoPlayers.com</a> on chrome mobile
            </p>
          </div>
        </div>
      )}
    
    </div>
  );
}

export default Template;
