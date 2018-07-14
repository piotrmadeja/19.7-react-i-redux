import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {reducer} from './reducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {addComment} from './actions';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

store.dispatch(addComment('Jakiś tam komentarz'));
store.dispatch(addComment('Hello world'));