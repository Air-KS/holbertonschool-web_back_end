// Function to handle the response from an API call
export default function handleResponseFromAPI(promise) {
  // Accept a promise as an argument
  return promise
    // If the promise resolves successfully
    .then(() => ({
      // Return a success response object
      status: 200,
      body: 'success',
    }))
    // If the promise is rejected
    .catch(() =>
      // Return a new Error object
      Error()
    )
    // After either resolving or rejecting the promise
    .finally(() =>
      // Log a message indicating that a response was received from the API
      console.log('Got a response from the API')
    );
}
