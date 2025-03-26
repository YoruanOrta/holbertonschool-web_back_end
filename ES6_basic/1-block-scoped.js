export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Variables inside this block are unused and can be removed
  }

  return [task, task2];
}
