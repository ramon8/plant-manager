import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Plant } from '../types';
import type { UserSettings } from '../pages/Settings/Settings.types';
import { plants as mockPlants } from '../mocks';

interface AppDataContextValue {
  plants: Plant[];
  addPlant: (plant: Plant) => void;
  updatePlant: (id: string, updated: Partial<Plant>) => void;
  deletePlant: (id: string) => void;
  settings: UserSettings;
  updateNotificationSetting: (key: keyof UserSettings['notifications'], value: boolean) => void;
  updateDisplaySetting: (key: keyof UserSettings['display'], value: string) => void;
  updateCareSetting: (key: keyof UserSettings['care'], value: string | number) => void;
}

const AppDataContext = createContext<AppDataContextValue>({
  plants: [],
  addPlant: () => {},
  updatePlant: () => {},
  deletePlant: () => {},
  settings: {
    notifications: { wateringReminders: true, careNotifications: true, emailNotifications: false },
    display: { theme: 'light', language: 'en', dateFormat: 'MM/DD/YYYY' },
    care: { defaultWateringFrequency: 7, reminderTime: '09:00', weekStartsOn: 'sunday' },
  },
  updateNotificationSetting: () => {},
  updateDisplaySetting: () => {},
  updateCareSetting: () => {},
});

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [plants, setPlants] = useState<Plant[]>(mockPlants);
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

  const addPlant = (plant: Plant) => {
    setPlants(prev => [...prev, plant]);
  };

  const updatePlant = (id: string, updated: Partial<Plant>) => {
    setPlants(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deletePlant = (id: string) => {
    setPlants(prev => prev.filter(p => p.id !== id));
  };

  const updateNotificationSetting = (
    key: keyof UserSettings['notifications'],
    value: boolean,
  ) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value },
    }));
  };

  const updateDisplaySetting = (
    key: keyof UserSettings['display'],
    value: string,
  ) => {
    setSettings(prev => ({
      ...prev,
      display: { ...prev.display, [key]: value },
    }));
  };

  const updateCareSetting = (
    key: keyof UserSettings['care'],
    value: string | number,
  ) => {
    setSettings(prev => ({
      ...prev,
      care: { ...prev.care, [key]: value },
    }));
  };

  return (
    <AppDataContext.Provider
      value={{
        plants,
        addPlant,
        updatePlant,
        deletePlant,
        settings,
        updateNotificationSetting,
        updateDisplaySetting,
        updateCareSetting,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
