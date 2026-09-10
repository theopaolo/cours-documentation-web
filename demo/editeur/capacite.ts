/**
 * Calcule le nombre de places encore disponibles pour l’affichage.
 *
 * @remarks
 * Les arguments sont supposés être des entiers positifs ou nuls déjà validés.
 * Cette fonction ne réserve aucune place et ne contrôle pas les accès concurrents.
 *
 * @param capacite - Nombre total de places de la séance.
 * @param confirmees - Nombre de réservations qui occupent une place.
 * @returns Le nombre de places restantes, ramené à zéro si la capacité est dépassée.
 * @example
 * placesRestantes(8, 6) // 2
 */
export function placesRestantes(capacite: number, confirmees: number): number {
  return Math.max(0, capacite - confirmees);
}
