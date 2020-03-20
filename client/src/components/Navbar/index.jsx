import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  const setOpen = useStoreActions(actions => actions.drawer.setOpen);

  return (
    <AppBar position="static">
      <Toolbar>
        {isLoggedIn && <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>}
        <Typography variant="h6" className={classes.title}>
          Kern
        </Typography>
        <Typography variant="h6" className={classes.lightTitle}>
          Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
