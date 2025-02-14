import {React,useState,useEffect} from 'react';

const ProgressBar = ({ timer }) => {
    const [remainingTime,setRemaininTime]=useState(timer)
    useEffect(()=>{
    const interval=setInterval(()=>{
        setRemaininTime((prevTime) =>prevTime -10);
    },10)

    return ()=>{
        clearInterval(interval);
    }
    },[])

    return (
        <progress value={remainingTime} max={timer}/>
    );
};

export default ProgressBar;