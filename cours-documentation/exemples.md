# Exemples, fichiers exécutables et corrigés

Utilise cette page pour préparer les manipulations et comparer les productions des groupes. Les exemples concernent Réserve ta place. Leur transposition à un autre projet demande de vérifier ses propres règles.

## 1. Une réponse utile au support

Question : « Alice a annulé, il reste une place, pourquoi ne peut-elle pas réserver ? »

Réponse : « L’annulation libère la place, mais conserve sa réservation. Le service refuse une nouvelle création pour la même personne et la même séance. Une autre personne peut prendre la place. »

Faire retrouver l’exemple refusé dans les scénarios, puis sa raison dans l’ADR. Si la réponse n’est pas acceptable pour le métier, noter une demande d’évolution.

## 2. Un classement Diátaxis

| Document proposé | Classement | Question du lecteur |
| --- | --- | --- |
| Créer sa première réservation avec le kit | Tutoriel | Comment apprendre le fonctionnement ? |
| Relancer les scénarios après modification | Guide pratique | Comment accomplir cette tâche ? |
| Paramètres et erreurs de reserver | Référence | Quelle valeur peut être passée ? |
| Conservation des annulations | Explication | Pourquoi avoir choisi ce comportement ? |

Le classement porte sur l’intention de la page. Une FAQ mêlant toutes ces intentions gagnera souvent à renvoyer vers des pages ciblées.

## 3. Une règle précise

Remplacer « les annulations sont bien gérées » par « une annulation conserve la réservation et libère sa place. Répéter l’annulation conserve le statut annulé. »

Pour vérifier la seconde phrase, l’exercice du guide d’animation ajoute un test qui appelle deux fois annuler sur la même réservation.

## 4. Une procédure vérifiable

Le [README complet](../demo/README.md) est le document à essayer. Deux personnes doivent retrouver le dossier de départ, les prérequis et le résultat attendu sans explication supplémentaire.

Le programme principal doit afficher successivement une réservation confirmée, une réservation annulée et le refus d’une nouvelle création.

## 5. Une architecture lisible

La [vue de contexte](visuels/c4-contexte.svg) permet à une personne extérieure de nommer les utilisateurs et le service de courriel. La [vue de conteneurs](visuels/c4-conteneurs.svg) distingue le navigateur, le serveur et PostgreSQL. Ce sont des modèles de l’application fictive, pas une découverte automatique du kit.

Source utilisée pour la vue de contexte, incluse automatiquement dans le site :

<!-- inclure: cours-documentation/visuels/c4-contexte.mmd -->

En lecture Markdown directe, ouvrir le [fichier source](visuels/c4-contexte.mmd).

## 6. Du MCD au modèle relationnel

Une Personne peut n’avoir aucune réservation. Une Réservation concerne exactement une Personne et un Atelier. Le couple personne-atelier doit être unique selon la règle retenue.

<!-- inclure: cours-documentation/visuels/reservations.mcd -->

[Fichier Mocodo](visuels/reservations.mcd).

<!-- inclure: cours-documentation/visuels/reservations-erd.mmd -->

[Fichier Mermaid ER](visuels/reservations-erd.mmd).

Les clés étrangères matérialisent les liens. La règle d’unicité du couple demande une contrainte supplémentaire. Dans l’exercice Bibi d’objets, deux emprunts successifs du même objet par la même personne doivent au contraire rester possibles.

## 7. Une décision, un commentaire et une implémentation

L’[ADR rempli](adr/001-conserver-annulations.md) décrit les options et la restriction choisie. Voici l’implémentation et ses annotations, extraites du fichier réellement exécuté lors de la construction du site :

<!-- inclure: demo/src/reservations.mjs -->

[Fichier JavaScript](../demo/src/reservations.mjs). JSDoc génère en parallèle une référence navigable. L’inclusion ci-dessus montre le fichier complet, elle n’analyse pas les annotations.

## 8. Des tests qui vérifient les effets

Les tests vérifient les réservations créées, les refus et l’absence d’ajout lorsque la demande échoue.

<!-- inclure: demo/tests/reservations.test.mjs -->

[Fichier de tests](../demo/tests/reservations.test.mjs).

La démonstration npm run demo:regression modifie une copie temporaire. Deux tests échouent, car le contrôle de capacité accepte à tort une demande lorsque toutes les places sont déjà prises.

## 9. Un scénario relié au code

<!-- inclure: demo/features/reservations.feature -->

[Fichier Gherkin](../demo/features/reservations.feature).

<!-- inclure: demo/features/steps/reservations.mjs -->

[Définitions d’étapes](../demo/features/steps/reservations.mjs).

La fonction appelée par l’étape est celle utilisée dans le programme. Une assertion indépendante compare son résultat à l’attendu. Le scénario prépare son propre état, afin de pouvoir s’exécuter sans dépendre du précédent.

## Inclure des sources dans MkDocs

Le hook ci-dessous traite uniquement des marqueurs explicites et des chemins autorisés. Pour voir son effet, construire le site et ouvrir cette page. Une source absente ou un chemin non autorisé fait échouer la construction.

<!-- inclure: scripts/mkdocs_hook.py -->

[Fichier du hook](../scripts/mkdocs_hook.py).

Ce petit mécanisme convient à quelques exemples pédagogiques choisis. Une extraction de signatures ou de commentaires de tout un langage demande un analyseur existant, comme JSDoc, TypeDoc ou un gestionnaire mkdocstrings.
