import { useState } from 'react';
import classes from './SubmitButtonStyling.module.css';

function SubmitButton(props) {
  const submittedText = (<div>Submitted	&#10003;</div>);
  const unsubmittedText = (<div>Submit</div>);

  const [submitted, setSubmitted] = useState(false);
  const [buttonClass, setButtonClass] = useState(props.disabled ? classes.disabled : classes.unsubmitted);

  function clickFunc() {
    if ((!submitted) && (!props.disabled)) {
      setSubmitted(true);
      setButtonClass(classes.submitted);
      props.uponClick();
    }
  }

  return (
    <div>
      <div className={classes.separator} />
      <button onClick={clickFunc}
              className={buttonClass}>
                {submitted ? submittedText : unsubmittedText}
      </button>
      <div className={classes.separator} />
    </div>
  );
}

export default SubmitButton;
