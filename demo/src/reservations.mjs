import { CONFIRMEE, ANNULEE } from './statuts.mjs';

/** Règles de réservation de la démonstration en mémoire. @module reservations */

/**
 * @typedef {Object} Reservation
 * @property {string} personne Identifiant fictif de la personne.
 * @property {string} atelier Identifiant fictif de la séance.
 * @property {'confirmee'|'annulee'} statut Une annulation conserve la réservation.
 */

/**
 * Réserve une place et conserve la réservation dans la liste reçue.
 * Une seconde réservation reste interdite après annulation.
 * @param {Reservation[]} reservations Historique partagé pendant un scénario.
 * @param {Object} demande Identifiants et capacité de la séance.
 * @param {string} demande.personne Identifiant non vide.
 * @param {string} demande.atelier Identifiant non vide.
 * @param {number} demande.capacite Nombre entier de places, supérieur ou égal à zéro.
 * @returns {Reservation} La réservation créée.
 * @throws {Error} Demande invalide, réservation déjà existante ou atelier complet.
 * @example
 * reserver([], { personne: 'alice', atelier: 'poterie', capacite: 1 });
 */
export function reserver(reservations, { personne, atelier, capacite }) {
  if (
    typeof personne !== 'string' || !personne.trim() ||
    typeof atelier !== 'string' || !atelier.trim() ||
    !Number.isSafeInteger(capacite) || capacite < 0
  ) {
    throw new Error('Demande invalide');
  }

  if (reservations.some(r => r.personne === personne && r.atelier === atelier)) {
    throw new Error('Réservation déjà existante');
  }

  const occupees = reservations.filter(
    r => r.atelier === atelier && r.statut === CONFIRMEE
  ).length;
  if (occupees >= capacite) {
    throw new Error('Atelier complet');
  }

  const reservation = { personne, atelier, statut: CONFIRMEE };
  reservations.push(reservation);
  return reservation;
}

/**
 * Libère une place en conservant la réservation dans l'historique.
 * Répéter l'annulation ne crée pas de nouvelle modification métier.
 * @param {Reservation} reservation Réservation issue de cette démonstration.
 * @returns {void}
 */
export function annuler(reservation) {
  reservation.statut = ANNULEE;
}
