import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
