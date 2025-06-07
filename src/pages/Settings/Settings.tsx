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
    ActionButton,
} from './Settings.styles';
import type { SelectSettingProps, SettingsProps } from './Settings.types';
import { useTheme } from '../../theme/ThemeContext';
import { useAppData, useAuth } from '../../context';


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
    const { logout } = useAuth();


    return (
        <PageLayout
            title={t('SettingsTitle')}
            subtitle={t('SettingsSubtitle')}
            className={className}
        >
            <SettingsContainer>

                <SettingsSections>


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

                    </SettingsSection>


                    <SettingsSection>
                        <ActionButton variant="danger" onClick={logout}>
                            {t('Logout')}
                        </ActionButton>
                    </SettingsSection>
                </SettingsSections>
            </SettingsContainer>
        </PageLayout>
    );
};

export default Settings;
