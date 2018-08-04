import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// main app
import App from './containers/AppContainer.jsx';
// import configureStore, { history } from 'utils/store/configureStore';
// styles
import './index.scss';

// if (process.env.NODE_ENV !== 'production') {
//   // Enable Hot Module Replacement
//   if (module.hot) {
//     module.hot.accept();
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// import FormContainer from "./containers/Form/Form.jsx";