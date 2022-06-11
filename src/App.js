import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./components/all_Countries";
import Header from "./components/Header";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
