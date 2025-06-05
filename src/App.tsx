import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
import PromptButton from './components/PromptButton';

const navPaths = ['/', '/care', '/add', '/settings'] as const;

type Direction = 'left' | 'right' | 'vertical';

const getDirection = (from: string, to: string): Direction => {
  const fromIndex = navPaths.indexOf(from as (typeof navPaths)[number]);
  const toIndex = navPaths.indexOf(to as (typeof navPaths)[number]);
  if (fromIndex === -1 || toIndex === -1) {
    return 'vertical';
  }
  if (toIndex > fromIndex) {
    return 'left';
  }
  if (toIndex < fromIndex) {
    return 'right';
  }
  return 'left';
};

const getVariants = (direction: Direction) => {
  switch (direction) {
    case 'left':
      return {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
      } as const;
    case 'right':
      return {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
      } as const;
    case 'vertical':
    default:
      return {
        initial: { y: '100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
      } as const;
  }
};

const defaultVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const direction = getDirection(prevPath.current, location.pathname);
  const pageVariants = getVariants(direction);

  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={location.pathname}
        variants={pageVariants || defaultVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/plants/:id/edit" element={<AddPlant />} />
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
      <GlobalStyles />
      <AppDataProvider>
        <Router>
          <AppContainer>
            <PromptButton />
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
