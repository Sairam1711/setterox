import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import cup from "../../assest/cup-star-svgrepo-com 2.png";
import profile from "../../assest/IMG-20241118-WA0009 (1).png";
import { useLocation } from "react-router-dom";
function TournamentDetials() {
  const [click, setclick] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [progress, setProgress] = useState(50); // Initial progress: 50%
  const { pathname } = useLocation();
  const topRef = useRef(null); // Create a ref for the top of the page

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" }); // Scrolls smoothly to the ref
  };

  useEffect(() => {
    scrollToTop()
  }, [pathname]);
const Content=()=>{
    return(
        <div className="flex coloum ttext " style={{ color: "black" }}>
        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Total Moves:{" "}
            <span style={{ fontWeight: "200" }}>
              Each player has 36 moves to complete the game.
            </span>{" "}
          </p>
        </div>

        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Time Limit per Move:{" "}
            <span style={{ fontWeight: "200", margin: "10px" }}>
              layers have 15 seconds to make each move. If a player misses a
              move 6 times, they will be exited from the game, and their
              current score will be final.
            </span>{" "}
          </p>
        </div>

        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Scoring:{" "}
            <span style={{ fontWeight: "200" }}>
              <ul>
                {" "}
                <li>
                  {" "}
                  Moving one box earns 1 point. Get 10 Extra score when your
                </li>
                <li>
                  token reach at final position. Players can tap on tokens
                  to
                </li>
                <li> see the points each token carries.</li>
              </ul>
            </span>{" "}
          </p>
        </div>
        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Extra Moves:{" "}
            <span style={{ fontWeight: "200" }}>
              <ul>
                <li>
                  {" "}
                  Players get extra moves when, They kill a token placed in
                  a
                </li>
                <li>
                  {" "}
                  fixed position on the board. A token reaches the Home
                </li>
                <li>
                  {" "}
                  position. Token Cutting: Each game has 36 open moves, with
                </li>
                <li> 8-10 tokens available to cut for extra points.</li>
              </ul>
            </span>{" "}
          </p>
        </div>
        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Board Setup:{" "}
            <span style={{ fontWeight: "200" }}>
              All players have the same board layout, with tokens placed in
              the same starting positions.
            </span>{" "}
          </p>
        </div>

        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Dice Rolls:{" "}
            <span style={{ fontWeight: "200" }}>
              <ul>
                <li>
                  {" "}
                  Every player receives an equal number of each dice value
                  (1, 2, 3, 4, 5, and 6).{" "}
                </li>
                <li>
                  {" "}
                  The dice values are arranged in random order, so players
                  get a different sequence of rolls.
                </li>
              </ul>
            </span>{" "}
          </p>
        </div>
        <div style={{ width: "90%" }} className="flex">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Objective:
            <span style={{ fontWeight: "200" }}>
              Score the highest points by cutting tokens and reaching Home
              quickly to rank at the top of the leaderboard.
            </span>{" "}
          </p>
        </div>
      </div>
    )
}
  const RankTable = () => {
    return (
      <table>
        <tr style={{ background: "#bcd7ff", height: "48px" }}>
          <th style={{ width: "12%" }}> </th>
          <th style={{ width: "18%" }}>Rank</th>
          <th style={{ width: "45%" }}>Name</th>
          <th style={{ width: "20%", textAlign: "right" }}>Score</th>
        </tr>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((element) => (
          <>
            <tr className="tr1">
              <td className="flex" style={{ alignItems: "center" }}>
                {" "}
                <img
                  src={profile}
                  style={{ width: "45px", height: "45px" }}
                ></img>
              </td>
              <td>1</td>
              <td>Harsh_0009</td>
              <td style={{ textAlign: "right" }}>429</td>
            </tr>
          </>
        ))}
      </table>
    );
  };
  const List = ({ lable, value }) => {
    return (
      <>
        <div className="summary-detils">
          <span
            style={{
              width: isMobile ? "" : "300px",
              textAlign: "left",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {lable}
          </span>{" "}
          <span
            style={{
              fontSize: "16px",
            }}
          >
            ₹ {value}
          </span>
        </div>
        <hr style={{ width: "90%", height: "1px" }}></hr>
      </>
    );
  };
  const List2 = ({ lable, value,Content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded((prev) => !prev); // Toggle the expanded state
    };
    return (
      <>
        <div
          className="summary-detils"
          style={{ alignItems: "center", width: "95%", userSelect:"none" }}
        >
          <span
            className="sheader"
            style={{
              width: isMobile ? "" : "420px",
              textAlign: "left",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={toggleExpand}
          >
            {lable}
          </span>{" "}
          <span
            className={`rotating-button flex ${
              isExpanded ? "rotate" : "rotate2"
            }`}
            onClick={toggleExpand}
            style={{
              cursor: "pointer",
              width: "20px",
              justifyContent: "center",
              fontWeight: 600,
              userSelect:"none"
            }}
          >
            {value}
          </span>
        </div>
        <div
          className="expandable-div"
          style={{
            height: isExpanded ? "auto" : "0",
            display: isExpanded ? "" : "none", // Expand or collapse width
            transition: "height 0.3s ease-in-out", // Smooth transition effect
          }}
        >
         <Content></Content>
        </div>
      </>
    );
  };
 
  return (
    <div className="td-div" >
      <div
        className="flex postion-ab "
       
      >
        <button
          className="modern-button small footer-button"
         
        >
          Enter for 5
        </button>
      </div>
      <div className="flex coloum fullwidth" >
        <div className="flex sa t-header fullwidth" ref={topRef} >
          <p
            className="th2"
            onClick={() => {
              setclick("Details");
            }}
            style={{ fontWeight: click === "Details" ? "600" : "400" }}
          >
            Details
          </p>
          <p
            onClick={() => {
              setclick("LeaderBoard");
            }}
            style={{ fontWeight: click === "LeaderBoard" ? "600" : "400" }}
            className="th2"
          >
            LeaderBoard
          </p>
        </div>
        <div
          className="tunderline flex"
          style={{ justifyContent: click === "LeaderBoard" ? "" : "" }}
        >
          <hr
            className={`tline ${
              click === "Details"
                ? "right"
                : click === "LeaderBoard"
                ? "left"
                : ""
            }`}
          />
        </div>
        {click === "LeaderBoard" ? (
          <>
            <RankTable></RankTable>
          </>
        ) : (
          <div
            className="flex coloum fullwidth"
            style={{ height: "auto" }}
          >
            <div>
              <img></img>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                You have 5 out of 5 entries left
              </p>
            </div>
            <div
              className="challenge-card flex blue-card"
              
            >
              <img className="cupimg" src={cup}></img>
              <div style={{ width: "80%" }}>
                <p
                  className="ttext first-text"
                
                >
                  FIRST PRIZE
                </p>
                <span
                  className="ttext amount-text"
                 
                >
                  500
                </span>
                <p
                  className="ttext long-text"
                
                >
                  Note: Final prize will be announced at the end of the
                  tournament
                </p>
              </div>
            </div>
            <div
              className="card flex coloum "
              style={{
                height: "280px",
                justifyContent: "space-around",
                width: "95%",
              }}
            >
              <div style={{ width: "90%" }}>
                <p
                  className="ttext prize-text "
                 
                >
                  PRIZE POOL
                </p>
                <p
                  className="ttext am-text"
                  
                >
                  50
                </p>
              </div>
              <div style={{ width: "90%" }}>
                <p className="custom-text" >
                  Tournament Entries
                </p>
                <div className="progress-container" style={{ width: "90%" }}>
                  <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p  className='custom-text four'>
                  152/180 filled
                </p>
              </div>
              <div
                className="flex custom-container3"
                
              >
                <img
              className="custom-size"
                  src={cup}
                  alt=""
                />
                <div>
                  <p
                    className="ttext text-style-td"
                 
                  >
                    FEE PER ENTRY
                  </p>
                  <p
                    className="ttext text-style-td f6"
                  
                  >
                    50
                  </p>
                </div>
              </div>
              <div
                className="flex"
                style={{ gap: "5px", width: "90%", justifyContent: "start" }}
              >
                <img
                   className="custom-size"
                  src={cup}
                  alt=""
                />
                <div>
                  <p
                    className="ttext first-t"
                    
                  >
                    First Price
                  </p>
                  <p
                    className="ttext text-style-td f6"
            
                  >
                    50
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card flex coloum fi"
            
            >
              <p className="theaders" style={{ width: "90%" }}>
                Prize Distribution
              </p>
              <List lable={"Rank:1"} value={"100"}></List>
              <List lable={"Rank:2"} value={"100"}></List>
              <List lable={"Rank:3"} value={"100"}></List>
              <List lable={"Rank:4-18"} value={"100"}></List>
              <List lable={"Rank:19-94"} value={"100"}></List>
            </div>
            <div
              className="card flex coloum se "
           
            >
              <div
                className="flex"
                style={{ width: "95%", justifyContent: "space-between" }}
              >
                {" "}
                <p className="theaders">Game Rules & FAQ</p>{" "}
                <button
                  className="modern-button small  primary lanbt"
             
                >
                  हिंदी
                </button>
              </div>
              <List2 lable={"General Game Format Rules"} value={"+"} Content={Content}></List2>
              <List2
                lable={"Game Tie: Prize Distribution [Important]"}
                value={"+"}
                Content={Content}
              ></List2>
              <List2 lable={"Frequently asked questions"} value={"+"}
              Content={Content}></List2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TournamentDetials;
