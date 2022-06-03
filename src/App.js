import './App.css';
import logo from './images/spiderman.png'
import Button from './components/Button'

function App() {

  const handleClick = () => {
    console.log('Click')
  }

  const restartCounter = () => {
    console.log('Restart')
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Logo' />
        Clicks counter
      </div>
      
      <div className='main-container'>
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
