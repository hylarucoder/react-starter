import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useAccountLoggedIn } from '@/hooks/account';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './pages/About'));
const Private = lazy(() => import(/* webpackChunkName: "Private" */ './pages/Private'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/Login'));

type PrivateRouteProps = {
  children: React.ReactNode;
  path: string;
  rest?: object;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path, ...rest }: PrivateRouteProps) => {
  const loggedIn = useAccountLoggedIn();
  return (
    <Route
      path={path}
      {...rest}
      render={props =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login', // eslint-disable-next-line react/prop-types
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const Router: React.FC = () => (
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

export default Router;
