import styled from 'styled-components';

export const TaskItem = styled.div<{ completed?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  opacity: ${props => props.completed ? 0.6 : 1};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const TaskCheckbox = styled.button<{ completed?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ completed, theme }) => completed ? theme.colors.success : theme.colors.border};
  background: ${({ completed, theme }) => completed ? theme.colors.success : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.success};
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.background};
    opacity: ${({ completed }) => completed ? 1 : 0};
  }
`;

export const TaskInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TaskName = styled.div<{ completed?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

export const TaskDate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const TaskIcon = styled.div<{ taskType: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ taskType, theme }) => {
    switch (taskType) {
      case 'water': return '#e3f2fd';
      case 'fertilize': return '#f3e5f5';
      case 'repot': return '#fff3e0';
      case 'prune': return '#e8f5e8';
      default: return theme.colors.surface;
    }
  }};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ taskType, theme }) => {
      switch (taskType) {
        case 'water': return '#1976d2';
        case 'fertilize': return '#7b1fa2';
        case 'repot': return '#f57c00';
        case 'prune': return '#388e3c';
        default: return theme.colors.text.secondary;
      }
    }};
  }
`;
