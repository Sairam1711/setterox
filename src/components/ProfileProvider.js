import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiRoutes } from "../Utils/constant";
import useAxios from "../api/useAxios";
import ReusableSnackbar from "./ReusableSnackbar";
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

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
    console.log("object");
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

  const SnackBar=()=>{
    return(
      <Snackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={closeSnackbar} severity={snackbar.severity} variant="filled">
        {snackbar.message}
      </Alert>
    </Snackbar>
    )
  }
  useEffect(() => {
    const auth = localStorage.getItem("authToken");
    if (auth) {
      getprofile();
  
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, getprofile,paymentHistory,history,showSnackbar,logout }}>
      {children}
    <SnackBar></SnackBar>
    </ProfileContext.Provider>
  );
};
