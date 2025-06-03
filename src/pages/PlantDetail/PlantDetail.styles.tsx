import styled from 'styled-components';

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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 8px;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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

export const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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

export const SectionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
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

export const WaterNowButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const EditPlantButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
