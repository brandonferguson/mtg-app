import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      offsetPage: 1
    };
  }
  // API Call and setting state to results
  async componentDidMount() {
    const cards = await fetch("https://api.magicthegathering.io/v1/cards");
    const json = await cards.json();
    this.setState({ cards: json.cards });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.offsetPage !== this.state.offsetPage) {
      const cards = await fetch(
        `https://api.magicthegathering.io/v1/cards?page=${
          this.state.offsetPage
        }`
      );
      const json = await cards.json();
      this.setState({ cards: json.cards });
    }
  }

  decrementPage = () => {
    this.setState({ offsetPage: this.state.offsetPage - 1 });
  };

  incrementPage = () => {
    this.setState({ offsetPage: this.state.offsetPage + 1 });
  };

  render() {
    const { cards } = this.state;

    return (
      <div>
        <div className="buttons">
          <button
            type="button"
            className="prev btn btn-primary"
            onClick={this.decrementPage}
          >
            Prev
          </button>
          <button
            type="button"
            className="next btn btn-primary"
            onClick={this.incrementPage}
          >
            Next
          </button>
        </div>
        <div className="row">
          {/* ---- Map through cards array to bring back name and image ----*/}
          {cards.map(c => (
            <div className="card col-sm-3" key={c.multiverseid}>
              {c.name} {/*card name */}
              <Link to={`/cards/${c.multiverseid}`}>
                <img src={c.imageUrl} className="thumbnail" alt={c.name} />
              </Link>
              {/*card image */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
