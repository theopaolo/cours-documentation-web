# Documenter son projet web

Ce cours t'aide à documenter un projet web que tu as déjà développé. L'objectif est qu'une autre personne puisse le lancer, le comprendre et le modifier sans tes explications à l'oral.

Tu peux travailler sur ton projet ou sur la démonstration fournie. Prépare un éditeur et un lecteur Markdown. Les schémas sont fournis en SVG, avec leurs sources textuelles Mermaid ou Mocodo. Le kit exécutable utilise Node.js 24. La génération complète du site utilise aussi Python 3.12.

## L'exemple suivi dans le cours

**Réserve ta place** est une application fictive pour une association qui organise des ateliers de poterie. L'organisateur publie les dates et le nombre de places. Les participants choisissent un atelier et réservent une place.

Un « atelier » désigne une séance à une date précise. Une « réservation » relie une personne à cette séance.

Le [kit de démonstration](demo/README.md) fournit les règles de réservation en JavaScript, des tests et des scénarios BDD. Il fonctionne en mémoire. L’interface web, PostgreSQL et l’envoi de courriels des exemples d’architecture restent fictifs. Les commandes du kit sont exécutables depuis la racine de ce dossier. Les exemples concernant ton application sont à adapter.

Pour animer une séance, commence par le [guide de préparation et le déroulé de cinq heures](guide-animation.md). Les neuf chapitres constituent un support de référence. Le déroulé sélectionne les exercices réalisables en séance et réserve les intégrations avancées au travail suivant.

## Parcours

Chaque chapitre explique une méthode, l'illustre et propose un exercice sur ton projet.

| Chapitre | Ce que tu apprendras à faire |
| --- | --- |
| [1. Pourquoi documenter](cours-documentation/01-pourquoi-documenter.md) | Repérer les informations qui manquent à une personne qui découvre le projet |
| [2. Organiser les contenus](cours-documentation/02-organiser-les-contenus.md) | Choisir où placer une procédure, une règle ou une explication |
| [3. Écrire clairement](cours-documentation/03-ecrire-clairement.md) | Remplacer les phrases vagues par des informations précises |
| [4. README et guides pratiques](cours-documentation/04-readme-et-guides-pratiques.md) | Présenter le projet et décrire les étapes d'une tâche |
| [5. Architecture avec C4](cours-documentation/05-architecture-c4.md) | Montrer les applications, les stockages et leurs échanges |
| [6. Données et Merise](cours-documentation/06-donnees-et-merise.md) | Expliquer les données et vérifier leur organisation dans la base |
| [7. Décisions et code](cours-documentation/07-decisions-et-code.md) | Conserver les raisons d'un choix et documenter ce que le code n'explique pas |
| [8. Vérifier et maintenir](cours-documentation/08-verifier-et-maintenir.md) | Faire tester la documentation et la mettre à jour avec le projet |
| [9. Documentation vivante et BDD](cours-documentation/09-documentation-vivante.md) | Décrire un comportement avec le métier, l’exécuter et publier les connaissances du projet |

Tu peux aussi consulter un chapitre seul. Pour améliorer l'installation, commence par le chapitre 4. Pour expliquer le trajet d'une demande entre le navigateur et la base, ouvre le chapitre 5.

## Ce que tu conserveras à la fin

Les exercices te feront travailler le README, les guides, les schémas, les données et les décisions. Tu écriras aussi un scénario métier et observeras son exécution. Améliore les documents existants lorsqu'ils répondent déjà au besoin.

Les [exemples et corrigés](cours-documentation/exemples.md) rassemblent les résultats attendus et les fichiers de code. La [sélection d’outils et de sources](cours-documentation/outils-et-sources.md) précise quoi générer, avec quelles limites. Les photographies, captures et schémas ont leurs [crédits](cours-documentation/visuels/credits.md).

Vérifie que chaque document répond à la question annoncée dans son titre. Signale les commandes non testées et les informations que tu n'as pas pu confirmer.

Les essais se font sur des ressources locales ou de test. Les références figurent dans les chapitres concernés.
