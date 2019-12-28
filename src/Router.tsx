import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import auth from './auth';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './pages/About'));
const Private = lazy(() => import(/* webpackChunkName: "Private" */ './pages/Private'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/Login'));

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/private">
          <Private />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
