export default function getAuniqueKey(i: number): number {
  const date = Number(new Date());
  return i + date
}