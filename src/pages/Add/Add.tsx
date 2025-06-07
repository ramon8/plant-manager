import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, ScanText, ChevronLeft, Droplets } from 'lucide-react';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import {
    AddContainer,
    BackButton,
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
import { useAppData } from '../../context';

// Styled Ant Design Select components
const StyledSelect = styled(Select)`
    width: 100%;
    
    .ant-select-selector {
        height: 48px !important;
        border-radius: ${({ theme }) => theme.borderRadius.md} !important;
        border-color: ${({ theme }) => theme.colors.border} !important;
        background: ${({ theme }) => theme.colors.surface} !important;
        color: ${({ theme }) => theme.colors.text.primary} !important;

        .ant-select-selection-item {
            line-height: 46px !important;
            font-size: ${({ theme }) => theme.fontSize.base};
            color: ${({ theme }) => theme.colors.text.primary};
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
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const { plants, addPlant, updatePlant } = useAppData();
    // Form state
    const [plantSpecies, setPlantSpecies] = useState('');
    const [nickname, setNickname] = useState('');
    const [potSize, setPotSize] = useState('');
    const [location, setLocation] = useState('');
    const [careNotes, setCareNotes] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [enableNotifications, setEnableNotifications] = useState(true);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const photoInputRef = useRef<HTMLInputElement | null>(null);
    const scanInputRef = useRef<HTMLInputElement | null>(null);

    const editing = Boolean(id);

    useEffect(() => {
        if (editing) {
            const plant = plants.find(p => p.id === id);
            if (plant) {
                setPlantSpecies(plant.scientificName);
                setNickname(plant.name);
                const locOption = locations.find(l => l.label === plant.location);
                setLocation(locOption ? locOption.value : plant.location);
                setPotSize(plant.potSize || '');
                setCareNotes(plant.careNotes || '');
                setWateringFrequency(plant.wateringFrequency || '');
                setEnableNotifications(
                    plant.notificationsEnabled !== undefined ? plant.notificationsEnabled : true
                );
                if (plant.image) {
                    setPhotoUrl(plant.image);
                }
            }
        }
    }, [editing, id, plants]);

    const handleGoBack = () => {
        if (onCancel) {
            onCancel();
        } else {
            window.history.back();
        }
    };

    const handleTakePhoto = () => {
        photoInputRef.current?.click();
    };

    const handlePhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPhotoUrl(url);
    };

    const handleScanPlant = () => {
        scanInputRef.current?.click();
    };

    const identifyPlant = async (file: File) => {
        const reader = new FileReader();
        reader.onload = async () => {
            const base64 = (reader.result as string).split(',')[1];
            try {
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-4-vision-preview',
                        messages: [
                            {
                                role: 'system',
                                content: 'Identify the plant from the image and respond with JSON {"name":"<common>","scientificName":"<scientific>"}'
                            },
                            {
                                role: 'user',
                                content: [
                                    {
                                        type: 'image_url',
                                        image_url: `data:${file.type};base64,${base64}`,
                                    },
                                ],
                            },
                        ],
                        max_tokens: 100,
                    }),
                });
                const data = await res.json();
                const text = data.choices?.[0]?.message?.content || '';
                try {
                    const json = JSON.parse(text);
                    if (json.name) setNickname(json.name);
                    if (json.scientificName) setPlantSpecies(json.scientificName);
                } catch (err) {
                    console.error('Failed to parse plant data', err);
                }
            } catch (err) {
                console.error('Plant identification failed', err);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleScanSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPhotoUrl(url);
        identifyPlant(file);
    };

    const wateringFrequencies: WateringFrequency[] = [
        { value: 'daily', label: t('Daily') },
        { value: 'twice_weekly', label: t('TwiceWeek') },
        { value: 'weekly', label: t('Weekly') },
        { value: 'biweekly', label: t('Every2Weeks') },
        { value: 'monthly', label: t('Monthly') }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editing && id) {
            const updated = {
                name: nickname,
                scientificName: plantSpecies,
                location: locations.find(loc => loc.value === location)?.label || location,
                potSize: potSize || "",
                careNotes: careNotes || "",
                wateringFrequency: wateringFrequency || "",
                notificationsEnabled: enableNotifications,
                image: photoUrl || "",
            };

            if (onSave) {
                onSave({ id, ...updated } as Plant);
            } else {
                await updatePlant(id, updated);
            }
            navigate(`/plants/${id}`);
        } else {
            const newPlant: Plant = {
                id: '',
                name: nickname,
                scientificName: plantSpecies,
                location: locations.find(loc => loc.value === location)?.label || location,
                potSize: potSize || "",
                careNotes: careNotes || "",
                wateringFrequency: wateringFrequency || "",
                notificationsEnabled: enableNotifications,
                acquiredDate: new Date(),
                image: photoUrl || "",
                status: 'healthy',
            };

            if (onSave) {
                onSave(newPlant);
            } else {
                const id = await addPlant(newPlant);
                navigate(`/plants/${id}`);
                return;
            }
            navigate('/');
        }
    }; return (
        <PageLayout
            title={editing ? t('EditPlant') : t('AddNewPlant')}
            subtitle={editing ? t('UpdatePlantInfo') : t('AddPlantToCollection')}
            className={className}
            onBack={handleGoBack}
        >
            <AddContainer>
                <form onSubmit={handleSubmit}>
                    <PhotoSection>
                        <PhotoPlaceholder>
                            {photoUrl ? (
                                <img
                                    src={photoUrl}
                                    alt="Plant"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                            ) : (
                                <Camera />
                            )}
                        </PhotoPlaceholder>

                    <PhotoActions>
                        <PhotoButton type="button" onClick={handleTakePhoto}>
                            <Camera size={18} />
                            {t('TakePhoto')}
                        </PhotoButton>
                        <PhotoButton type="button" onClick={handleScanPlant}>
                            <ScanText size={18} />
                            {t('ScanPlant')}
                        </PhotoButton>
                        <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/*"
                            capture="environment"
                            style={{ display: 'none' }}
                            onChange={handlePhotoSelected}
                        />
                        <input
                            ref={scanInputRef}
                            type="file"
                            accept="image/*"
                            capture="environment"
                            style={{ display: 'none' }}
                            onChange={handleScanSelected}
                        />
                    </PhotoActions>
                </PhotoSection>

                    <FormSection>                    <FormGroup>
                        <Label htmlFor="species">{t("PlantSpecies")}</Label>
                        <StyledSelect
                            placeholder={t("SelectSpecies")}
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
                            <Label htmlFor="nickname">{t("PlantNickname")}</Label>
                            <Input
                                id="nickname"
                                type="text"
                                placeholder={t("GivePlantName")}
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                        </FormGroup>

                        <FormRow>
                            <FormGroup>
                                <Label htmlFor="potSize">{t("PotSize")}</Label>
                                <StyledSelect
                                    placeholder={t("SelectSize")}
                                    value={potSize}
                                    onChange={(value) => setPotSize(value as string)}
                                    options={potSizes}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="location">{t("Location")}</Label>
                                <StyledSelect
                                    placeholder={t("SelectRoom")}
                                    value={location}
                                    onChange={(value) => setLocation(value as string)}
                                    options={locations}
                                />
                            </FormGroup>
                        </FormRow>

                        <FormGroup>
                            <Label htmlFor="careNotes">{t("CareNotes")}</Label>
                            <Textarea
                                id="careNotes"
                                placeholder={t("AddCareInstructions")}
                                value={careNotes}
                                onChange={(e) => setCareNotes(e.target.value)}
                            />
                        </FormGroup>
                    </FormSection>

                    <FormSection>
                        <WateringScheduleIcon>
                            <Droplets />
                        </WateringScheduleIcon>
                        <FormGroup>
                            <Label htmlFor="wateringFrequency">{t("WateringFrequency")}</Label>
                            <StyledSelect
                                placeholder={t("SelectFrequency")}
                                value={wateringFrequency}
                                onChange={(value) => setWateringFrequency(value as string)}
                                options={wateringFrequencies}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ToggleRow>
                                <Label htmlFor="notifications">{t("PushNotifications")}</Label>
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
                    <SaveButton type="submit">{t("SavePlant")}</SaveButton>
                </form>
            </AddContainer>
        </PageLayout>
    );
};

export default AddPlant;
