import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useLayoutEffect, type PropsWithChildren } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { CustomThemeProvider } from './theme/ThemeContext';
import { AppDataProvider, AuthProvider, useAuth } from './context';
import { AppContainer, MainContent } from './App.styles';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Care from './pages/Care';
import AddPlant from './pages/Add';
import PlantDetail from './pages/PlantDetail';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoadingPage from './pages/Loading';
import PromptButton from './components/PromptButton';

const navPaths = ['/', '/care', '/add', '/settings'] as const;

type Direction = 'left' | 'right' | 'up' | 'down';

const getDirection = (from: string, to: string): Direction => {
  const fromIndex = navPaths.indexOf(from as (typeof navPaths)[number]);
  const toIndex = navPaths.indexOf(to as (typeof navPaths)[number]);

  // If either path is not in navigation, use vertical transition (up for detail views)
  if (fromIndex === -1 || toIndex === -1) {
    // Check if going to or from a detail/edit page (vertical navigation)
    if (to.includes('/plants/') || from.includes('/plants/')) {
      return 'up'; // Detail pages slide up from bottom
    }
    return 'down'; // Other non-nav pages slide down
  }

  // Moving to higher index (right on nav bar) - slide in from right
  if (toIndex > fromIndex) {
    return 'left'; // New page slides in from right, pushes current to left
  }

  // Moving to lower index (left on nav bar) - slide in from left
  if (toIndex < fromIndex) {
    return 'right'; // New page slides in from left, pushes current to right
  }

  return 'down';
};

// Define animation variants for all 4 directions
const animationVariants = {
  left: {
    initial: { x: '100%', opacity: 1 },
    animate: { x: 0, opacity: 1 },
    exit: { opacity: 0 },
  },
  right: {
    initial: { x: '-100%', opacity: 1 },
    animate: { x: 0, opacity: 1 },
    exit: { opacity: 0 },
  },
  up: {
    initial: { y: '100%', opacity: 1 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
  },
  down: {
    initial: { y: '-100%', opacity: 1 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
  },
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // Get the direction for the current transition
  const direction = getDirection(prevPath.current, location.pathname);
  const variants = animationVariants[direction];

  // Use layout effect to update prevPath after render but before paint
  useLayoutEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{ width: '100%', height: '100%' }}
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

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

function RootApp() {
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingPage />;
  }
  if (!user) {
    return <AuthRoutes />;
  }

  return (
    <AppContainer>
      <PromptButton />
      <MainContent>
        <AnimatedRoutes />
      </MainContent>
      <Navigation />
    </AppContainer>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <AuthProvider>
        <AppDataProvider>
          <Router>
            <RootApp />
          </Router>
        </AppDataProvider>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App
