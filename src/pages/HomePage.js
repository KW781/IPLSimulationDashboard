import classes from './PageStylings.module.css';

function HomePage() {
  const initDescript = (
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
  );

  const features = (
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
  );

  const installation = (
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
  );

  const rules = (
    <header className={classes.generalHeading}>
    How to play
    </header>
    <body>
      <ul className={classes.ul}>
        <li>
        After running the app, you will be prompted to either enter your
        login details or create a new login. This login is what will allow
        you to access your stats on this site.
        </li>
        <li>
        You will then be prompted to choose whether you want to play a whole
        tournament or just a single match. Just playing a single match will
        mean that both you your opposition will be randomly allocated a
        playing XI.
        </li>
        <li>
        If you choose to play a whole tournament, then you will be prompted
        to select which auction model you want to run. Currently, there are
        3 auction models to select from:
          <ul>
            <li>
            Full auction: This means that the whole auction will be run with
            all the players in the database.
            </li>
            <li>
            Mini auction: This means that only the main, best players from the
            database will be used in the simulation.
            </li>
            <li>
            No auction: No auction will be run, and the players will be
            randomly allocated to all the teams.
            </li>
          </ul>
        </li>
        <li>
        Then you'll enter the auction. Every player will be auctioned one by
        one, and you'll be prompted to bid for a player after every
        few bids from the opposition franchises. If you no longer want to bid
        for particular player, just indicated as prompted and you will no
        longer be prompted to bid for the player.
        </li>
        <li>
        Once the auction stage is complete, all the matches will be scheduled
        randomly and you'll have to play each one.
        </li>
        <li>
        For each match, you have to choose your playing XI from your squad
        (in the batting order you want) ensuring that you select a
        wicketkeepr and at least 5 bowlers.
        </li>
        <li>
        The batting part of the match is fully automated. However, when your
        team is bowling, you can choose which bowler you want to bowl a
        particular over based on the match situation.
        </li>
        <li>
        You can see your points table standing after each match, and after all
        the league stage matches, you can then progress to the playoffs (if
        you make them!)
        </li>
        <li>
        If you make the playoffs, play as hard as you can to try and win the
        IPL!
        </li>
      </ul>
    </body>
  );

  const downloadInstructs = (
    <header className={classes.generalHeading}>
      Download
    </header>
    <body>
      <ul className={classes.ul}>
        <li>
        To be completed soon
        </li>
      </ul>
    </body>
  );

  return (
    <div>

    </div>
  );
}

export default HomePage;
