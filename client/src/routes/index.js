import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import ViewerContext from '../context/ViewerProvider';


const Routes = () => {
  return (
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
        console.log("viewer consumer", viewer, loading);
        if (loading) return null;
        if (!viewer) {
          return (
            <Switch>
              <Route path="/welcome" component={Home} />
              <Redirect from="*" to="/welcome" />
            </Switch>
          )
        } else {
          return (
            <Fragment>
              <Switch>
                <Route path="/items" component={Items} />
                <Route path="/share" component={Share} />
                <Route path="/profile" component={Profile} />
                <Route path="/profile/:userid" component={Profile} />
                <Redirect from="*" to="/items" />
              </Switch>
            </Fragment>
          )
        }
      }}
    </ViewerContext.Consumer>

  )
}

export default Routes;
