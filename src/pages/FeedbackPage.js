import { useState } from 'react';
import { firestore } from '../firebase/firebaseSetup.js';
import { collection, addDoc, doc, getDoc } from '@firebase/firestore';
import classes from './PageStylings.module.css';
import Card from '../components/Card.js';
import StarRating from '../components/StarRating.js';
import SubmitButton from '../components/SubmitButton.js';

function FeedbackPage() {
  const [feedbackText, setFeedbackText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [submittedText, setSubmittedText] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allowedRating, setAllowedRating] = useState(true);
  const [buttonClass, setButtonClass] = useState(classes.loginButtonDefault);
  const [buttonText, setButtonText] = useState(<div>Login</div>);


  async function submitFeedback() {
    /* update firestore collection with new feedback submission */
    await addDoc(collection(firestore, 'feedback'), {
      feedback: feedbackText
    });

    setSubmittedText(true); /* disable text submission once submitted */
  }


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

      if (typeof userData.data().ratingSubmit !== 'undefined') {
        setAllowedRating(false); /* not allowed to submit rating if already submitted */
      }
      /* if login details are correct then allow to login */
      setLoggedIn(true);
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
        <div>
          <header>Share your feedback!</header>
          <ul>
            <li>
            Share what you think about the game, and any improvements that could be
            made!
            </li>
            <li>
            Your feedback will be read and taken into account when adding new
            features to future versions.
            </li>
          </ul>
        </div>
      </Card>

      <Card>
        <header>Login</header>
        <div className={classes.separator} />
        <body>
          Login using the username and password that you created when playing
          IPL Simulation to submit ratings and feedback. Please note that you can
          submit feedback as many times as you want, but you can only submit a
          rating once.
        </body>
        <div className={classes.separator} />

        <label className={classes.loginFieldLabel}>Username: </label>
        <input type="text"
               value={username}
               onChange={(e) => {
                 setUsername(e.target.value);
               }}
               readOnly={loggedIn}/>
        <br /><br />
        <label className={classes.loginFieldLabel}>Password: </label>
        <input type="password"
               value={password}
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
               readOnly={loggedIn}/>

        <div className={classes.separator} />
        <button className={buttonClass} onClick={loginUser}>
          {buttonText}
        </button>
        <div className={classes.separator} />
      </Card>

      <Card>
        <header>Rate IPL Simulation</header>
        <StarRating disabled={!loggedIn || !allowedRating} username={username}/>
      </Card>

      <Card>
        <header>Write feedback on IPL Simulation</header>
        <div className={classes.separator} />
        <form>
          <textarea input="text"
                    value={feedbackText}
                    onChange={(e) => {
                      setFeedbackText(e.target.value);
                    }}
                    className={classes.textbox}
                    readOnly={submittedText || !loggedIn}/>
        </form>
        <SubmitButton uponClick={submitFeedback} disabled={!loggedIn}/>
      </Card>
    </div>
  );
}

export default FeedbackPage;
