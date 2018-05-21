import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './actions'
import Footer from './components/Footer'
// 1. to get state from your redux store
// 2. Dispatch (calling/fire) a redux action

// store.dispatch(incrementCounter())

class App extends Component {

  handleIncrement(amount) {
    if(amount > 5) {
      this.props.dispatch(incrementCounter(amount))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Count is: {this.props.count}</h1>
        <button onClick={() => this.handleIncrement(1)} >Increment</button>
        <button onClick={() => this.props.dispatch(decrementCounter(1))}>Decrement</button>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    count: state.counterReducer.count
  }
}

export default connect(mapStateToProps)(App);
