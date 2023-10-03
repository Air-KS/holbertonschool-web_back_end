// Function to safely execute a math function and handle errors
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    // Attempt to execute the provided math function
    queue.push(mathFunction());
  } catch (err) {
    // Add the error message to the queue if an error occurs
    queue.push(`Error: ${err.message}`);
  }
  // Add a processed message to the queue
  queue.push('Guardrail was processed');
  return queue;
}
