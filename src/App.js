import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { NotLoggedInPrompt } from "./pages/NotLoggedInPrompt";
import MainRouter from "./components/MainRouter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SmallContainer } from "./styling/Containers";
import "./App.css";

const font = "'Lato', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#21B6A8",
    },
    secondary: {
      main: "#d4d4d4",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  const [user, loading] = useAuthState(firebaseAppAuth);

  if (loading) {
    return (
      <SmallContainer>
        <ThemeProvider theme={theme}>
          <CircularProgress />
        </ThemeProvider>
      </SmallContainer>
    );
  }

  return user ? (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  ) : (
    <SmallContainer>
      <ThemeProvider theme={theme}>
        <NotLoggedInPrompt />
      </ThemeProvider>
    </SmallContainer>
  );
};

export default App;
