import React, { Component } from "react";
import "./App.css";
import Pinger from "./Pinger";
import Secrets from "./Secrets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pinger />
        <h3>Big fan of...</h3>
        <Secrets />
      </div>
    );
  }
}

export default App;
