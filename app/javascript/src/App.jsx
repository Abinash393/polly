import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { initializeLogger } from "./common/logger";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route
          exact
          path="/about"
          render={() => (
            <div className="h-screen bg-blue-900 text-black">About</div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
