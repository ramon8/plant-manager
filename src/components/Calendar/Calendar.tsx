import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    CalendarContainer,
    CalendarHeader,
    CalendarNav,
    CalendarTitle,
    CalendarGrid,
    CalendarDayHeader,
    CalendarDay,
    CalendarDate,
} from './Calendar.styles';
import type { CalendarProps } from './Calendar.types';

const Calendar: React.FC<CalendarProps> = ({
    className, 
    selectedDate, 
    onDateSelect, 
    tasks = [] 
}) => {
    const { t } = useTranslation();
    const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];
        const today = new Date();

        // Add day headers
        const dayHeaders = [t('Sun'), t('Mon'), t('Tue'), t('Wed'), t('Thu'), t('Fri'), t('Sat')];
        dayHeaders.forEach(day => {
            days.push(
                <CalendarDayHeader key={`header-${day}`}>
                    {day}
                </CalendarDayHeader>
            );
        });

        // Generate calendar days
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const isToday = date.toDateString() === today.toDateString();
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            const isOtherMonth = date.getMonth() !== month;
            const hasTasks = tasks.some(task =>
                task.dueDate.toDateString() === date.toDateString()
            );

            const handleDateClick = () => {
                if (onDateSelect) {
                    onDateSelect(date);
                }
            };

            days.push(
                <CalendarDay
                    key={date.toISOString()}
                    isToday={isToday}
                    isSelected={isSelected}
                    isOtherMonth={isOtherMonth}
                    hasTasks={hasTasks}
                    onClick={handleDateClick}
                >
                    <CalendarDate isToday={isToday} isSelected={isSelected}>
                        {date.getDate()}
                    </CalendarDate>
                </CalendarDay>
            );
        }

        return days;
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        const newDate = new Date(currentDate);
        if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        setCurrentDate(newDate);
    };

    const monthNames = [
        t('January'), t('February'), t('March'), t('April'), t('May'), t('June'),
        t('July'), t('August'), t('September'), t('October'), t('November'), t('December')
    ];

    return (
        <CalendarContainer className={className}>
            <CalendarHeader>
                <CalendarNav onClick={() => navigateMonth('prev')}>
                    <ChevronLeft />
                </CalendarNav>
                <CalendarTitle>
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CalendarTitle>
                <CalendarNav onClick={() => navigateMonth('next')}>
                    <ChevronRight />
                </CalendarNav>
            </CalendarHeader>

            <CalendarGrid>
                {generateCalendar()}
            </CalendarGrid>
        </CalendarContainer>
    );
};

export default Calendar;
