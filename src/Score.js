import React , {useRef} from 'react';
export default function Score(props){
const ScoreBoard = useRef(props.attempt) ;


    return <div> 
        {
            Array.from(ScoreBoard).map((c, i) => <Score value={c} key={i}/>)
        }
    </div>
}