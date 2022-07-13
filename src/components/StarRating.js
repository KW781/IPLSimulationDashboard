import { useState } from 'react';
import { firestore } from '../firebase/firebaseSetup.js';
import { updateDoc, getDoc, doc } from '@firebase/firestore';
import classes from './StarRatingStyling.module.css';
import SubmitButton from './SubmitButton.js';

function StarRating(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [starSubmitted, setStarSubmitted] = useState(false);

  async function updateRating(props) {
    const ratingsRef = doc(firestore, 'ratings', 'avg-rating'); /* retrieve the document ratings document reference */
    const docSnap = await getDoc(ratingsRef); /* get the document itself from the reference */
    const currNumRatings = docSnap.data().numRatings;
    const currAvgRating = docSnap.data().rating;
    /* calculate the new average rating */
    const newAvgRating = (currAvgRating * currNumRatings + rating) / (currNumRatings + 1);

    /* update the document with the new rating */
    await updateDoc(ratingsRef, {
      rating: newAvgRating,
      numRatings: currNumRatings + 1
    });

    setStarSubmitted(true); /* disable the stars once submit button is clicked */
  }

  function getStarClass(index) {
    if (props.disabled) {
      return classes.disabled; /* all stars should appear disblaed if user not logged in */
    } else if (starSubmitted) {
      /* if user has submitted all stars will be fixed with current appearance */
      return index <= (hover || rating) ? classes.ratingSubmitted : classes.disabled;
    } else {
      /* otherwise change star appearance upon hovering */
      return index <= (hover || rating) ? classes.on : classes.off;
    }
  }

  return (
    <div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={getStarClass(index)}
              onClick={() => {
                if ((!starSubmitted) && (!props.disabled)) {
                  setRating(index); /* only change star if not submitted and user logged in*/
                }
              }}
              onMouseEnter={() => {
                if ((!starSubmitted) && (!props.disabled)) {
                  setHover(index); /* only change star if not submitted and user logged in */
                }
              }}
              onMouseLeave={() => {
                if ((!starSubmitted) && (!props.disabled)) {
                  setHover(rating); /* only change star if not submitted and user logged in */
                }
              }}>
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <SubmitButton uponClick={updateRating} disabled={props.disabled}/>
    </div>
  );
}

export default StarRating;
