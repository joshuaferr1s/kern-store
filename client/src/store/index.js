import { createStore, action } from 'easy-peasy';

export default createStore({
  auth: {
    isLoggedIn: false,
    authenticating: true,
    token: localStorage.getItem('token') || null,
    login: action((state, payload) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.token = payload.token;
      state.authenticating = false;
    }),
  },
  drawer: {
    open: false,
    setOpen: action((state, payload) => {
      state.open = payload;
    }),
  },
}, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
