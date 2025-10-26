import { Component } from "react";

class Counter extends Component {
  // constructor(data) {
  //     this.counter = data.counter
  //     this.result = data.number
  // }
  state = {
    counter: 0,
    result: 10,
  };
  addCount = () => {
    // this.state.counter += 1;
    // return this.state.counter;
    // Так не буде працювати (ванільний JS), в React використовують this.setState
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  minusCount = () => {
    this.setState((prevState) => ({ counter: prevState.counter -= 1 }));
  };
  // Методи
  render() {
    return (
      <>
        <p className="counter__text">Counter: {this.state.counter}</p>
        <button className="counter__btn" onClick={this.addCount}>Збільшити</button>
        <button className="counter__btn" onClick={this.minusCount}>Зменшити</button>
      </>
    );
  }
}
export default Counter;
