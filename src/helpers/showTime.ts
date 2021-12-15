export default function showTime(seconds: number) {
  const moreThan10min = seconds / 60 > 10;
  return new Date(seconds * 1000)
    .toISOString()
    .substring(moreThan10min ? 14 : 15, 21);
}
