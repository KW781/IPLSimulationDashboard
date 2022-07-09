import { useState } from 'react';
import { firestore } from '../firebase/firebaseSetup.js';
import { updateDoc, getDoc, doc } from '@firebase/firestore';
import classes from './StarRatingStyling.module.css';
import SubmitButton from './SubmitButton.js';

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  async function updateRating() {
    const ratingsRef = doc(firestore, 'ratings', 'avg-rating');
    const docSnap = await getDoc(ratingsRef);
    const currNumRatings = docSnap.data().numRatings;
    const currAvgRating = docSnap.data().rating;
    const newAvgRating = (currAvgRating * currNumRatings + rating) / (currNumRatings + 1);

    await updateDoc(ratingsRef, {
      rating: newAvgRating,
      numRatings: currNumRatings + 1
    });
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
      <SubmitButton uponClick={updateRating}/>
    </div>
  );
}

export default StarRating;
