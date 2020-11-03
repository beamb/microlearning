import React from "react";
import styled, { css } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInPrompt } from "./pages/LoggedInPrompt";
import { NotLoggedInPrompt } from "./pages/NotLoggedInPrompt";
// import NavBar from "react-bootstrap/NavBar";
// import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Language from "./components/Language";
import Quiz from "./components/Quiz";
import Exit from "./components/Exit";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";

// Style
const NavContainer = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: center;
`;

const Container = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: center;
`;

const SettingsWeel = styled(Settings)`
  color: grey;
`;

const CloseCross = styled(Close)`
  color: grey;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
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
      <NavContainer>
        <Link to="/settings">
          <SettingsWeel size="30" type="button">
            Settings
          </SettingsWeel>
        </Link>

        <Link to="/exit">
          <CloseCross size="30" type="button">
            x
          </CloseCross>
        </Link>

        <Link to="/index.html">
          <Button type="button">back</Button>
        </Link>
      </NavContainer>

      <Switch>
        <Route path="/index.html">
          <LoggedInPrompt />
        </Route>
        <Route path="/settings">Settings page</Route>
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
    </Router>
  ) : (
    <NotLoggedInPrompt />
  );
};

export default App;
