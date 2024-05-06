import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is Heading</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            this my first react app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>React Application</h2>
      </header>
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
