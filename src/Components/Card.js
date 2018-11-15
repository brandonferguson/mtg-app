import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: []
    };
  }

  //API fetch
  async componentDidMount() {
    /*Pulls cardId from match*/
    const cardId = this.props.match.params.multiverseid;
    /*Updates cardId based off the match parameters*/
    const card = await fetch(
      `https://api.magicthegathering.io/v1/cards/${cardId}`
    );
    const json = await card.json();
    this.setState({ card: json.card });
    /*Resets scroll to top of page*/
    window.scrollTo(0, 0);
  }

  render() {
    const { card } = this.state;

    return (
      <div className="row">
        <div className="cardHeader darkestblue col-lg-12">
          <h1>{card.name}</h1>
        </div>

        <div className="cardInfo midblue col-sm-6">
          <p>Original Set: {card.setName}</p>
          <p>Rarity: {card.rarity}</p>
          <p>Type: {card.type}</p>
          <p>Color: {card.colors}</p>
          <p>Mana Cost: {card.manaCost}</p>
          <p>
            Power/Toughness: {card.power}/{card.toughness}
          </p>
          <p>Text: {card.text}</p>
          <p>
            Flavor Text: <span className="flavor">{card.flavor}</span>
          </p>
        </div>

        <div className="midblue col-sm-6">
          <img src={card.imageUrl} alt={card.name} className="cardImage" />
        </div>
      </div>
    );
  }
}

export default Card;
