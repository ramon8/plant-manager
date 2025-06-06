import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context';
import { LoginContainer, LoginForm, Input, SubmitButton, ErrorMessage } from './Login.styles';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setError('');
    } else {
      setError(t('InvalidCredentials'));
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">{t('Login')}</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
