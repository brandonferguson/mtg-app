import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

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
    const setName = this.props.match.params.code;
    const set = await fetch(`https://api.magicthegathering.io/v1/cards?set=${setName}
  
    `);
    const json = await set.json();
    this.setState({ set: json.cards });
    window.scrollTo(0, 0);
  }

  render() {
    const { set } = this.state;

    return (
      <div className="row">
        {/* ---- Map through cards array to bring back name and image ----*/}
        {set.map(s => (
          <div className="card col-sm-3" key={s.multiverseid}>
            {s.name} {/*card name */}
            <Link to={`/cards/${s.multiverseid}`}>
              <img src={s.imageUrl} className="thumbnail" alt={s.name} />
            </Link>
            {/*card image */}
          </div>
        ))}
      </div>
    );
  }
}
export default SingleSet;
