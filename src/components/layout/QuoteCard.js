import React from "react";

class QuoteCard extends React.Component {
  render() {
    const coverages = this.props.coverages;

    const listCoverages = coverages.map(coverage => (
      <li key={coverage.toString()}>{coverage}</li>
    ));

    return (
      <div className="card">
        <div className="img-container align-middle" align="center">
          <img
            className="card-img-top img-sizing"
            src={this.props.img}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <ul className="card-text">{listCoverages}</ul>
        </div>
        <div className="align-bottom my-4" align="center">
          <button type="button" className="learn-more-btn">
            Learn More
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteCard;
