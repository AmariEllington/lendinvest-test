import React, { Component } from "react";
import Data from "../data/current-loans";
import Loans from "../components/Loans";

export default class HomePage extends Component {
  state = {
    data: Data.loans
  };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Loans />
      </div>
    );
  }
}
