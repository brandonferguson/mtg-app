import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: [],
      offsetPage: 1,
      totalPages: ""
    };
  }

  // API Call and setting state to results
  async componentDidMount() {
    const setCode = this.props.match.params.code;
    const set = await fetch(
      `https://api.magicthegathering.io/v1/cards?set=${setCode}&pageSize=12`
    );
    const json = await set.json();
    const total = set.headers.get("Total-Count");
    const pageSize = set.headers.get("Page-Size");
    const totalPages = total / pageSize;
    this.setState({ set: json.cards, totalPages: totalPages });
    window.scrollTo(0, 0);
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   const setCode = this.props.match.params.code;
  //   const pageNum = this.props.match.params.offsetPage;
  //   if (prevProps.offsetPage !== this.props.match.params.offsetPage) {
  //     //const set = await fetch(
  //     //`https://api.magicthegathering.io/v1/cards?set=${setCode}&page=${pageNum}`
  //     //);
  //     //const json = await set.json();
  //     //this.setState({ cset: json.cards });
  //     console.log(prevProps);
  //     window.scrollTo(0, 0);
  //   }
  // }

  /*incrementPage = () => {
    this.offsetPage = this.props.match.params.offsetPage + 1;
  };*/

  fetchSet = async page => {
    const setCode = this.props.match.params.code;
    const set = await fetch(
      `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=12&set=${setCode}`
    );
    const json = await set.json();
    this.setState({ set: json.cards, offsetPage: page });
  };

  decrementPage = () => {
    var offsetPage = this.state.offsetPage - 1;
    if (offsetPage >= 1) {
      this.fetchSet(offsetPage);
    }
  };

  incrementPage = () => {
    var offsetPage = this.state.offsetPage + 1;
    if (offsetPage <= this.state.totalPages) {
      this.fetchSet(offsetPage);
    }
  };

  render() {
    const { set } = this.state;
    const singleTitle = this.state.set.find(
      s => s.set === this.props.match.params.code
    );

    return (
      <div className="row">
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
        <div className="col-lg-12 darkestblue title">
          <h1>{singleTitle && singleTitle.setName}</h1>
        </div>
        {/* ---- Map through cards array to bring back name and image ----*/}
        {set.map(s => (
          <div className="col-sm-12 col-md-6 col-lg-3 darkblue" key={s.id}>
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
