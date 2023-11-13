import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeInSeconds > 0) {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }
    }, 1000); 
    return () => clearInterval(timer);
  }, [timeInSeconds]);

  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div>{formatTime()}</div>
      {timeInSeconds === 0 && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;
