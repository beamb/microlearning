import React, { useState } from "react";

import LanguageButton from "./LanguageButton";

function StartQuizButton() {
  const [counter, setCounter] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setCounter(1);
  }

  return (
    <div>
      <button onClick={handleClick}>Yes, let's quiz</button>
      {counter === 1 ? <LanguageButton></LanguageButton> : <p></p>}
    </div>
  );
}

export default StartQuizButton;
