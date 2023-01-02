export default function getStudentIdsSum(arr) {
  const initialValue = 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
}
