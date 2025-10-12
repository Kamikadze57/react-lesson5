import { Component } from "react";

class Counter extends Component {
  // constructor(data) {
  //     this.counter = data.counter
  //     this.result = data.number
  // }
  state = {
    counter: 1,
    result: 10,
  };
  addCount = () => {
    // this.state.counter += 1;
    // return thix.state.counter;
    // Так не буде працювати (ванільний JS), в React використовують this.setState
    this.setState({counter: 2})
  };
  // Методи
  render() {
    return (
      <>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.addCount}>Збільшити</button>
        <button onClick={this.minusCount}>Зменшити</button>
      </>
    );
  }
}
export default Counter;
