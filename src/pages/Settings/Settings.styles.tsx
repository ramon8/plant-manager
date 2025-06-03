import styled from 'styled-components';
import { theme } from '../../theme';

export const SettingsContainer = styled.div`
  max-width: 100%;
`;

export const SettingsHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
  position: sticky;
  top: 0;
  background-color: ${theme.colors.background};
  padding-top: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;

  h1 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.fontSize['4xl']};
    font-weight: ${theme.fontWeight.bold};
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSize.lg};
    line-height: 1.5;
  }
`;

export const SettingsSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const SettingsSection = styled.section`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};

  h3 {
    margin: 0 0 ${theme.spacing.lg} 0;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.xl};
    font-weight: ${theme.fontWeight.semibold};
    padding-bottom: ${theme.spacing.sm};
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const SettingItem = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SettingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.text.primary};
`;

export const SettingDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.sm};
  margin-top: ${theme.spacing.xs};
  margin-left: ${theme.spacing.xl}; // Align with label text
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`;

export const Select = styled.select`
  margin-left: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.base};
  min-width: 120px;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const DataActionsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.medium};
  transition: all ${theme.transitions.fast};
  min-width: 160px;

  ${props => props.variant === 'primary' && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text.white};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.text.white};
    
    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
  `}

  ${props => props.variant === 'danger' && `
    background-color: #dc3545;
    color: ${theme.colors.text.white};
    
    &:hover {
      background-color: #c82333;
    }
  `}

  ${props => !props.variant && `
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background-color: ${theme.colors.border};
    }
  `}

  &:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SettingContent = styled.div`
  flex: 1;
`;

export const SettingControl = styled.div`
  flex-shrink: 0;
`;
