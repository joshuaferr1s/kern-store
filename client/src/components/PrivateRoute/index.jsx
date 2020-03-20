import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const App = ({ children, ...rest }) => {
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default App;
