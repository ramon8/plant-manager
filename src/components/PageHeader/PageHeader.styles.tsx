import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.md} 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: ${theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin: ${theme.spacing.xs} 0 0 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  margin-left: -${theme.spacing.sm};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.text.primary};
`;
