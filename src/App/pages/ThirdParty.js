import React, { Component } from "react";

class ThirdParty extends Component {
  state = {
    data: "",
  };

  getData = () => {
    fetch("/api/cloudinary")
      .then(res => res.json())
      .then(({ cloudinaryResponse }) =>
        this.setState({ data: cloudinaryResponse })
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

export default ThirdParty;
