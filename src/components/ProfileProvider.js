import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiRoutes } from "../Utils/constant";
import useAxios from "../api/useAxios";
import ReusableSnackbar from "./ReusableSnackbar";
import { Snackbar, Alert, LinearProgress ,Box, colors  } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const ProfileContext = createContext();

const initialUserProfile = {
  id: "",
  user_type: "",
  UType: "",
  Name: "",
  Email: null,
  Email_varified_at: null,
  LKID: null,
  Mobile_varified_at: null,
  Password: "",
  Permissions: [],
  Phone: null,
  Referred_By: null,
  Register_by: "",
  Wallet_balance: 0,
  aadhardata: [],
  acceptorWithdrawDeducted: null,
  account_number: null,
  action_by: null,
  createdAt: null,
  creatorWithdrawDeducted: null,
  device_key: null,
  hold_balance: 0,
  holder_name: null,
  ifsc_code: null,
  lastSpinDaily: null,
  lastWitdrawl: null,
  loseAmount: 0,
  otp: "",
  ref_Commision: 0,
  referral: null,
  referral_code: "",
  referral_earning: 0,
  referral_wallet: 0,
  spinDaily: 0,
  temp_token: null,
  tokens: [],
  totalBonus: 0,
  totalDeposit: 0,
  totalPenalty: 0,
  totalWithdrawl: 0,
  updatedAt: null,
  upi_id: null,
  verified: "",
  withdrawAmount: 0,
  withdraw_holdbalance: 0,
  wonAmount: 0,
  __v: 0,
};
export const ProfileProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const axiosData = useAxios();
  const [profile, setProfile] = useState(initialUserProfile);
  const [history, setHistory] = useState({
    totalPages: 0,
    data: []
});
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });
 
const logout=()=>{
  localStorage.removeItem('authToken');
  setLoading(!loading)
  navigate('/')
}
  const showSnackbar = (message, severity = 'info') => {
    setSnackbar({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getprofile = async () => {
    setLoading(true);

    try {
      const response = await axiosData.get(apiRoutes.userProfile, {});
      const data = response.data.data;
      setLoading(false);
      // setProfile((prevState) => ({
      //   ...prevState,data
      //    // Update the Phone field
      // }));

      setProfile(response.data);
      all_history(response.data._id)
    } catch (error) {
      console.log(error);
    }
  };
  const getgamehistory = async (id) => {

    try {
      const response = await axiosData.get(apiRoutes.gameHistory(id));

      return response.data
    } catch (error) {
      console.log(error);
    }
  
  };

  const paymentHistory =async (id)=>{
    try {
      const response = await axiosData.get(apiRoutes.paymentHistory(id));

      return response.data
    } catch (error) {
      console.log(error);
    }
  
  }

  const all_history= async (id)=>{
    console.log( await{...getgamehistory(id),... await paymentHistory(id)});
    setHistory({...await getgamehistory(id),...await paymentHistory(id)})
return {...getgamehistory,...paymentHistory}
  }
const getgamesite_data=async()=>{
  try {
    const response = await axiosData.get(apiRoutes.siteData);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

const getgatewaysettings=async()=>{
  try {
    const response = await axiosData.get(apiRoutes.gatewaySettings);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
  const SnackBar=()=>{
    return (
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000} // Adjust the duration for auto-hide
        onClose={closeSnackbar}
        sx={{background:"white"}}
        anchorOrigin={{ vertical:isMobile? "top":"bottom", horizontal: "right" }}
       
      >
        <Box sx={{ width: "100%", position: "relative" }}>
          <Alert
            onClose={closeSnackbar}
            severity={snackbar.severity}
            variant="outlined"
            className="snackbar-alert"
          >
            {snackbar.message}
          </Alert>

          {/* Progress bar */}
          <Box className={`progress-bar2 ${snackbar.severity}`} />
        </Box>
      </Snackbar>)
  }
  useEffect(() => {
    const auth = localStorage.getItem("authToken");
    if (auth) {
      getprofile();

    }
    getgatewaysettings()
    getgamesite_data()
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, getprofile,paymentHistory,history,showSnackbar,logout ,setLoading }}>
      {children}
    <SnackBar></SnackBar>
    </ProfileContext.Provider>
  );
};
