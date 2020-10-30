import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "./firebase";

export const LoggedInPrompt = () => {
  
  const [user] = useAuthState(firebaseAppAuth);
  const handleSignOut = () => firebaseAppAuth.signOut();

  return (
    <div>
      <p>Hi {user.displayName}!</p>
      <p>Do you want to answer some questions?</p>
      <br />
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
