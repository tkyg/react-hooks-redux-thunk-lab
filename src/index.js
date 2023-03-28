import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import catsReducer from './features/cats/catsSlice'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(catsReducer, composeEnhancer)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root"));
