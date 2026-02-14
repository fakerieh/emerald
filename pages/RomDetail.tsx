import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ROMS } from '../constants';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ArrowLeft, Heart, Download, Globe, Smartphone, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const RomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  
  const rom = MOCK_ROMS.find(r => r.id === id);
  const isFavorite = rom ? favorites.includes(rom.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!rom) {
    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-black">
            <p className="text-gray-500">ROM not found</p>
        </div>
    );
  }

  const toggleFavorite = () => {
    setFavorites(prev => 
      prev.includes(rom.id) ? prev.filter(fId => fId !== rom.id) : [...prev, rom.id]
    );
  };

  const handleShare = async () => {
     if (navigator.share) {
        try {
            await navigator.share({
                title: rom.name,
                text: `Check out ${rom.name} on ROMVault!`,
                url: window.location.href,
            });
        } catch (error) {
            console.log('Error sharing', error);
        }
     } else {
        alert('Share not supported on this device/browser.');
     }
  };

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white dark:bg-black pb-24"
    >
      {/* Hero Image Area */}
      <div className="relative h-72 md:h-96 w-full">
         <img src={rom.imageUrl} alt={rom.name} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
         
         {/* Navbar Overlay */}
         <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
            <button 
                onClick={() => navigate(-1)} 
                className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <div className="flex gap-3">
                 <button 
                    onClick={handleShare}
                    className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
                >
                    <Share2 size={24} />
                </button>
                 <button 
                    onClick={toggleFavorite}
                    className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
                >
                    <Heart size={24} className={isFavorite ? "fill-red-500 text-red-500" : ""} />
                </button>
            </div>
         </div>

         {/* Title Area */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
                {rom.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{rom.name}</h1>
            <p className="text-gray-300 text-lg">{rom.androidVersion} • Version {rom.version}</p>
         </div>
      </div>

      {/* Content Container */}
      <div className="px-5 py-8 max-w-4xl mx-auto -mt-6 bg-white dark:bg-black rounded-t-[32px] relative z-20">
        
        {/* Developer Info Card */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl mb-8">
            <img src={rom.developer.avatarUrl} alt={rom.developer.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-grow">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Maintained by</p>
                <p className="text-gray-900 dark:text-white font-medium">{rom.developer.name}</p>
            </div>
            {rom.developer.website && (
                 <a href={rom.developer.website} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    <Globe size={20} />
                 </a>
            )}
        </div>

        {/* Description */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">About this ROM</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {rom.description}
            </p>
        </section>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                <div className="flex items-center gap-2 mb-1 text-blue-600 dark:text-blue-400">
                    <Smartphone size={18} />
                    <span className="text-xs font-bold uppercase">Supported Devices</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    {rom.deviceSupport.slice(0, 3).map((device, idx) => (
                        <span key={idx} className="text-sm font-medium text-gray-800 dark:text-gray-200">{device}{idx < rom.deviceSupport.slice(0, 3).length - 1 ? ',' : ''}</span>
                    ))}
                    {rom.deviceSupport.length > 3 && <span className="text-sm text-gray-500">+ more</span>}
                </div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center gap-2 mb-1 text-purple-600 dark:text-purple-400">
                    <Calendar size={18} />
                    <span className="text-xs font-bold uppercase">Released</span>
                </div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-1">{rom.releaseDate}</p>
            </div>
        </div>

        {/* Action Button */}
        <a 
            href={rom.downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-primary-600 hover:bg-primary-700 active:scale-95 text-white rounded-[20px] font-bold text-lg shadow-xl shadow-primary-600/30 transition-all duration-300"
        >
            <Download size={24} />
            Download ROM
        </a>

        <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600">
                You will be redirected to the official developer website.
            </p>
        </div>

      </div>
    </motion.div>
  );
};

export default RomDetail;