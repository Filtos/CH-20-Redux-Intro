import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { incrementCounter, decrementCounter } from './actions'
import { Provider } from 'react-redux'
import store from './store'

// Provider basically tells our React app what store will be
// providing the state

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
