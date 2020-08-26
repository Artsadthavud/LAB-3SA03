import React, { Component,useState } from 'react';

import './App.css';

import WordCard from './WordCard';
  
class App extends Component {
   word = wordItems();
  
 render() {

 return (
   
 <div className="App">
   <h2>Hello Player!!</h2>
  <br/>
  Choose the right word to get New word
  <WordCard value={this.word}/>     
   ** if you need to change word you can press the botton re-word
   <br/>
   <button type="button" onClick={ refreshPage }> <span>re-word</span> </button> 
   <br/>
   *** if need to see your lose Score you can use console
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
 </div>
 );
 }
}

function refreshPage(){ 
  window.location.reload(); 
}
function wordItems() {
  const stockWord = ["hello", "world", "react","native","engineer","dota2","start","refresh","hint","school"];
  var rand = Math.floor(Math.random() * Math.floor(10));
  return stockWord[rand];
}


export default App;
