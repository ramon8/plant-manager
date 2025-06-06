import styled from 'styled-components';
import { PageTitle as BasePageTitle, PageHeader as BasePageHeader } from '../../components/Common';

export const DashboardContainer = styled.div`
  max-width: 100%;
`;

export const PageHeader = styled(BasePageHeader)``;

export const PageTitle = styled(BasePageTitle)`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;

export const PlantCount = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin: 0;
`;

export const SearchSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

export const SearchInput = styled.div`
  position: relative;
  flex: 1;
  
  input {
    height: 32px;
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md} 0 40px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSize.base};
    background-color: ${({ theme }) => theme.colors.surface};
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.text.light};
    }
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  .search-icon {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FilterDropdown = styled.div`
  position: relative;
`;

export const PlantsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PlantCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.md};
      transform: translateY(-1px);
    }
  }
`;

export const PlantAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  flex-shrink: 0;
`;

export const PlantInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PlantName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;

export const PlantScientific = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-style: italic;
`;

export const PlantMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
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
    display: ${({ hidden }) => hidden ? 'none' : 'flex'};
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
