// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2]; // command-line argument

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let output = 'This is the list of our students\n';

  try {
    const data = await new Promise((resolve, reject) => {
      const logs = [];
      const originalLog = console.log;

      console.log = (msg) => logs.push(msg); // temporarily captures logs
      countStudents(databaseFile)
        .then(() => {
            console.log = originalLog; // restore log
          resolve(logs.join('\n'));
        })
        .catch((err) => {
          console.log = originalLog;
          reject(err);
        });
    });

    output += data;
    res.set('Content-Type', 'text/plain');
    res.send(output);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
