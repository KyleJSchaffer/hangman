import React, { Component } from "react";
import ScreenControllerRedux from './ScreenController/ScreenControllerRedux';
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='content-container'>
        <h1>Hangman Time Trial</h1>
        <ScreenControllerRedux />
      </div>
    )
  }
}
export default App;