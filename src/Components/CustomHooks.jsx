import React from 'react'
import useCustomCounter from './useCustomCounter'

export default function UseCustomHook() {
    const data=useCustomCounter();
  return (
    <div>
      Count : {data.count}
      <br>
      </br>
      <button type="button" onClick={data.increment}>CLICK TO INCREASE</button>
    </div>
  )
}