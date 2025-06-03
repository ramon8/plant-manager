export interface CalendarProps {
  className?: string;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  tasks?: CalendarTask[];
}

export interface CalendarTask {
  id: string;
  dueDate: Date;
  taskType: 'water' | 'fertilize' | 'repot' | 'prune';
}
