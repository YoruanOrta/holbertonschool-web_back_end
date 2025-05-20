import { readFileSync } from 'fs';

function countStudents(path) {
  try {
    const data = readFileSync(path, 'utf8');
    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    lines.shift(); // Remove header
    const studentsByField = {};

    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstname);
      }
    }

    const totalStudents = Object.values(studentsByField)
      .reduce((acc, group) => acc + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default countStudents;
