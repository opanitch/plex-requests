import React from 'react';
// import { Provider } from 'react-redux';

// import api from '../api/api';
// import PlexAPI from 'plex-api';

import App from '../components/App.jsx';

const getData = () => {
  const data = {};

  // const client = new PlexAPI({
  //   hostname: '192.168.1.3',
  //   port: 32400,
  //   username: 'opanitch',
  //   password: '8sQBjsxocNGn',
  //   options: {
  //     identifier: 'plex-request',
  //     product: 'Plex Request',
  //     version: '1.0',
  //     deviceName: "Oren's Laptop"
  //   }
  // });
  // console.log(`client ${client}`);
  // client.query('/').then(
  //   function(result) {
  //     console.log(
  //       '%s running Plex Media Server v%s',
  //       result.friendlyName,
  //       result.version
  //     );
  //     // array of children, such as Directory or Server items
  //     // will have the .uri-property attached
  //     /* eslint-disable-next-line */
  //     console.log(result._children);
  //   },
  //   function(err) {
  //     console.error('Could not connect to server', err);
  //   }
  // );

  return data;
};

export const AppContainer = () => {
  return (
    // <Provider store={builtStore}>
    //   <App data={getData} />
    // </Provider>
    <App data={getData} />
  );
};

export default AppContainer;
