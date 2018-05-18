import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { incrementCounter, decrementCounter } from './actions'

import store from './store'

console.log(store.getState());



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
