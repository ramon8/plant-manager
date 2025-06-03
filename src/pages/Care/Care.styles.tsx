import styled from 'styled-components';
import { theme } from '../../theme';

export const CareContainer = styled.div`
  max-width: 100%;
  padding: 0 ${theme.spacing.md};
  padding-bottom: 100px; // Bottom navigation space
`;

export const TasksSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.md} 0;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const EmptyTasksContainer = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};

  .emoji {
    font-size: ${theme.fontSize['3xl']};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    font-size: ${theme.fontSize.base};
    margin: 0;
  }
`;
