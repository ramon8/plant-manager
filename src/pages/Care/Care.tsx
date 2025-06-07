import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from '../../components/Calendar';
import Task from '../../components/Task';
import PageLayout from '../../components/PageLayout';
import type { CalendarTask } from '../../components/Calendar';
import {
    TasksSection,
    SectionTitle,
    TasksList,
    EmptyTasksContainer,
} from './Care.styles';
import type { CareProps, CareTaskProps } from './Care.types';

// Mock data - represents care tasks for plants
const mockTasks: CareTaskProps[] = [
    {
        id: '1',
        plantName: 'Monstera Deliciosa',
        taskType: 'water',
        dueDate: new Date(),
        completed: false,
    },
    {
        id: '2',
        plantName: 'Snake Plant',
        taskType: 'fertilize',
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
        completed: false,
    },
    {
        id: '3',
        plantName: 'Spider Plant',
        taskType: 'prune',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        completed: false,
    },
];

const EmptyTasks: React.FC<{ message: string }> = ({ message }) => (
    <EmptyTasksContainer>
        <div className="emoji">🌿</div>
        <p>{message}</p>
    </EmptyTasksContainer>
);

const Care: React.FC<CareProps> = ({ className }) => {
    const { t } = useTranslation();
    const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const handleTaskComplete = (taskId: string) => {
        setCompletedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            return newSet;
        });
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    // Convert mockTasks to CalendarTask format for the calendar component
    const calendarTasks: CalendarTask[] = mockTasks.map(task => ({
        id: task.id,
        dueDate: task.dueDate,
        taskType: task.taskType,
    }));

    const todayTasks = mockTasks.filter(task => {
        const today = new Date();
        return task.dueDate.toDateString() === today.toDateString();
    });    const upcomingTasks = mockTasks.filter(task => {
        const today = new Date();
        return task.dueDate > today;
    }).slice(0, 3); // Show only next 3 upcoming tasks

    return (
        <PageLayout title={t('CareSchedule')} subtitle={t('KeepTrack')} className={className}>
            <Calendar 
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                tasks={calendarTasks}
            />

            <TasksSection>
                <SectionTitle>{t('TodaysTasks')}</SectionTitle>
                <TasksList>
                    {todayTasks.length > 0 ? (
                        todayTasks.map(task => (
                            <Task
                                key={task.id}
                                {...task}
                                completed={completedTasks.has(task.id)}
                                onComplete={handleTaskComplete}
                            />
                        ))
                    ) : (
                        <EmptyTasks message={t("NoTasksToday")} />
                    )}
                </TasksList>
            </TasksSection>

            <TasksSection>
                <SectionTitle>{t('UpcomingTasks')}</SectionTitle>
                <TasksList>
                    {upcomingTasks.length > 0 ? (
                        upcomingTasks.map(task => (
                            <Task
                                key={task.id}
                                {...task}
                                completed={completedTasks.has(task.id)}
                                onComplete={handleTaskComplete}
                            />
                        ))
                    ) : (
                        <EmptyTasks message={t("NoUpcomingTasks")} />
                    )}
                </TasksList>
            </TasksSection>
        </PageLayout>
    );
};

export default Care;
