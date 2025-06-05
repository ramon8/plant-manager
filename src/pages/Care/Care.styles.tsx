import styled from 'styled-components';
import { SectionTitle as BaseSectionTitle } from '../../components/Common';

export const CareContainer = styled.div`
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  padding-bottom: 100px; // Bottom navigation space
`;

export const TasksSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SectionTitle = styled(BaseSectionTitle)`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const EmptyTasksContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};

  .emoji {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 0;
  }
`;
