import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplets, Circle, CheckCircle2, Scissors, Flower } from 'lucide-react';
import {
    TaskItem,
    TaskCheckbox,
    TaskIcon,
    TaskInfo,
    TaskName,
    TaskDate,
} from './Task.styles';
import type { TaskProps } from './Task.types';

// Task icon mapping
const TASK_ICONS = {
    water: <Droplets />,
    fertilize: <Flower />,
    repot: <Circle />,
    prune: <Scissors />,
    default: <Circle />
};

const Task: React.FC<TaskProps> = ({
    id,
    plantName,
    taskType,
    dueDate,
    completed = false,
    onComplete,
    className,
}) => {
    const { t, i18n } = useTranslation();
    const handleComplete = () => {
        if (onComplete) {
            onComplete(id);
        }
    };

    const formatDate = (date: Date) => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return t('Today');
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return t('Tomorrow');
        } else {
            return date.toLocaleDateString(i18n.language, {
                month: 'short',
                day: 'numeric',
            });
        }
    };

    const getTaskIcon = (taskType: string) => {
        return TASK_ICONS[taskType as keyof typeof TASK_ICONS] || TASK_ICONS.default;
    };

    return (
        <TaskItem completed={completed} className={className}>
            <TaskCheckbox completed={completed} onClick={handleComplete}>
                <CheckCircle2 />
            </TaskCheckbox>

            <TaskIcon taskType={taskType}>
                {getTaskIcon(taskType)}
            </TaskIcon>

            <TaskInfo>
                <TaskName completed={completed}>{plantName}</TaskName>
                <TaskDate>
                    {formatDate(dueDate)} • {taskType.charAt(0).toUpperCase() + taskType.slice(1)}
                </TaskDate>
            </TaskInfo>
        </TaskItem>
    );
};

export default Task;
