import React, { Component } from "react";
const prettyMilliseconds = require("pretty-ms");
export default class Modal extends Component {
  render() {
    const { title, term_remaining } = this.props.data;
    const { stateAvailable } = this.props;

    const termRemainingToInteger = parseInt(term_remaining);
    return (
      <div>
        <div className="modalTitle">Invest In Loan</div>
        <br />
        {title}
        <br />
        <br />
        Amount Available: £{stateAvailable}
        <br />
        Loan Ends In:{" "}
        {prettyMilliseconds(termRemainingToInteger, { verbose: true })}
        <br />
        <br />
        <form onSubmit={this.props.onSubmit}>
          <label> Investment Amount: (£)</label>
          <br />
          <br />
          <input type="number" name="input" className="modalInput" />
          <button type="submit" name="invest" className="modalInvestButton">
            INVEST
          </button>
        </form>
      </div>
    );
  }
}
