import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "./firebase";
import { v4 as uuid } from "uuid";
import { useCollectionData } from "react-firebase-hooks/firestore";

  // Create question database
  const COLLECTION = "questions";

  const addData = (description, level, language, text1, is_correct1,text2, is_correct2, text3, is_correct3, text4, is_correct4) => {
    const qid = uuid();
    database.collection(COLLECTION)
    .add({
        qid: qid,
        description: description,
        level: level,
        language:language,
        answer: [{
          option1: [{
            text:text1,
            is_correct:is_correct1
        }],
        option2: [{
          text:text2,
          is_correct:is_correct2
        }],
        option3: [{
          text:text3,
          is_correct:is_correct3
        }],
        option4: [{
          text:text4,
          is_correct:is_correct4
        }],
        }]
        /*correct_answer: correct_answer,
        incorrect_answer1: incorrect_answer1,
        incorrect_answer2: incorrect_answer2,
        incorrect_answer3: incorrect_answer3,*/
    })
    .then((newDocument) => {
        console.log("New document created with ID ", newDocument.id);
    })
    .catch((error) => {
        console.error(error.message);
    });
  };


export const LoggedInPrompt = () => {
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [is_correct1, setCorrect1] = useState("");
  const [is_correct2, setCorrect2] = useState("");
  const [is_correct3, setCorrect3] = useState("");
  const [is_correct4, setCorrect4] = useState("");
  // We're using the same hook here as in App for getting info about our user
  const [user] = useAuthState(firebaseAppAuth);
  // We're using this hook to get collection-data from firestore
  const [questions, loading, error] = useCollectionData(
    database.collection(COLLECTION)
  );

  const handleAllData = () => {
    addData(description, level, language, text1, is_correct1,text2, is_correct2, text3, is_correct3, text4, is_correct4);
    setDescription("");
    setLevel("");
    setLanguage("");
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setCorrect1("");
    setCorrect2("");
    setCorrect3("");
    setCorrect4("");
  }

  // A few handler functions for dealing with inputs from user
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleLevelChange = (event) => setLevel(event.target.value);
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleText1 = (event) => setText1(event.target.value);
  const handleText2 = (event) => setText2(event.target.value);
  const handleText3 = (event) => setText3(event.target.value);
  const handleText4 = (event) => setText4(event.target.value);
  const handleIsCorrect1 = (event) => setCorrect1(event.target.value);
  const handleIsCorrect2 = (event) => setCorrect2(event.target.value);
  const handleIsCorrect3 = (event) => setCorrect3(event.target.value);
  const handleIsCorrect4 = (event) => setCorrect4(event.target.value);


  const handleSignOut = () => firebaseAppAuth.signOut();

  // When data is still loading, we will show nothing to the user
  // We could also show a spinner or a "loading" text instead
  if (loading) {
    return null;
  }

  // If the hook catches an error, we will see that here and log it
  if (error) {
    console.error(error.message);
    return <p>An error occurred!</p>;
  }

return (
  <div>
    <p>Hello, {user.displayName}</p>
    <p>Add a question:</p>
    <ul>
    <li> <input value={description} onChange={handleDescriptionChange} placeholder="Description"/> </li>
    <li> <input value={level} onChange={handleLevelChange} placeholder="Level"/> </li>
    <li> <input value={language} onChange={handleLanguageChange} placeholder="Language"/> </li>
    <li> <input value={text1} onChange={handleText1} placeholder="Option 1"/> </li>
    <ul><li> <input value={is_correct1} onChange={handleIsCorrect1} placeholder="True or False?"/></li></ul>
    <li> <input value={text2} onChange={handleText2} placeholder="Option 2"/> </li>
    <ul><li> <input value={is_correct2} onChange={handleIsCorrect2} placeholder="True or False?"/></li></ul>
    <li> <input value={text3} onChange={handleText3} placeholder="Option 3"/> </li>
    <ul><li> <input value={is_correct3} onChange={handleIsCorrect3} placeholder="True or False?"/></li></ul>
    <li> <input value={text4} onChange={handleText4} placeholder="Option 4"/></li>
    <ul><li> <input value={is_correct4} onChange={handleIsCorrect4} placeholder="True or False?"/></li></ul>
     </ul> 
    <button onClick={handleAllData}>Add Question</button>
    <br />
    <button onClick={handleSignOut}>Sign out</button>
  </div>
);
}