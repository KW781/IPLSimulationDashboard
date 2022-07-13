import classes from './CardStyling.module.css';

function Card(props) {
  return (
    <div>
      <div className={classes.separator} /> /* create black separator between cards */
      <div className={classes.card}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
