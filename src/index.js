import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import { addComment } from './actions.js';

import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import DevTools from  './DevTools'

const store = createStore(
  reducer,
  DevTools.instrument()
);
  // <Provider>
  //   <App />
  // </Provider>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));

registerServiceWorker();
