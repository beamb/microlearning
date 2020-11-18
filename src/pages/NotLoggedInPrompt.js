import React from "react";
import { firebaseAppAuth, provider } from "../firebase";

export const NotLoggedInPrompt = () => {
  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);
  
  handleSignIn()
    
  return (
        <p>Please log in.</p>
    );
};
