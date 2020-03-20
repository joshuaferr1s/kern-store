import React from 'react';
import { useStoreState } from 'easy-peasy';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const BackdropComp = () => {
  const classes = useStyles();
  const isAuthenticating = useStoreState(state => state.auth.authenticating);

  return (
    <Backdrop className={classes.backdrop} open={isAuthenticating}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropComp;
