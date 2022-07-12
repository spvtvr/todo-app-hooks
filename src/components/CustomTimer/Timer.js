import React, { useEffect, useState } from "react"

const CustomTimer = ({minutes = 0, seconds = 0}) => {
  
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);
  const tick = () => {
    if (paused || over) return;

    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1]);
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  })
  return (
    <>
      { paused
      ? <button className="icon icon-play" onClick={() => setPaused(!paused)}></button>
      : <button className="icon icon-pause" onClick={() => setPaused(!paused)}></button> }
      <span className="timer">
        { `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` }
      </span>
    </>
  )
}

export default CustomTimer;