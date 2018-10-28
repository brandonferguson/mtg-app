import React, { Component } from "react";
import Cards from "./Cards";
import Card from "./Card";
import Sets from "./Sets";

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-sm-2">
          <Sets />
        </div>
        <div className="col-sm-10">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
