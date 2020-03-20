import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { ToastProvider } from 'react-toast-notifications';

import './index.css';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <ToastProvider placement="bottom-right">
        <App />
      </ToastProvider>
    </StoreProvider>
  </Router>
  , document.getElementById('root'));
