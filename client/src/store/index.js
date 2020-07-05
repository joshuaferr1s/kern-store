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
  camperDialog: {
    open: false,
    setOpen: action((state, payload) => {
      state.open = payload;
    }),
  },
  campers: {
    campers: [
      {
        _id: '1',
        name: 'Joshua Ferris',
        bunk: 'Elk Lodge',
        program: 'Boots N Bits',
        balance: 100.00,
        transactionHistory: [],
        chosenActivities: {
          '1': '',
          '2': '',
          '3': '',
        },
      },
      {
        _id: '2',
        name: 'Ren Ferris',
        bunk: 'Cabin 13',
        program: 'TOK',
        balance: 50,
        transactionHistory: [],
        chosenActivities: {
          '1': '',
          '2': '',
          '3': '',
        },
      },
      {
        _id: '3',
        name: 'Melissa Huist-Kneer',
        bunk: 'Yurts',
        program: 'Theme Camp',
        balance: 0,
        transactionHistory: [],
        chosenActivities: {
          '1': '',
          '2': '',
          '3': '',
        },
      },
    ],
    updateCamper: action((state, payload) => {
      const newCampers = state.campers.map((camper) => {
        if (camper._id === payload._id) {
          return { ...camper, ...payload.newData };
        } else {
          return camper;
        }
      });
      state.campers = newCampers;
    }),
  },
}, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
