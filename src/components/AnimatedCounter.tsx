import { useEffect, useState, type FC } from 'react';

interface AnimatedCounterProps {
  targetNumber: number;
  duration: number;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrentNumber(Math.floor(progress * targetNumber));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return <span>{currentNumber}</span>;
};

export default AnimatedCounter;