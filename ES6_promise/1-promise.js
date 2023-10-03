// Export the function to be used in other modules.
export default function getFullResponseFromAPI(success) {
  // Return a new promise.
  return new Promise((resolve, reject) => {
    // Check if the "success" argument is true.
    if (success) {
      // Resolve the promise with a success object.
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Rejette la promesse avec un message d'erreur.
      reject(new Error('The fake API is not working currently'))
    }
  });
}
