import React from "react";
import { LoggedInPrompt } from "../pages/LoggedInPrompt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Language from "./Language";
import LanguageDataContainer from "./LanguageDataContainer";
import Quiz from "./Quiz";
import Help from "../pages/Help";
import Settings from "../pages/Settings";

export const MainRouter = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/index.html">
          <LoggedInPrompt />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/language">
          <LanguageDataContainer />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
