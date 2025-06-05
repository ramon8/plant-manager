import type { Plant } from "../types";

// Helper function to create dates relative to today
const daysFromNow = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
};

const daysAgo = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
};

// Mock data - will be replaced with real data later
export const plants: Plant[] = [
    {
        id: '1',
        name: 'Monty',
        scientificName: 'Monstera deliciosa',
        location: 'Living Room',
        potSize: 'large',
        wateringFrequency: 'weekly',
        careNotes: 'Prefers bright, indirect light.',
        notificationsEnabled: true,
        lastWatered: daysAgo(3),
        nextWatering: daysFromNow(2),
        lastFertilized: daysAgo(30),
        acquiredDate: daysAgo(180),
        image: '/plants/monstera.jpg',
        status: 'healthy'
    },
    {
        id: '2',
        name: 'Sammy',
        scientificName: 'Sansevieria trifasciata',
        location: 'Bedroom',
        potSize: 'medium',
        wateringFrequency: 'biweekly',
        careNotes: 'Allow soil to dry between waterings.',
        notificationsEnabled: true,
        lastWatered: daysAgo(10),
        nextWatering: daysFromNow(4),
        lastFertilized: daysAgo(60),
        acquiredDate: daysAgo(365),
        image: '/plants/sansevieria.jpg',
        status: 'healthy'
    },
    {
        id: '3',
        name: 'Spidey',
        scientificName: 'Chlorophytum comosum',
        location: 'Kitchen',
        lastWatered: daysAgo(2),
        nextWatering: daysFromNow(1),
        lastFertilized: daysAgo(45),
        acquiredDate: daysAgo(90),
        image: '/plants/spider-plant.jpg',
        status: 'needsAttention'
    },
    {
        id: '4',
        name: 'Ruby',
        scientificName: 'Ficus elastica',
        location: 'Office',
        lastWatered: daysAgo(5),
        nextWatering: daysFromNow(3),
        lastFertilized: daysAgo(21),
        acquiredDate: daysAgo(120),
        image: '/plants/rubber-tree.jpg',
        status: 'healthy'
    },
    {
        id: '5',
        name: 'Sunny',
        scientificName: 'Helianthus annuus',
        location: 'Balcony',
        lastWatered: daysAgo(1),
        nextWatering: new Date(), // Due today
        lastFertilized: daysAgo(14),
        acquiredDate: daysAgo(45),
        image: '/plants/sunflower.jpg',
        status: 'needsAttention'
    },
    {
        id: '6',
        name: 'Ivy',
        scientificName: 'Pothos aureus',
        location: 'Bathroom',
        lastWatered: daysAgo(4),
        nextWatering: daysFromNow(1),
        lastFertilized: daysAgo(35),
        acquiredDate: daysAgo(200),
        image: '/plants/pothos.jpg',
        status: 'healthy'
    },
    {
        id: '7',
        name: 'Rosie',
        scientificName: 'Rosa damascena',
        location: 'Garden',
        lastWatered: daysAgo(2),
        nextWatering: daysFromNow(1),
        lastFertilized: daysAgo(7),
        acquiredDate: daysAgo(730), // 2 years ago
        image: '/plants/rose.jpg',
        status: 'healthy'
    },
    {
        id: '8',
        name: 'Aloe',
        scientificName: 'Aloe vera',
        location: 'Kitchen Window',
        lastWatered: daysAgo(14),
        nextWatering: daysFromNow(7),
        lastFertilized: daysAgo(90),
        acquiredDate: daysAgo(300),
        image: '/plants/aloe-vera.jpg',
        status: 'healthy'
    },
    {
        id: '9',
        name: 'Minty',
        scientificName: 'Mentha spicata',
        location: 'Kitchen Herb Garden',
        lastWatered: daysAgo(1),
        nextWatering: daysFromNow(1),
        lastFertilized: daysAgo(21),
        acquiredDate: daysAgo(60),
        image: '/plants/mint.jpg',
        status: 'healthy'
    },
    {
        id: '10',
        name: 'Sage',
        scientificName: 'Salvia officinalis',
        location: 'Kitchen Herb Garden',
        lastWatered: daysAgo(3),
        nextWatering: daysFromNow(2),
        lastFertilized: daysAgo(28),
        acquiredDate: daysAgo(75),
        image: '/plants/sage.jpg',
        status: 'sick'
    },
    {
        id: '11',
        name: 'Fidget',
        scientificName: 'Ficus lyrata',
        location: 'Living Room Corner',
        lastWatered: daysAgo(6),
        nextWatering: daysFromNow(1),
        lastFertilized: daysAgo(42),
        acquiredDate: daysAgo(150),
        image: '/plants/fiddle-leaf-fig.jpg',
        status: 'needsAttention'
    },
    {
        id: '12',
        name: 'Cactus Jack',
        scientificName: 'Echinocactus grusonii',
        location: 'Windowsill',
        lastWatered: daysAgo(21),
        nextWatering: daysFromNow(14),
        lastFertilized: daysAgo(120),
        acquiredDate: daysAgo(400),
        image: '/plants/barrel-cactus.jpg',
        status: 'healthy'
    },
    {
        id: '13',
        name: 'Lily',
        scientificName: 'Spathiphyllum wallisii',
        location: 'Office Desk',
        lastWatered: daysAgo(4),
        nextWatering: daysFromNow(2),
        lastFertilized: daysAgo(35),
        acquiredDate: daysAgo(80),
        image: '/plants/peace-lily.jpg',
        status: 'healthy'
    },
    {
        id: '14',
        name: 'Basil',
        scientificName: 'Ocimum basilicum',
        location: 'Kitchen Window',
        lastWatered: daysAgo(1),
        nextWatering: new Date(), // Due today
        lastFertilized: daysAgo(14),
        acquiredDate: daysAgo(30),
        image: '/plants/basil.jpg',
        status: 'healthy'
    },
    {
        id: '15',
        name: 'Violet',
        scientificName: 'Saintpaulia ionantha',
        location: 'Bedroom Nightstand',
        lastWatered: daysAgo(3),
        nextWatering: daysFromNow(4),
        lastFertilized: daysAgo(28),
        acquiredDate: daysAgo(100),
        image: '/plants/african-violet.jpg',
        status: 'healthy'
    }
];