import { Component } from "react";

class DigitalClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log("componentDidMount");

    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Digital Clock</h2>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

class App extends Component {
  state = {
    showClock: true
  };

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleClock}>
          {this.state.showClock ? "Hide" : "Show"} Clock
        </button>

        {this.state.showClock && <DigitalClock />}
      </div>
    );
  }
}

export default App;
