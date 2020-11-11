import React, { useState } from "react";
import { LoggedInPrompt } from "../pages/LoggedInPrompt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Language from "./Language";
import Quiz from "./Quiz";
import Help from "../pages/Help";
import Settings from "../pages/Settings";

export const MainRouter = () => {
  const [webTitle, setWebTitle] = useState("");
  const [webURL, setWebURL] = useState("");

  const handleTitle = (title) => {
    setWebTitle(title);
  };

  const handleURL = (url) => {
    setWebURL(url);
  };

  return (
    <Router>
      <Navigation setTitle={handleTitle} setURL={handleURL} />

      <Switch>
        <Route path="/index.html">
          <LoggedInPrompt />
        </Route>
        <Route path="/settings">
          <Settings title={webTitle} url={webURL} />
        </Route>
        <Route path="/language">
          <Language />
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
