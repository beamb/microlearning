import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { NotLoggedInPrompt } from "./pages/NotLoggedInPrompt";
import MainRouter from "./components/MainRouter";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import './App.css';

const App = (props) => {
  // We're using a package where someone else created a "hook" for using Firebase functionality
  const [user, loading] = useAuthState(firebaseAppAuth);

  // If it's still loading the user-state, we're showing nothing here. We could show a spinner,
  // but it will change very fast and it might be more confusing than a blank screen for half a sec
  if (loading) {
    return <p>Loading...</p>;
  }

  // We will show a component based on whether we have a "user" or not
  return user ? <MainRouter /> : <NotLoggedInPrompt />;
};

export default App;
