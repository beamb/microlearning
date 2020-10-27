import React, {useState} from 'react';

import MainScreen from '../../pages/MainScreen';

function LanguageButton() {
    const [counter, setCounter] = useState(0)
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      setCounter(1)
    }

    return (
        <div>
      <p>Which language do you prefer?</p>
    
      <button onClick={handleClick}>
        Java
      </button>
      <button onClick={handleClick}>
        JavaScript
      </button>
      <button onClick={handleClick}>
        Python
      </button>
      <div>{counter === 1? <MainScreen></MainScreen> : <p></p>}</div>
      </div>
    );
  }

  export default LanguageButton;