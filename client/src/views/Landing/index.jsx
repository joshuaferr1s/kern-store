import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Login from '../../components/Login';

const Landing = () => {
  const classes = useStyles();
  const hideImage = useMediaQuery('(min-width:960px)');

  return (
    <Container className={classes.root}>
      <div className={classes.flexContainer}>
        {hideImage && <div className={classes.imageContainer}>
          <img className={classes.image} src="/hero.jpeg" alt="hero" />
        </div>}
        <div className={!hideImage ? classes.panelContainerFull : classes.panelContainerHalf}>
          <Typography variant="h6">YMCA Camp Kern’s Management System</Typography>
          <Login />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
