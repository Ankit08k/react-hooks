import React,{useContext} from 'react'

import { Firstname, Lastname } from './First';


export default function Third() {
    const x=useContext(Firstname);
    const y=useContext(Lastname);
  return (
    <div>
        First Name is {x}
        <br></br>
        Second Name is {y}

    </div>
  )
}
