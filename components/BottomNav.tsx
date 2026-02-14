import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Info } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (isActive: boolean) => 
    `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
      isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
    }`;

  const getIconContainerClass = (isActive: boolean) => 
    `p-1 rounded-full ${isActive ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-t border-gray-100 dark:border-zinc-800 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        <Link 
          to="/" 
          className={getLinkClass(currentPath === '/')}
        >
          <div className={getIconContainerClass(currentPath === '/')}>
             <Home size={24} strokeWidth={currentPath === '/' ? 2.5 : 2} />
          </div>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        
        <Link 
          to="/favorites" 
          className={getLinkClass(currentPath === '/favorites')}
        >
          <div className={getIconContainerClass(currentPath === '/favorites')}>
              <Heart size={24} strokeWidth={currentPath === '/favorites' ? 2.5 : 2} />
          </div>
          <span className="text-[10px] font-medium">Favorites</span>
        </Link>

        <Link 
          to="/about" 
          className={getLinkClass(currentPath === '/about')}
        >
          <div className={getIconContainerClass(currentPath === '/about')}>
              <Info size={24} strokeWidth={currentPath === '/about' ? 2.5 : 2} />
          </div>
          <span className="text-[10px] font-medium">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;