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
