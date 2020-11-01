import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInPrompt } from "./pages/LoggedInPrompt";
import { NotLoggedInPrompt } from "./pages/NotLoggedInPrompt";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Language from "./components/Language";
import Quiz from "./components/Quiz";
import Exit from "./components/Exit";

const Container = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 500px;
  background: lightgrey;
  color: black;
`;
const App = (props) => {
  // We're using a package where someone else created a "hook" for using Firebase functionality
  const [user, loading] = useAuthState(firebaseAppAuth);

  // If it's still loading the user-state, we're showing nothing here. We could show a spinner,
  // but it will change very fast and it might be more confusing than a blank screen for half a sec
  if (loading) {
    return <p>Loading...</p>;
  }

  // We will show a component based on whether we have a "user" or not
  return user ? (
    <Router>
      <Container>
        <NavBar className="border-bottom" bg="transparent" expand="lg">
          <Nav className="ml-auto">
            <Link to="/settings">
              <button type="button">Settings</button>
            </Link>

            <Link to="/exit">
              <button type="button">x</button>
            </Link>

            <Link to="/index.html">
              <button type="button">back</button>
            </Link>
          </Nav>

          <Switch>
            <Route path="/index.html">
              <LoggedInPrompt />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/exit">
              <Exit />
            </Route>
            <Route path="/language">
              <Language />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </NavBar>
      </Container>
    </Router>
  ) : (
    <NotLoggedInPrompt />
  );
};

function Settings() {
  return (
    <div>
      <h2>This is the settings page</h2>
    </div>
  );
}

export default App;
