// @ts-check
import { reserver } from '../src/reservations.mjs';

/** @type {import('../src/reservations.mjs').Reservation[]} */
const historique = [];

const reservation = reserver(historique, {
  personne: 'alice',
  atelier: 'poterie',
  capacite: 3
});

console.log(reservation.statut);
