import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { PageHeaderProps } from './PageHeader.types';
import { Container, Title, Subtitle, Left, Right, BackButton } from './PageHeader.styles';

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  onBack,
  rightContent,
  className,
}) => {
  return (
    <Container className={className}>
      <Left>
        {onBack && (
          <BackButton onClick={onBack} aria-label="Go back">
            <ChevronLeft size={20} />
          </BackButton>
        )}
        {title && typeof title === 'string' ? <Title>{title}</Title> : title}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Left>
      {rightContent && <Right>{rightContent}</Right>}
    </Container>
  );
};

export default PageHeader;
