import React, { Component } from 'react';
import './App.css';

import WordCard from './WordCard';
import Score from './Score';
class App extends Component {
   word = wordItems();
 render() {
 return (
 <div className="App">
   
  <WordCard value={this.word}/>     
   
 </div>
 );
 }
}

function wordItems() {
  const reptiles = ["hello", "world", "react"];
  var rand = 0
  return reptiles[rand];
}
export default App;
