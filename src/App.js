import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Template from './components/Login/Template';
import Login from './components/miniScreens/Login';
import VerifyOtp from './components/miniScreens/VerifyOtp';
import Resgistation from './components/miniScreens/Resgistation';
import OurGames from './components/miniScreens/OurGames';
import MiniButtons from './components/MiniButtons';
import ClassicGame from './components/miniScreens/ClassicGame';
import Wallet from './components/miniScreens/Wallet';
import Buy from './components/miniScreens/Buy';
import Payscreen from './components/miniScreens/Payscreen';
import History from './components/miniScreens/History';
import Profile from './components/miniScreens/Profile';
import Kyc from './components/miniScreens/Kyc';
import Referral from './components/miniScreens/Referral';
import Matchmaking from './components/miniScreens/Matchmaking';
import SupportScreen from './components/miniScreens/SupportScreen';
import { useState } from 'react';
import Tournament from './components/miniScreens/Tournament';
import TournamentDetials from './components/miniScreens/TournamentDetials';
import { paths } from './Utils/constant';

function App() {
  const [rules,setrules]=useState(false)
  const [notify,setnotify]=useState(false)
  return (

<Routes>
        <Route path={paths.home} element={<Template MiniScreen={()=><Login></Login>}></Template>} />
        <Route path={paths.verify} element={<Template MiniScreen={()=><VerifyOtp></VerifyOtp>}></Template>} />
        
        <Route path={paths.registation} element={<Template MiniScreen={()=><Resgistation></Resgistation>}></Template>} />
        <Route path={paths.lobby} element={<Template MiniScreen={()=><OurGames></OurGames>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.classicGame} element={<Template MiniScreen={()=><ClassicGame></ClassicGame>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.wallet} element={<Template MiniScreen={()=><Wallet></Wallet>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.buy} element={<Template MiniScreen={()=><Buy></Buy>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.pay} element={<Template MiniScreen={()=><Payscreen></Payscreen>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.history} element={<Template MiniScreen={()=><History></History>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.profile} element={<Template MiniScreen={()=><Profile></Profile>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.kyc} element={<Template setnotify={setnotify} notify={notify} setrules={setrules} rules={rules}  MiniScreen={()=><Kyc setnotify={setnotify} notify={notify} setrules={setrules} rules={rules}></Kyc>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.referral} element={<Template MiniScreen={()=><Referral></Referral>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.match} element={<Template MiniScreen={()=><Matchmaking></Matchmaking>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.support} element={<Template MiniScreen={()=><SupportScreen></SupportScreen>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.tournament}element={<Template MiniScreen={()=><Tournament></Tournament>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />
        <Route path={paths.tournamentDetails} element={<Template MiniScreen={()=><TournamentDetials></TournamentDetials>} MiniButtons={()=><MiniButtons></MiniButtons>}></Template>} />

      </Routes>


  );
}

export default App;
