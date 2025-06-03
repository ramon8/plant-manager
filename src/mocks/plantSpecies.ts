export interface PlantSpecies {
  id: string;
  scientificName: string;
  commonName: string;
  careLevel: 'easy' | 'medium' | 'hard';
  wateringFrequency: string;
  light: string;
  image?: string;
}

export const plantSpecies: PlantSpecies[] = [
  {
    id: "1",
    scientificName: "Monstera deliciosa",
    commonName: "Swiss Cheese Plant",
    careLevel: "easy",
    wateringFrequency: "weekly",
    light: "bright indirect",
    image: "/plants/monstera.jpg"
  },
  {
    id: "2",
    scientificName: "Sansevieria trifasciata",
    commonName: "Snake Plant",
    careLevel: "easy",
    wateringFrequency: "biweekly",
    light: "low to bright indirect",
    image: "/plants/sansevieria.jpg"
  },
  {
    id: "3",
    scientificName: "Chlorophytum comosum",
    commonName: "Spider Plant",
    careLevel: "easy",
    wateringFrequency: "weekly",
    light: "bright indirect",
    image: "/plants/spider-plant.jpg"
  },
  {
    id: "4",
    scientificName: "Epipremnum aureum",
    commonName: "Pothos",
    careLevel: "easy",
    wateringFrequency: "weekly",
    light: "low to bright indirect",
    image: "/plants/pothos.jpg"
  },
  {
    id: "5",
    scientificName: "Ficus lyrata",
    commonName: "Fiddle Leaf Fig",
    careLevel: "medium",
    wateringFrequency: "weekly",
    light: "bright indirect",
    image: "/plants/fiddle-leaf-fig.jpg"
  },
  {
    id: "6",
    scientificName: "Zamioculcas zamiifolia",
    commonName: "ZZ Plant",
    careLevel: "easy",
    wateringFrequency: "biweekly",
    light: "low to bright indirect",
    image: "/plants/zz-plant.jpg"
  },
  {
    id: "7",
    scientificName: "Calathea orbifolia",
    commonName: "Prayer Plant",
    careLevel: "hard",
    wateringFrequency: "weekly",
    light: "medium indirect",
    image: "/plants/prayer-plant.jpg"
  },
  {
    id: "8",
    scientificName: "Dracaena marginata",
    commonName: "Dragon Tree",
    careLevel: "easy",
    wateringFrequency: "biweekly",
    light: "bright indirect",
    image: "/plants/dragon-tree.jpg"
  },
  {
    id: "9",
    scientificName: "Alocasia polly",
    commonName: "Elephant Ear",
    careLevel: "medium",
    wateringFrequency: "weekly",
    light: "bright indirect",
    image: "/plants/alocasia.jpg"
  },
  {
    id: "10",
    scientificName: "Pilea peperomioides",
    commonName: "Chinese Money Plant",
    careLevel: "easy",
    wateringFrequency: "weekly",
    light: "bright indirect",
    image: "/plants/pilea.jpg"
  }
];
