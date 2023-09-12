/**
 * Modify the function taskBlock so that the variables aren’t
 * overwritten inside the conditional block.
 *
 * @param {boolean} trueOrFalse - Value that determines how tasks are modified.
 * @return {[boolean, boolean]}
 */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
