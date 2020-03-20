import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
