import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme/ThemeContext';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ToggleButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Settings: React.FC = () => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <Container>
      <ToggleButton onClick={toggleTheme}>
        Switch to {themeName === 'light' ? 'Dark' : 'Light'} Theme
      </ToggleButton>
    </Container>
  );
};

export default Settings;
