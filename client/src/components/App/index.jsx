import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { useToasts } from 'react-toast-notifications';

import useStyles from './styles';
import Navbar from '../Navbar';
import Backdrop from '../Backdrop';
import DrawerComp from '../DrawerComp';
import PrivateRoute from '../PrivateRoute';
import Landing from '../../views/Landing';
import Dashboard from '../../views/Dashboard';
import NotFound from '../../views/404';
import API_URL from '../../API_URL';

const App = () => {
  const classes = useStyles();
  const history = useHistory();
  const login = useStoreActions(actions => actions.auth.login);
  const { addToast } = useToasts();

  React.useEffect(() => {
    const checkStoredCredentials = async () => {
      const token = await localStorage.getItem('token');
      const res = await fetch(`${API_URL}/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const response = await res.json();
      if (response.status === 401) {
        login({
          isLoggedIn: false,
          token: null,
        });
      } else {
        login({
          isLoggedIn: true,
          token: token,
        });
        addToast('Welcome back!', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/dashboard');
      }
    };
    checkStoredCredentials();
  }, [login, addToast, history]);

  return (
    <div className={classes.root}>
      <Navbar />
      <Backdrop />
      <DrawerComp />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
