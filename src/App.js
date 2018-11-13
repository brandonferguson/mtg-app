import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";

//App components
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import Home from "./Components/Home";
import SingleSet from "./Components/SingleSet";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App row">
          <div className="btn-div">
            {/*<div className="col-sm-1 col-md-2">*/}
            <Header />
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cards/:multiverseid" component={Card} />
              <Route path="/cards" component={Cards} />
              <Route
                path="/sets/:code/"
                render={props => (
                  <SingleSet key={props.match.params.code} {...props} />
                )}
              />{" "}
              <Route component={NotFound} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
