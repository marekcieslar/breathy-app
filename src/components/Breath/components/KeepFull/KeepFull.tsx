import React, { useEffect, useState } from 'react';
import { showTime } from 'helpers';
import { Button } from 'components';
import { ButtonTypes } from 'enums';
import './keep-full-style.css';

type KeepFullProps = {
  time: number;
  finish: () => void;
};

function KeepFull({ finish, time }: KeepFullProps) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      let left = 0;
      setTimeLeft((tl) => {
        left = tl - 0.1;
        return left;
      });
      if (left <= 0) {
        finish();
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      role="none"
      className="relative w-full px-0"
      style={{
        height: '400px',
      }}
      onClick={() => finish()}
    >
      <div
        className="w-full bg-gray-300 h-full"
        style={{
          animationName: 'decrease-width',
          animationDuration: `${time}s`,
          animationTimingFunction: 'linear',
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        {showTime(timeLeft)}
      </div>
      <Button
        text="Dismiss"
        addClass="w-full mx-0 absolute bottom-0 left-0"
        type={ButtonTypes.BUTTON}
        onClick={() => finish()}
      />
    </div>
  );
}

export default KeepFull;
