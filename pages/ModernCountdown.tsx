import { useState, useEffect } from 'react';

interface CountdownProps {
  initialSeconds: number;
}

const ModernCountdown: React.FC<CountdownProps> = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(true); // Track if the timer is running or paused

  useEffect(() => {
    if (!isActive || secondsLeft <= 0) return; // If paused or finished, don't start the interval

    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval
  }, [isActive, secondsLeft]);

  // Convert total seconds to minutes and seconds
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  // Toggle pause/resume
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg shadow-lg">
      <h1 className="text-3xl text-white font-semibold">Countdown Timer</h1>
      <div className="text-6xl font-bold text-white font-mono">
        {formatTime(secondsLeft)}
      </div>
      {secondsLeft === 0 && (
        <p className="text-red-400 text-lg mt-4">Timer</p>
      )}
      <button
        onClick={toggleTimer}
        className={`mt-4 px-4 py-2 rounded-lg ${
          isActive
            ? 'bg-slate-500 hover:bg-zinc-950'
            : 'bg-lime-800 hover:bg-green-600'
        } text-white font-semibold`}
      >
        {isActive ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};

export default ModernCountdown;
