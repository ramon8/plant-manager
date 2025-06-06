import styled from 'styled-components';
import { Input as BaseInput, Button as BaseButton } from '../../components/Common';

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

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;
