import { TreeSpecies, Level, EcosystemService } from './types';

export const TREE_SPECIES: TreeSpecies[] = [
  {
    id: "leucaena",
    commonName: "Leucaena",
    scientificName: "Leucaena leucocephala",
    services: [EcosystemService.NITROGEN_FIXING, EcosystemService.SOIL_IMPROVEMENT],
    imageUrl: "https://picsum.photos/seed/leucaena/100/100",
    growthRate: "Rápido",
    maxHeight: "10-15m",
    description: "Excelente para mejorar suelos pobres en nitrógeno."
  },
  {
    id: "guaba",
    commonName: "Guaba",
    scientificName: "Inga spp.",
    services: [EcosystemService.NITROGEN_FIXING, EcosystemService.SHADE, EcosystemService.FOOD],
    imageUrl: "https://picsum.photos/seed/guaba/100/100",
    growthRate: "Rápido",
    maxHeight: "15-20m",
    description: "Proporciona sombra a cultivos como el café y frutos comestibles."
  },
  {
    id: "bamboo",
    commonName: "Bambú",
    scientificName: "Guadua angustifolia",
    services: [EcosystemService.EROSION_CONTROL, EcosystemService.WATER_PROTECTION, EcosystemService.TIMBER],
    imageUrl: "https://picsum.photos/seed/bamboo/100/100",
    growthRate: "Muy rápido",
    maxHeight: "20-30m",
    description: "Ideal para estabilizar laderas y proteger riberas de ríos."
  },
  {
    id: "sauce",
    commonName: "Sauce",
    scientificName: "Salix humboldtiana",
    services: [EcosystemService.EROSION_CONTROL, EcosystemService.WATER_PROTECTION, EcosystemService.BIODIVERSITY],
    imageUrl: "https://picsum.photos/seed/sauce/100/100",
    growthRate: "Rápido",
    maxHeight: "10-15m",
    description: "Sus raíces ayudan a sujetar el suelo en zonas húmedas."
  },
  {
    id: "cedro",
    commonName: "Cedro",
    scientificName: "Cedrela odorata",
    services: [EcosystemService.TIMBER, EcosystemService.BIODIVERSITY],
    imageUrl: "https://picsum.photos/seed/cedro/100/100",
    growthRate: "Medio",
    maxHeight: "30-40m",
    description: "Madera de alto valor económico y resistente a plagas."
  },
  {
    id: "laurel",
    commonName: "Laurel",
    scientificName: "Cordia alliodora",
    services: [EcosystemService.TIMBER, EcosystemService.SHADE],
    imageUrl: "https://picsum.photos/seed/laurel/100/100",
    growthRate: "Rápido",
    maxHeight: "25-35m",
    description: "Madera valiosa y buena para sistemas agroforestales con café."
  },
  {
    id: "aguacate",
    commonName: "Aguacate",
    scientificName: "Persea americana",
    services: [EcosystemService.FOOD, EcosystemService.SHADE],
    imageUrl: "https://picsum.photos/seed/aguacate/100/100",
    growthRate: "Medio",
    maxHeight: "15-20m",
    description: "Produce frutos de alto valor comercial y proporciona sombra."
  },
  {
    id: "higueron",
    commonName: "Higuerón",
    scientificName: "Ficus insipida",
    services: [EcosystemService.WATER_PROTECTION, EcosystemService.BIODIVERSITY],
    imageUrl: "https://picsum.photos/seed/higueron/100/100",
    growthRate: "Rápido",
    maxHeight: "30-40m",
    description: "Especie clave para proteger fuentes de agua y alimentar fauna."
  },
  {
    id: "poroton",
    commonName: "Porotón",
    scientificName: "Erythrina poeppigiana",
    services: [EcosystemService.NITROGEN_FIXING, EcosystemService.SHADE, EcosystemService.SOIL_IMPROVEMENT],
    imageUrl: "https://picsum.photos/seed/poroton/100/100",
    growthRate: "Rápido",
    maxHeight: "15-25m",
    description: "Mejora el suelo y es excelente como sombra para el café."
  },
  {
    id: "arrayan",
    commonName: "Arrayán",
    scientificName: "Myrcianthes hallii",
    services: [EcosystemService.EROSION_CONTROL, EcosystemService.BIODIVERSITY, EcosystemService.WATER_PROTECTION],
    imageUrl: "https://picsum.photos/seed/arrayan/100/100",
    growthRate: "Lento",
    maxHeight: "8-12m",
    description: "Arbusto denso que protege el suelo y atrae aves."
  },
];

