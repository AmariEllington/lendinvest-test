import React, { Component } from "react";
import Data from "../data/current-loans";
import Loans from "../components/Loans";

export default class HomePage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: Data.loans
    });
  }

  render() {
    const { data } = this.state;

    //// clean up ///////////

    const change = data.map(data => parseInt(data.amount.replace(/,/g, "")));

    let sum = change.reduce((change, val) => {
      return change + val;
    }, 0);
    let final = sum / change.length;
    console.log(final);
    //////// clean up ////////////
    return (
      <div className="homePage">
        <div className="title">Current Loans</div>
        <div className="totalAmount">
          Total Amount Available For Investment: {final}
        </div>
        <div className="DisplayLoans">
          {data.map(data => (
            <Loans data={data} key={data.id} />
          ))}
        </div>
      </div>
    );
  }
}
