import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {reducer} from './selectedApp/redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SelectedApp from './selectedApp';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <SelectedApp></SelectedApp>
        </Provider>
      </div>
    );
  }
}

export default App;
