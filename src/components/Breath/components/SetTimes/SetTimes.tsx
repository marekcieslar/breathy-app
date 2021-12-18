import React, { useState } from 'react';
import { ButtonTypes, InputTypes } from 'enums';
import { Button } from 'components';
import { Input, Checkbox } from 'formComponents';
import { SetTimesState } from 'types';

type SetTimesProps = {
  settings: SetTimesState;
  start: (e: SetTimesState) => void;
};

function SetTimes({ settings, start }: SetTimesProps) {
  const [values, setValues] = useState(settings);

  return (
    <form className="space-y-6">
      <div className="flex flex-wrap">
        <Input
          id="rounds"
          label="Rounds (0 = infinite)"
          min="0"
          setValue={(e) => setValues({ ...values, rounds: e })}
          type={InputTypes.NUMBER}
          value={values.rounds}
        />
        <Checkbox
          checked={values.autoStartNextRound}
          id="auto-start-next-round"
          label="Auto start next round? TODO"
          onChange={(e) => setValues({ ...values, autoStartNextRound: e })}
        />
        <Checkbox
          checked={values.differentRounds}
          id="different-rounds"
          label="Different rounds? TODO"
          onChange={(e) => setValues({ ...values, differentRounds: e })}
        />
      </div>

      <div className="flex">
        <Input
          id="breath-count"
          label="Breath count"
          min="1"
          setValue={(e) => {
            setValues({ ...values, breathCount: e });
          }}
          type={InputTypes.NUMBER}
          value={values.breathCount}
        />
      </div>
      <div className="flex flex-wrap">
        <Input
          id="breath-time-in"
          label="Breath time IN"
          min="1"
          step="0.1"
          setValue={(e) => setValues({ ...values, breathTimeIn: e })}
          type={InputTypes.NUMBER}
          value={values.breathTimeIn}
        />
        <Input
          id="breath-time-out"
          label="Breath time OUT"
          min="1"
          step="0.1"
          setValue={(e) => setValues({ ...values, breathTimeOut: e })}
          type={InputTypes.NUMBER}
          value={values.breathTimeOut}
        />
        <Input
          id="breath-break-empty"
          label="Breath break EMPTY"
          min="0"
          step="0.1"
          setValue={(e) => setValues({ ...values, breathBreakEmpty: e })}
          type={InputTypes.NUMBER}
          value={values.breathBreakEmpty}
        />
        <Input
          id="breath-break-full"
          label="Breath break FULL"
          min="0"
          step="0.1"
          setValue={(e) => setValues({ ...values, breathBreakFull: e })}
          type={InputTypes.NUMBER}
          value={values.breathBreakFull}
        />
      </div>

      <div className="flex flex-wrap">
        <Checkbox
          checked={values.keepFullEnabled}
          id="keep-full-enabled"
          label="Enable keep full after breath hold?"
          onChange={(e) => setValues({ ...values, keepFullEnabled: e })}
        />

        <Input
          disabled={!values.keepFullEnabled}
          id="keep-full-time"
          label="Keep full time"
          min="1"
          setValue={(e) => setValues({ ...values, keepFullTime: e })}
          type={InputTypes.NUMBER}
          value={values.keepFullTime}
        />
      </div>

      <div className="w-full">
        <Button
          onClick={(e) => {
            e.preventDefault();
            start({ ...values });
          }}
          text="START"
          type={ButtonTypes.SUBMIT}
          addClass="w-full mx-0 mt-5"
        />
      </div>
    </form>
  );
}

export default SetTimes;
