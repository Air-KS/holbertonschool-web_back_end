/**
 * Modify the function taskBlock so that the variables aren’t
 * overwritten inside the conditional block.
 *
 * @param {boolean} trueOrFalse - Value that determines how tasks are modified.
 * @return {[boolean, boolean]}
 */
export default function taskBlock(trueOrFalse) {
  const task = trueOrFalse ? true : false;
  const task2 = trueOrFalse ? false : true;

  return [task, task2];
}
