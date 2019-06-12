import { Component } from "react";

class Pinger extends Component {
  // Only ping between 7AM and 10PM (15h) because
  // the free dyno up-time on Heroku is approx. 17h/day.
  timeIsRight = () => {
    const today = new Date();
    const time = today.getHours();
    return time >= 7 && time < 22;
  };

  pingMe = () => {
    const twentyMinutesInMS = 1200000;
    setInterval(() => {
      fetch("/api/keepSelfAwake").then();
    }, twentyMinutesInMS);
  };

  render() {
    if (this.timeIsRight()) this.pingMe();
    return "";
  }
}

export default Pinger;