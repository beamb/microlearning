import React from "react";
import Language from "./Language";
// styling
import { MainContainer } from "../styling/Containers";

const LanguageDataContainer = ({ setLanguage }) => {
  return (
    <MainContainer>
      <Language setLanguage={setLanguage} />
    </MainContainer>
  );
};

export default LanguageDataContainer;
