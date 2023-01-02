export default function getStudentsByLocation(arr, city) {
  return arr.filter((array) => array.location === city);
}
