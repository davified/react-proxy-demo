import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import ThirdParty from "./pages/ThirdParty";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          {/* <Route path="/cloudinary" component={ThirdParty} /> */}
        </Switch>
        <ThirdParty />
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
