import React, { useState, useEffect } from "react";
import { LoggedInPrompt } from "../pages/LoggedInPrompt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Quiz from "./Quiz";
import Help from "../pages/Help";
import Settings from "../pages/Settings";
import LanguageDataContainer from "./LanguageDataContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const MainRouter = () => {
  const initialState = {
    websites: [
      {
        name: "Netflix",
        URL: "https://www.netflix.com/",
        state: true,
        interval: 15,
        isDisabled: false,
      },
      {
        name: "Youtube",
        URL: "https://www.youtube.com/",
        state: true,
        interval: 15,
        isDisabled: false,
      },
      {
        name: "Facebook",
        URL: "https://www.facebook.com/",
        state: false,
        interval: 15,
        isDisabled: false,
      },
    ],
  };

  const [user] = useAuthState(firebaseAppAuth);
  const [userWebPages, setUserWebPages] = useState(initialState);
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  const handleSuccessClick = () => {
    setOpenSuccessSnackbar(true);
  };
  const handleErrorClick = () => {
    setOpenErrorSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessSnackbar(false);
    setOpenErrorSnackbar(false);
  };

  const userSettings = {
    name: user.displayName,
    questionNumber: numberOfQuestions,
    webPages: userWebPages,
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    await database
      .collection("users")
      .doc(user.uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setUserWebPages(doc.data().userSettings.webPages);
          setNumberOfQuestions(doc.data().userSettings.questionNumber);
        } else {
          // doc.data() will be undefined in this case

          setUpSettings();
        }
      })
      .catch(function (error) {
        console.error("Error getting document: ", error);
      });
  };

  const setUpSettings = () => {
    const data = database
      .collection("users")
      .doc(user.uid)
      .set({ ...data, userSettings });
  };

  const updateNumberOfQuestions = (number) => {
    setNumberOfQuestions(number);
  };

  const updateUserWebPages = (webpages) => {
    setUserWebPages(webpages);
  };

  const updateUserSettings = () => {
    database
      .collection("users")
      .doc(user.uid)
      .update({
        "userSettings.questionNumber": numberOfQuestions,
        "userSettings.webPages": userWebPages,
      })
      .then(function () {
        handleSuccessClick();
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        handleErrorClick();
      });
  };

  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/index.html">
          <LoggedInPrompt />
        </Route>
        <Route path="/settings">
          <Settings
            duration={numberOfQuestions}
            websiteList={userWebPages}
            updateDuration={updateNumberOfQuestions}
            updateWebsites={updateUserWebPages}
            update={updateUserSettings}
          />
        </Route>
        <Route path="/language">
          <LanguageDataContainer />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ width: "100%" }}
      >
        <Alert onClose={handleClose} severity="success">
          Your settings have been updated and stored!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ width: "100%" }}
      >
        <Alert onClose={handleClose} severity="error">
          Oh no! Something went wrong! Try signing out, sign back in and retry
          :-/
        </Alert>
      </Snackbar>
    </Router>
  );
};

export default MainRouter;
