import styled from 'styled-components';
import { theme } from '../../theme';

export const DashboardContainer = styled.div`
  max-width: 100%;
`;

export const PageHeader = styled.div`
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${theme.colors.background};
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.xs} 0;
`;

export const PlantCount = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.base};
  margin: 0;
`;

export const SearchSection = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  align-items: center;
`;

export const SearchInput = styled.div`
  position: relative;
  flex: 1;
  
  input {
    height: 32px;
    width: 100%;
    padding: 0 ${theme.spacing.md} 0 40px;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    font-size: ${theme.fontSize.base};
    background-color: ${theme.colors.surface};
    
    &::placeholder {
      color: ${theme.colors.text.light};
    }
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }
  
  .search-icon {
    position: absolute;
    left: ${theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.text.light};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.base};
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background-color: ${theme.colors.background};
    border-color: ${theme.colors.primary};
  }
`;

export const FilterDropdown = styled.div`
  position: relative;
`;

export const PlantsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const PlantCard = styled.div`
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  transition: all ${theme.transitions.fast};
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    &:hover {
      box-shadow: ${theme.shadows.md};
      transform: translateY(-1px);
    }
  }
`;

export const PlantAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.secondary};
  flex-shrink: 0;
`;

export const PlantInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PlantName = styled.h3`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.xs} 0;
`;

export const PlantScientific = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin: 0 0 ${theme.spacing.sm} 0;
  font-style: italic;
`;

export const PlantMeta = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

export const StatusDot = styled.div<{ status: 'healthy' | 'needsAttention' | 'sick' | undefined }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${({ status }) => {
        switch (status) {
            case 'sick': return '#ef4444';
            case 'needsAttention': return '#f59e0b';
            case 'healthy': return '#10b981';
            default: return '#6b7280';
        }
    }};
`;

// Add styling for filter container
export const FilterContainer = styled.div`
    .ant-select {
        width: 160px;
        
        .ant-select-selector {
            border-radius: ${({ theme }) => theme.borderRadius.md};
            border-color: ${({ theme }) => theme.colors.border};
            background: ${({ theme }) => theme.colors.background};
            
            &:hover {
                border-color: ${({ theme }) => theme.colors.primary};
            }
        }
        
        &.ant-select-focused .ant-select-selector {
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
        }
    }
`;

export const ClearButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    padding: 8px;
    margin-left: 4px;
    display: ${props => props.hidden ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    
    &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
    }
`;
