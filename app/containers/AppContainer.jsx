import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import api from '../api/api';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.actions = props.actions;
  }

  componentDidMount() {
    const { history } = this.props;

    // Load content
    this.actions.loadData();
    this.actions.setHistory(history);
    this.actions.authorizeUser();
    this.actions.loadUserPreferences();
    this.actions.logoutListener();

    this.historyUnlisten = history.listen((location, action) => {
      // Dispatch action on every route change
      this.actions.trackRoute({ location, action });
    });
    storage.init();
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;

    if (prevProps.location.pathname !== pathname) {
      resetPageView();
    }
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  renderRoutes() {
    const { featureSwitches, networkMapEnabled } = this.props;

    return (
      <Switch>
        {routes.map((route, index) => {
          const { LeftNavigation } = this.props.content;
          const { exact, layout, pathKey, path } = route;
          let Layout = layout || Landing;
          const contentKey = route.contentKey;
          let routePath = LeftNavigation ? LeftNavigation[pathKey] : null;

          routePath = routePath || path;

          if (routePath === '/network-map' && networkMapEnabled) {
            // Override layout for networkMapEnabled
            // Clear this code after switch is removed
            Layout = Flow;
          }

          return (
            <Route
              key={index}
              path={routePath}
              exact={exact}
              render={props =>
                <Layout
                  component={route.component}
                  {...props}
                  contentKey={contentKey}
                  featureSwitches={featureSwitches}
                  path={routePath}
                />}
            />
          );
        })}
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <h1>Project Hermes</h1>
        <p>This is my new react app</p>
        <table>
          <thead>
            <tr>
              <td>Movie Title</td>
              <td>Date Added</td>
              <td>Requests</td>
              <td>Completed</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matrix</td>
              <td>03/31/2018</td>
              <td>1</td>
              <td> </td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // authorized: state.application.authorized,
  // common: state.application.common,
  // content: state.application.content,
  // featureSwitches: selectors.getFeatureSwitches(state),
  // networkMapEnabled: selectors.getNetworkMapEnabled(state)
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(
  //   Object.assign({}, actions, contentActions),
  //   dispatch
  // )
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
