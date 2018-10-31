import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: []
    };
  }

  //API fetch
  async componentDidMount() {
    const cardId = this.props.match.params.multiverseid;
    const card = await fetch(
      `https://api.magicthegathering.io/v1/cards/${cardId}` /*Updates cardId based off the match parameters*/
    );
    const json = await card.json();
    this.setState({ card: json.card });
  }

  render() {
    const { card } = this.state;

    return (
      <div className="row">
        <div className="header col-sm-12">
          <h1>{card.name}</h1>
        </div>

        <div className="cardInfo col-sm-6">
          <p>Original Set: {card.setName}</p>
          <p>Rarity: {card.rarity}</p>
          <p>Type: {card.type}</p>
          <p>Color: {card.colors}</p>
          <p>Cost: {card.manaCost}</p>
          <p>
            Power/Toughness: {card.power}/{card.toughness}
          </p>
          <p>Text: {card.text}</p>
        </div>

        <div className="cardImage col-sm-6">
          <img src={card.imageUrl} alt={card.name} />
        </div>
        {/*
        {singleCard.map(c => (
          <div className="col-sm-3">{c.name}</div>
        ))}
        */}
      </div>
    );
  }
}

export default Card;
