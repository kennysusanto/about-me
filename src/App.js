import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Powered by react.js</code>
        </p>
      </header>
      
    </div>
  );
}

export default App;
