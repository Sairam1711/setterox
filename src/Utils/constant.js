import { common } from "@mui/material/colors";

export const paths = {
    home: "/",
    verify: "/verify",
    registation: "/registation",
    lobby: "/lobby",
    classicGame: "/classic-game",
    wallet: "/wallet",
    buy: "/buy",
    pay: "/pay",
    history: "/history",
    profile: "/profile",
    kyc: "/kyc",
    referral: "/referral",
    match: "/match",
    support: "/support",
    tournament: "/tournament",
    tournamentDetails: "/tournament-detials",
  };
export const commonStings={
error:"error",
success:"success"
}
  export const apiRoutes={
    userProfile: "/me",
    userEdit: "/user/edit",
    siteData: "/settings/data",
    gatewaySettings: "/gatewaysettings/data",
    gameHistory: (id) => `/game/history/user/${id}?page=0&_limit=50`,
    paymentHistory: (id) => `/temp/deposite/${id}?page=0&_limit=50`,
    referralHistory: (referralCode) => `/referral/code/winn/${referralCode}`,
    redeemEarnings: "/referral/to/wallet",
    withdrawMoney: "/withdraw/request",
    addMoney: "/add-money",
    otpKyc: "/aadharcardotp",
    verifyAadharOtp: "/aadharcardotp-verify",
    login: "/login",
    verifyOtp: "/login/finish",
    register: "/register",
  }
  // paymentValidation.js

export const validatePaymentDetails = (payment, paymentDetails) => {
  const errors = {};

  // Validate UPI ID
  if (payment === "UPI" || payment === "upi") {
    if (!/^[\w.-]+@[a-zA-Z0-9]+$/.test(paymentDetails.upiId)) {
      errors.upiId = "Please enter a valid UPI ID.";
    }
    if (paymentDetails.upiId !== paymentDetails.reEnterUpiId) {
      errors.reEnterUpiId = "UPI IDs do not match.";
    }
    if (!paymentDetails.chips) {
      errors.chips = "Please enter the number of chips.";
    }
  }

  // Validate Bank Transfer
  if (payment === "Bank Transfer") {
    if (!/^\d{9,18}$/.test(paymentDetails.accountNumber)) {
      errors.accountNumber = "Please enter a valid account number (9-18 digits).";
    }
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(paymentDetails.ifsc)) {
      errors.ifsc = "Please enter a valid IFSC code.";
    }
  }

  return errors;
};

  export const validatePhoneNumber = (countryCode, phoneNumber) => {
    const errors = {};
  
    if (!phoneNumber.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      // Example validation patterns for different country codes
      const phonePatterns = {
        '+91': /^[6-9]\d{9}$/, // India: 10 digits starting with 6-9
        '+1': /^\d{3}[- ]?\d{3}[- ]?\d{4}$/, // US: 555-000-0000
        '+44': /^\d{10,11}$/, // UK: 10-11 digits
        '+81': /^\d{10,11}$/, // Japan: 10-11 digits
      };
  
      const pattern = phonePatterns[countryCode];
      if (pattern && !pattern.test(phoneNumber)) {
        errors.phone = 'Invalid phone number format';
      }
    }
  
    return errors;
  };
  

  // src/registrationValidation.js

export const validateRegistrationForm = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full Name is required';
  }

  if (!formData.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be 10 digits';
  }

  return errors;
};

// validation.js

// Single function to handle all validations
export const validateForm = ({ aadharNumber, email, method }) => {
  const errors = {};

  // Validate Aadhar Card Number (12 digits)
  if (!/^\d{12}$/.test(aadharNumber)) {
    errors.aadharNumber = "Please enter a valid 12-digit Aadhar Card Number.";
  }

  // Validate Email Address
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Validate Verification Method
  if (method === "not") {
    errors.method = "Please select a verification method.";
  }

  return errors;
};
export const calculateDeposit = (depositAmount, gstRate) => {
  // Calculations
  const govtTax = depositAmount * gstRate; // GST calculation
  const totalAmount = depositAmount - govtTax; // Total amount including GST
  const cashbackBonus = govtTax; // Cashback bonus is equal to GST in this case
  const walletBalance = totalAmount + cashbackBonus; // Total added to wallet
  
  return {
    govtTax,
    totalAmount,
    cashbackBonus,
    walletBalance
  };
};
 export const onwheelStop=(e)=>{
  e.preventDefault();
  e.target.blur();
 }

export const gstRate = 0.28;
export const userProfile = {
  _id: "675819a5a8ef29a834df3f9a",
  user_type: "User",
  UType: "r",
  Name: "Guest5697",
  otp: "546602",
  Email: null,
  Email_varified_at: null,
  LKID: null,
  Mobile_varified_at: null,
  Password: "$2b$10$6qO4OJ.Xg4Iy7i/WzUzgwexvNaYZJA4XODWLAALvagllcbnjjGbIe",
  Permissions: [],
  Phone: "9751813050",
  Referred_By: null,
  Register_by: "Self",
  Wallet_balance: 0,
  aadhardata: [],
  acceptorWithdrawDeducted: null,
  account_number: null,
  action_by: null,
  createdAt: "2024-12-10T10:36:21.820Z",
  creatorWithdrawDeducted: null,
  device_key: null,
  hold_balance: 0,
  holder_name: null,
  ifsc_code: null,
  lastSpinDaily: null,
  lastWitdrawl: null,
  loseAmount: 0,
  ref_Commision: 1,
  referral: null,
  referral_code: "263199",
  referral_earning: 0,
  referral_wallet: 0,
  spinDaily: 0,
  temp_token: null,
  tokens: [{ /* token details here */ }],
  totalBonus: 0,
  totalDeposit: 0,
  totalPenalty: 0,
  totalWithdrawl: 0,
  updatedAt: "2024-12-11T09:04:30.118Z",
  upi_id: null,
  verified: "unverified",
  withdrawAmount: 0,
  withdraw_holdbalance: 0,
  wonAmount: 0,
  __v: 11
};


