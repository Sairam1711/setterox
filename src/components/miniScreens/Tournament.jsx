import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import cup from "../../assest/cup-star-svgrepo-com 2.png";
import { useNavigate } from "react-router-dom";
function Tournament() {
  const [click, setclick] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [progress, setProgress] = useState(50); // Initial progress: 50%
  const navigate = useNavigate();
  const handleIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increase by 10%
  };

  const handleDecrease = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0)); // Decrease by 10%
  };

  const Tcard=()=>{
    return(
        <div
        className="challenge-card"
        style={{
          height: "182px",
          border: "1px solid #0d6efd",
          flexDirection: "row",
        }}
      >
        <div className="sessionleft flex coloum">
         
          <div
            className="flex"
            style={{ gap: "5px", width: "85%", justifyContent: "start" }}
          >
            <img
              style={{
                width: "28px",
                height: "28px",
                background: "white",
                borderRadius: "20px",
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB1VRLTgJBEH01ihBdiDfApb8IN9AbjBtkp5xAvYHeQE+AS8UNN5AboIJuGU8AJmIISLfVNQNBQzdMlIUvaZqp7n71L+C/g2a6VahloJJZQJX4qw1NF1joVXGTC36v4LDRhEbGchqgvL3ueu65DlF4Po7IA3h6H72VNSZko9QBmxawPINCfc9FYfcg/+KPQtJbyaGy3v527tfSSCZqbECa7SyivFlBLA9InfCveXwm5PnGEa8Wr6b8r+TaIF2UO6SObTR2BUo/yj60jHAeKpSQXYqs+/kQ3W7FV+DRqux+My27hGKEMFzGCzEGb/EVaB0Spt6zkcKzKLFcpupCZPknP2LZtdE4kmwee44ks2fJztQku/vAlKCie5gyNck2JIbYeKWpJCWsqYi7rWvE9mCIuTaawS0TeH1ebOkwB/AORDaFfDqGFeSC6QkH3CEaJZoCDtMV+sthIlPdNG42glGOzAj5WQQR3CHStAdpLp3lri1hqdOSNRicRudhCSc+fBuFW4FHk+ubvKrsSmciS7JWCrigMfnhog5kv9s5lSlLum2jsOfATMulxOQZIyN7Ntg9SC2OWz9u4QNiwDGLOIGEqtR8eXuNBeH8IbziTzCpB/L1c1lzxSzNN4Yv1/+vjoD4VEwAAAAASUVORK5CYII="
              alt=""
            />
            <div>
              <p className="ttext"  style={{fontSize:"18px"}}>First Price</p>
              <p className="ttext" style={{fontSize:"20px"}}>50</p>
            </div>
          </div>
          <div
            className="flex"
            style={{ gap: "5px", width: "85%", justifyContent: "start" }}
          >
            <img
              style={{
                width: "28px",
                height: "28px",
                background: "white",
                borderRadius: "20px",
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEDSURBVHgBzZTNDcIwDIVfWgaBI4IDI7ABnKqKE0wCnQCYAI78bAOqOBIGKSZBQgKaNnZ66TvaL/5cOw3QOqXXscQeScxIb12QWkqOyABUiIrLAMllCsIcQvEBKlojQDxAms9N910EyA94L5bEs+cD7GIDu7dStVnb/bO4/0U1IpWVvIfB3lWigzpRsXNEDZT+4pRVVKj5ArvYUiGnNE7DXlWyegfcxZLK6tJuQJJzF6txds/+o04F9mGmt/iJ0XNiup3++mgBjxS4Sq4rY19+ndzjOPQCZI/dt1SccWxhAMIWh77mWEMAGnG84ZrlAHstmd2HALzXshnA81M10ywfoY16Ab5pSTS+eFNZAAAAAElFTkSuQmCC"
              alt=""
            />
            <div>
              <p className="ttext" style={{fontSize:"14px"}}>PRIZE POOL</p>
              <p className="ttext" style={{fontSize:"18px",fontWeight:400}}>50</p>
            </div>
          </div>
          <div
            className="flex"
            style={{ gap: "5px", width: "85%", justifyContent: "start" }}
          >
            <img
              style={{
                width: "28px",
                height: "28px",
                background: "white",
                borderRadius: "20px",
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgBtVVNTsJAFP6mJZgYFxwBl0ZIPAJH0E1hB55APAFwAuUG7Q5hU09gPYEmlri0R8BEXRDt87VGpDPD2PLzJW1m5v18mW/mvQF2DJHbs/XUAIleOo6Fh8mxmyfMTHD6UkH54wKgLs8qkjViwgFsK8DoKCpGYE4MhUgggLAHOqIswa8MhAbWgYALQR5G9eBvaRlOSNgGxrVFXgvFMSviXIwgkYBYgt0R8EHa8IuE5CWYQQg/vSXpAZKPnFKVjNZEkpvaubI+rp8txk7o8r+9KoV5B4QOnGlvpd0Jr0zJVQIhIg1LH800kZR82ud/V/XPSiftgCLoQPSqLsZaV5b1cXlakhLds0dDCbK4FSzaB2O+P4T1FjCHTr7bbGhmVnKhw5dVxd77QypX8pV5TOJE6ytsP7shGc3wbqNeJN069RYJGmBdJIUoQSX4KaQ1SChHu17GPwUkweMO2tEZVhdaEkA0xAbJzQQJJvUu7/GSv0hjnaU2Q/IE+R791nMV8WeHK72dhlDsYX5wDf+w0NuwE3wD+EeDYMJZw7UAAAAASUVORK5CYII="
              alt=""
            />
            <div>
              <p className="ttext" style={{fontSize:"14px"}}>ASSURED WINNERS</p>
              <p className="ttext" style={{fontSize:"16px",fontWeight:400}}>50</p>
            </div>
          </div>
        </div>
        <div className="sessionright flex coloum">
          <p
            style={{
              textAlign: "left",
              width: "86%",
              color: "#d60000",
              fontSize: "14px",
              fontWeight: "500",
              minHeight: "22px",
              margin: "5px",
            }}
          >
            Closing Soon
          </p>
          <div style={{width:"90%"}}>
            <p style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>
              Tournament Entries
            </p>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0" }}>
              152/180 filled
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/tournament-detials");
            }}
            className="modern-button small"
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Enter for 5
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="tournament flex coloum">
      <div className="flex sa t-header">
        <p
          className="th2"
          onClick={() => {
            setclick(false);
          }}
        >
          Tournament
        </p>
        <p
          onClick={() => {
            setclick(true);
          }}
          style={{ fontWeight: "400" }}
          className="th2"
        >
          Your Tournament
        </p>
      </div>
      <div className={`tunderline flex `}>
        <hr className={`tline ${click ? "left" : "right"}`} />
      </div>
      <img
        width={isMobile ? "95%" : "444px"}
        style={{ height: "194px" }}
        src="https://s3-alpha-sig.figma.com/img/9fc4/ed5e/9278a8dac939c859c610832d624b52f9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVCrbSGIe9DsH7G~zb5b-nz-tIt0BskmvPbga41ZO-rw2K60dUSIsYrNAm~Mv0N8dL0~RtvLfqU1jLW9lTqLLAs6UPAOkxmxKK8bgRCu9VDZBHMwpEiiSXNLc4nJZqZiWiNJ46tgE9ZZReAAMYc~RZ6zn0THSODxoP8hlQM5~cA06axoTnKjrHEqrenS692Rll5s8Z~B-45yu0p0uUjEtuqvZTYnrRdZfn9QoMy2Wjctmzbezwc0V6rfajcWcer63-ZWx0oRQ9tsRSky4AoNfvt7PCMtsQca~22gsdkfboUEYwNkrEA-qYjwiuHcqhofwtP2FNELzu5gt9v-lg59fA__"
      ></img>

      <div className="t-list flex coloum">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((elelment) => (
        <Tcard></Tcard>
        ))}
      </div>
    </div>
  );
}

export default Tournament;
