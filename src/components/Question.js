import React, { useState, useEffect } from "react";
import { database } from "../firebase";

const Question = () => {
    const [questionsFromDB, setQuestions,
        answersFromDB, setAnswers] = useState([]);
    const currentQuestion = 0;

    const fetchData = async () => {
        const data = await database.collection("questions")
        .where("language", "==", "java").get();
        setQuestions(data.docs.map(doc => doc.data()));
        //setAnswers(questionsFromDB.map(answersFromDB => answersFromDB.answer.data()))
      }

    useEffect(() => {      
      fetchData();
      }, []);
    
    return (
        <>
            <div>
                {questionsFromDB.map((quest) => {
                    return <div key={quest.qid}>
                        <p>Question: {quest.description}</p>
                        <p>Language: {quest.language}</p>
                        <p>Level: {quest.level}</p>
                    </div>
                })}
            </div>
        </>
    );
};

export default Question;