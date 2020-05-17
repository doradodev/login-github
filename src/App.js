import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "@loadable/component";
import FormAuthContainer from "./components/FormAuthContainer/formAuthContainer";
import Login from "./components/Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import dataComponent from "./static/js/dataComponent.json";
import AuthenticatedRoute from "./components/Auth/authenticatedRoute";
import DashboardContainer from "./components/Dashboard/dashboardContainer";

const ContentComponent = Loadable((props) =>
  import("./components/ComponentForm/componentForm")
);

const App = (props) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    userHasAuthenticated(props.authenticated);
  });
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <FormAuthContainer>
            {dataComponent &&
              dataComponent.map((component) => (
                <ContentComponent
                  key={component.id}
                  path={component.path}
                  title={component.titulo}
                  type={component.tipo}
                  name={component.nombre}
                />
              ))}
          </FormAuthContainer>
        </Route>
        <AuthenticatedRoute
          path="/dashboard"
          component={DashboardContainer}
          appProps={{ isAuthenticated }}
        />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.formData.authenticated,
  role: state.formData.role,
});
export default connect(mapStateToProps)(App);
