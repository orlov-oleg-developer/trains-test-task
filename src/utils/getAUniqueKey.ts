export default function getAUniqueKey(i: number): number {
  const date = Number(new Date());
  return i + date
}