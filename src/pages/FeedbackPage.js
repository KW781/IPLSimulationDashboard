import classes from './PageStylings.module.css';
import Card from '../components/Card.js';

function FeedbackPage() {
  return (
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
        <form className={classes.form}>
          <header>Rate IPL Simulation</header>
          <input type='text' required id='rating' />
        </form>
      </div>
    </Card>
  );
}

export default FeedbackPage;
