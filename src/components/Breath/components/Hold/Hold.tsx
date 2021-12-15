import React, { useEffect, useState } from 'react';
import { Button } from 'components';
import { ButtonTypes } from 'enums';
import { showTime } from 'helpers';

type HoldProps = {
  finish: (e: number) => void;
};

function Hold({ finish }: HoldProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((bl) => bl + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="none"
      className="relative"
      style={{ height: '400px' }}
      onClick={() => finish(time)}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        {showTime(time)}
      </div>
      <Button
        text="Stop"
        type={ButtonTypes.BUTTON}
        onClick={() => finish(time)}
        addClass="w-full absolute bottom-0 mx-0"
      />
    </div>
  );
}

export default Hold;
