import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import {
  SignupContainer,
  SignupForm,
  Input,
  SubmitButton,
  ErrorMessage,
  Title,
  IconWrapper,
  SwitchLink,
} from './Signup.styles';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await register(email, password)) {
      setError('');
      navigate('/');
    } else {
      setError(t('InvalidCredentials'));
    }
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <IconWrapper>
          <Sprout />
        </IconWrapper>
        <Title>{t('CreateAccount')}</Title>
        <Input
          placeholder={t('Username')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder={t('Password')}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">{t('SignUp')}</SubmitButton>
        <SwitchLink to="/login">{t('HaveAccount')}</SwitchLink>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
