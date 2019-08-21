import React, { Component } from "react";
import Modal from "../components/Modal";

export default class Loans extends Component {
  state = {
    modalShowing: false,
    amount: parseFloat(this.props.data.amount.replace(/,/g, ""))
  };

  toggleModal = () => {
    console.log("toggling modal");
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      amount: parseInt(this.state.amount) + parseInt(event.target.input.value)
    });
    console.log(event.target.input.value);
  };

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

    const { modalShowing } = this.state;
    return (
      <div>
        <div>
          Title: {title}, Tranche: {tranche}, Available:{this.state.amount},
          Annualised_return: {annualised_return}, Term_remaining:
          {term_remaining}, LTV: {ltv}, Amount:{amount}
        </div>
        <button onClick={this.toggleModal}>INVEST</button>
        {modalShowing === true ? (
          <Modal data={this.props.data} onSubmit={this.onSubmit} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
