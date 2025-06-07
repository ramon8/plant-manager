import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  LayoutWrapper,
  LayoutHeader,
  BackButton,
  TitleContainer,
  Title,
  Subtitle,
  Main,
  FooterContainer,
} from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  onBack,
  footer,
  children,
  className,
}) => (
  <LayoutWrapper className={className}>
    <LayoutHeader>
      {onBack && (
        <BackButton onClick={onBack}>
          <ArrowLeft size={20} />
        </BackButton>
      )}
      <TitleContainer>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleContainer>
    </LayoutHeader>
    <Main>{children}</Main>
    {footer && <FooterContainer>{footer}</FooterContainer>}
  </LayoutWrapper>
);

export default PageLayout;
