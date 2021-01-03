import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import AppLayout from './layouts/App Layout/index';
import configureStore, { history } from './redux/store/store'
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
