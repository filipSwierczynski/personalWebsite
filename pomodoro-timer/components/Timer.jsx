"use client"
import React from 'react'
import { useState,useEffect } from 'react'
const Timer = () => {
    
    const [timerCount,setTimerCount] = useState(60*25);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning,setIsRunning] = useState(false);
    const [pomodoroCompleted,setPomodoroCompleted] = useState(0);
    const [disabledPause,setDisabledPause] = useState(false);

    const [isBreak,setIsBreak] = useState(false);
    const [breakTime, setBreakTime] = useState(5 * 60); // standard 5 minutes break


    useEffect(()=>{
        if(timerCount === 0){
            clearInterval(intervalId);
            setIsRunning(false);
            if(isBreak){
                setIsBreak(false);
                setTimerCount(25 * 60);
                document.body.style.backgroundColor = '';
            } else {
                setIsBreak(true);
                setTimerCount(5 * 60)
                setPomodoroCompleted((prevCount) => prevCount + 1);
                document.body.style.backgroundColor = '#4F6290';
            }
        }
    },[timerCount,intervalId,isBreak,breakTime]);

    useEffect(()=> {
        if(pomodoroCompleted > 0){
            console.log({pomodoroCompleted})
        }
    },[pomodoroCompleted])

    const startTimer = (amount) => {
        if(!isRunning){
            setTimerCount(amount*60)
            const id = setInterval(() => {
                setTimerCount((previousTime) => previousTime - 1)
            }, 1000);
            setIntervalId(id);
        setIsRunning(true);
        setIsBreak(false);
        
        
    }
    }

    const pauseTimer = () => {
        if(timerCount !== 0 ){
            if(isRunning) {
                clearInterval(intervalId);
                setIntervalId(null);
                setIsRunning(false);
            } else {
                const id = setInterval(() => {
                    setTimerCount((previousTime) => previousTime - 1)
                }, 1000);
                setIntervalId(id);
                setIsRunning(true);
            }
        }    
    }


    const startBreak = (amount) => {
        
        if(!isRunning){
            setTimerCount(amount*60)
            const id = setInterval(() => {
                setTimerCount((previousTime) => previousTime - 1)
            }, 1000);
            setIntervalId(id);
        setIsRunning(true);
        setIsBreak(true);
    }
    }

   

    const stopTimer = () => {
        if(isRunning){
            clearInterval(intervalId);
            setIntervalId(null);
            setIsRunning(false);
            setTimerCount(60*25);
            setIsBreak(false);
        } else {
            setTimerCount(60*25)
            clearInterval(intervalId);
            setIntervalId(null);
            setIsBreak(true);
        }
    }

  

  return (
    <div className='container mx-auto p-4'>
        <div>
        
        <div className='text-4xl font-bold mb-4'>{`${Math.floor(timerCount / 60)}:${timerCount % 60 < 10 ? '0' : ''}${timerCount % 60}`}</div>
        <div className='text-3xl font-bold mb-2'>{!isBreak ? "Time to work" : "Relax for a bit"}</div>
        <p className='mb-4'>Sessions Completed: {pomodoroCompleted}</p>
        </div>
        
        <button className='bg-sky-600 hover:bg-sky-800 font-bold py-2 px-4 rounded transition duration-300' onClick={pauseTimer}>Start / Pause</button>
        
        <button className='bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2 transition duration-300' onClick={stopTimer}>Stop / Reset</button>
        <br></br>

        <button className="font-bold py-2 px-4 rounded bg-emerald-700 hover:bg-emerald-500 transition duration-300 mr-3" onClick={()=> startTimer(25)}>25 Minutes</button>
        <button className="font-bold py-2 px-4 rounded bg-emerald-700 hover:bg-emerald-500 transition duration-300 mr-3"  onClick={()=>  startBreak(10)}>10 Minutes Break</button>
        <button className="font-bold py-2 px-4 rounded bg-emerald-700 hover:bg-emerald-500 transition duration-300 mr-3"  onClick={()=>  startBreak(5)}>5 Minutes Break</button>

    
    </div>
  )
}

export default Timer