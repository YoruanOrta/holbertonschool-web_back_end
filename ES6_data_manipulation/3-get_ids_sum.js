export default function getIdsSum(data) {
  return data.reduce((acc, { id }) => acc + id, 0);
}
