import type { Plant } from "../../types";


export interface AddPlantProps {
  className?: string;
  onSave?: (plant: Plant) => void;
  onCancel?: () => void;
}

export interface WateringFrequency {
  value: string;
  label: string;
}

export interface PotSize {
  value: string;
  label: string;
}

export interface Location {
  value: string;
  label: string;
}
