import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './theme';
import { AppContainer, MainContent } from './App.styles';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Care from './pages/Care';
import Settings from './pages/Settings';
import AddPlant from './pages/Add';
import PlantDetail from './pages/PlantDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <MainContent>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plants/:id" element={<PlantDetail />} />
              <Route path="/add" element={<AddPlant />} />
              <Route path="/care" element={<Care />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainContent>
          <Navigation />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App
