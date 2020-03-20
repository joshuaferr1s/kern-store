import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.e404}>
      <h1 className={classes.text}>
        4<img src="http://image005.flaticon.com/75/svg/70/70367.svg" alt="gear" className={classes.image} />4
      </h1>
      <p className={classes.subtext}>Sorry the page you&apos;re looking for couldn&apos;t be found.</p>
      <Link to="/" className={classes.link}>Return home</Link>
    </div>
  );
};

export default NotFound;
