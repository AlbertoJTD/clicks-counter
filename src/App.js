import './App.css';
import logo from './images/spiderman.png'

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Logo' />
        Clicks counter
      </div>

    </div>
  );
}

export default App;
