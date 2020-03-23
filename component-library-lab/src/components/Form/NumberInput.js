import React, { Component } from "react";
import "./NumberInput.css";


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startValue
    };
  }
  increaseCount = () => {
    let newCount = this.state.count + this.props.value;
    this.setState({
      count: newCount
    });
  };
  decreaseCount = () => {
    let newCount = this.state.count - this.props.value;
    this.setState({
      count: newCount
    });
  };
  render() {
    return (
      <div className={this.props.counter}>
        <button className={this.props.number}
          onClick={this.state.count < this.props.maxValue && this.increaseCount}
        >
          +
        </button>
        <p>{this.state.count}</p>
        <button className={this.props.number}
          onClick={this.state.count > this.props.minValue && this.decreaseCount}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
