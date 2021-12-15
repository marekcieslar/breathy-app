import React, { useState } from 'react';
import { SetTimesState, HoldBreath } from 'types';

import Circle from './components/Circle';
import Hold from './components/Hold';
import KeepFull from './components/KeepFull';
import Results from './components/Results';
import SectionWrapper from './components/SectionWrapper';
import SetTimes from './components/SetTimes';

enum BreathSection {
  SET_TIMES,
  CIRCLE,
  HOLD,
  KEEP_FULL,
  RESULTS,
}

const initialState: SetTimesState = {
  rounds: '2',
  breathCount: '30',
  breathTimeIn: '2.5',
  breathTimeOut: '1.5',
  breathBreakEmpty: '',
  breathBreakFull: '',
  autoStartNextRound: false,
  differentRounds: false,
  keepFullEnabled: true,
  keepFullTime: '15',
};

function Breath() {
  const [settings, setSettings] = useState(initialState);
  const [visibleSection, setVisibleSection] = useState(BreathSection.SET_TIMES);
  const [results, setResults] = useState<HoldBreath[]>([]);

  const start = (val?: SetTimesState) => {
    if (val) {
      setSettings(val);
    }

    setVisibleSection(BreathSection.CIRCLE);
  };

  const finishBreathings = () => {
    setVisibleSection(BreathSection.HOLD);
  };

  const finishHold = (value: number) => {
    const newResults = [...results, { value, time: Date.now() }];
    setResults(newResults);

    if (settings.keepFullEnabled) {
      setVisibleSection(BreathSection.KEEP_FULL);
    } else {
      setVisibleSection(BreathSection.RESULTS);
    }
  };

  const finishKeepFull = () => {
    setVisibleSection(BreathSection.RESULTS);
  };

  return (
    <>
      <h1 className="text-3xl">Breath component</h1>

      {visibleSection === BreathSection.SET_TIMES && (
        <SectionWrapper>
          <SetTimes settings={settings} start={(val) => start(val)} />
        </SectionWrapper>
      )}

      {visibleSection === BreathSection.CIRCLE && (
        <SectionWrapper>
          <Circle settings={settings} finish={finishBreathings} />
        </SectionWrapper>
      )}

      {visibleSection === BreathSection.HOLD && (
        <SectionWrapper>
          <Hold finish={finishHold} />
        </SectionWrapper>
      )}

      {visibleSection === BreathSection.KEEP_FULL && settings.keepFullEnabled && (
        <SectionWrapper>
          <KeepFull
            finish={finishKeepFull}
            time={Number(settings.keepFullTime)}
          />
        </SectionWrapper>
      )}

      {visibleSection === BreathSection.RESULTS && (
        <SectionWrapper>
          <Results
            results={results}
            rounds={Number(settings.rounds)}
            start={() => start()}
          />
        </SectionWrapper>
      )}
    </>
  );
}

export default Breath;
