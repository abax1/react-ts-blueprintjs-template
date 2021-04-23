import { useState } from 'react';
import logo from "./logo.svg";
import { Button, Intent, Spinner } from "@blueprintjs/core";
import "./App.scss";
import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  const [appState, setAppState] = useState("");

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
        <Spinner intent={Intent.PRIMARY} />
        <CustomButton
          intent={Intent.PRIMARY}
          fill={false}
          onClick={(e: any) => {
            console.log("Hello", e);
            setAppState("Button Clicked")
          }}
        >
          Custom
        </CustomButton>
        <p>{appState}</p>
      </header>
    </div>
  );
}

export default App;
