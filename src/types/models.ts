// Plant-related types
export interface Plant {
    id: string;
    name: string;
    scientificName: string;
    location: string;
    potSize?: string;
    wateringFrequency?: string;
    careNotes?: string;
    notificationsEnabled?: boolean;
    lastWatered?: Date;
    nextWatering?: Date;
    lastFertilized?: Date;
    acquiredDate?: Date;
    image?: string;
    status?: 'healthy' | 'needsAttention' | 'sick';
}

// Care task types
export interface CareTask {
    id: string;
    plantId: string;
    plantName: string;
    taskType: 'water' | 'fertilize' | 'repot' | 'prune';
    dueDate: Date;
    completed?: boolean;
}
