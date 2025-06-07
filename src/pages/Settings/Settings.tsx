import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../../components/PageLayout';
import {
    SettingsContainer,
    SettingsSections,
    SettingsSection,
    Select,
    SettingContent,
    SettingControl,
    SettingDescription,
    SettingItem,
    SettingLabel,
    SettingRow,
} from './Settings.styles';
import type { SelectSettingProps, SettingsProps } from './Settings.types';
import { useTheme } from '../../theme/ThemeContext';
import { useAppData } from '../../context';


// Components currently unused but kept for future settings implementation
/*
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
*/

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
    const { t, i18n } = useTranslation();
    const { setTheme } = useTheme();
    const {
        settings,
        updateDisplaySetting,
    } = useAppData();


    // Placeholder actions for future data management features
    /*
    const handleExportData = () => {
        console.log('Export data clicked');
    };

    const handleImportData = () => {
        console.log('Import data clicked');
    };

    const handleResetData = () => {
        if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
            console.log('Reset data confirmed');
        }
    };
    */    return (
        <PageLayout
            title={t('SettingsTitle')}
            subtitle={t('SettingsSubtitle')}
            className={className}
        >
            <SettingsContainer>

                <SettingsSections>
                    {/* <SettingsSection>
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
                </SettingsSection> */}

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
                            onChange={(value) => {
                                updateDisplaySetting('theme', value);
                                if (value === 'light' || value === 'dark') {
                                    setTheme(value);
                                }
                            }}
                        />
                        <SelectSetting
                            label={t('Language')}
                            description={t('SelectLanguage')}
                            value={settings.display.language}
                            options={[
                                { value: 'en', label: t('English') },
                                { value: 'es', label: t('Spanish') },
                            ]}
                            onChange={(value) => {
                                i18n.changeLanguage(value);
                                updateDisplaySetting('language', value);
                            }}
                        />
                        {/* <SelectSetting
                        label={t('DateFormat')}
                        description={t('ChooseDateDisplay')}
                        value={settings.display.dateFormat}
                        options={[
                            { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                            { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                            { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
                        ]}
                        onChange={(value) => updateDisplaySetting('dateFormat', value)}
                    /> */}
                    </SettingsSection>

                    {/* <SettingsSection>
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
                </SettingsSection> */}

                    {/* <SettingsSection>
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
                    </SettingItem>                </SettingsSection> */}
                </SettingsSections>
            </SettingsContainer>
        </PageLayout>
    );
};

export default Settings;
