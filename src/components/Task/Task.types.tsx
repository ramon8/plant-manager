export interface TaskProps {
  id: string;
  plantName: string;
  taskType: 'water' | 'fertilize' | 'repot' | 'prune';
  dueDate: Date;
  completed?: boolean;
  onComplete?: (id: string) => void;
  className?: string;
}
