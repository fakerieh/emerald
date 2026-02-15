import React, { useState, useMemo } from 'react';
import { MOCK_ROMS, ANDROID_VERSIONS } from '../constants';
import RomCard from '../components/RomCard';
import { Search, Filter, RefreshCw, X } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const filteredRoms = useMemo(() => {
    return MOCK_ROMS.filter(rom => {
      const matchesSearch = rom.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          rom.deviceSupport.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesVersion = selectedVersion ? rom.androidVersion === selectedVersion : true;
      return matchesSearch && matchesVersion;
    });
  }, [searchQuery, selectedVersion]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-24 pt-4 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Discover Custom ROMs</h1>
           <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1">made for emerald</p>
        </div>
        <button 
          onClick={handleRefresh}
          className={`p-3 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm text-gray-700 dark:text-gray-300 ${isLoading ? 'animate-spin' : ''}`}
        >
          <RefreshCw size={20} />
        </button>
      </header>

      {/* Search & Filter */}
      <div className="sticky top-0 z-30 bg-gray-50/80 dark:bg-black/80 backdrop-blur-md py-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-3">
            <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search ROMs..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-zinc-900 border-none rounded-2xl shadow-sm text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                />
            </div>
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center w-14 rounded-2xl shadow-sm transition-colors ${
                    isFilterOpen || selectedVersion
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300'
                }`}
            >
                <Filter size={20} />
            </button>
        </div>

        {/* Filter Chips */}
        <AnimatePresence>
            {isFilterOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedVersion(null)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                                !selectedVersion 
                                    ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black' 
                                    : 'bg-transparent text-gray-600 border-gray-300 dark:text-gray-400 dark:border-zinc-700'
                            }`}
                        >
                            All
                        </button>
                        {ANDROID_VERSIONS.map(ver => (
                            <button
                                key={ver}
                                onClick={() => setSelectedVersion(ver)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                                    selectedVersion === ver
                                    ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black' 
                                    : 'bg-transparent text-gray-600 border-gray-300 dark:text-gray-400 dark:border-zinc-700'
                                }`}
                            >
                                {ver}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[1,2,3,4].map(i => (
             <div key={i} className="h-80 rounded-[24px] bg-gray-200 dark:bg-zinc-800 animate-pulse" />
           ))}
        </div>
      ) : filteredRoms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoms.map(rom => (
            <motion.div 
                key={rom.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <RomCard 
                    rom={rom} 
                    isFavorite={favorites.includes(rom.id)}
                    onToggleFavorite={toggleFavorite}
                />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                <Search size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">No ROMs Found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
                We couldn't find any ROMs matching your criteria. Try different keywords or clear filters.
            </p>
            <button 
                onClick={() => { setSearchQuery(''); setSelectedVersion(null); }}
                className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-full font-medium shadow-lg shadow-primary-500/30"
            >
                Clear Filters
            </button>
        </div>
      )}
    </div>
  );
};

export default Home;