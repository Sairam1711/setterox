import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../ProfileProvider";
import { apiRoutes, userProfile } from "../../Utils/constant";
import useAxios from "../../api/useAxios";
function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { profile, loading,getprofile } = useContext(ProfileContext);
  const [edit ,setedit]=useState(false)
  const [name,setname]=useState()
  const navigate = useNavigate();
  const user3c =userProfile;
  const axiosData = useAxios()
  const onChange=(e)=>{
    setname(e.target.value)
  }
  const updateprofile= async()=>{
    try {
      const response = await axiosData.patch(apiRoutes.userEdit,{
      Name:name
    })
    getprofile()
  } catch (error) {
    console.log(error);
  }
  }
  const onedit=async()=>{
    if (edit&&name) {
      updateprofile()
    }
   

    setedit(!edit)
  }
const logout=()=>{
  localStorage.removeItem('authToken');
  navigate('/')
}
  const Mini_card = ({ element }) => {
    return (
      <div className="challenge-card mini justify-left" >
        <div className="challenge-header">
          <div className="Challengeheader justify-left" >
            <span className="margin-left-style">
              {element}
            </span>
          </div>
        </div>
        <p className="custom-margin-style">
          <strong>0</strong>
        </p>
      </div>
    );
  };
  return (
    <div className="profile">
      <div
        className="challenge-card p2-container "
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Profile</span>
          </div>
        </div>
        <div className="amount">
          <label
            htmlFor="phone-input"
          
            className="phone-label label-p "
          >
            Username
          </label>
          <div className="flex-row-p" >
            <input
              className="normal-input input-style-p2"
              placeholder="Enter your name"
              disabled={!edit}
          value={edit?name:loading?"loading...":profile.Name}
          onChange={onChange}
            ></input>

            <button className={`modern-button full edit-button-style  ${!edit?"":"save-color"}` }  onClick={onedit}>
              {!edit?"Edit":"Save"}
            </button>
          </div>
        </div>
        <div className="amount">
          <label
            htmlFor="phone-input text-style-profile"
           
            className="phone-label"
           
          >
            Mobile Number
          </label>

          <input
            className="normal-input background-light"
            placeholder="Enter your mobile"
            value={profile.Phone}
            disabled
          ></input>
        </div>
        <div className="redbox">
          <div className="redbox1">
            <span
             className="text-small"
            
            >
              KYC Status
            </span>
            <span
            className="text-small-2"
              
            >
              {profile.verified!=="unverified" ?"Completed":"Pending"}
            </span>
          </div>
          <div className="redbox2">
            <button
              className="modern-button  primary alert-button"
              onClick={() => {
                navigate("/kyc");
              }}
            >
              {" "}
              Complete KYC
            </button>
          </div>
        </div>
      </div>
      <div
        className="challenge-card card-p"
       
      >
        <div className="challenge-header">
          <div className="Challengeheader">
            <span>Metrics</span>
          </div>
        </div>
        <div className="flex-container">
          {["Games Played", "Chip Won", "Referral Earning", "Penalty"].map(
            (element) => (
              <Mini_card element={element}></Mini_card>
            )
          )}
        </div>

      </div>
      <button className="modern-button  primary alert-button  logout " onClick={logout}> Logout</button>
    </div>
  );
}

export default Profile;
