import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Plant } from '../types';
import type { UserSettings } from '../pages/Settings/Settings.types';
import { useAuth } from './AuthContext';
import { useFirestore } from '../hooks/useFirestore';

interface AppDataContextValue {
  plants: Plant[];
  addPlant: (plant: Plant) => Promise<string>;
  updatePlant: (id: string, updated: Partial<Plant>) => Promise<void>;
  deletePlant: (id: string) => Promise<void>;
  settings: UserSettings;
  updateNotificationSetting: (key: keyof UserSettings['notifications'], value: boolean) => void;
  updateDisplaySetting: (key: keyof UserSettings['display'], value: string) => void;
  updateCareSetting: (key: keyof UserSettings['care'], value: string | number) => void;
}

const AppDataContext = createContext<AppDataContextValue>({
  plants: [],
  addPlant: async () => '',
  updatePlant: async () => { },
  deletePlant: async () => { },
  settings: {
    notifications: { wateringReminders: true, careNotifications: true, emailNotifications: false },
    display: { theme: 'light', language: 'en', dateFormat: 'MM/DD/YYYY' },
    care: { defaultWateringFrequency: 7, reminderTime: '09:00', weekStartsOn: 'sunday' },
  },
  updateNotificationSetting: () => { },
  updateDisplaySetting: () => { },
  updateCareSetting: () => { },
});

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const collectionPath = `plants/${user?.uid}/plant`;
  const { data: firestorePlants, get, post, put, remove } = useFirestore(collectionPath);
  const [plants, setPlants] = useState<Plant[]>([]);
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

  useEffect(() => {
    if (user) {
      get();
    }
  }, [user, get]);

  useEffect(() => {
    console.log('Firestore plants updated:', firestorePlants);
    setPlants(firestorePlants as any);
  }, [firestorePlants]);

  const addPlant = async (plant: Plant) => {
    const id = await post({ ...plant });
    setPlants(prev => [...prev, { ...plant, id }]);
    return id;
  };

  const updatePlant = async (id: string, updated: Partial<Plant>) => {
    await put(id, updated);
    setPlants(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deletePlant = async (id: string) => {
    await remove(id);
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
