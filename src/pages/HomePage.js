import classes from './PageStylings.module.css';

function HomePage() {
  return (
    <div>
      <header className={classes.generalHeading}>
      Welcome to the IPL Simulation!
      </header>
      <body>
        <ul className={classes.ul}>
          <li>
          This is a text-based game that simulates the Indian Premier League!
          </li>
          <li>
          Play as an IPL team, buy your favourite players, and go head to head
          against computer automated franchises in a series of matches to try
          and win the title!
          </li>
        </ul>
      </body>
    </div>
  );
}

export default HomePage;
