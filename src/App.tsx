import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import PromptButton from './components/PromptButton';

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
          <Route path="/plants/:id/edit" element={<AddPlant />} />
          <Route path="/add" element={<AddPlant />} />
          <Route path="/care" element={<Care />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function RootApp() {
  const { user } = useAuth();
  if (!user) {
    return <Login />;
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
