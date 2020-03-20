import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';
import API_URL from '../../API_URL';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToasts();
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  const login = useStoreActions(actions => actions.auth.login);
  const [password, setPassword] = React.useState('');

  const loginAttempt = async (e) => {
    e.preventDefault();
    const { from } = location.state || { from: { pathname: '/dashboard' } };
    const res = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
      }),
    });
    const { status, token, msg } = await res.json();
    if (status === 200) {
      login({
        isLoggedIn: true,
        token: token,
      });
      localStorage.setItem('token', token);
      addToast('Welcome back!', {
        appearance: 'success',
        autoDismiss: true,
      });
      history.replace(from);
    } else {
      addToast(msg, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <>
          <Typography>Enter the password below to gain access</Typography>
          <form className={classes.form} onSubmit={loginAttempt}>
            <TextField className={classes.textField} label="Password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
          </form>
        </>
      )}
    </>
  );
};

export default Login;
