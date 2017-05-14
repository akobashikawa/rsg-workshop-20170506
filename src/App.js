import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import NameInput from './NameInput';
import NameButtons from './NameButtons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      counter: 0
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.reset = this.reset.bind(this);
  }

  changeHandler(name) {
    this.setState((prevState, props) => ({
      name: name,
      counter: prevState.counter + 1
    }));
  }

  reset() {
    this.setState({
      name: '',
      counter: 0
    });
  }

  render() {
    return (
      <div className="App">
        <NameButtons 
          onChange={this.changeHandler} 
          onReset={this.reset}/>
        <NameInput
          name={this.state.name}
          onChange={this.changeHandler}
        />

        {this.state.name && (
          <div>
            <Hello name={this.state.name}/>
            <div>
              Counter: {this.state.counter}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
