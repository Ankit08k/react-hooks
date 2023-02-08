import React from 'react'
import { useRef } from 'react';

export default function Userefexample() {
    const inputRef= useRef();
    function handleRef()
    {
        console.log("Input ref is :",inputRef)
        inputRef.current.focus();
        //inputRef.current.value="Fill it";
        console.log("Enter value is",inputRef.current.value);
        //inputRef.current.style.display="none";
        inputRef.current.style.color="red";
        
    }

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleRef}>Click</button>
    </div>
  )
}
