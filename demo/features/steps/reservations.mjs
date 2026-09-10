import { Before, Given, When, Then } from '@cucumber/cucumber';
import assert from 'node:assert/strict';
import { reserver, annuler } from '../../src/reservations.mjs';

Before(function () {
  this.historique = [];
  this.resultat = undefined;
  this.erreur = undefined;
});

Given('un atelier de {int} place', function (capacite) {
  this.capacite = capacite;
});

Given(/^(Alice|Bob) possède une réservation (confirmée|annulée)$/, function (personne, statut) {
  const reservation = reserver(this.historique, {
    personne, atelier: 'poterie', capacite: this.capacite
  });
  if (statut === 'annulée') annuler(reservation);
});

When('Alice réserve une place', function () {
  try {
    this.resultat = reserver(this.historique, {
      personne: 'Alice', atelier: 'poterie', capacite: this.capacite
    });
  } catch (erreur) {
    this.erreur = erreur;
  }
});

Then('sa réservation est confirmée', function () {
  assert.equal(this.erreur, undefined);
  assert.equal(this.resultat?.statut, 'confirmee');
});

Then('la demande est refusée avec {string}', function (message) {
  assert.equal(this.resultat, undefined);
  assert.equal(this.erreur?.message, message);
});

Then("l'historique contient {int} réservation(s)", function (nombre) {
  assert.equal(this.historique.length, nombre);
});
