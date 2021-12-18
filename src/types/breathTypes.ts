export type SetTimesState = {
  rounds: string;
  breathCount: string;
  breathTimeIn: string;
  breathTimeOut: string;
  breathBreakEmpty: string;
  breathBreakFull: string;
  autoStartNextRound: boolean;
  differentRounds: boolean;
  keepFullEnabled: boolean;
  keepFullTime: string;
};

export type HoldBreath = {
  time: number;
  value: number;
};
