import React, { Component } from "react";
import ModalContainer from "../components/Modal";
import Modal from "react-responsive-modal";

export default class Loans extends Component {
  state = {
    modalShowing: false,
    stateAvailable: parseFloat(this.props.data.available.replace(/,/g, ""))
  };

  onOpenModal = () => {
    this.setState({ modalShowing: true });
  };

  onCloseModal = () => {
    this.setState({ modalShowing: false });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      stateAvailable:
        parseInt(this.state.stateAvailable) - parseInt(event.target.input.value)
    });
    console.log(event.target.input.value);
  };

  userInvest = event => {
    this.onCloseModal();
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

    const { modalShowing, stateAvailable } = this.state;
    return (
      <div className="loanCard">
        <div className="loanInformation">
          <h2>{title}</h2>
          <ul>
            <li>Tranche: {tranche}</li>
            <li>Available: {stateAvailable}</li>
            <li>Annualised Return: {annualised_return}</li>
            <li>LTV: {ltv}</li>
            <li />
          </ul>
        </div>
        <button onClick={this.onOpenModal} className="investButton">
          INVEST
        </button>

        <Modal open={modalShowing} center onClose={this.onCloseModal}>
          <ModalContainer
            data={this.props.data}
            stateAvailable={stateAvailable}
            modalShowing={modalShowing}
            onSubmit={this.userInvest}
          />
        </Modal>
      </div>
    );
  }
}
