export interface Chambre {
    idChambre: number;              // Identifiant unique de la chambre
  numeroChambre: number;          // Numéro unique de la chambre
  typeC: 'SIMPLE' | 'DOUBLE' | 'SUITE'; // Type de chambre : peut être une énumération
  blocId: number;                // ID du bloc auquel la chambre appartient
  reservations: boolean;  // Changement : booléen pour indiquer si réservé ou non
}
