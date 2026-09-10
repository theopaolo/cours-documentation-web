# language: fr
Fonctionnalité: Réserver une place à un atelier
  Les participants peuvent réserver une place disponible.
  L'association conserve les annulations et interdit une seconde réservation
  pour la même personne et la même séance, même après annulation.

  Scénario: Réserver la dernière place
    Étant donné un atelier de 1 place
    Quand Alice réserve une place
    Alors sa réservation est confirmée
    Et l'historique contient 1 réservation

  Scénario: Refuser une réservation lorsque l'atelier est complet
    Étant donné un atelier de 1 place
    Et Bob possède une réservation confirmée
    Quand Alice réserve une place
    Alors la demande est refusée avec "Atelier complet"
    Et l'historique contient 1 réservation

  Scénario: Conserver l'interdiction de réserver à nouveau après annulation
    Étant donné un atelier de 1 place
    Et Alice possède une réservation annulée
    Quand Alice réserve une place
    Alors la demande est refusée avec "Réservation déjà existante"
    Et l'historique contient 1 réservation

  Scénario: Libérer la place pour une autre personne
    Étant donné un atelier de 1 place
    Et Bob possède une réservation annulée
    Quand Alice réserve une place
    Alors sa réservation est confirmée
    Et l'historique contient 2 réservations
