// Exporte la fonction pour être utilisée dans d'autres modules.
export default function getFullResponseFromAPI(success) {
  // Retourne une nouvelle promesse.
  return new Promise((resolve, reject) => {
    // Vérifie si l'argument "success" est vrai.
    if (success) {
      // Résout la promesse avec un objet de succès.
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      // Rejette la promesse avec un message d'erreur.
      reject(new Error('The fake API is not working currently'))
    }
  });
}
