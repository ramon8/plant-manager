import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md}; */
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 100;

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '🌱';
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
