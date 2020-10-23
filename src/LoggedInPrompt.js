import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "./firebase";

export const LoggedInPrompt = () => {
  
  return (
    <div>
      <p>Hi there!</p>
      <p>Do you want to answer some questions?</p>
    </div>
  );
};
