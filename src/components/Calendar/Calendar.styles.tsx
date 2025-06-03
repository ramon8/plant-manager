import styled from 'styled-components';
import { theme } from '../../theme';

export const CalendarContainer = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.md};
`;

export const CalendarNav = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text.primary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CalendarTitle = styled.h2`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  overflow: hidden;
`;

export const CalendarDayHeader = styled.div`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.sm};
  text-align: center;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
`;

export const CalendarDay = styled.div<{ 
  isToday?: boolean; 
  isOtherMonth?: boolean; 
  hasTasks?: boolean;
  isSelected?: boolean;
}>`
  background-color: ${props => {
    if (props.isSelected) return theme.colors.primary;
    if (props.isToday) return theme.colors.surface;
    return theme.colors.background;
  }};
  padding: ${theme.spacing.sm};
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  ${props => props.isOtherMonth && `
    opacity: 0.3;
  `}

  &:hover {
    background-color: ${props => {
      if (props.isSelected) return theme.colors.primaryHover;
      if (props.isToday) return theme.colors.border;
      return theme.colors.surface;
    }};
  }

  ${props => props.hasTasks && `
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 6px;
      height: 6px;
      background-color: ${props.isSelected || props.isToday ? theme.colors.primary : theme.colors.secondary};
      border-radius: 50%;
    }
  `}
`;

export const CalendarDate = styled.span<{ isToday?: boolean; isSelected?: boolean }>`
  font-size: ${theme.fontSize.sm};
  font-weight: ${props => props.isToday || props.isSelected ? theme.fontWeight.bold : theme.fontWeight.normal};
  color: ${props => {
    if (props.isSelected) return theme.colors.background;
    return theme.colors.text.primary;
  }};
`;
