export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    // eslint-disable-next-line no-throw-literal
    throw 'cannot divide by 0';
  } else {
    return (numerator / denominator);
  }
}
