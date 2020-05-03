import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import middleware from './middleware'
import Bootstrap from "bootstrap/dist/css/bootstrap.css"

const store = createStore(allReducers, middleware)

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);



