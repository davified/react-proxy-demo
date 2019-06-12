import React, { Component } from "react";

class Secrets extends Component {
  state = {
    data: "",
  };

  getData = () => {
    fetch("/api/thirdParty")
      .then(res => res.json())
      .then(({ thirdPartyResponse }) =>
        this.setState({ data: thirdPartyResponse })
      );
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>Get data</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default Secrets;
