import classes from './PageStylings.module.css';
import Card from '../components/Card.js';
import StarRating from '../components/StarRating.js';

function FeedbackPage() {
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
      </Card>
    </div>
  );
}

export default FeedbackPage;
