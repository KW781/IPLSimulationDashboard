import classes from './PageStylings.module.css';

function PageNotFound() {
  return (
    <div className={classes.notFound}>
    Uh oh. The page you're looking for wasn't found. Make sure you've entered the URL correctly.
    </div>
  );
}

export default PageNotFound;
