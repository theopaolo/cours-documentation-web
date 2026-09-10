import { reserver, annuler } from './reservations.mjs';

const historique = [];
const reservation = reserver(historique, {
  personne: 'alice', atelier: 'poterie', capacite: 1
});
console.log('Réservation créée :', reservation.statut);
annuler(reservation);
console.log('Après annulation :', reservation.statut);
try {
  reserver(historique, { personne: 'alice', atelier: 'poterie', capacite: 1 });
} catch (erreur) {
  console.log('Nouvelle demande :', erreur.message);
}
