import logo from './logo.svg';
import { Button, Intent, Spinner } from "@blueprintjs/core";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button intent={Intent.PRIMARY}>Button</Button>
        <Button intent={Intent.NONE}>Button</Button>
        <Spinner intent={Intent.PRIMARY}/>
      </header>
    </div>
  );
}

export default App;
