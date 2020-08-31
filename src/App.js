import React, { Component } from "react";
import Conferences from "./components/conferences";

class App extends Component {
  constructor() {
    super();
    this.state = {
      conference: []
    };
  }
  async componentDidMount() {
    const url =
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data["paid"].length);
    console.log(data.paid[0]);
    this.setState({ conference: data.paid });
    this.setState({ conference: data.free });
  }
  render() {
    return (
      <div>
        <h1>Konfhub</h1>
        <h4> conferences: </h4>
        <Conferences conference={this.state.conference} />
      </div>
    );
  }
}

export default App;
