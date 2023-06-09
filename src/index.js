import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import { wordsCheckerMiddleware  } from './redux/middleware';
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: rootReducer, 
  devTools: composeEnhancers,
  middleware: [wordsCheckerMiddleware, thunk]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

