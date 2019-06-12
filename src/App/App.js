import React, { Component } from "react";
import "./App.css";
import Secrets from "./Secrets";

class App extends Component {
  startPinger = () => {
    fetch("/api/keepSelfAwake")
      .then(res => res.json())
      .then(({ message }) => console.log(message));
  };

  render() {
    this.startPinger();

    return (
      <div className="App">
        <h3>Big fan of...</h3>
        <Secrets />
      </div>
    );
  }
}

export default App;
