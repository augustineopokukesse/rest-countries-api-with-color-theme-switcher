import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Countries from "./components/all_Countries";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Countries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
