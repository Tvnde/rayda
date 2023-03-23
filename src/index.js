import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {store} from './reducers'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { itemsApi } from './actions/apiFetch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={itemsApi}>
      <App />
    </ApiProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
