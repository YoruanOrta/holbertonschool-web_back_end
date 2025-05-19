// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});

// Cuando el usuario termina (Ctrl+D o fin de stream)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});