import React from "react";
import { firebaseAppAuth, provider } from "./firebase";

export const NotLoggedInPrompt = () => {
  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};
