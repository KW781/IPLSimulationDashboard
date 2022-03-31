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

      <header className={classes.generalHeading}>
      Features
      </header>
      <body>
        <ul className={classes.ul}>
          <li>
          All cricketers are drawn from a central database with 200+ players,
          with more being added day by day!
          </li>
          <li>
          The simulation only features not current players, but also features
          players from the past from all seasons of IPL! Play battles such as
          Tendulkar vs Archer, Gill vs Warne, Williamson vs Zaheer, and more!
          </li>
          <li>
          Unlike the real IPL which is affected by politics, this simulation
          features Pakistani players! Buy players like Babar Azam, Mohammad
          Rizwan, Shaheen Afridi, and unleash them on the opposition teams!
          </li>
          <li>
          Uses special algorithms to generate bids by computer teams for players
          in the auction, considering a range of factos including the role of
          the player, their stats, their previous salaries, and the current
          needs of the squad.
          </li>
          <li>
          Uses special algorithms to also generate the result of every ball in
          each match, based on the batsman and bowler statistics.
          </li>
        </ul>
      </body>

      <header className={classes.generalHeading}>
      How to install and run
      </header>
      <body>
        <ul className={classes.ul}>
          <li>
          To be completed soon
          </li>
        </ul>
      </body>

      <header className={classes.generalHeading}>
      How to play
      </header>
      <body>
        <ul className={classes.ul}>
          <li>
          </li>
        </ul>
      </body>
    </div>

  );
}

export default HomePage;
