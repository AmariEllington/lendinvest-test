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
    return (
      <div>
        {data.map(data => (
          <Loans data={data} key={data.id} />
        ))}
      </div>
    );
  }
}
