export interface PageHeaderProps {
  title?: string | React.ReactNode;
  subtitle?: string;
  onBack?: () => void;
  rightContent?: React.ReactNode;
  className?: string;
}
