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
  }

  render() {
    const { sets } = this.state;

    return (
      <div className="row">
        <ul>
          {sets.map(s => (
            <li key={s.code}>
              <Link to={`/sets/${s.code}/`}>{s.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sets;
