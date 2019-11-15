import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';


const Routes = () => {
  return (
    <Router>
      <Switch>
        {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
        <Route path="/welcome" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/share" component={Share} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/:userid" component={Profile} />
        <Redirect from="/" to="/items" />
        {/* <Route render={() => (
        loggedIn ? (
          <Redirect to="/profile/[ID_here]" />
        ) : (
          <Redirect to="/welcome" />
            <LoginForm />
          )
      )
      } /> */}
      </Switch>
    </Router>
  )
}

export default Routes;
