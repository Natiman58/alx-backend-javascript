// a simple script that uses process stdin
process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');

// if the process is connected to terminal
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    process.on('exit', () => {
      console.log('This important software is now closing');
    });
  });
}
