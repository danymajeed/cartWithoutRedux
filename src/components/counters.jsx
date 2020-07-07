import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.resetButton()}
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
  resetButton() {
    if (this.props.counters.length !== 0)
      return (
        <div className="text-center">
          <button
            onClick={this.props.onReset}
            className=" btn-sm btn-primary m-2"
          >
            Reset
          </button>
        </div>
      );
    else {
      return <h1 className="">Cart is Empty!</h1>;
    }
  }
}

export default Counters;
