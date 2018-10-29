import React, { Component } from "react";
import "./index.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }
  // API Call and setting state to results
  async componentDidMount() {
    const cards = await fetch(
      "https://api.magicthegathering.io/v1/cards?page=1&set=SOI"
    );
    const json = await cards.json();
    this.setState({ cards: json.cards });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="row">
        {/* ---- Map through cards array to bring back name and image ----*/}
        {cards.map(c => (
          <div className="card col-sm-3">
            {c.name} {/*card name */}
            <img src={c.imageUrl} className="thumbnail" alt={c.name} />{" "}
            {/*card image */}
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
