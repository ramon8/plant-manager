import type { CareTask } from "../types";


// Helper function to create dates relative to today
const createRelativeDate = (dayOffset: number = 0): Date => {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    return date;
};

// Mock care tasks
export const careTasks: CareTask[] = [
    {
        id: '1',
        plantId: '1',
        plantName: 'Monstera Deliciosa',
        taskType: 'water',
        dueDate: createRelativeDate(0), // Today
        completed: false,
    },
    {
        id: '2',
        plantId: '2',
        plantName: 'Snake Plant',
        taskType: 'fertilize',
        dueDate: createRelativeDate(1), // Tomorrow
        completed: false,
    },
    {
        id: '3',
        plantId: '3',
        plantName: 'Spider Plant',
        taskType: 'prune',
        dueDate: createRelativeDate(3), // 3 days from now
        completed: false,
    },
];
