export interface PageLayoutProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}
