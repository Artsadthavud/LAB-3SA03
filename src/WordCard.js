import React,{useState} from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word =>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        score: 1,
        guess : '',
        completed: false
    }
}

export default function WordCard(props){

const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c =>{
            console.log(`${c} has been activated`)

            let guess = state.guess + c
            setState({...state,guess})

            if(guess.length == state.word.length){
                if(guess == state.word){
                    console.log('yeah you win !! ')
                    setState({...state ,guess: '',score: state.score +1})
                    console.log('yeah your win score = %d',state.score)
                }
                else{
                    console.log('reset, next attempt try again')
                    setState({...state, guess: '' ,attempt: state.attempt +1})
                    console.log('yeah your lose score = %d',state.attempt)
                }
            }
    }
    return (
        <div>
             {
                state.chars.map((c, i) => 
                <CharacterCard value = {c} key={i} activationHandler = {activationHandler} attempt ={state.attempt} score={state.score}/>)
             }
        </div>
    )
}