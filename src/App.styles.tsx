import styled from 'styled-components';
import { theme } from './theme';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 0 ${theme.spacing.md} ${theme.spacing.md};
  padding-bottom: calc(80px + ${theme.spacing.md}); /* Space for bottom nav */
  max-width: 100vw;
  overflow-x: hidden;
  
  /* Space is handled by sticky headers */
  padding-top: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg} ${theme.spacing.xl};
    padding-bottom: calc(80px + ${theme.spacing.xl});
    padding-top: 0;
  }
`;
