import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalStyles } from './styles/GlobalStyles';
import { CustomThemeProvider } from './theme/ThemeContext';
import { AppDataProvider } from './context';
import { AppContainer, MainContent } from './App.styles';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Care from './pages/Care';
import AddPlant from './pages/Add';
import PlantDetail from './pages/PlantDetail';
import Settings from './pages/Settings';

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/add" element={<AddPlant />} />
          <Route path="/care" element={<Care />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppDataProvider>
        <GlobalStyles />
        <Router>
          <AppContainer>
            <MainContent>
              <AnimatedRoutes />
            </MainContent>
            <Navigation />
          </AppContainer>
        </Router>
      </AppDataProvider>
    </CustomThemeProvider>
  );
}

export default App
