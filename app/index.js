import React from 'react';
import ReactDOM from 'react-dom';

// main app
import AppContainer from './containers/AppContainer.jsx';
// import configureStore, { history } from 'utils/store/configureStore';

// styles
import './index.scss';

ReactDOM.render(<AppContainer />, document.getElementById('app'));
