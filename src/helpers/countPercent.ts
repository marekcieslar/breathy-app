export default function countPercent(
  a: number,
  b: number,
  fix?: number,
): number {
  const value = (a / b) * 100;

  if (fix) {
    return Number(value.toFixed(fix));
  }

  return value;
}
