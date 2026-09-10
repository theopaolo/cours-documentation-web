# Audit du cours « Documenter son projet web »

Audit du 9 septembre 2026. Le cours constitue une bonne base pour un atelier accompagné. Les méthodes enseignées restent pertinentes. Les améliorations prioritaires concernent les exemples terminés, la documentation reliée au logiciel et les conditions de réalisation des exercices.

Les neuf fichiers ont été lus, soit environ 6 400 mots. Les 16 liens internes mènent à des fichiers existants. Les références principales ont été confrontées aux sources citées ci-dessous. Aucune erreur conceptuelle majeure n’a été repérée dans les explications examinées. Cette appréciation porte sur le support écrit. L’efficacité en classe et les durées demanderaient un essai avec des apprenants. L’application fictive n’étant pas fournie, ses comportements ne peuvent pas être testés.

Le public supposé est celui annoncé par le cours : des personnes ayant déjà développé un projet web. Le niveau précis et les contraintes de formation ne sont pas indiqués. Le format de cinq heures est suggéré par le nom du fichier d’entrée, mais aucune durée n’est annoncée dans son contenu.

Le cours possède plusieurs qualités à conserver. Il part des tâches du lecteur, distingue les faits vérifiés des intentions et évite de demander une documentation exhaustive. Le même domaine métier traverse les chapitres. Les consignes demandent souvent un résultat observable et une reprise par une autre personne. Les précautions concernant les secrets, les bases de test et les opérations destructrices sont déjà présentes.

| Partie examinée | Appréciation | Amélioration ciblée |
| --- | --- | --- |
| [Introduction](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/documenter-son-projet-web-atelier-5h.md:3) | Objectif de reprise compréhensible, exemple fictif clairement annoncé | Préciser le niveau attendu, les livrables minimaux et les durées si le format est contraint |
| [1. Pourquoi documenter](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/01-pourquoi-documenter.md:21) | Bonne entrée par le lecteur et ses questions | Introduire l’idée de réutiliser les connaissances déjà présentes dans le projet |
| [2. Organiser les contenus](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/02-organiser-les-contenus.md:5) | Diátaxis correctement résumé, sans imposer quatre pages par fonctionnalité | Ajouter un exemple de classement corrigé et la désignation de la source à maintenir |
| [3. Écrire clairement](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/03-ecrire-clairement.md:5) | Exemples avant/après utiles, vocabulaire cohérent | Donner un corrigé possible de l’exercice, avec les inconnues explicitement conservées |
| [4. README et guides](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/04-readme-et-guides-pratiques.md:28) | Bon modèle et procédure d’export complète | Ajouter un README rempli et un dépannage d’installation fondé sur un symptôme précis |
| [5. C4](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/05-architecture-c4.md:51) | Distinctions correctes entre système, conteneur, composant et scénario | Montrer les deux dessins demandés et un court scénario d’échanges |
| [6. Données et Merise](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/06-donnees-et-merise.md:31) | Règles, cardinalités et contraintes cohérentes dans l’exemple | Montrer le MCD terminé et rendre la profondeur Merise adaptable au projet |
| [7. Décisions et code](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/07-decisions-et-code.md:76) | ADR bien traités, contrat d’une route amorcé | Développer la référence d’API et un exemple métier relié à un test |
| [8. Vérifier et maintenir](/Users/theogoedert/Documents/Webworks/6-learning-tech/cours-documentation-web/cours-documentation/08-verifier-et-maintenir.md:34) | Bonne vérification humaine et mise à jour avec le code | Ajouter une démonstration de contrôle automatique et identifier qui entretient les documents |

