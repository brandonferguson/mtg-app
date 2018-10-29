import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//App components
import Cards from "./Cards";
import Card from "./Card";
import Sets from "./Sets";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App row">
          <div className="col-sm-2">
            <Sets />
          </div>
          <div className="col-sm-10">
            <Route exact path="/" component={Cards} />
            <Route path="/card" component={Card} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
