import React from 'react';
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
import PromptButton from './components/PromptButton';

const bottomMenuRoutes = ['/', '/care', '/add', '/settings'];

type Direction = 'left' | 'right' | 'up';

const pageVariants = {
  initial: (direction: Direction) => ({
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : 0,
    opacity: 0,
  }),
  animate: { x: 0, y: 0, opacity: 1 },
  exit: { opacity: 0 },
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPathRef = React.useRef(location.pathname);

  const getBasePath = (path: string) => {
    if (path === '/') return '/';
    const segments = path.split('/');
    return `/${segments[1] || ''}`;
  };

  const getDirection = (from: string, to: string): Direction => {
    const fromIndex = bottomMenuRoutes.indexOf(getBasePath(from));
    const toIndex = bottomMenuRoutes.indexOf(getBasePath(to));
    if (fromIndex !== -1 && toIndex !== -1) {
      if (toIndex > fromIndex) return 'right';
      if (toIndex < fromIndex) return 'left';
    }
    return 'up';
  };

  const direction = getDirection(prevPathRef.current, location.pathname);

  React.useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        custom={direction}
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
