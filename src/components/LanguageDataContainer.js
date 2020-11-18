import React, { useState } from "react";
import Language from "./Language";
import Quiz from "./Quiz";

// styling
import { MainContainer, LanguageContainer } from "../styling/Containers";

function LanguageDataContainer() {
  const [selectedLanguage, setLanguage] = useState("");
  console.log(selectedLanguage);

  function handleLanguageSelect(selected) {
    console.log(`The link was clicked for "${selected}"`);
    setLanguage(selected);
  }

  return (
    <MainContainer>
      <LanguageContainer>
        {!selectedLanguage ? (
          <React.Fragment>
            <p>Which language do you want me to test you in?</p>
            <Language handleLanguageSelect={handleLanguageSelect} />
          </React.Fragment>
        ) : (
          <Quiz selectedLanguage={selectedLanguage} />
        )}
      </LanguageContainer>
    </MainContainer>
  );
}

export default LanguageDataContainer;
