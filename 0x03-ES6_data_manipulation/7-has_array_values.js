export default function hasValuesFromArray(set, array) {
  let containsArray = false;
  const checkForArr = array;
  for (const array of set) {
    if (array.toString() === checkForArr.toString()) {
      containsArray = true;
      break;
    }
  }
  return console.log(containsArray);
}
