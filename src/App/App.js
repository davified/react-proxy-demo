import React, { Component } from "react";
import "./App.css";
import Pinger from "./Pinger";
import Secrets from "./Secrets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome!</h3>
        <Pinger />
        <Secrets />
      </div>
    );
  }
}

export default App;
