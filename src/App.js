import React from "react";

import Home from "./pages/Home";
import Layout from "./components/Layout";

import "./assets/service/css/app.css";
import { Switch, Route } from "react-router-dom";
import Search from "./pages/Search";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} />
      <Route
        render={({ location }) => (
          <div>
            <h2>404 page not found!!!!!</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  </Layout>
);

export default App;
