/**
 * Index.js - Ponto de entrada do APP, inicia um Provider e uma store
 * redux e inicia o componente App 
 * 
 * @author: Marc Reinan Gomes
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
  
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
