import React from "react";
import styled from "styled-components";
import { LoggedInPrompt } from "../pages/LoggedInPrompt";
import NavBar from "react-bootstrap/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Language from "./Language";
import Quiz from "./Quiz";
import Help from "../pages/Help";
import Settings from "../pages/Settings";

const Container = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 500px;
  background: lightgrey;
  color: black;
`;

export const MainRouter = () => {
  return (
    <Router>
      <Container>
        <NavBar className="border-bottom" bg="transparent" expand="lg">
          <Navigation />

          <Switch>
            <Route path="/index.html">
              <LoggedInPrompt />
            </Route>
            <Route path="/settings">
              <Settings />
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
        </NavBar>
      </Container>
    </Router>
  );
};

export default MainRouter;
