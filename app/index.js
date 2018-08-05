import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// main app
import App from './containers/AppContainer.jsx';
// import configureStore, { history } from 'utils/store/configureStore';

// styles
import './index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
