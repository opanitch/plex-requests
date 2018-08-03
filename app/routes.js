import Landing from 'containers/Layout/Landing';

import HomeView from 'pages/HomeView';
import PageNotFoundView from 'pages/error/PageNotFoundView';

let routes = [
  {
    pathKey: 'Home',
    exact: true,
    component: HomeView,
    layout: Landing,
    contentKey: 'Dashboard.PageContent'
  }
];

routes = [
  ...routes,
  {
    component: PageNotFoundView,
    layout: Landing,
    contentKey: 'CommonContent.PageNotFound'
  }
];

export default routes;
