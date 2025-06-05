import styled from 'styled-components';

export const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  svg {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;
