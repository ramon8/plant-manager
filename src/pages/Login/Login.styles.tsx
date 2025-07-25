import styled from 'styled-components';
import { Input as BaseInput, Button as BaseButton, PageTitle as BasePageTitle } from '../../components/Common';

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Input = styled(BaseInput)``;

export const SubmitButton = styled(BaseButton).attrs({ variant: 'primary' })``;

export const CreateAccountButton = styled(BaseButton).attrs({ variant: 'ghost' })``;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const Title = styled(BasePageTitle)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
