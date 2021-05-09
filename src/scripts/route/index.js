import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../views/components/NavigationBar';
import DashboardPage from '../views/pages/DashboardPage';
// import Cookies from 'js-cookie';

import Home from '../views/pages/HomePage';
import NotFoundPage from '../views/pages/NotFoundPage';
// import NavigationBar from '../views/components/NavigationBar';
// import Footer from '../views/components/Footer';

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        <NavigationBar />
        <DashboardPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Router;