import React from 'react';
import { showTime } from 'helpers';
import { HoldBreath } from 'types';
import { Button } from 'components';
import { ButtonTypes } from 'enums';

type SetTimesProps = {
  results: HoldBreath[];
  start: () => void;
  rounds: number;
};

function countAverageTime(results: HoldBreath[]) {
  if (results.length > 1) {
    const sum = results.reduce((acc, curr) => acc + curr.value, 0);
    return sum / results.length;
  }

  return null;
}

function SetTimes({ results, start, rounds }: SetTimesProps) {
  const average = countAverageTime(results);

  return (
    <div className="relative" style={{ minHeight: '400px' }}>
      <table className="w-full">
        <thead>
          <tr>
            <th>round</th>
            <th>time</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => (
            <tr
              key={`${result.value}${result.time}`}
              className="odd:bg-gray-100 text-center"
            >
              <td>{index + 1}</td>
              <td>{showTime(result.value)}</td>
            </tr>
          ))}

          {average && (
            <tr className="bg-blue-50 text-center">
              <td>average</td>
              <td>{showTime(average)}</td>
            </tr>
          )}
        </tbody>
      </table>

      {rounds > results.length || rounds === 0 ? (
        <Button
          text="Next round"
          addClass="w-full mx-0 absolute bottom-0 left-0"
          type={ButtonTypes.BUTTON}
          onClick={start}
        />
      ) : (
        <p>
          Here will be save button and go to full results page, but for now it
          is in TODO
        </p>
      )}
    </div>
  );
}

export default SetTimes;
