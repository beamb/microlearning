import React, {useState} from 'react';

import MainScreen from '../MainScreen';

function LanguageButton() {
    const [counter, setCounter] = useState(0)
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      setCounter(1)
    }

    return (
        <div>
      <a href="/" onClick={handleClick}>
        Java
      </a>
      <div>{counter === 1? <MainScreen></MainScreen> : <p></p>}</div>
      </div>
    );
  }

  export default LanguageButton;