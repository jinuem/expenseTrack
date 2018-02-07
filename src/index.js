import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore,compose } from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import expenseReducer from './reducer';
import thunk from 'redux-thunk'


const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  logger
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

const rStore = createStore(
    expenseReducer,
  initialState,
  composedEnhancers
)


ReactDOM.render(
<Provider store={rStore}>
    <App />
</Provider> 
, document.getElementById('root'));
registerServiceWorker();

