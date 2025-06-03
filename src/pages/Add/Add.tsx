import React, { useState } from 'react';
import { Camera, ScanText, ChevronLeft, Droplets } from 'lucide-react';
import { Select } from 'antd';
import styled from 'styled-components';
import {
    AddContainer,
    HeaderContainer,
    BackButton,
    PageTitle,
    FormSection,
    PhotoSection,
    PhotoPlaceholder,
    PhotoActions,
    PhotoButton,
    FormGroup,
    Label,
    Input,
    Textarea,
    FormRow,
    WateringScheduleIcon,
    ToggleRow,
    Toggle,
    ToggleSlider,
    SaveButton
} from './Add.styles';
import type { AddPlantProps, WateringFrequency, PotSize, Location } from './Add.types';
import type { Plant } from '../../types';

// Styled Ant Design Select components
const StyledSelect = styled(Select)`
    width: 100%;
    
    .ant-select-selector {
        height: 48px !important;
        border-radius: ${({ theme }) => theme.borderRadius.md} !important;
        border-color: ${({ theme }) => theme.colors.border} !important;
        background: ${({ theme }) => theme.colors.background} !important;
        
        .ant-select-selection-item {
            line-height: 46px !important;
            font-size: ${({ theme }) => theme.fontSize.base};
        }
        
        .ant-select-selection-placeholder {
            line-height: 46px !important;
            color: ${({ theme }) => theme.colors.text.light};
        }
        
        &:hover {
            border-color: ${({ theme }) => theme.colors.primary} !important;
        }
    }
    
    &.ant-select-focused .ant-select-selector {
        border-color: ${({ theme }) => theme.colors.primary} !important;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33 !important;
    }
`;

// Mock data for select options
const wateringFrequencies: WateringFrequency[] = [
    { value: 'daily', label: 'Daily' },
    { value: 'twice_weekly', label: 'Twice a week' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Every 2 weeks' },
    { value: 'monthly', label: 'Monthly' }
];

const potSizes: PotSize[] = [
    { value: 'small', label: 'Small (4"-6")' },
    { value: 'medium', label: 'Medium (8"-10")' },
    { value: 'large', label: 'Large (12"+)' }
];

const locations: Location[] = [
    { value: 'living_room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'office', label: 'Office' },
    { value: 'outdoor', label: 'Outdoor' }
];

const AddPlant: React.FC<AddPlantProps> = ({ className, onSave, onCancel }) => {
    // Form state
    const [plantSpecies, setPlantSpecies] = useState('');
    const [nickname, setNickname] = useState('');
    const [potSize, setPotSize] = useState('');
    const [location, setLocation] = useState('');
    const [careNotes, setCareNotes] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [enableNotifications, setEnableNotifications] = useState(true);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);

    const handleGoBack = () => {
        if (onCancel) {
            onCancel();
        } else {
            window.history.back();
        }
    };

    const handleTakePhoto = () => {
        // This would be integrated with device camera in a real app
        console.log('Opening camera...');
    };

    const handleScanPlant = () => {
        // This would integrate with a plant identification API in a real app
        console.log('Scanning plant...');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create new plant object
        const newPlant: Plant = {
            id: `plant_${Date.now()}`, // Generate a temporary ID
            name: nickname,
            scientificName: plantSpecies,
            location: locations.find(loc => loc.value === location)?.label || location,
            acquiredDate: new Date(),
            image: photoUrl || undefined,
            status: 'healthy'
        };

        if (onSave) {
            onSave(newPlant);
        }

        // Reset form or navigate away
        console.log('Plant added:', newPlant);
    };    return (
        <AddContainer className={className}>
            <HeaderContainer>
                <BackButton onClick={handleGoBack}>
                    <ChevronLeft size={20} />
                    Back
                </BackButton>
                
                <PageTitle>Add New Plant</PageTitle>
            </HeaderContainer>

            <form onSubmit={handleSubmit}>
                <PhotoSection>
                    <PhotoPlaceholder>
                        <Camera />
                    </PhotoPlaceholder>

                    <PhotoActions>
                        <PhotoButton type="button" onClick={handleTakePhoto}>
                            <Camera size={18} />
                            Take Photo
                        </PhotoButton>
                        <PhotoButton type="button" onClick={handleScanPlant}>
                            <ScanText size={18} />
                            Scan Plant
                        </PhotoButton>
                    </PhotoActions>
                </PhotoSection>

                <FormSection>                    <FormGroup>
                        <Label htmlFor="species">Plant Species</Label>                        <StyledSelect
                            placeholder="Select or search species"
                            value={plantSpecies}
                            onChange={(value) => setPlantSpecies(value as string)}
                            showSearch
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                { value: 'pothos', label: 'Pothos (Epipremnum aureum)' },
                                { value: 'snake_plant', label: 'Snake Plant (Sansevieria trifasciata)' },
                                { value: 'fiddle_leaf', label: 'Fiddle Leaf Fig (Ficus lyrata)' },
                                { value: 'monstera', label: 'Monstera Deliciosa' },
                                { value: 'peace_lily', label: 'Peace Lily (Spathiphyllum)' },
                            ]}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="nickname">Plant Nickname</Label>
                        <Input
                            id="nickname"
                            type="text"
                            placeholder="Give your plant a name"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </FormGroup>

                    <FormRow>                        <FormGroup>
                            <Label htmlFor="potSize">Pot Size</Label>                            <StyledSelect
                                placeholder="Select size"
                                value={potSize}
                                onChange={(value) => setPotSize(value as string)}
                                options={potSizes}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="location">Location</Label>
                            <StyledSelect
                                placeholder="Select room"
                                value={location}
                                onChange={(value) => setLocation(value as string)}
                                options={locations}
                            />
                        </FormGroup>
                    </FormRow>

                    <FormGroup>
                        <Label htmlFor="careNotes">Care Notes</Label>
                        <Textarea
                            id="careNotes"
                            placeholder="Add any special care instructions..."
                            value={careNotes}
                            onChange={(e) => setCareNotes(e.target.value)}
                        />
                    </FormGroup>
                </FormSection>

                <FormSection>
                    <WateringScheduleIcon>
                        <Droplets />
                    </WateringScheduleIcon>                    <FormGroup>
                        <Label htmlFor="wateringFrequency">Watering Frequency</Label>
                        <StyledSelect
                            placeholder="Select frequency"
                            value={wateringFrequency}
                            onChange={(value) => setWateringFrequency(value as string)}
                            options={wateringFrequencies}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ToggleRow>
                            <Label htmlFor="notifications">Push Notifications</Label>
                            <Toggle>
                                <input
                                    type="checkbox"
                                    checked={enableNotifications}
                                    onChange={(e) => setEnableNotifications(e.target.checked)}
                                />
                                <ToggleSlider checked={enableNotifications} />
                            </Toggle>
                        </ToggleRow>
                    </FormGroup>
                </FormSection>

                <SaveButton type="submit">Save Plant</SaveButton>
            </form>
        </AddContainer>
    );
};

export default AddPlant;
