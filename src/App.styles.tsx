import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  padding-bottom: calc(80px + ${({ theme }) => theme.spacing.md}); /* Space for bottom nav */
  max-width: 100vw;
  overflow-x: hidden;
  position: relative; /* Add relative positioning for absolute children */
  width: 100%;
  
  /* Add a small top padding on mobile for pages without sticky headers */
  padding-top: ${({ theme }) => theme.spacing.md};

`;
