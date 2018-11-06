import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Sets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  async componentDidMount() {
    const sets = await fetch("https://api.magicthegathering.io/v1/sets/");
    const json = await sets.json();
    this.setState({ sets: json.sets });
    window.scrollTo(0, 0);
  }

  render() {
    const { sets } = this.state;

    let filterSets = sets.filter(sets => {
      return sets.type === "expansion" || sets.type === "core";
    });

    return (
      <div className="row">
        {/*<ul>*/}
        <div className="dropdown">
          <button
            className="btn btn-lg btn-primary dropdown-toggle"
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
            {filterSets.map(s => (
              <li key={s.code}>
                <Link to={`/sets/${s.code}/`} className="dropdown-item">
                  {s.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        {/*</ul>*/}
      </div>
    );
  }
}

export default Sets;
