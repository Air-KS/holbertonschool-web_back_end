// Function to determine the fastest download source
export default function loadBalancer(chinaDownload, USDownload) {
  // Return the promise that resolves/rejects first
  return Promise.race([chinaDownload, USDownload]);
}
