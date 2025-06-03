export interface CareProps {
  className?: string;
}

export interface CareTaskProps {
  id: string;
  plantName: string;
  taskType: 'water' | 'fertilize' | 'repot' | 'prune';
  dueDate: Date;
  completed?: boolean;
  className?: string;
}

export interface CareCalendarProps {
  tasks: CareTaskProps[];
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export interface UpcomingCareProps {
  tasks: CareTaskProps[];
  onTaskComplete?: (taskId: string) => void;
}
