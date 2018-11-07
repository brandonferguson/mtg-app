import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: [],
      offsetPage: 1
    };
  }

  // API Call and setting state to results
  async componentDidMount() {
    const setCode = this.props.match.params.code;
    const set = await fetch(
      `https://api.magicthegathering.io/v1/cards?set=${setCode}&page=${
        this.state.offsetPage
      }`
    );
    const json = await set.json();
    this.setState({ set: json.cards });
    window.scrollTo(0, 0);
  }

  render() {
    const { set } = this.state;

    return (
      <div className="row">
        <div className="col-lg-12 darkestblue">
          <h1>test</h1>
        </div>
        {/* ---- Map through cards array to bring back name and image ----*/}
        {set.map(s => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 lightblue"
            key={s.multiverseid}
          >
            <div className="card">
              <p>
                {s.name} {/*card name */}
              </p>
              <p>
                {s.setName} {/*set name */}
              </p>
              <Link to={`/cards/${s.multiverseid}`}>
                <img src={s.imageUrl} className="thumbnail" alt={s.name} />{" "}
                {/*card image */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default SingleSet;
