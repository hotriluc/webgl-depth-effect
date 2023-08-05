export function mod(a: number, n: number) {
  return a - n * Math.floor(a / n);
}
