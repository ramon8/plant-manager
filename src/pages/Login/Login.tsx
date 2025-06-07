import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sprout } from 'lucide-react';
import { useAuth } from '../../context';
import { Spinner } from '../../components/Common';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  Input,
  SubmitButton,
  CreateAccountButton,
  ErrorMessage,
  Title,
  IconWrapper,
} from './Login.styles';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (await login(username, password)) {
      setError('');
    } else {
      setError(t('InvalidCredentials'));
    }
    setLoading(false);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <IconWrapper>
          <Sprout />
        </IconWrapper>
        <Title>{t('AppName')}</Title>
        <Input
          placeholder={t('Username')}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder={t('Password')}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit" disabled={loading}>
          {loading ? <Spinner /> : t('Login')}
        </SubmitButton>
        <CreateAccountButton
          type="button"
          onClick={() => navigate('/signup')}
        >
          {t('CreateAccount')}
        </CreateAccountButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
