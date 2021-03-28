import logo from './logo.svg';
import './App.css';
import Title from './Title';

function App() {
  return (
    
    <div className="app">
      <div className="menu">
        <ul>
          <li class="menu-left">ICON</li>
          <li class="menu-right">Contact</li>
          <li class="menu-right">Certifications</li>
          
        </ul>
      </div>
      
      <div className="content">
        <div className="title">
          <Title />
          <h1>Kenny Susanto</h1>
          <p>
            <code>Powered by react.js</code>
          </p>
        </div>
        
        <div className="logo">
          <div className="ripple"></div>
          <img src={logo} className="content-logo" alt="logo" />
          
        </div>
      </div>
    </div>
  );
}

export default App;
