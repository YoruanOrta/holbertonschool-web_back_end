const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.trim().split('\n');
    let CSCount = 0;
    let SWECount = 0;
    const csList = [];
    const sweList = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const [firstName, , , field] = row.split(',');
      if (field.trim() === 'CS') {
        CSCount++;
        csList.push(firstName);
      } else if (field.trim() === 'SWE') {
        SWECount++;
        sweList.push(firstName);
      }
    }
    console.log(`Number of students: ${CSCount + SWECount}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
