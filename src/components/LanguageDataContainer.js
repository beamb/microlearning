import React, { useState } from "react";
import Language from "./Language";
import Quiz from "./Quiz";

// styling
import { MainContainer, LanguageContainer } from "../styling/Containers";

class LanguageDataContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue: "java",
    };
  }

  handleOnChange(e) {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    const { selectValue } = this.state;

    return (
      <MainContainer>
        <LanguageContainer>
          <Language handleOnChange={this.handleOnChange.bind(this)} />
          <Quiz selectValue={selectValue} />
        </LanguageContainer>
      </MainContainer>
    );
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     selectLanguage: "", // use this as default
  //   };
  // }

  // handleOnChange(e) {
  //   this.setState({
  //     selectLanguage: e.target.value,
  //   });
  // }

  // render() {
  //   const { selectValue } = this.state;

  //   return (
  //     <div>
  //       <Language handleOnChange={this.handleOnChange.bind(this)} />
  //       <Quiz selectLanguage={selectLanguage} />
  //     </div>
  //   );
  // }
}

//   return (
//     <MainContainer>
//       <LanguageContainer>
//         <p>Which language do you want me to test you in?</p>
//         <Language handleLanguageSelect={this.handleLanguageSelect} />
//         <Quiz selectedLanguage={this.selectedLanguage} />
//       </LanguageContainer>
//     </MainContainer>
//   );
// }

export default LanguageDataContainer;
