import './App.css';
import logo from './images/spiderman.png';
import Button from './components/Button';
import Counter from './components/Counter';

import { useState } from 'react';

function App() {

  const [clicksNumber, setClicksNumber] = useState(0);

  const handleClick = () => {
    setClicksNumber(clicksNumber + 1);
  }

  const restartCounter = () => {
    setClicksNumber(0);
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Logo' />
        Clicks counter
      </div>
      
      <div className='main-container'>
        <Counter 
          clicksNumber = { clicksNumber }
        />

        <Button 
          text = 'Click'
          isRestartButton = { false }
          handleClick = { handleClick }
        />

        <Button 
          text = 'Restart'
          isRestartButton = { true }
          handleClick = { restartCounter  }
        />
      </div>

    </div>
  );
}

export default App;
