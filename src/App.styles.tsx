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
  
  /* Add a small top padding on mobile for pages without sticky headers */
  padding-top: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg} ${theme.spacing.xl};
    padding-bottom: calc(80px + ${theme.spacing.xl});
    padding-top: ${theme.spacing.md};
  }
`;
