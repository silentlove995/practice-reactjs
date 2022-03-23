import React, {useEffect, useState } from 'react'
import ShowTimerFc from './ShowTimerFc'

export const ClockPageFc = (props) => {

  const [timer, setTimer] = useState("--:--")
  const [counter, setCounter] = useState(0)
  let interval

  // component did mount
  useEffect(() => {
    console.log("userEffect called")
    start()

    return () => {
      console.log("Use effect")
      clearInterval(interval)
    }
  }, [])

  // component did mount + update
  useEffect(() => {
    document.title = timer
    return () =>{
      console.log("useEffect 2")
    }
  }, [timer])

  const start = function () {
    interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000)
  }

  return (
    <div>
      <h3>Clock Page</h3>
      <ShowTimerFc timer={timer} />
      {/* <button onClick={start}>Click</button> */}
      <button onClick={() => {setCounter(counter + 1)}}>Increase</button>
      <p>{counter}</p>
    </div>
  )
}
