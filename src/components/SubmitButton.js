import { useState } from 'react';
import classes from './SubmitButtonStyling.module.css';

function SubmitButton() {
  const submittedText = (<div>Submitted	&#10003;</div>);
  const unsubmittedText = (<div>Submit</div>);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className={classes.separator} />
      <button onClick={() => setSubmitted(true)}
              className={submitted ? classes.submitted : classes.unsubmitted}>
                {submitted ? submittedText : unsubmittedText}
      </button>
      <div className={classes.separator} />
    </div>
  );
}

export default SubmitButton;
