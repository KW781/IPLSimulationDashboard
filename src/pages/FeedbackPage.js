import { useState } from 'react';
import classes from './PageStylings.module.css';
import Card from '../components/Card.js';
import StarRating from '../components/StarRating.js';
import SubmitButton from '../components/SubmitButton.js';

function FeedbackPage() {
  const [feedbackText, setFeedbackText] = useState('');

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
        <header>Rate IPL Simulation</header>
        <StarRating />
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
                    className={classes.textbox} />
        </form>
        <SubmitButton />
      </Card>
    </div>
  );
}

export default FeedbackPage;
