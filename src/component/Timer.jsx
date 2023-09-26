import React from 'react'
import { useState, useEffect } from "react";

   
const SetTimeOut = () => {
  const [seconds, setSeconds] = useState(10);
  const [active, setActive] = useState(false);

  if(active && seconds>0){
    setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000);
  }
  

  

  const start =() =>{
    setActive(true)
  }
  const pause=()=>{
    setActive(false)
  }
  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>pause</button>
    </div>
  );
};

 

export default SetTimeOut;