import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useToasts } from 'react-toast-notifications';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles';

const menuItems = [
  {
    text: 'Home',
    icon: 'HomeIcon',
    path: '/',
  },
  {
    text: 'Dashboard',
    icon: 'DashboardIcon',
    path: '/dashboard',
  },
];

const listIcon = (icon) => {
  switch (icon) {
  case 'HomeIcon':
    return (<HomeIcon />);
  case 'DashboardIcon':
    return (<DashboardIcon />);
  default:
    return (<></>);
  }
};

const DrawerComp = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToasts();
  const open = useStoreState(state => state.drawer.open);
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  const setOpen = useStoreActions(actions => actions.drawer.setOpen);
  const login = useStoreActions(actions => actions.auth.login);

  const toggleDrawer = (newOpen) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const navigate = (path) => {
    setOpen(false);
    history.push(path);
  };

  const logoutAttempt = () => {
    login(false, null);
    localStorage.removeItem('token');
    setOpen(false);
    addToast('Successfully logged you out!', {
      appearance: 'info',
      autoDismiss: true,
    });
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <div className={classes.list} role="presentation">
        <List>
          {menuItems.map(item => (
            <ListItem button key={item.text} selected={location.pathname === item.path} onClick={() => navigate(item.path)}>
              <ListItemIcon>{listIcon(item.icon)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {isLoggedIn && (
            <>
              <Divider />
              <ListItem button onClick={() => logoutAttempt()}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComp;
