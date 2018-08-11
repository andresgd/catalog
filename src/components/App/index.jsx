import React, { Component } from 'react';
import logo from '../../logo.svg';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
   }

  componentDidMount() {
    axios.get('api_source/products.json')
      .then( response => {
        this.setState({
          productList: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillUnmount() {}

  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    const prodList = this.state.productList.map( (item) =>
      <li key={item.id}>{item.name} => {this.state.counter}</li>
    )
    return (
      <div className="App">
        <header className="App__header App__header--color-red">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Welcome to React</h1>
        </header>
        <p className="App__intro App__intro--weight-600">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.incrementCounter}>hi</button>
        <ul>
          {prodList}
        </ul>
      </div>
    );
  }
}

export default App;
