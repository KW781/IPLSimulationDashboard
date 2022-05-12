import classes from './CardStyling.module.css';

function Card(properties) {
  return (
    <div className={classes.card}>
      {properties.children}
    </div>
  );
}

export default Card;
