
export enum EcosystemService {
  NITROGEN_FIXING = "Fijación de Nitrógeno",
  EROSION_CONTROL = "Control de Erosión",
  TIMBER = "Maderable",
  FOOD = "Alimenticio",
  WATER_PROTECTION = "Protección Hídrica",
  SHADE = "Sombra",
  BIODIVERSITY = "Biodiversidad",
  WINDBREAK = "Cortavientos",
  SOIL_IMPROVEMENT = "Mejora de Suelo",
}

export interface TreeSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  services: EcosystemService[];
  imageUrl: string;
  growthRate: string;
  maxHeight: string;
  description: string;
}

export interface FarmZone {
  id: string;
  name: string;
  colSpan: number;
  rowSpan: number;
  bgClass: string;
  problemId?: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  requiredService: EcosystemService;
  zoneId: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  problems: Problem[];
  availableTrees: string[]; // array of tree ids
  farmLayout: FarmZone[];
}
