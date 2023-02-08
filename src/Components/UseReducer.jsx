import React from 'react' //name export
import { useReducer } from 'react';
// import { useState } from 'react'; //default export

const initialstate=0;
const reducer=(state,action)=>{
  
    console.log(state,action);
    if(action.type==="INCR")
    {
        return state+1;
    } 
    if(action.type==="DECR")
    {
        return state-1;
    }


    return state;
}

export default function UseReducer() {
//    const[count,setCount]=useState(0);
const [state, dispatch]= useReducer(reducer, initialstate)

//    const increment=()=>{
//     setCount(count+1);

// }           
// const decrement=()=>{
//     setCount(count-1);
// }
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>{dispatch({type:"INCR"})}}>INCREMENT</button>
        <button onClick={()=>{dispatch({type:"DECR"})}}>DECREMENT</button>

    </div>
  )
}

//make calculator
