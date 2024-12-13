import React, { useState } from 'react'
import { AboutUs, CanceelationPage, ContactUS, Privacy } from './ContentPages';
import arrow from '../../assest/Icon (1).png'

const Content = () => {
    return (
        <div className="flex coloum ttext color-black  width-90 margin-auto ">
        <div className="flex width-90">
          <p className="custom-div-text">
            1. Users approve of and accept this Agreement by:
             <ul className='f-w-200'>
              <li>(a) Reading all terms and conditions.</li>
              <li>(b) Reading all rules of this app.</li>
            </ul>
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            2. Users may accept this Agreement only if:
             <ul className='f-w-200'>
              <li>(a) The user is a natural person, of legal age (18 years or older), eligible, and has the mental capacity to form a binding contract.</li>
              <li>(b) The user is not a resident of Tamil Nadu, Andhra Pradesh, Telangana, Assam, Orissa, Sikkim, Nagaland.</li>
              <li>(c) The user is a juristic person, lawfully existing, and authorized to enter into this Agreement.</li>
              <li>(d) The user is not legally barred or restricted from using the App.</li>
            </ul>
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            3. You understand that we want you not to use the app if you do not understand, approve, or accept all the terms specified in this Agreement.
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            4. The Agreement shall govern the relationship between each user and us. However, separate written agreements may be executed with users. In case of a conflict, the separate agreement shall prevail.
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            <strong>B. PROVISION OF THE APP</strong>
             <ul className='f-w-200'>
              <li>
                Section 12 of the Public Gambling Act, 1867 provides that games of mere skill are exempt from the application of the Act. The Supreme Court of India and various High Courts have opined that a game of mere skill is one where success depends primarily on the player's knowledge, training, attention, experience, and skill, rather than luck.
              </li>
              <li>
                Users must note that the 'Ludo' game on our platform is a game of skill under Indian law. We do not support or offer games of chance for money.
              </li>
              <li>
                We prohibit individuals from states like Andhra Pradesh, Assam, Nagaland, Odisha, Telangana, Sikkim, Tamil Nadu, and from outside India, from participating in the games. Access is banned for users from these regions.
              </li>
              <li>
                Game rules are clearly defined on the platform. Users are encouraged to read, understand, and follow them.
              </li>
              <li>
                Games on the platform are based on skill. Players' performance and actions directly impact the game outcome.
              </li>
              <li>
                While elements of chance exist in every game to add excitement, the game outcome depends largely on the player’s skill.
              </li>
              <li>
                Performance can improve with practice, as skills may enhance over time.
              </li>
              <li>
                Some games may have pre-determined outcomes, but these are achievable through skill.
              </li>
            </ul>
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            <strong>C. GAME RULES</strong>
             <ul className='f-w-200'>
              <li>Users must record every game. If any player is hacking or cheating, contact support.</li>
              <li>If the game is not started, and no moves were made, contact support with proof to cancel the game.</li>
              <li>If no proof of cheating or error exists, the game will be considered lost for the player who raised the complaint.</li>
              <li>If no pawn is moved, the game will be cancelled.</li>
              <li>If the opponent leaves the game at the beginning without valid proof, you will be awarded the win.</li>
            </ul>
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            <strong>D. DEPOSIT / WITHDRAWAL</strong>
             <ul className='f-w-200'>
              <li>Players can deposit their balance in the Buy Chips section.</li>
              <li>If suspicious transactions or activity are detected, we reserve the right to temporarily block the account. Contact admins for details to unblock.</li>
              <li>Withdrawal can be made by setting a Sell Request in the app.</li>
              <li>Deposit and withdrawal requests will be processed by support at any time.</li>
              <li>Any wrong payment details will not be refunded.</li>
              <li>Once a withdrawal is made, no queries can be raised.</li>
              <li>If the withdrawal request is pending, the user must wait 1-5 days for processing.</li>
            </ul>
          </p>
        </div>
      
        <div className="flex width-90">
          <p className="custom-div-text">
            <strong>E. PENALTY FOR WRONG UPDATES</strong>
             <ul className='f-w-200'>
              <li>If a wrong update is submitted for any match:
                <ul>
                  <li>(a) For games below 1000, the penalty will be 10%.</li>
                  <li>(b) For games above 1000 and below 5000, the penalty will be 50 flat.</li>
                  <li>(c) For games above 5000 and below 15000, the penalty will be 100 flat.</li>
                </ul>
              </li>
              <li>If the result is not updated after losing, a penalty of 25 flat will be charged.</li>
              <li>Only one account per player is allowed. Multiple accounts will result in permanent bans and penalties.</li>
            </ul>
          </p>
        </div>
      </div>
      
    );
  };

const List2 = ({ lable, value, Content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded((prev) => !prev); // Toggle the expanded state
    };
    return (
     <div className='flex coloum'>
        <div className="summary-detils t-centered-element  border-1px t-h">
          <span 
            className="sheader t-header dynamic-width terms"
            onClick={toggleExpand}
          >
            {lable}
          </span>{" "}
          <img 
          src={arrow}
            className={`rotating-button pointer-style flex ${
              isExpanded ? "i-rotate" : "i-rotate2"
            } size-24`}
            onClick={toggleExpand}
          >
         
         
          </img>
        </div>
        <div className={`expandable-div ${isExpanded ? "expanded" : "collapsed"}  w-full `}>
  {/* Content goes here */}


          <Content></Content>
        </div>
        </div>
    );
  };
function Terms() {
    return (
        <div className='flex ai start coloum c-list width-90  border-1px-radius '>
<List2
 lable={"Terms and Conditions "}
 value={"+"}
 Content={Content}
></List2>
<List2
 lable={"Cancellation and Refund Policy"}
 value={"+"}
 Content={CanceelationPage}
></List2>
<List2
 lable={"Privacy Policy"}
 value={"+"}
 Content={Privacy}
></List2>
<List2
 lable={"GST Policy "}
 value={"+"}
 Content={AboutUs}
></List2>
<List2
 lable={"Responsible Gaming"}
 value={"+"}
 Content={Content}
></List2>
<List2
 lable={"Anti-Money Laundering Policy"}
 value={"+"}
 Content={Content}
></List2><List2
 lable={"About Us"}
 value={"+"}
 Content={Content}
></List2>

<List2
 lable={"Contact Us"}
 value={"+"}
 Content={Content}
></List2>
<List2
 lable={"Grievance Redressal"}
 value={"+"}
 Content={Content}
></List2>
        </div>
    )
}

export default Terms
