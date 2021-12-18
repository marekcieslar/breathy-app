import { SetTimesState } from 'types';
import { keyframes } from 'styled-components';
import { countPercent } from 'helpers';

type ConfiguredCircleSettings = {
  time: number;
  firstBreak: number;
  secondBreak: number;
  thirdBreak: number;
};

export function countSettings(
  settingsObject: SetTimesState,
): ConfiguredCircleSettings {
  const breathBreakEmpty = Number(settingsObject.breathBreakEmpty);
  const breathTimeIn = Number(settingsObject.breathTimeIn);
  const breathBreakFull = Number(settingsObject.breathBreakFull);
  const breathTimeOut = Number(settingsObject.breathTimeOut);

  const time =
    breathTimeIn + breathTimeOut + breathBreakEmpty + breathBreakFull;
  const firstBreak = countPercent(breathBreakEmpty, time, 1);
  const secondBreak = countPercent(breathBreakEmpty + breathTimeIn, time, 1);
  const thirdBreak = countPercent(
    breathBreakEmpty + breathTimeIn + breathBreakFull,
    time,
    1,
  );

  return {
    time,
    firstBreak,
    secondBreak,
    thirdBreak,
  };
}

export function generateCircleAnimationKeyframe(
  configured: ConfiguredCircleSettings,
) {
  return keyframes`
  /* break on empty */
  ${configured.firstBreak}% {
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
  }
  /* breath in */
  ${configured.secondBreak}% {
    width: 250px;
    height: 250px;
    background-color: blue;
  }
  /* break on full */
  ${configured.thirdBreak}% {
    width: 250px;
    height: 250px;
    background-color: blue;
  }
  /* breath out */
  100% {
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
  }
`;
}
