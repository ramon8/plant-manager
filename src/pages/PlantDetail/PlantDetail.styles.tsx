import styled from 'styled-components';
import {
  BackButton as BaseBackButton,
  PageTitle as BasePageTitle,
  SectionTitle as BaseSectionTitle,
  Button,
  Card,
} from '../../components/Common';

export const PlantDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 80px 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 8px;
`;

export const BackButton = styled(BaseBackButton)`
  margin-right: 8px;
`;

export const PageTitle = styled(BasePageTitle)`
  margin: 0;
  font-size: 1.5rem;
`;

export const ProfileCard = styled(Card)`
  margin-bottom: 16px;
`;

export const PlantInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const PlantImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PlantDetails = styled.div`
  flex: 1;
`;

export const PlantName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 4px 0;
`;

export const ScientificName = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.light};
  margin: 0 0 8px 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
`;

export const HealthSection = styled.div`
  margin-top: 8px;
`;

export const HealthLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.875rem;
`;

export const HealthBar = styled.div`
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const HealthIndicator = styled.div<{ percent: number }>`
  height: 100%;
  width: ${props => props.percent}%;
  background-color: #4caf50;
  border-radius: 4px;
`;

export const InfoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
`;

export const InfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoIconWrapper = styled.div`
  color: #2196f3;
  margin-bottom: 8px;
`;

export const InfoLabel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.light};
  margin: 0;
`;

export const InfoValue = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 4px 0 0 0;
`;

export const SectionCard = styled(Card)`
  margin-bottom: 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SectionIcon = styled.span`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionTitle = styled(BaseSectionTitle)`
  font-size: 1rem;
  margin: 0;
`;

export const CareNotesText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const HistoryDate = styled.div`
  font-weight: 500;
`;

export const HistoryAction = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.9375rem;
`;

export const HistoryActionIcon = styled.button`
  background: transparent;
  border: none;
  color: #2196f3;
  cursor: pointer;
  padding: 8px;
`;

export const ActionButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
`;

export const WaterNowButton = styled(Button).attrs({ variant: 'primary' })`
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  gap: 8px;
`;

export const EditPlantButton = styled(Button)`
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  gap: 8px;
`;
