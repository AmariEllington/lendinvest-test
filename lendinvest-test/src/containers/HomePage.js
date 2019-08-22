import React, { Component } from "react";
import Data from "../data/current-loans";
import Loans from "../components/Loans";

export default class HomePage extends Component {
  state = {
    data: [],
    investmentAmount: 0
  };

  componentDidMount() {
    // const change = data.map(data => parseInt(data.amount.replace(/,/g, "")));
    // let sum = change.reduce((change, val) => {
    //   return change + val;
    // }, 0);
    // let final = sum / change.length;
    this.setState({
      data: Data.loans,
      investmentAmount: Data.amount
    });
  }

  decreaseAmountForInvestment = (event, data) => {
    const decreasedInvestmentAmount =
      this.state.investmentAmount - event.target.input.value;
    this.setState({
      investmentAmount: decreasedInvestmentAmount
    });
  };

  render() {
    const { data, investmentAmount } = this.state;

    //// clean up ///////////

    //////// clean up ////////////
    return (
      <div className="homePage">
        <div className="title">Current Loans</div>
        <div className="totalAmount">
          Total Amount Available For Investment: {investmentAmount}
        </div>
        <div className="DisplayLoans">
          {data.map(data => (
            <Loans
              data={data}
              key={data.id}
              decreaseAmountForInvestment={event =>
                this.decreaseAmountForInvestment(event)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
