import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: []
    };
  }

  // API Call and setting state to results
  async componentDidMount() {
    const setCode = this.props.match.params.code;
    const pageNum = this.props.match.params.offsetPage;
    const set = await fetch(
      `https://api.magicthegathering.io/v1/cards?set=${setCode}&page=${pageNum}`
    );
    const json = await set.json();
    this.setState({ set: json.cards });
    window.scrollTo(0, 0);
  }

  async componentDidUpdate(prevProps, prevState) {
    const setCode = this.props.match.params.code;
    const pageNum = this.props.match.params.offsetPage;
    if (prevProps.offsetPage !== this.props.match.params.offsetPage) {
      //const set = await fetch(
      //`https://api.magicthegathering.io/v1/cards?set=${setCode}&page=${pageNum}`
      //);
      //const json = await set.json();
      //this.setState({ cset: json.cards });
      console.log(prevProps);
      window.scrollTo(0, 0);
    }
  }

  /*incrementPage = () => {
    this.offsetPage = this.props.match.params.offsetPage + 1;
  };*/

  incrementPage = () => {
    this.setState({ offsetPage: this.props.match.params.offsetPage + 1 });
  };

  render() {
    const { set } = this.state;
    const singleSet = this.state.set.find(
      s => s.set === this.props.match.params.code
    );

    return (
      <div className="row">
        <Link
          to={`/sets/${this.props.match.params.code}/${this.state.offsetPage}`}
        >
          <button
            type="button"
            className="next btn btn-primary"
            onClick={this.incrementPage}
          >
            Next
          </button>
        </Link>
        <div className="col-lg-12 darkestblue title">
          <h1>{singleSet && singleSet.setName}</h1>
        </div>
        {/* ---- Map through cards array to bring back name and image ----*/}
        {set.map(s => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 darkblue"
            key={s.multiverseid}
          >
            <div className="card lightblue">
              <p>
                {s.name} {/*card name */}
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
