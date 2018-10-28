import React, { Component } from "react";
import "./index.css";

class Sets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  async componentDidMount() {
    const sets = await fetch("https://api.magicthegathering.io/v1/sets");
    const json = await sets.json();
    this.setState({ sets: json.sets });
  }

  render() {
    const { sets } = this.state;

    return (
      <div className="row">
        {sets.map(s => (
          <div>
            <ul>
              <li>
                <a
                  href={`https://api.magicthegathering.io/v1/cards?page=1&set=${
                    s.code
                  }`}
                >
                  {s.name}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Sets;
