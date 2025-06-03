import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Droplet, Clock, Book, BarChart2, Settings } from 'lucide-react';
import {
    PlantDetailContainer,
    ProfileCard,
    PlantInfo,
    PlantImage,
    PlantDetails,
    PlantName,
    ScientificName,
    TagsContainer,
    Tag,
    HealthSection,
    HealthLabel,
    HealthBar,
    HealthIndicator,
    InfoCardsContainer,
    InfoCard,
    InfoIconWrapper,
    InfoLabel,
    InfoValue,
    SectionCard,
    SectionHeader,
    SectionIcon,
    SectionTitle,
    CareNotesText,
    HistoryList,
    HistoryItem,
    HistoryDate,
    HistoryAction,
    HistoryActionIcon,
    ActionButtonsContainer,
    WaterNowButton,
    EditPlantButton
} from './PlantDetail.styles';
import type { PlantDetailProps, WateringHistoryItemProps } from './PlantDetail.types';
import { plants } from '../../mocks/plants';
import type { Plant } from '../../types';
import PageHeader from '../../components/PageHeader';

const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

const getRelativeWateringDay = (lastWatered: Date): string => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (formatDate(lastWatered) === formatDate(today)) {
        return 'Today';
    } else if (formatDate(lastWatered) === formatDate(tomorrow)) {
        return 'Tomorrow';
    } else {
        return formatDate(lastWatered);
    }
};

const WateringHistoryItem: React.FC<WateringHistoryItemProps> = ({ date, description }) => (
    <HistoryItem>
        <div>
            <HistoryDate>{formatDate(date)}</HistoryDate>
            <HistoryAction>{description}</HistoryAction>
        </div>
        <HistoryActionIcon>
            <Droplet size={16} />
        </HistoryActionIcon>
    </HistoryItem>
);

const PlantDetail: React.FC<PlantDetailProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [plant, setPlant] = useState<Plant | null>(null);

    // Simulated watering history
    const wateringHistory = [
        {
            date: new Date('2024-01-20'),
            description: 'Regular watering'
        },
        {
            date: new Date('2024-01-15'),
            description: 'Removed dead leaves'
        }
    ];

    useEffect(() => {
        // In a real app, fetch the plant from an API
        // For now, use the mock data
        const foundPlant = plants.find(p => p.id === id);
        if (foundPlant) {
            setPlant(foundPlant);
        }
    }, [id]);

    if (!plant) {
        return <div>Loading...</div>;
    }

    const handleBack = () => {
        navigate('/');
    };

    const handleWaterNow = () => {
        console.log('Water now clicked for plant:', plant.id);
        // In a real app, would update the lastWatered date and save to API
    };

    const handleEditPlant = () => {
        console.log('Edit plant clicked for plant:', plant.id);
        // Navigate to edit plant page
    };

    // Determine next watering day (simplified logic for demo)
    const nextWateringDay = plant.lastWatered
        ? getRelativeWateringDay(new Date(plant.lastWatered.getTime() + 5 * 24 * 60 * 60 * 1000))
        : 'Not set';

    // Health percentage (mock value for demo)
    const healthPercentage = 92;

    return (
        <PlantDetailContainer className={className}>
            <PageHeader title={plant.name} onBack={handleBack} />

            <ProfileCard>
                <PlantInfo>
                    <PlantImage>
                        {/* Placeholder image - in a real app, use plant.image */}
                    </PlantImage>
                    <PlantDetails>
                        <PlantName>{plant.name}</PlantName>
                        <ScientificName>{plant.scientificName}</ScientificName>
                        <TagsContainer>
                            <Tag>Growing</Tag>
                            <Tag>{plant.location}</Tag>
                        </TagsContainer>
                    </PlantDetails>
                </PlantInfo>

                <HealthSection>
                    <HealthLabel>
                        <span>Plant Health</span>
                        <span>{healthPercentage}%</span>
                    </HealthLabel>
                    <HealthBar>
                        <HealthIndicator percent={healthPercentage} />
                    </HealthBar>
                </HealthSection>
            </ProfileCard>

            <InfoCardsContainer>
                <InfoCard>
                    <InfoIconWrapper>
                        <Droplet size={24} />
                    </InfoIconWrapper>
                    <InfoLabel>Next Watering</InfoLabel>
                    <InfoValue>{nextWateringDay}</InfoValue>
                </InfoCard>
                <InfoCard>
                    <InfoIconWrapper>
                        <Clock size={24} />
                    </InfoIconWrapper>
                    <InfoLabel>Frequency</InfoLabel>
                    <InfoValue>Every 5 days</InfoValue>
                </InfoCard>
            </InfoCardsContainer>

            <SectionCard>
                <SectionHeader>
                    <SectionIcon>
                        <Book size={20} />
                    </SectionIcon>
                    <SectionTitle>Care Notes</SectionTitle>
                </SectionHeader>
                <CareNotesText>
                    Produces baby plants. Great for beginners.
                </CareNotesText>
            </SectionCard>

            <SectionCard>
                <SectionHeader>
                    <SectionIcon>
                        <BarChart2 size={20} />
                    </SectionIcon>
                    <SectionTitle>Watering History</SectionTitle>
                </SectionHeader>
                <HistoryList>
                    {wateringHistory.map((item, index) => (
                        <WateringHistoryItem
                            key={index}
                            date={item.date}
                            description={item.description}
                        />
                    ))}
                </HistoryList>
            </SectionCard>

            <ActionButtonsContainer>
                <WaterNowButton onClick={handleWaterNow}>
                    <Droplet size={20} />
                    Water Now
                </WaterNowButton>
                <EditPlantButton onClick={handleEditPlant}>
                    <Settings size={20} />
                    Edit Plant
                </EditPlantButton>
            </ActionButtonsContainer>
        </PlantDetailContainer>
    );
};

export default PlantDetail;
