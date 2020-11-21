import React from "react";
import Language from "./Language";
// styling
import { MainContainer } from "../styling/Containers";

const LanguageDataContainer = (props) => {
  const handleLanguageSelect = (selected) => {
    props.changeLanguage(selected);
  };

  return (
    <MainContainer>
      <Language handleLanguageSelect={handleLanguageSelect} />
    </MainContainer>
  );
};

export default LanguageDataContainer;