L’ancienneté des méthodes ne justifie pas leur remplacement. La distinction entre tutoriel, guide pratique, référence et explication correspond toujours à [Diátaxis](https://diataxis.fr/start-here/). Le choix de privilégier contexte et conteneurs suit explicitement les recommandations du [modèle C4](https://c4model.com/diagrams). Le format d’ADR décrit dans le cours reprend bien les principes de [Michael Nygard](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions). Une source fondatrice datée de 2011 n’est donc pas, en elle-même, un signe d’obsolescence.

Pour Merise, le contenu enseigné reste utilisable : les cardinalités et le passage au modèle relationnel figurent dans le [support universitaire cité](https://sancy.iut.uca.fr/~lafourcade/PAPERS/PDF/Livret-Cours-BD-2021-2022.pdf), et les contraintes décrites correspondent aux mécanismes documentés par [PostgreSQL](https://www.postgresql.org/docs/current/ddl-constraints.html). Le point à revoir est sa place dans un cours général sur la documentation web. Sauf exigence du programme, le chapitre pourrait s’intituler « Documenter les données et leurs règles », avec Merise comme méthode proposée.

1. Fournir les résultats attendus des exercices de représentation.

Le support demande de dessiner des vues C4 et un MCD, mais ne contient aucune illustration intégrée. Les tableaux décrivent les éléments sans montrer leur disposition, les frontières ou la notation des associations. C’est le manque pédagogique le plus visible.

Ajouter les vues de contexte et de conteneurs de Réserve ta place, puis son MCD et la traduction relationnelle correspondante. Conserver une explication textuelle et les sources modifiables. Fournir aussi un README rempli. Un petit ensemble d’exemples documentaires suffit pour commencer, sans devoir construire toute l’application fictive.

L’absence d’application fournie est explicitement annoncée dans l’introduction. Elle devient surtout une limite pour une utilisation autonome ou une démonstration de documentation exécutable. Prévoir un exemple exécutable minimal uniquement pour cette démonstration.

2. Faire de la Living Documentation une pratique visible dans le parcours.

Le livre de Cyrille Martraire, publié en 2019, décrit une documentation qui évolue avec le logiciel, en exploitant les connaissances existantes et une automatisation choisie. Il insiste aussi sur la fiabilité, la collaboration et l’effort d’entretien. [Présentation et sommaire de l’éditeur](https://www.informit.com/store/living-documentation-continuous-knowledge-sharing-by-9780134689326).

Le cours en possède déjà des éléments : glossaire métier, explications près du code, liens vers les migrations, ADR, limitation des copies et mises à jour dans la même proposition de changement. Il manque un rapprochement explicite entre ces pratiques et une démonstration de leur entretien.

| Approche | Question à enseigner | Application possible dans le cours |
| --- | --- | --- |
| Diátaxis | De quel type de réponse ce lecteur a-t-il besoin ? | Séparer la procédure de réservation et l’explication de ses règles |
| Docs as Code | Comment contribuer à la documentation, la relire et la publier ? | Modifier le code et sa documentation dans la même proposition, avec des contrôles |
| Living Documentation | Comment conserver et partager une connaissance fiable quand le système change ? | Réutiliser une description structurée, relier une règle à un exemple testé, désigner sa source et son entretien |

Cette distinction est une synthèse pédagogique. Docs as Code inclut aussi les tests automatiques dans la définition de [Write the Docs](https://www.writethedocs.org/guide/docs-as-code/). Les approches se recoupent. Les pratiques de Living Documentation présentées par [Arolla](https://www.arolla.fr/formations/living-documentation/) couvrent notamment le travail collaboratif, le code explicite, les glossaires, les diagrammes générés et les ADR.

Je recommande une introduction courte au chapitre 1, un exemple au chapitre 7 et un exercice au chapitre 8. Cela donne une continuité au parcours sans imposer un nouveau chapitre théorique.

L’exercice pourrait reprendre une règle déjà présente : une personne ne peut pas créer une seconde réservation pour le même atelier, même après annulation. Faire préciser cette règle par les participants, puis présenter trois exemples.

| Situation initiale | Action | Résultat attendu selon la règle fictive du cours |
| --- | --- | --- |
| Aucune réservation pour cette personne et cet atelier, place disponible | Demander une réservation | Une réservation est créée |
| Réservation confirmée déjà existante | Répéter la demande | Aucune seconde réservation n’est créée |
| Réservation annulée déjà existante | Répéter la demande | Aucune seconde réservation n’est créée |

Relier un de ces exemples à un test qui appelle réellement le comportement concerné. Montrer le résultat et la version testée, puis introduire volontairement une régression dans l’exemple de démonstration pour voir le contrôle échouer. Revenir ensuite au comportement attendu.

Le BDD propose une démarche de discussion, formulation puis automatisation des exemples. Un scénario devient exécutable lorsqu’il est connecté au système par du code de test. Écrire seulement du Given/When/Then dans une page ne suffit pas. [Processus BDD](https://cucumber.io/docs/bdd/) et [référence Gherkin](https://cucumber.io/docs/gherkin/reference/).

Pour l’atelier, utiliser les tests déjà disponibles ou une démonstration préparée. Cucumber peut être présenté comme une option. Un test vert confirme seulement les cas et les assertions exécutés. L’équipe doit encore vérifier que la règle correspond au besoin métier.

3. Développer la documentation d’API lorsqu’elle concerne le projet.

Le chapitre 7 indique déjà les champs à documenter pour une route, mais ne donne ni requête complète, ni réponse, ni description structurée. OpenAPI et Swagger ne sont pas nommés.

Pour un projet exposant une API HTTP, ajouter une seule opération de réservation avec authentification, corps de demande, réponse réussie et erreur métier. Montrer sa représentation OpenAPI et le rendu de consultation. Distinguer la description de l’interface, l’outil qui l’affiche et le contrôle de sa conformité à l’implémentation. [Spécification officielle OpenAPI](https://spec.openapis.org/oas/latest.html).

Au jour de l’audit, la version publiée affichée par cette source est 3.2.0, datée du 19 septembre 2025. Le cours devrait retenir une version prise en charge par l’outil de démonstration, sans faire de la version la plus récente un objectif pédagogique.

Une référence générée constitue un exemple concret de réutilisation des connaissances. [FastAPI](https://fastapi.tiangolo.com/features/) illustre cette possibilité avec une documentation interactive fondée sur OpenAPI. Ce serait une démonstration possible, sans en faire une dépendance du cours.

Pour un projet sans API HTTP à documenter, proposer à la place la référence d’une fonction ou de la configuration. Dans tous les cas, une génération automatique ne prouve pas à elle seule que toutes les erreurs ou règles métier sont correctement décrites.

4. Transformer la maintenance en exercice observable.

Le chapitre 8 mentionne les vérifications automatiques en une phrase, ligne 48. Montrer au moins un contrôle réel : détection d’un lien interne cassé, construction de la documentation, validation d’un exemple ou exécution d’une commande documentée.

Expliquer l’intégration continue comme l’exécution automatique de ces contrôles lors des changements. Un outil comme [Lychee](https://github.com/lycheeverse/lychee) peut servir à illustrer la vérification de liens. L’exercice doit faire observer une erreur, sa correction et la réussite du contrôle.

Compléter chaque document important par les informations utiles à son entretien : source de référence, personne ou rôle chargé de la mise à jour, événement qui impose une vérification et version du logiciel concernée. Le chapitre indique déjà la date, la version et l’environnement pour les essais. Il faut prolonger cette traçabilité jusqu’aux pages et résultats publiés.

Présenter les diagrammes textuels en option. [Mermaid](https://mermaid.js.org/intro/) produit des diagrammes à partir de texte et [Structurizr DSL](https://docs.structurizr.com/dsl) permet de décrire un modèle d’architecture. Ils peuvent faciliter les changements et la relecture. Un diagramme écrit à la main dans ces formats peut toutefois diverger du logiciel, comme un dessin Excalidraw.

5. Recentrer les données sur leur sens et leur évolution.

Le passage MCD, MLD, MPD est cohérent. La règle d’unicité après annulation est restrictive, mais elle est annoncée et sa conséquence est expliquée. Elle ne constitue pas une erreur.

Pour un atelier de documentation, demander d’abord ce que signifient les champs, les statuts et les relations du projet existant. Ajouter les unités, le fuseau des dates et les transitions autorisées lorsque ces informations sont pertinentes. Indiquer les règles de conservation et de suppression pour les projets concernés, quelle que soit la technologie de stockage. Le cours évoque déjà la suppression dans la base relationnelle et la durée de conservation dans le cas non relationnel.

Conserver la vérification des migrations appliquées et le cas des deux réservations simultanées de la dernière place. Ils montrent bien la différence entre une règle écrite et une garantie du logiciel. Si le programme n’exige pas Merise, permettre une représentation adaptée au projet, avec une correspondance claire vers le stockage réel.

6. Définir la réussite et le volume du travail.

Le cours propose une vérification finale utile, mais la liste des livrables reste générale. Pour un atelier court, demander un README utilisable, un guide essayé, une vue d’architecture compréhensible, une règle documentée et reliée à sa vérification, un ADR et une liste des limites restantes. Ces contenus peuvent partager les mêmes fichiers.

Les critères de réussite pourraient être : une autre personne réalise la tâche sans étape manquante, chaque relation du schéma est explicable, la règle possède un cas concret et une preuve ou une limite explicite, et le prochain changement à surveiller est identifié. Un contrôle automatique réussi ne remplace pas l’essai par un lecteur.

Si cinq heures sont bien prévues, voici une répartition à tester. Elle suppose des projets déjà accessibles et lançables, ainsi qu’une démonstration d’automatisation préparée par l’enseignant. Les approfondissements Merise et l’installation d’un nouvel outil seraient hors du temps commun.

| Séquence proposée | Durée |
| --- | --- |
| Besoins du lecteur, organisation et réécriture ciblée | 35 min |
| README et guide pratique | 60 min |
| Architecture avec un exemple corrigé | 40 min |
| Données et règle métier du projet | 30 min |
| Décision technique et ADR | 30 min |
| Living Documentation, référence et contrôle automatique | 50 min |
| Reprise par un pair et corrections prioritaires | 35 min |
| Pauses | 20 min |
| Total | 300 min |

Quelques compléments peuvent suivre ces priorités. Un dépannage avec symptômes, vérifications et résultat attendu rendrait la maintenance plus concrète. Une courte procédure de déploiement et de retour à une version précédente serait utile pour les projets effectivement hébergés. Un encadré sur l’assistance par IA pourrait demander de vérifier les commandes et les affirmations produites, de conserver les sources et de faire confirmer les raisons d’un choix par les personnes concernées. Ces ajouts ne nécessitent pas chacun un chapitre.

L’ordre recommandé est de fournir les exemples terminés, puis d’introduire une règle reliée à un test et une référence générée, avant d’étendre l’outillage. Le cours peut ainsi conserver ses huit chapitres et enseigner comment produire une documentation que l’on sait consulter, vérifier et entretenir.
