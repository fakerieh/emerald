import React from 'react';
import { RomData } from '../types';
import { Heart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RomCardProps {
  rom: RomData;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

const RomCard: React.FC<RomCardProps> = ({ rom, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/rom/${rom.id}`)}
      className="group relative bg-white dark:bg-zinc-900 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-zinc-800 cursor-pointer flex flex-col h-full"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={rom.imageUrl} 
          alt={rom.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badges on Image */}
        <div className="absolute top-4 left-4 flex gap-2">
            {rom.tags.slice(0, 2).map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                    {tag}
                </span>
            ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{rom.name}</h3>
            <p className="text-white/80 text-sm flex items-center gap-2">
               {rom.developer.name} • {rom.androidVersion}
            </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">
            {rom.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
                <button 
                    onClick={(e) => onToggleFavorite(e, rom.id)}
                    className={`p-2.5 rounded-full transition-colors ${
                        isFavorite 
                        ? 'bg-red-50 text-red-500 dark:bg-red-900/20' 
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700'
                    }`}
                >
                    <Heart size={20} className={isFavorite ? "fill-current" : ""} />
                </button>
            </div>
            
            <button className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 pr-1">
                Details <ChevronRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default RomCard;