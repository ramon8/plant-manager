import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './theme';
import { AppContainer, MainContent } from './App.styles';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import Dashboard from './pages/Dashboard';
import Care from './pages/Care';
import AddPlant from './pages/Add';
import PlantDetail from './pages/PlantDetail';
import Settings from './pages/Settings';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/plants/:id" element={<PageTransition><PlantDetail /></PageTransition>} />
        <Route path="/add" element={<PageTransition><AddPlant /></PageTransition>} />
        <Route path="/care" element={<PageTransition><Care /></PageTransition>} />
        <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <MainContent>
            <AnimatedRoutes />
          </MainContent>
          <Navigation />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App
