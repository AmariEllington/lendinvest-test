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
      amount: parseInt(this.state.amount) - parseInt(event.target.input.value)
    });
  };

  userInvest = event => {
    this.toggleModal();
    this.onSubmit(event);
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
      <div className="loanCard">
        <div className="loanInformation">
          <h2>{title}</h2>
          <ul>
            <li>Tranche: {tranche}</li>
            <li>Available: {this.state.amount}</li>
            <li>Annualised Return: {annualised_return}</li>
            <li>Term remaining: {term_remaining}</li>
            <li>LTV: {ltv}</li>
            <li>Amount: {amount}</li>
          </ul>
        </div>
        <button onClick={this.toggleModal}>INVEST</button>
        {modalShowing === true ? (
          <Modal data={this.props.data} onSubmit={this.userInvest} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
