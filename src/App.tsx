import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
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
  
  // If either path is not in navigation, use vertical transition
  if (fromIndex === -1 || toIndex === -1) {
    return 'vertical';
  }
  
  // Moving to higher index (right on nav bar) - slide in from right
  if (toIndex > fromIndex) {
    return 'left'; // New page slides in from right, pushes current to left
  }
  
  // Moving to lower index (left on nav bar) - slide in from left
  if (toIndex < fromIndex) {
    return 'right'; // New page slides in from left, pushes current to right
  }
  
  return 'vertical';
};

const getVariants = (direction: Direction) => {
  switch (direction) {
    case 'left':
      // Moving right on nav bar: both pages move left
      return {
        initial: { x: '100%', opacity: 1 }, // New page starts from right
        animate: { x: 0, opacity: 1 },      // New page moves to center
        exit: { x: '-100%', opacity: 1 },   // Old page exits to left
      } as const;
    case 'right':
      // Moving left on nav bar: both pages move right
      return {
        initial: { x: '-100%', opacity: 1 }, // New page starts from left
        animate: { x: 0, opacity: 1 },       // New page moves to center
        exit: { x: '100%', opacity: 1 },     // Old page exits to right
      } as const;
    case 'vertical':
    default:
      // For non-nav transitions (like plant details): slide up from bottom
      return {
        initial: { y: '100%', opacity: 1 }, // New page starts from bottom
        animate: { y: 0, opacity: 1 },      // New page moves to center
        exit: { y: '-100%', opacity: 1 },   // Old page exits to top
      } as const;
  }
};

const defaultVariants = {
  initial: { x: '100%', opacity: 1 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 1 },
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  
  // Calculate direction using the current paths
  const direction = getDirection(prevPath.current, location.pathname);
  const pageVariants = getVariants(direction);

  // Use layout effect to update prevPath after render but before paint
  useLayoutEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        variants={pageVariants || defaultVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
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
