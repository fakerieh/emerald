import React from 'react';
import { MOCK_ROMS } from '../constants';
import RomCard from '../components/RomCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const favoriteRoms = MOCK_ROMS.filter(rom => favorites.includes(rom.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-24 pt-8 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 dark:text-red-400">
             <Heart size={28} className="fill-current" />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Favorites</h1>
            <p className="text-sm text-gray-500">Your saved custom ROMs</p>
        </div>
      </div>

      {favoriteRoms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {favoriteRoms.map((rom, index) => (
               <motion.div
                  key={rom.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
               >
                 <RomCard 
                    rom={rom} 
                    isFavorite={true}
                    onToggleFavorite={toggleFavorite}
                 />
               </motion.div>
           ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-48 h-48 bg-gray-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                <Heart size={64} className="text-gray-300 dark:text-zinc-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No favorites yet</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs mb-8">
                Start exploring and save your favorite ROMs to access them quickly here.
            </p>
            <Link 
                to="/" 
                className="flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-transform active:scale-95"
            >
                Explore ROMs <ArrowRight size={18} />
            </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;