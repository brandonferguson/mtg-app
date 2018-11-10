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
            unofficial Magic the Gathering API.
          </p>
          <p>
            Currently, the page consists of a drop down list of sets, which will
            bring back the cards from the set. This is currently limited at the
            first 100 cards. This will be updated to included pagination, as
            well as the ability to filter by color and rarity. At the moment, I
            am only including the core sets as well as expansions. There are
            unfortunately a number of sets that are missing needed items (such
            as pictures), and, until I have a more elegant way to address those
            issues, I've limited the scope of the available cards.
          </p>
          <p>
            We also have an unfiltered list of cards under the "All Cards"
            button. This will return all cards available, though pagination is
            rough and ends up erroring when it hits certain cards, causing the
            component to not update as expected. This will be fixed by using
            Router instead of updating state, though likely not before this
            class is finished.
          </p>
          <p>
            Once a list of cards has been provided, any card can be clicked on
            to provide more inforation about that card.
          </p>
          <p>
            I also plan on including a search field, allowing the ability to
            bring back any card that starts with the searched value.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
