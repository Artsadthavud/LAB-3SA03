import React, { Component } from 'react';
import './App.css';

import WordCard from './WordCard';
import Score from './Score';
class App extends Component {
   word = "Hello";
 render() {
 return (
 <div className="App">
  <WordCard value={this.word}/>     
   
 </div>
 );
 }
}
export default App;
