import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const interval=10;
export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaning, setTimeRemaning] = useState(targetTime*1000);
  const timer = useRef();
  const dialog = useRef(); 

  const timerIsActive=timeRemaning > 0 && timeRemaning < targetTime * 1000;

  function handelStart() {
    timer.current =setInterval(() => {
        setTimeRemaning((prev)=>prev-interval)
    }, interval);
  }
  function handelStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  if(timeRemaning <=0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handelRestart(){
    setTimeRemaning(targetTime*1000)
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaning={timeRemaning}
        onRestart={handelRestart}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handelStop : handelStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
