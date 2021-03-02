import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Home from "Routes/Home";
import Detail from "Routes/Detail";

const _ = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default _;
