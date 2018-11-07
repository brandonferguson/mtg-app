import React, { Component } from "react";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Magic: The Gathering Card Archive</h1>
        <p>
          The idea behind this project is to pull back data relatging to all
          Magic the Gathering cards, regardless of set or color. The end goal is
          to have a searchable page that will return cards based off set, color,
          name, or type. This site uses the unoffical Magic API.
        </p>
      </div>
    );
  }
}

export default Home;
