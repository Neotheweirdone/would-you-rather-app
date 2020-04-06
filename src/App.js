import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Home from './components/Home';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <div className="App">
        {/*<Login />*/}
      <Home/>
      </div>
    );
  }
}



export default connect()(App);


