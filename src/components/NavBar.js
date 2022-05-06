import classes from './NavBarStyling.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className={classes.header}>
      <div>IPL Simulation Dashboard</div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/stats-viewer'>View Stats</Link>
        </li>
        <li>
          <Link to='/feedback-page'>Give Feedback</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
