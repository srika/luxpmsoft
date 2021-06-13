import React from "react";
import { Route, Redirect } from "react-router-dom";

//components
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </>
  );
};

export default Routes;
