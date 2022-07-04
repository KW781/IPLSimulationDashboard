import { useState } from 'react';
import classes from './StarRatingStyling.module.css';
import SubmitButton from './SubmitButton.js';

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index > (hover || rating) ? classes.on : classes.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <SubmitButton />
    </div>
  );
}

export default StarRating;
