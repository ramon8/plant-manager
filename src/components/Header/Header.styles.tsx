import styled from 'styled-components';
import { theme } from '../../theme';

export const HeaderContainer = styled.header`
  /* padding: ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}; */
  text-align: center;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing.lg};
  background-color: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${theme.colors.border};
  }

  p {
    color: ${theme.colors.text.secondary};
    margin: ${theme.spacing.sm} 0 0 0;
    font-size: ${theme.fontSize.sm};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};

  &::before {
    content: '🌱';
    font-size: ${theme.fontSize.xl};
  }
`;
