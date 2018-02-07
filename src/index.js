import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import expenseReducer from './reducer';

const initialState = {}


const rStore = createStore(
    expenseReducer,
  initialState,
  applyMiddleware(logger)
)


ReactDOM.render(
<Provider store={rStore}>
    <App />
</Provider> 
, document.getElementById('root'));
registerServiceWorker();

