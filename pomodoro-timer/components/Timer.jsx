"use client"
import React from 'react'
import { useState,useEffect } from 'react'
const Timer = () => {
    const [timerInterval, setTimerInterval] = useState(2);
    const [timerCount,setTimerCount] = useState(timerInterval*5);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning,setIsRunning] = useState(false);


    useEffect(()=>{
        if(timerCount === 0){

            setIsRunning(false);

        }
    },[timerCount]);

    const startTimer = () => {
        
        if(!isRunning){
            const id = setInterval(() => {
                setTimerCount((previousTime) => previousTime - 1)
            }, 1000);
            setIntervalId(id);
            
        
        setIsRunning(true);

    }
    }

  return (
    <div>
        <div>
        
        <div>{`${Math.floor(timerCount / 60)}:${timerCount % 60 < 10 ? '0' : ''}${timerCount % 60}`}</div>

        </div>
        
        <button onClick={startTimer}>Pause</button>
        <button onClick={startTimer}>Stop/Reset</button>


        <button onClick={startTimer}>25 Minutes</button>
        <button>10 Minutes Break</button>
        <button>5 Minutes Break</button>

    </div>
  )
}

export default Timer