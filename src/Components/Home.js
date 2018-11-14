import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="title darkestblue">Magic: The Gathering Card List</h1>
        </div>
        <div className="midblue">
          <p>
            The main purpose of this exercise is to pull back data from the
            unofficial Magic the Gathering API and display it using React.
          </p>
          <p>
            Currently, the page consists of a drop down list of sets, which will
            bring back all cards from the selected set. This will be updated to
            included pagination At the moment, I am only including the core sets
            as well as expansions. There are unfortunately a number of sets that
            are missing needed items (such as pictures), and, until I have a
            more elegant way to address those issues, I've limited the scope of
            available cards.
          </p>
          <p>
            There is also an unfiltered list of cards under the "All Cards"
            button. This will return all cards available. Functionally, it's the
            same as the data returned from the Set option, but is completely
            unfilterd.
          </p>
          <p>
            Once a list of cards has been provided, any card can be clicked on
            to provide more inforation about the selected card.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
