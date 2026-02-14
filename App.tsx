import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RomDetail from './pages/RomDetail';
import Favorites from './pages/Favorites';
import About from './pages/About';
import BottomNav from './components/BottomNav';
import { useLocalStorage } from './hooks/useLocalStorage';

const AppContent: React.FC = () => {
    // Basic Dark Mode Setup
    const [darkMode] = useLocalStorage('theme', 'system');
    const location = useLocation();
    const showNav = true;

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode === 'dark' || (darkMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen font-sans antialiased text-gray-900 dark:text-white selection:bg-primary-500 selection:text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rom/:id" element={<RomDetail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/about" element={<About />} />
            </Routes>
            
            {showNav && <BottomNav />}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;