import { useState } from 'react';
import classes from './SubmitButtonStyling.module.css';

function SubmitButton(props) {
  const submittedText = (<div>Submitted	&#10003;</div>);
  const unsubmittedText = (<div>Submit</div>);

  const [submitted, setSubmitted] = useState(false);

  function clickFunc() {
    if ((!submitted) && (!props.disabled)) {
      setSubmitted(true);
      props.uponClick();
    }
  }

  function getButtonClass() {
    if (props.disabled) {
      return classes.disabled;
    } else if (!submitted) {
      return classes.unsubmitted;
    } else {
      return classes.submitted;
    }
  }

  return (
    <div>
      <div className={classes.separator} />
      <button onClick={clickFunc}
              className={getButtonClass()}>
                {submitted ? submittedText : unsubmittedText}
      </button>
      <div className={classes.separator} />
    </div>
  );
}

export default SubmitButton;
