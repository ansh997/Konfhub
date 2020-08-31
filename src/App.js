import React, { Component } from "react";
import Conferences from "./components/conferences";
import SearchBox from "./components/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      conference: [],
      searchField: ""
    };
  }
  async componentDidMount() {
    const url =
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data["paid"].length);
    // console.log(data.paid[0]);
    this.setState({ conference: data.free });
    // console.log(this.state.conference);
    // this.setState({ conference: data.free });
    this.setState({ conference: this.state.conference.concat(data.paid) });
    // console.log(this.state.conference);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  // transform(items: any[], filterQuery: any): any[] {
  //   if (!filterQuery) return items;
  //   return items.filter(item => item.whateverProperty.toLowerCase().includes(filterQuery.toLowerCase()));
  // }

  render() {
    console.log(this.state);
    const { conference, searchField } = this.state;
    // console.log(conference);
    const filteredCountries = conference.filter((props) =>
      props.confName.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <center>
          <h1>Konfhub</h1>
        </center>
        <SearchBox
          placeholder="Enter conference name ..."
          handleChange={this.handleChange}
        />
        <h4> Conferences: </h4>
        {/* <Conferences conference={this.state.conference} /> */}
        <Conferences conference={filteredCountries} />
      </div>
    );
  }
}

export default App;
