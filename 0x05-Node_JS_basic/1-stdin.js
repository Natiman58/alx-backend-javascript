// a simple script that uses process stdin

process.stdout.write('Welcome to Holberton School, what is your name?\n');
// if the data is readable
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
// in the end of the read file
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
