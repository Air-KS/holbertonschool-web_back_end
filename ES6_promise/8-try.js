// Function to perform division
export default function divideFunction(numerator, denominator) {
  // Check if denominator is zero
  if (denominator === 0) {
    // Throw an error for division by zero
    throw new Error('cannot divide by 0');
  }
  // Return the result of the division
  return numerator / denominator;
}
