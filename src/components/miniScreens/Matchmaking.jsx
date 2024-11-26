import React from "react";
import vs from "../../assest/image 21.png";
function Matchmaking() {
  return (
    <div
      className="profile flex coloum"
      style={{ height: "900px", justifyContent: "space-around" }}
    >
      <div className="challenge-card" style={{marginTop:"31px"}}>
        <div className="challenge-header"></div>

        <>
          <div className="challenge-content">
            <div className="player">
              <div className="player-avatar"></div>
              <span>Kaif</span>
            </div>
            <img src={vs}></img>
            <div className="player">
              <div className="player-avatar"></div>
              <span>Kaif</span>
            </div>
          </div>
          <div className="challenge-header">
            <span
              className="amountrs-centered"
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "700",
                margin: "15px",
              }}
            >
              Rs. 50
            </span>
          </div>
        </>
        {/* {showPlayButton && (
      <div className="challenge-action">
        <button className="play-button">Play</button>
      </div>
    )} */}
      </div>
      <div
        className="challenge-card"
        style={{ marginTop:"18px", height: "237px", justifyContent: "center" ,boxShadow: "0px 4px 4px 0px #0000001A"
        }}
      >
        <p className="matchp">Waiting for creating room</p>
      </div>
      <div className="game-result"><p>Game Result</p></div>
      <div
        className="flex coloum"
        style={{ justifyContent: "start", gap: "16.6px" }}
      >
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "387px",
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
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"I Won"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background: "#D60000",
            border:"none",
            borderRadius:"4px"
          }}
        >
          {" "}
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"I Lost"}{" "}
          </span>{" "}
        </div>
        <div
          className="modern-button full primary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "387px",
            height: "50.4px",
            justifyContent: "center",
            gap: "11px",
            padding: "0",
            background: "#6C757E",
                border:"none",
            borderRadius:"4px"
          }}
        >
          {" "}
          <span
            style={{
              color: "white",
              fontfamily: "Inter",
              fontSize: "20px",
              fontweight: 600,
            }}
          >
            {"Cancel"}{" "}
          </span>{" "}
        </div>
      </div>
      <div
        className="challenge-card"
        style={{ height: "214px", gap: "0px", margin: "20px" }}
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Penalty</span>
          </div>
        </div>
        <div
          className="flex refered coloum"
          style={{ justifyContent: "start", alignItems: "center" }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                width: "100%",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                marginTop:"12px",
                marginBottom:"12px"
              }}
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
          <hr
            style={{ width: "90%", border: "1px solid #D9D9D9", margin: "0" }}
          ></hr>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                width: "100%",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                   marginTop:"12px",
                marginBottom:"12px"
              }}
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
          <hr
            style={{ width: "90%", border: "1px solid #D9D9D9", margin: "0" }}
          ></hr>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                width: "100%",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                   marginTop:"12px",
                marginBottom:"12px"
              }}
            >
              Lorem ipsum doler sit amet Lorem ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matchmaking;
