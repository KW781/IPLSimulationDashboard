import { useState } from "react";
import classes from "./StarRatingStyling.module.css";

function StarRating() {
  const submittedText = (<div>Submitted	&#10003;</div>);
  const unsubmittedText = (<div>Submit</div>);

  const [submitted, setSubmitted] = useState(false);
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
      <div className={classes.separator}/>
      <button onClick={() => setSubmitted(true)}
              className={submitted ? classes.submitted : classes.unsubmitted}>
                {submitted ? submittedText : unsubmittedText}
      </button>
      <div className={classes.separator} />
    </div>
  );
}

export default StarRating;
