import classes from './CardStyling.module.css';

function Card() {
  return (
    <div>
      <div className={classes.separator} /> /* create black separator between cards*/
      <div className={classes.card}>
        <header>
          Testing stupid CSS stuff
        </header>
      </div>
    </div>
  );
}

export default Card;
