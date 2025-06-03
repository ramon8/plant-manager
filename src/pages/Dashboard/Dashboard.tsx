import React, { useState } from 'react';
import { Search, Clock, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import {
    DashboardContainer,
    PageHeader,
    PageTitle,
    PlantCount,
    SearchSection,
    SearchInput,
    PlantsGrid,
    PlantCard,
    PlantAvatar,
    PlantInfo,
    PlantName,
    PlantScientific,
    PlantMeta,
    MetaItem,
    StatusDot,
    ClearButton,
    FilterContainer,
} from './Dashboard.styles';
import type { DashboardProps } from './Dashboard.types';
import { plants } from '../../mocks';

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
    const navigate = useNavigate();

    // Available filter options
    const filterOptions = [
        { value: 'All', label: 'All Plants' },
        { value: 'healthy', label: 'Healthy' },
        { value: 'needsAttention', label: 'Needs Attention' },
        { value: 'sick', label: 'Sick' },
        { value: 'watering', label: 'Needs Watering' }
    ];

    // Apply both search and filter
    const filteredPlants = plants.filter(plant => {
        // First apply search term filter
        const matchesSearch =
            searchTerm === '' ||
            plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());

        // Then apply status filter
        let matchesFilter = true;
        if (selectedFilter !== 'All') {
            if (selectedFilter === 'watering') {
                // Check if plant needs watering today or is overdue
                if (plant.nextWatering) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const nextWatering = new Date(plant.nextWatering);
                    nextWatering.setHours(0, 0, 0, 0);
                    matchesFilter = nextWatering <= today;
                } else {
                    matchesFilter = false;
                }
            } else {
                // Filter by status
                matchesFilter = plant.status === selectedFilter;
            }
        }

        return matchesSearch && matchesFilter;
    }); return (
        <DashboardContainer className={className}>
            <PageHeader>
                <PageTitle>My Plants</PageTitle>
                <PlantCount>{filteredPlants.length} of {plants.length} plants</PlantCount>
            </PageHeader>

            <SearchSection>
                <SearchInput>
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search plants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ClearButton
                        hidden={!searchTerm}
                        onClick={() => setSearchTerm('')}
                    >
                        <X size={16} />
                    </ClearButton>
                </SearchInput>
                <FilterContainer>
                    <Select
                        value={selectedFilter}
                        onChange={setSelectedFilter}
                        options={filterOptions}
                        placeholder="Filter plants"
                    />
                </FilterContainer>
            </SearchSection>

            <PlantsGrid>
                {filteredPlants.length > 0 ? (
                    filteredPlants.map((plant) => (
                        <PlantCard key={plant.id} onClick={() => navigate(`/plants/${plant.id}`)}>
                            <PlantAvatar>
                                {plant.name.charAt(0)}
                            </PlantAvatar>
                            <PlantInfo>
                                <PlantName>{plant.name}</PlantName>
                                <PlantScientific>{plant.scientificName}</PlantScientific>
                                <PlantMeta>
                                    <MetaItem>
                                        <Clock size={14} />
                                        {plant.nextWatering?.toDateString() || 'No watering scheduled'}
                                    </MetaItem>
                                    <MetaItem>
                                        <MapPin size={14} />
                                        {plant.location}
                                    </MetaItem>
                                </PlantMeta>
                            </PlantInfo>
                            <StatusDot status={plant.status} />
                        </PlantCard>
                    ))
                ) : (
                    <span>No plants match your current filters.</span>
                )}
            </PlantsGrid>
        </DashboardContainer>
    );
};

export default Dashboard;
