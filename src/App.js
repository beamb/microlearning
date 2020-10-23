import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInPrompt } from "./LoggedInPrompt";
import { NotLoggedInPrompt } from "./NotLoggedInPrompt";

const App = (props) => {
  // We're using a package where someone else created a "hook" for using Firebase functionality
  const [user, loading] = useAuthState(firebaseAppAuth);
  
  // If it's still loading the user-state, we're showing nothing here. We could show a spinner,
  // but it will change very fast and it might be more confusing than a blank screen for half a sec
  if (loading) {
    return null;
  }

  // We will show a component based on whether we have a "user" or not
  return user ? <LoggedInPrompt /> : <NotLoggedInPrompt />;
};

export default App;
