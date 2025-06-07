import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplet, Clock, Book, BarChart2, Settings, Trash2 } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import {
    PlantDetailContainer,
    BackButton,
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
    EditPlantButton,
    DeletePlantButton,
    ConfirmOverlay,
    ConfirmModal,
    ConfirmActions
} from './PlantDetail.styles';
import { Button } from '../../components/Common';
import type { PlantDetailProps, WateringHistoryItemProps } from './PlantDetail.types';
import { useAppData } from '../../context';
import type { Plant } from '../../types';

const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

const getRelativeWateringDay = (lastWatered: Date, t: (key: string) => string): string => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (formatDate(lastWatered) === formatDate(today)) {
        return t('Today');
    } else if (formatDate(lastWatered) === formatDate(tomorrow)) {
        return t('Tomorrow');
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
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { plants, deletePlant } = useAppData();
    const [plant, setPlant] = useState<Plant | null>(null);
    const [confirmingDelete, setConfirmingDelete] = useState(false);

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
        const foundPlant = plants.find(p => p.id === id);
        if (foundPlant) {
            setPlant(foundPlant);
        }
    }, [id, plants]);

    if (!plant) {
        return <div>{t('Loading')}</div>;
    }

    const handleBack = () => {
        navigate('/');
    };

    const handleWaterNow = () => {
        console.log('Water now clicked for plant:', plant.id);
        // In a real app, would update the lastWatered date and save to API
    };

    const handleEditPlant = () => {
        navigate(`/plants/${plant.id}/edit`);
    };

    const handleDeletePlant = () => {
        setConfirmingDelete(true);
    };

    const confirmDelete = () => {
        deletePlant(plant.id);
        navigate('/');
    };

    const cancelDelete = () => {
        setConfirmingDelete(false);
    };

    // Determine next watering day (simplified logic for demo)
    const nextWateringDay = plant.lastWatered
        ? getRelativeWateringDay(new Date(plant.lastWatered.getTime() + 5 * 24 * 60 * 60 * 1000), t)
        : t('NotSet');

    // Health percentage (mock value for demo)
    const healthPercentage = 92; return (
        <PageLayout
            title={plant.name}
            subtitle={plant.scientificName || t('PlantDetails')}
            className={className}
            onBack={handleBack}
        >
            <PlantDetailContainer>

                <ProfileCard>
                    <PlantInfo>
                        <PlantImage>
                            {/* Placeholder image - in a real app, use plant.image */}
                        </PlantImage>
                        <PlantDetails>
                            <PlantName>{plant.name}</PlantName>
                            <ScientificName>{plant.scientificName}</ScientificName>
                            <TagsContainer>
                                <Tag>{t('Growing')}</Tag>
                                <Tag>{plant.location}</Tag>
                            </TagsContainer>
                        </PlantDetails>
                    </PlantInfo>

                    <HealthSection>
                        <HealthLabel>
                            <span>{t('PlantHealth')}</span>
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
                        <InfoLabel>{t('NextWatering')}</InfoLabel>
                        <InfoValue>{nextWateringDay}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                        <InfoIconWrapper>
                            <Clock size={24} />
                        </InfoIconWrapper>
                        <InfoLabel>{t('Frequency')}</InfoLabel>
                        <InfoValue>{plant.wateringFrequency || t('NotSet')}</InfoValue>
                    </InfoCard>
                </InfoCardsContainer>

                <SectionCard>
                    <SectionHeader>
                        <SectionIcon>
                            <Book size={20} />
                        </SectionIcon>
                        <SectionTitle>{t('CareNotesTitle')}</SectionTitle>
                    </SectionHeader>
                    <CareNotesText>
                        {plant.careNotes || t('CareNotesText')}
                    </CareNotesText>
                </SectionCard>

                <SectionCard>
                    <SectionHeader>
                        <SectionIcon>
                            <BarChart2 size={20} />
                        </SectionIcon>
                        <SectionTitle>{t('WateringHistory')}</SectionTitle>
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
                        {t('WaterNow')}
                    </WaterNowButton>
                    <EditPlantButton onClick={handleEditPlant}>
                        <Settings size={20} />
                        {t('EditPlant')}
                    </EditPlantButton>
                    <DeletePlantButton onClick={handleDeletePlant}>
                        <Trash2 size={20} />
                        {t('DeletePlant')}
                    </DeletePlantButton>
                </ActionButtonsContainer>
                {confirmingDelete && (
                    <ConfirmOverlay>
                        <ConfirmModal>
                            <p>{t('ConfirmDeleteMessage')}</p>
                            <ConfirmActions>
                                <Button onClick={cancelDelete}>{t('Cancel')}</Button>
                                <Button variant="danger" onClick={confirmDelete}>
                                    {t('DeletePlant')}
                                </Button>
                            </ConfirmActions>
                        </ConfirmModal>                </ConfirmOverlay>
                )}
            </PlantDetailContainer>
        </PageLayout>
    );
};

export default PlantDetail;
