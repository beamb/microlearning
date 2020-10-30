import React, { useState } from "react";
import MainScreen from "../../pages/MainScreen";

function ExitButton() {
  const [counter, setCounter] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setCounter(1);
  }

  return (
    <div>
      <button onClick={handleClick}>No thanks</button>
      {counter === 1 ? <p>Should close the pop-up</p> : <p></p>}
    </div>
  );
}

export default ExitButton;
