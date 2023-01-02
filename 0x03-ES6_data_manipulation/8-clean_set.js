export default function cleanSet(set, startString) {
  const arr = [];
  let txt = '';
  // is there is a startString it must be a string
  if (startString && typeof startString === 'string') {
    // loop throuth the set to check each element(i) and push the sliced elemnt into arr
    for (const i of set) {
      if (i && i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }

    // separate all emelnts of arr with '-'
    txt = arr.join('-');
  }
  return txt;
}
