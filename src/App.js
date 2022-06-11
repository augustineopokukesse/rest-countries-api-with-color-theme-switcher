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
        <Route path="/">
          <Countries />
        </Route>
      </Switch>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
