import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    SettingsContainer,
    SettingsHeader,
    SettingsSections,
    SettingsSection,
    SettingItem,
    SettingLabel,
    SettingDescription,
    Checkbox,
    Select,
    DataActionsContainer,
    ActionButton,
    SettingRow,
    SettingContent,
    SettingControl,
} from './Settings.styles';
import type { ToggleSettingProps, SelectSettingProps, SettingsProps, UserSettings } from './Settings.types';

const ToggleSetting: React.FC<ToggleSettingProps> = ({
    label,
    description,
    checked,
    onChange,
}) => (
    <SettingItem>
        <SettingRow>
            <SettingContent>
                <SettingLabel>
                    <Checkbox
                        checked={checked}
                        onChange={(e) => onChange(e.target.checked)}
                    />
                    {label}
                </SettingLabel>
                {description && <SettingDescription>{description}</SettingDescription>}
            </SettingContent>
        </SettingRow>
    </SettingItem>
);

const SelectSetting: React.FC<SelectSettingProps> = ({
    label,
    description,
    value,
    options,
    onChange,
}) => (
    <SettingItem>
        <SettingRow>
            <SettingContent>
                <SettingLabel>
                    {label}:
                    <SettingControl>
                        <Select value={value} onChange={(e) => onChange(e.target.value)}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                    </SettingControl>
                </SettingLabel>
                {description && <SettingDescription>{description}</SettingDescription>}
            </SettingContent>
        </SettingRow>
    </SettingItem>
);

const Settings: React.FC<SettingsProps> = ({ className }) => {
    const { t } = useTranslation();
    const [settings, setSettings] = useState<UserSettings>({
        notifications: {
            wateringReminders: true,
            careNotifications: true,
            emailNotifications: false,
        },
        display: {
            theme: 'light',
            language: 'en',
            dateFormat: 'MM/DD/YYYY',
        },
        care: {
            defaultWateringFrequency: 7,
            reminderTime: '09:00',
            weekStartsOn: 'sunday',
        },
    });

    const updateNotificationSetting = (key: keyof UserSettings['notifications'], value: boolean) => {
        setSettings(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: value,
            },
        }));
    };

    const updateDisplaySetting = (key: keyof UserSettings['display'], value: string) => {
        setSettings(prev => ({
            ...prev,
            display: {
                ...prev.display,
                [key]: value,
            },
        }));
    };

    const updateCareSetting = (key: keyof UserSettings['care'], value: string | number) => {
        setSettings(prev => ({
            ...prev,
            care: {
                ...prev.care,
                [key]: value,
            },
        }));
    };

    const handleExportData = () => {
        // TODO: Implement data export functionality
        console.log('Export data clicked');
    };

    const handleImportData = () => {
        // TODO: Implement data import functionality
        console.log('Import data clicked');
    };

    const handleResetData = () => {
        // TODO: Implement data reset functionality
        if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
            console.log('Reset data confirmed');
        }
    };

    return (
        <SettingsContainer className={className}>
            <SettingsHeader>
                <h1>{t('SettingsTitle')}</h1>
                <p>{t('SettingsSubtitle')}</p>
            </SettingsHeader>

            <SettingsSections>
                <SettingsSection>
                    <h3>🔔 {t('Notifications')}</h3>
                    <ToggleSetting
                        label={t('EnableWateringReminders')}
                        description={t('GetNotifiedWatering')}
                        checked={settings.notifications.wateringReminders}
                        onChange={(value) => updateNotificationSetting('wateringReminders', value)}
                    />
                    <ToggleSetting
                        label={t('EnableCareNotifications')}
                        description={t('ReceiveAlerts')}
                        checked={settings.notifications.careNotifications}
                        onChange={(value) => updateNotificationSetting('careNotifications', value)}
                    />
                    <ToggleSetting
                        label={t('EmailNotifications')}
                        description={t('ReceiveEmail')}
                        checked={settings.notifications.emailNotifications}
                        onChange={(value) => updateNotificationSetting('emailNotifications', value)}
                    />
                </SettingsSection>

                <SettingsSection>
                    <h3>🎨 {t('DisplayPrefs')}</h3>
                    <SelectSetting
                        label={t('Theme')}
                        description={t('ChooseColorScheme')}
                        value={settings.display.theme}
                        options={[
                            { value: 'light', label: t('Light') },
                            { value: 'dark', label: t('Dark') },
                            { value: 'auto', label: t('Auto') },
                        ]}
                        onChange={(value) => updateDisplaySetting('theme', value)}
                    />
                    <SelectSetting
                        label={t('Language')}
                        description={t('SelectLanguage')}
                        value={settings.display.language}
                        options={[
                            { value: 'en', label: t('English') },
                            { value: 'es', label: t('Spanish') },
                        ]}
                        onChange={(value) => updateDisplaySetting('language', value)}
                    />
                    <SelectSetting
                        label={t('DateFormat')}
                        description={t('ChooseDateDisplay')}
                        value={settings.display.dateFormat}
                        options={[
                            { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                            { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                            { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
                        ]}
                        onChange={(value) => updateDisplaySetting('dateFormat', value)}
                    />
                </SettingsSection>

                <SettingsSection>
                    <h3>🌱 {t('CareSettings')}</h3>
                    <SelectSetting
                        label={t('DefaultWateringFrequency')}
                        description={t('DefaultDaysBetween')}
                        value={settings.care.defaultWateringFrequency.toString()}
                        options={[
                            { value: '1', label: t('Daily') },
                            { value: '3', label: 'Every 3 days' },
                            { value: '7', label: t('Weekly') },
                            { value: '14', label: 'Bi-weekly' },
                            { value: '30', label: t('Monthly') },
                        ]}
                        onChange={(value) => updateCareSetting('defaultWateringFrequency', parseInt(value))}
                    />
                    <SelectSetting
                        label={t('ReminderTime')}
                        description={t('WhatTimeReminders')}
                        value={settings.care.reminderTime}
                        options={[
                            { value: '07:00', label: '7:00 AM' },
                            { value: '09:00', label: '9:00 AM' },
                            { value: '12:00', label: '12:00 PM' },
                            { value: '18:00', label: '6:00 PM' },
                            { value: '20:00', label: '8:00 PM' },
                        ]}
                        onChange={(value) => updateCareSetting('reminderTime', value)}
                    />
                    <SelectSetting
                        label={t('WeekStartsOn')}
                        description={t('FirstDayOfWeek')}
                        value={settings.care.weekStartsOn}
                        options={[
                            { value: 'sunday', label: t('Sunday') },
                            { value: 'monday', label: t('Monday') },
                        ]}
                        onChange={(value) => updateCareSetting('weekStartsOn', value)}
                    />
                </SettingsSection>

                <SettingsSection>
                    <h3>💾 {t('DataManagement')}</h3>
                    <SettingItem>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            {t('ExportDescription')}
                        </p>
                        <DataActionsContainer>
                            <ActionButton variant="primary" onClick={handleExportData}>
                                📤 {t('ExportPlantData')}
                            </ActionButton>
                            <ActionButton variant="secondary" onClick={handleImportData}>
                                📥 {t('ImportPlantData')}
                            </ActionButton>
                            <ActionButton variant="danger" onClick={handleResetData}>
                                🗑️ {t('ResetAllData')}
                            </ActionButton>
                        </DataActionsContainer>
                    </SettingItem>
                </SettingsSection>
            </SettingsSections>
        </SettingsContainer>
    );
};

export default Settings;
