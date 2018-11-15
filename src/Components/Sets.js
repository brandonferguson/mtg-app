import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  //API call to return list of sets
  async componentDidMount() {
    const sets = await fetch("https://api.magicthegathering.io/v1/sets/");
    const json = await sets.json();
    this.setState({ sets: json.sets });
    window.scrollTo(0, 0);
  }

  render() {
    const { sets } = this.state;

    //Filters out any set that is not an "expansion" or "core"
    let filterSets = sets.filter(sets => {
      return sets.type === "expansion" || sets.type === "core";
    });

    return (
      <div className="row">
        <div className="dropdown">
          <button
            className="btn btn-primary btn-lg dropdown-toggle headers-btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sets
          </button>
          <div
            className="dropdown-menu scrollable-menu"
            aria-labelledby="dropdownMenuButton"
          >
            {/* Map to populate the dropdown list */}
            {filterSets.map(s => (
              <span key={s.code}>
                <Link to={`/sets/${s.code}`} className="dropdown-item">
                  {s.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sets;
