import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/Books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={Search} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
