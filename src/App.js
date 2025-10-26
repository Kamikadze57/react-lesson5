import './App.css';
import Counter from './components/Counter';
import { Component } from 'react';

class App extends Component {
  render() {
    return(
    <div className="app">
      <Counter/>
    </div>
    )
  };
}

export default App;
