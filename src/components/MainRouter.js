import React, { useState, useEffect } from "react";
import { LoggedInPrompt } from "../pages/LoggedInPrompt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Quiz from "../pages/Quiz";
import FinalPage from "../pages/FinalPage";
import Settings from "../pages/Settings";
import Language from "../pages/Language";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
//styling
import { MainContainer } from "../styling/Containers";

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
  const [selectedLanguage, setLanguage] = useState("");
  const [score, setScore] = useState(0);

  const handleClose = () => {
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
    database.collection("users").doc(user.uid).set({ userSettings });
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
        setOpenSuccessSnackbar(true);
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        setOpenErrorSnackbar(true);
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
            numberOfQuestions={numberOfQuestions}
            userWebPages={userWebPages}
            setNumberOfQuestions={setNumberOfQuestions}
            setUserWebPages={setUserWebPages}
            updateUserSettings={updateUserSettings}
          />
        </Route>
        <Route path="/language">
          <MainContainer>
            <Language setLanguage={setLanguage} />
          </MainContainer>
        </Route>
        <Route path="/quiz">
          <MainContainer>
            <Quiz
              selectedLanguage={selectedLanguage}
              numberOfQuestions={numberOfQuestions}
              score={score}
              setScore={setScore}
            />
          </MainContainer>
        </Route>
        <Route path="/final_page">
          <MainContainer>
            <FinalPage
              numberOfQuestions={numberOfQuestions}
              score={score}
              setScore={setScore}
            />
          </MainContainer>
        </Route>
      </Switch>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        style={{ width: "100%" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          style={{ background: "#A5D6A7", color: "black" }}
        >
          Your settings have been updated and stored!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        style={{ width: "100%" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          style={{ background: "#EF5350" }}
        >
          Oh no! Something went wrong! Try signing out, sign back in and retry
          :-/
        </Alert>
      </Snackbar>
    </Router>
  );
};

export default MainRouter;
