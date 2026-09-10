import test from 'node:test';
import assert from 'node:assert/strict';
import { reserver, annuler } from '../src/reservations.mjs';

test('la dernière place peut être réservée, la demande suivante est refusée', () => {
  const historique = [];
  assert.equal(reserver(historique, {
    personne: 'alice', atelier: 'poterie', capacite: 1
  }).statut, 'confirmee');
  assert.throws(() => reserver(historique, {
    personne: 'bob', atelier: 'poterie', capacite: 1
  }), { message: 'Atelier complet' });
  assert.equal(historique.length, 1);
});

test('une annulation libère la place pour une autre personne', () => {
  const historique = [];
  annuler(reserver(historique, {
    personne: 'alice', atelier: 'poterie', capacite: 1
  }));
  reserver(historique, { personne: 'bob', atelier: 'poterie', capacite: 1 });
  assert.deepEqual(historique.map(r => r.statut), ['annulee', 'confirmee']);
});

test('une même personne ne peut pas réserver à nouveau après annulation', () => {
  const historique = [];
  annuler(reserver(historique, {
    personne: 'alice', atelier: 'poterie', capacite: 1
  }));
  assert.throws(() => reserver(historique, {
    personne: 'alice', atelier: 'poterie', capacite: 1
  }), { message: 'Réservation déjà existante' });
  assert.equal(historique.length, 1);
});

test('les ateliers possèdent des capacités indépendantes', () => {
  const historique = [];
  reserver(historique, { personne: 'alice', atelier: 'poterie', capacite: 1 });
  reserver(historique, { personne: 'alice', atelier: 'dessin', capacite: 1 });
  assert.equal(historique.length, 2);
});

test('une capacité nulle refuse la première réservation', () => {
  assert.throws(() => reserver([], {
    personne: 'alice', atelier: 'poterie', capacite: 0
  }), { message: 'Atelier complet' });
});

test('une demande invalide ne modifie pas l’historique', () => {
  for (const demande of [
    { personne: '', atelier: 'poterie', capacite: 1 },
    { personne: 'alice', atelier: '', capacite: 1 },
    { personne: 'alice', atelier: 'poterie', capacite: -1 },
    { personne: 'alice', atelier: 'poterie', capacite: 1.5 }
  ]) {
    const historique = [];
    assert.throws(() => reserver(historique, demande), { message: 'Demande invalide' });
    assert.equal(historique.length, 0);
  }
});
