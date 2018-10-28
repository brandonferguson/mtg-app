import React, { Component } from "react";
import "./index.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  async componentDidMount() {
    const cards = await fetch(
      "https://api.magicthegathering.io/v1/cards?page=1"
    );
    const json = await cards.json();
    this.setState({ cards: json.cards });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="row">
        {cards.map(c => (
          <div className="card col-sm-3">
            {c.name}
            <img src={c.imageUrl} className="thumbnail" />
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
