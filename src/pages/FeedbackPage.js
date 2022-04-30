import classes from './PageStylings.module.css';

function FeedbackPage() {
  return (
    <div>
      <div className={classes.generalHeading}>Share your feedback!</div>
      <ul className={classes.ul}>
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
        <div>Rate IPL Simulation</div>
        <input type='text' required id='rating' />
      </form>
    </div>
  );
}

export default FeedbackPage;
