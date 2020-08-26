import React, { Component } from 'react';
import './App.css';

import WordCard from './WordCard';
class App extends Component {
   word = wordItems();
 render() {
 return (
 <div className="App">
   Hello Player !!
  <br/>
  Choose the right word to get Score
  <WordCard value={this.word}/>     
   ** if you need to change word please refresh page
   <br/>
   *** if need to see Score you can use console
 </div>
 );
 }
}

function wordItems() {
  const stockWord = ["hello", "world", "react","native"];
  var rand = Math.floor(Math.random() * Math.floor(4));
  return stockWord[rand];
}
export default App;
