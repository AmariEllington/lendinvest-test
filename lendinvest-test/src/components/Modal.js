import React, { Component } from "react";

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

    return (
      <div>
        Invest In Loan: {title}
        Amount Available: {available}
        Loan Ends In: {term_remaining}
        <form onSubmit={this.props.onSubmit}>
          <label> Investment Amount: (£)</label>
          <input type="number" name="input" />
          <input type="submit" name="invest" />
        </form>
      </div>
    );
  }
}
