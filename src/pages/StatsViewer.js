import { useState } from 'react';
import { firestore } from '../firebase/firebaseSetup.js';
import { doc, getDoc } from '@firebase/firestore';
import classes from './PageStylings.module.css';
import Card from '../components/Card.js';

function StatsViewer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);
  const [num, setNum] = useState(30);
  const [buttonClass, setButtonClass] = useState(classes.loginButtonDefault);
  const [buttonText, setButtonText] = useState(<div>Login</div>);
  const [statsArr, setStatsArr] = useState([]);


  async function loginUser() {
    if (username === '') {
      /* if username is empty then fail the user validation */
      setButtonClass(classes.loginButtonFail);
      setButtonText(<div>Incorrect username/password &#10060;</div>);

      setTimeout(() => {
        setButtonClass(classes.loginButtonDefault);
        setButtonText(<div>Login</div>);
      }, 2500);

      return;
    }

    /* retireve user data from firebase, assuming username isn't empty string */
    const userRef = doc(firestore, 'users', username);
    const userData = await getDoc(userRef);

    if ((userData.exists()) && (userData.data().password === password)) {
      /* adjust button if user has logged in successfully */
      setButtonClass(classes.loginButtonSuccess);
      setButtonText(<div>Logged In &#10003;</div>);
      setLoggedIn(true);

      /* fetch user's stats from firestore to be displayed */
      setStatsArr([userData.data().matchWins + userData.data().matchLosses + userData.data().matchTies,
                   userData.data().matchWins,
                   userData.data().matchLosses,
                   userData.data().matchTies,
                   (userData.data().matchWins / (userData.data().matchWins + userData.data().matchLosses + userData.data().matchTies)) * 100,
                   userData.data().compsPlayed,
                   userData.data().compWins,
                   userData.data().playersBought,
                   userData.data().highestRank]);
    } else {
      /* if user login is invalid display on button */
      setButtonClass(classes.loginButtonFail);
      setButtonText(<div>Incorrect username/password &#10060;</div>);

      /* change button to normal state after 2.5s */
      setTimeout(() => {
        setButtonClass(classes.loginButtonDefault);
        setButtonText(<div>Login</div>);
      }, 2500);
    }
  }


  return (
    <div>
      <Card>
        <header>Login to view your stats</header>
        <div className={classes.separator} />
        <body>
          Here by logging in you can access all the stats you've accumulated by
          playing IPL Simulation! Use the login details that you created when
          playing IPL Simulation.
        </body>
        <div className={classes.separator} />

        <label className={classes.loginFieldLabel}>Username: </label>
        <input type="text"
               value={username}
               onChange={(e) => {
                 setUsername(e.target.value);
               }}
               readOnly={loggedIn} />
        <br /><br />
        <label className={classes.loginFieldLabel}>Password: </label>
        <input type="text"
               value={password}
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
               readOnly={loggedIn} />

        <div className={classes.separator} />
        <button className={buttonClass} onClick={loginUser}>
          {buttonText}
        </button>
        <div className={classes.separator} />
      </Card>

      <Card>
        <header>Your IPL Simulation Stats</header>
        <ul>
          <li>
            Number of matches played:
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default StatsViewer;
