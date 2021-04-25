import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ThemeProvider } from '@material-ui/styles';

import reducer from './reducer';
import saga from './saga';
import theme from './Theme/index';
import App from './Containers/App/App';

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // mount it on the store
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// // run sagas
// sagaMiddleware.run(saga);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
