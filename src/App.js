import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Countries from "./components/all_Countries";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Countries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
