import React from 'react'
import { createContext } from 'react';
import Second from './Second';
 const Firstname=createContext();
 const Lastname=createContext();

export default function First() {
   
  return (
    <div>
        <Firstname.Provider value="sagar">
        <Lastname.Provider value="Chauhan">
        <Second/>
        </Lastname.Provider>
        </Firstname.Provider>

    </div>
  )
}
export {Firstname, Lastname};
