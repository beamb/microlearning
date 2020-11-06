import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { NotLoggedInPrompt } from "./pages/NotLoggedInPrompt";
import MainRouter from "./components/MainRouter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 50px;
  background: white;
  color: black;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#21B6A8",
    },
    secondary: {
      main: "#E2E8F0",
    },
  },
});

const App = () => {
  // We're using a package where someone else created a "hook" for using Firebase functionality
  const [user, loading] = useAuthState(firebaseAppAuth);

  // If it's still loading the user-state, we're showing "Loading...". We might show a spinner,
  // but it will change very fast and it might be more confusing than a less attractive "Loading..." message
  if (loading) {
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CircularProgress />
        </ThemeProvider>
      </Container>
    );
  }

  // We will show a component based on whether we have a "user" or not
  return user ? (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  ) : (
    <NotLoggedInPrompt />
  );
};

export default App;
