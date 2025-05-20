process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdin.pause();
  });
} else {
  let input = '';

  process.stdin.on('data', (chunk) => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    const name = input.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
  });
}
