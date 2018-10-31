import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App components
import Cards from "./Cards";
import Card from "./Card";
import Sets from "./Sets";
import Home from "./Home";
import SingleSet from "./SingleSet";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App row">
          <div className="col-sm-2">
            <Sets />
          </div>
          <div className="col-sm-10">
            <Switch>
              <Route exact path="/" component={Cards} />
              <Route path="/cards/:multiverseid" component={Card} />
              <Route path="/cards" component={Cards} />
              <Route path="/sets/:code" component={SingleSet} />
              {/*<Route component={NotFound} />*/}
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
