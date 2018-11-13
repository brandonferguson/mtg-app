import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      offsetPage: 1,
      totalPages: ""
    };
  }
  // API Call and setting state to results
  async componentDidMount() {
    const cards = await fetch(
      `https://api.magicthegathering.io/v1/cards?pageSize=12`
    );
    const json = await cards.json();
    const total = cards.headers.get("Total-Count");
    const pageSize = cards.headers.get("Page-Size");
    const totalPages = total / pageSize;
    this.setState({ cards: json.cards, totalPages: totalPages });
    window.scrollTo(0, 0);
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.offsetPage !== this.state.offsetPage) {
  //     const cards = await fetch(
  //       `https://api.magicthegathering.io/v1/cards?page=${
  //         this.state.offsetPage
  //       }`
  //     );
  //     const json = await cards.json();
  //     this.setState({ cards: json.cards });
  //   }
  // }

  fetchCards = async page => {
    const cards = await fetch(
      `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=12`
    );
    const json = await cards.json();
    this.setState({ cards: json.cards, offsetPage: page });
  };

  decrementPage = () => {
    var offsetPage = this.state.offsetPage - 1;
    if (offsetPage >= 1) {
      this.fetchCards(offsetPage);
    }
  };

  incrementPage = () => {
    var offsetPage = this.state.offsetPage + 1;
    if (offsetPage <= this.state.totalPages) {
      this.fetchCards(offsetPage);
    }
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
            <div className="col-sm-12 col-md-6 col-lg-3 lightblue" key={c.id}>
              <div className="card">
                {c.name} {/*card name */}
                <Link to={`/cards/${c.multiverseid}`}>
                  <img src={c.imageUrl} className="thumbnail" alt={c.name} />
                </Link>
                {/*card image */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
