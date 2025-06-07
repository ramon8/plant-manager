import styled, { keyframes } from 'styled-components';
import { PageTitle as BasePageTitle } from '../../components/Common';
import { Loader as LoaderIcon } from 'lucide-react';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 64px;
    height: 64px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled(BasePageTitle)`
  text-align: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(LoaderIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
