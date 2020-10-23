import React, {useState} from 'react';
import MainScreen from '../MainScreen';

function ExitButton() {
    const [counter, setCounter] = useState(0)
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      setCounter(1)
    }
  
    return (
        <div>
      <a href="/" onClick={handleClick}>
        Exit Quiz
      </a>
      {counter === 1? <p>false</p>: <MainScreen/>}
      </div>
    );
  }

  export default ExitButton;