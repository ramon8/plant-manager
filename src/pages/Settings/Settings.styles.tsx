import styled from 'styled-components';
import { Button, PageHeader } from '../../components/Common';


export const SettingsContainer = styled.div`
  max-width: 100%;
`;

export const SettingsHeader = styled(PageHeader)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.lg};

    line-height: 1.5;
  }
`;

export const SettingsSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const SettingsSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  }
`;

export const SettingItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};


  &:last-child {
    margin-bottom: 0;
  }
`;

export const SettingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SettingDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => theme.spacing.xl};

`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`;

export const Select = styled.select`
  margin-left: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base};

  min-width: 120px;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};

    outline-offset: 2px;
  }
`;

export const DataActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

    flex-direction: column;
  }
`;

export const ActionButton = styled(Button)<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  min-width: 160px;
`;

export const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

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
