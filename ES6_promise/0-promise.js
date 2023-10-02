// Exporte une fonction qui simule une réponse API
export default function getResponseFromAPI() {
  // Retourne une promesse
  return new Promise((resolve) => {
    // Résout la promesse après 1 seconde
    setTimeout(() => resolve("Réponse de l'API"), 1000);
  });
}
