import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CalendarNav = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CalendarTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
`;

export const CalendarDayHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
`;

export const CalendarDay = styled.div<{
  isToday?: boolean;
  isOtherMonth?: boolean;
  hasTasks?: boolean;
  isSelected?: boolean;
}>`
  background-color: ${({ isSelected, isToday, theme }) => {
    if (isSelected) return theme.colors.primary;
    if (isToday) return theme.colors.surface;
    return theme.colors.background;
  }};
  padding: ${({ theme }) => theme.spacing.sm};
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ isOtherMonth }) => isOtherMonth && `
    opacity: 0.3;
  `}

  &:hover {
    background-color: ${({ isSelected, isToday, theme }) => {
      if (isSelected) return theme.colors.primaryHover;
      if (isToday) return theme.colors.border;
      return theme.colors.surface;
    }};
  }

  ${({ hasTasks, isSelected, isToday, theme }) => hasTasks && `
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 6px;
      height: 6px;
      background-color: ${isSelected || isToday ? theme.colors.primary : theme.colors.secondary};
      border-radius: 50%;
    }
  `}
`;

export const CalendarDate = styled.span<{ isToday?: boolean; isSelected?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ isToday, isSelected, theme }) => isToday || isSelected ? theme.fontWeight.bold : theme.fontWeight.normal};
  color: ${({ isSelected, theme }) => {
    if (isSelected) return theme.colors.background;
    return theme.colors.text.primary;
  }};
`;
