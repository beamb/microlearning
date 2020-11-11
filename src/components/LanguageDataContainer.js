import React, { useState } from "react";
import Language from "./Language";
import Quiz from "./Quiz";

function LanguageDataContainer() {
  const [selectedLanguage, setLanguage] = useState("blabla");
  console.log(selectedLanguage);

  function handleLanguageSelect() {
    console.log(`The link was clicked for "${selected}"`);
    setLanguage();
  }

  return (
    <div>
      <Language handleLanguagSelect={handleLanguageSelect()} />
      <Quiz selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default LanguageDataContainer;
