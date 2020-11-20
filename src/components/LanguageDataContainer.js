import React, { useState } from "react";
import Language from "./Language";
import Quiz from "./Quiz";
// styling
import { MainContainer } from "../styling/Containers";

function LanguageDataContainer() {
  const [selectedLanguage, setLanguage] = useState("");
  console.log(selectedLanguage);

  function handleLanguageSelect(selected) {
    console.log(`The link was clicked for "${selected}"`);
    setLanguage(selected);
    console.log(selectedLanguage);
  }

  return (
    <MainContainer>
      {!selectedLanguage ? (
        <Language handleLanguageSelect={handleLanguageSelect} />
      ) : (
        <Quiz selectedLanguage={selectedLanguage} />
      )}
    </MainContainer>
  );
}

export default LanguageDataContainer;
