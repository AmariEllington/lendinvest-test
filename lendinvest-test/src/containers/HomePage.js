import React, { Component } from "react";
import Data from "../data/current-loans";
import Loans from "../components/Loans";

export default class HomePage extends Component {
  state = {
    data: [],
    investmentAmount: 0
  };

  componentDidMount() {
    this.setState({
      data: Data.loans,
      investmentAmount: parseFloat(Data.loans[0].amount.replace(/,/g, ""))
    });
  }

  decreaseAmountForInvestment = event => {
    const decreasedInvestmentAmount =
      this.state.investmentAmount - event.target.input.value;
    this.setState({
      investmentAmount: decreasedInvestmentAmount
    });
  };

  render() {
    const { data, investmentAmount } = this.state;

    return (
      <div className="homePage">
        <div className="title">Current Loans</div>
        <div className="totalAmount">
          Total Amount Available For Investment: £{investmentAmount}
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
