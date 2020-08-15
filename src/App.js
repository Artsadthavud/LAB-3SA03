import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
class App extends Component {
   word = "Hello";
 render() {
 return (
 <div className="App">
   {
     Array.from(this.word).map((c, i) => <CharacterCard value = {c} key={i}/>)
   }
      
 </div>
 );
 }
}
export default App;
