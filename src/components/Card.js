import classes from './CardStyling.module.css';

function Card(properties) {
  return (
    <div>
      <div className={classes.separator} /> /* create black separator between cards */
      <div className={classes.card}>
        {properties.children}
      </div>
    </div>
  );
}

export default Card;