export const GAME_LEVELS: Level[] = [
  {
    id: 1,
    title: "Nivel 1: Problemas Básicos",
    description: "Aprende a resolver los problemas más comunes de una finca usando los servicios de los árboles.",
    availableTrees: ["leucaena", "bamboo", "laurel", "higueron"],
    farmLayout: [
      { id: "cultivo_maiz", name: "Cultivo de Maíz", colSpan: 2, rowSpan: 2, bgClass: 'bg-yellow-200', problemId: 'p1_1' },
      { id: "rio", name: "Río", colSpan: 1, rowSpan: 4, bgClass: 'bg-blue-300', problemId: 'p1_4' },
      { id: "ladera", name: "Ladera", colSpan: 1, rowSpan: 2, bgClass: 'bg-amber-600', problemId: 'p1_2' },
      { id: "pastizal", name: "Zona Ganadera", colSpan: 2, rowSpan: 2, bgClass: 'bg-lime-300', problemId: 'p1_3' },
      { id: "casa", name: "Casa de la Finca", colSpan: 1, rowSpan: 2, bgClass: 'bg-gray-300' }
    ],
    problems: [
      {
        id: "p1_1",
        title: "Suelo Pobre en Nitrógeno",
        description: "El maíz crece débil y amarillento. El suelo necesita más nitrógeno para ser fértil. ¿Qué árbol puede ayudar?",
        requiredService: EcosystemService.NITROGEN_FIXING,
        zoneId: "cultivo_maiz",
        feedbackCorrect: "¡Excelente! La Leucaena fija nitrógeno en el suelo, fertilizándolo naturalmente para el maíz.",
        feedbackIncorrect: "Este árbol no es la mejor opción. Busca uno que pueda 'fijar nitrógeno' para enriquecer el suelo."
      },
      {
        id: "p1_2",
        title: "Erosión en Ladera",
        description: "Las lluvias están arrastrando la tierra de esta ladera, creando cárcavas. Necesitas un árbol con raíces fuertes para detener la erosión.",
        requiredService: EcosystemService.EROSION_CONTROL,
        zoneId: "ladera",
        feedbackCorrect: "¡Muy bien! El Bambú tiene un sistema de raíces extenso y denso que es perfecto para sujetar el suelo y controlar la erosión.",
        feedbackIncorrect: "Las raíces de este árbol no son suficientes. Necesitas una especie especialista en 'control de erosión'."
      },
      {
        id: "p1_3",
        title: "Falta de Sombra para Ganado",
        description: "El ganado sufre de estrés por calor bajo el sol intenso. Un árbol que de buena sombra mejoraría su bienestar y productividad.",
        requiredService: EcosystemService.SHADE,
        zoneId: "pastizal",
        feedbackCorrect: "¡Perfecto! El Laurel crece rápido y da una excelente sombra, creando un ambiente más confortable para el ganado.",
        feedbackIncorrect: "Este árbol no proporciona suficiente sombra. Busca una especie conocida por su capacidad para dar 'sombra'."
      },
      {
        id: "p1_4",
        title: "Protección del Río",
        description: "La orilla del río está desprotegida, lo que puede causar que se seque o contamine. Un árbol adecuado puede proteger la fuente de agua.",
        requiredService: EcosystemService.WATER_PROTECTION,
        zoneId: "rio",
        feedbackCorrect: "¡Correcto! El Higuerón es una especie ideal para proteger las riberas de los ríos, manteniendo la calidad y cantidad del agua.",
        feedbackIncorrect: "No es la mejor opción. Para proteger una fuente de agua, necesitas un árbol que ofrezca 'protección hídrica'."
      }
    ]
  }
];