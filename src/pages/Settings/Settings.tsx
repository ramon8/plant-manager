import React, { useState } from 'react';
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
                <h1>Settings</h1>
                <p>Customize your Plant Manager experience and preferences.</p>
            </SettingsHeader>

            <SettingsSections>
                <SettingsSection>
                    <h3>🔔 Notifications</h3>
                    <ToggleSetting
                        label="Enable watering reminders"
                        description="Get notified when your plants need watering"
                        checked={settings.notifications.wateringReminders}
                        onChange={(value) => updateNotificationSetting('wateringReminders', value)}
                    />
                    <ToggleSetting
                        label="Enable care notifications"
                        description="Receive alerts for fertilizing, repotting, and other care tasks"
                        checked={settings.notifications.careNotifications}
                        onChange={(value) => updateNotificationSetting('careNotifications', value)}
                    />
                    <ToggleSetting
                        label="Email notifications"
                        description="Receive care reminders via email"
                        checked={settings.notifications.emailNotifications}
                        onChange={(value) => updateNotificationSetting('emailNotifications', value)}
                    />
                </SettingsSection>

                <SettingsSection>
                    <h3>🎨 Display & Preferences</h3>
                    <SelectSetting
                        label="Theme"
                        description="Choose your preferred color scheme"
                        value={settings.display.theme}
                        options={[
                            { value: 'light', label: 'Light' },
                            { value: 'dark', label: 'Dark' },
                            { value: 'auto', label: 'Auto (System)' },
                        ]}
                        onChange={(value) => updateDisplaySetting('theme', value)}
                    />
                    <SelectSetting
                        label="Language"
                        description="Select your preferred language"
                        value={settings.display.language}
                        options={[
                            { value: 'en', label: 'English' },
                            { value: 'es', label: 'Español' },
                            { value: 'fr', label: 'Français' },
                            { value: 'de', label: 'Deutsch' },
                        ]}
                        onChange={(value) => updateDisplaySetting('language', value)}
                    />
                    <SelectSetting
                        label="Date Format"
                        description="Choose how dates are displayed"
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
                    <h3>🌱 Care Settings</h3>
                    <SelectSetting
                        label="Default watering frequency"
                        description="Default days between watering for new plants"
                        value={settings.care.defaultWateringFrequency.toString()}
                        options={[
                            { value: '1', label: 'Daily' },
                            { value: '3', label: 'Every 3 days' },
                            { value: '7', label: 'Weekly' },
                            { value: '14', label: 'Bi-weekly' },
                            { value: '30', label: 'Monthly' },
                        ]}
                        onChange={(value) => updateCareSetting('defaultWateringFrequency', parseInt(value))}
                    />
                    <SelectSetting
                        label="Reminder time"
                        description="What time should we send you care reminders?"
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
                        label="Week starts on"
                        description="First day of the week in calendar views"
                        value={settings.care.weekStartsOn}
                        options={[
                            { value: 'sunday', label: 'Sunday' },
                            { value: 'monday', label: 'Monday' },
                        ]}
                        onChange={(value) => updateCareSetting('weekStartsOn', value)}
                    />
                </SettingsSection>

                <SettingsSection>
                    <h3>💾 Data Management</h3>
                    <SettingItem>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            Export your plant data for backup or import data from another device.
                        </p>
                        <DataActionsContainer>
                            <ActionButton variant="primary" onClick={handleExportData}>
                                📤 Export Plant Data
                            </ActionButton>
                            <ActionButton variant="secondary" onClick={handleImportData}>
                                📥 Import Plant Data
                            </ActionButton>
                            <ActionButton variant="danger" onClick={handleResetData}>
                                🗑️ Reset All Data
                            </ActionButton>
                        </DataActionsContainer>
                    </SettingItem>
                </SettingsSection>
            </SettingsSections>
        </SettingsContainer>
    );
};

export default Settings;
