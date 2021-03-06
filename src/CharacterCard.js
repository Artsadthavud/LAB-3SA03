import React, { useState, useEffect, useRef} from 'react';
export default function CharacterCard(props) {

   const [active,setActive] = useState(false);
   const attemptRef = useRef(props.attempt);
   const scoreRef = useRef(props.score);

   const activate = () => {
       if(!active){
         setActive(true)
         props.activationHandler(props.value)  
       }
       
   }
   useEffect(()=> {
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
        else if(scoreRef.current != props.score && props.score < 6){
            setActive(false);
            scoreRef.current = props.score
        }
   })
   const className = `card ${active ? 'activeCard': ''}`

    return (
    <div className={className} onClick={activate}>{props.value}</div>
    )
    }
   