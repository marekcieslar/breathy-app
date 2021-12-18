import React, { useEffect, useState } from 'react';
import { SetTimesState } from 'types';
import styled from 'styled-components';
import { Button } from 'components';
import { ButtonTypes } from 'enums';
import {
  countSettings,
  generateCircleAnimationKeyframe,
} from './CircleHelpers';

type CircleParams = {
  settings: SetTimesState;
  finish: () => void;
};

function Circle({ settings, finish }: CircleParams) {
  const configured = countSettings(settings);
  const circleMove = generateCircleAnimationKeyframe(configured);
  const [breathsLeft, setBreathsLeft] = useState(Number(settings.breathCount));
  const [lastBreathsLeft, setLastBreathsLeft] = useState(0);

  const AnimatedCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${circleMove} ${configured.time}s linear infinite;
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      let val = 0;
      setBreathsLeft((bl) => {
        val = bl - 1;
        return val;
      });
      if (val < 4 && val > 0) {
        setLastBreathsLeft(val);
      } else if (val <= 0) {
        setLastBreathsLeft(0);
        clearInterval(interval);
        finish();
      }
    }, configured.time * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" style={{ height: '400px' }}>
      <div>{breathsLeft}</div>
      <AnimatedCircle />
      {lastBreathsLeft > 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
          {lastBreathsLeft}
        </div>
      )}
      <Button
        text="Enough"
        addClass="w-full mx-0 absolute bottom-0 left-0"
        type={ButtonTypes.BUTTON}
        onClick={() => finish()}
      />
    </div>
  );
}

export default Circle;
