export interface Foyer {
    id: number;
    nomFoyer: string;
    capaciteFoyer: number;
    universiteId: number;
    blocs?: string[];  // Champs optionnel pour les blocs
}
