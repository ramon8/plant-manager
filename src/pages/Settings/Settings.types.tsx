export interface SettingsProps {
  className?: string;
}

export interface SettingSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface ToggleSettingProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface SelectSettingProps {
  label: string;
  description?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export interface UserSettings {
  notifications: {
    wateringReminders: boolean;
    careNotifications: boolean;
    emailNotifications: boolean;
  };
  display: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    dateFormat: string;
  };
  care: {
    defaultWateringFrequency: number;
    reminderTime: string;
    weekStartsOn: 'sunday' | 'monday';
  };
}
