import redis from 'redis';

// Créer un client Redis
const client = redis.createClient();

// Événement de connexion réussie
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Événement d'erreur de connexion
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});
