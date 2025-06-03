import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

export interface NavigationProps {
  className?: string;
}

export interface NavLinkItemProps {
  to: string;
  icon: ComponentType<LucideProps>;
  labelKey: string;
}
