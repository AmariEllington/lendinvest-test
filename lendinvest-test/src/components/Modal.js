import React, { Component } from "react";
const prettyMilliseconds = require("pretty-ms");
export default class Modal extends Component {
  render() {
    const {
      title,
      tranche,
      available,
      annualised_return,
      term_remaining,
      ltv,
      amount,
      id
    } = this.props.data;

    const termRemainingToInteger = parseInt(term_remaining);
    return (
      <div>
        Invest In Loan: {title}
        Amount Available: {available}
        Loan Ends In:{" "}
        {prettyMilliseconds(termRemainingToInteger, { verbose: true })}
        <form onSubmit={this.props.onSubmit}>
          <label> Investment Amount: (£)</label>
          <input type="number" name="input" />
          <input type="submit" name="invest" />
        </form>
      </div>
    );
  }
}
