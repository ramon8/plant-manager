import styled from 'styled-components';
import { PageHeader, BackButton as BaseBackButton } from '../Common';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  padding-bottom: 100px; /* space for fixed navigation */
`;

export const LayoutHeader = styled(PageHeader)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const BackButton = styled(BaseBackButton)`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const TitleContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const Main = styled.main`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const FooterContainer = styled.div`
  margin-top: auto;
`;
