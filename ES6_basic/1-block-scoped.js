/**
 * Modify the function taskBlock so that the variables aren’t
 * overwritten inside the conditional block.
 *
 * @param {boolean} trueOrFalse - Value that determines how tasks are modified.
 * @return {[boolean, boolean]}
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = true;
    const newTask2 = false;
    return [newTask, newTask2];
  }

  return [task, task2];
}
