import React from 'react';
import { Info, Github, Twitter, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-24 pt-8 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col justify-center">
        
        <div className="text-center mb-10">
            <div className="w-20 h-20 bg-primary-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-primary-600/30">
                <Info size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">ROMVault</h1>
            <p className="text-gray-500 dark:text-gray-400">Version 1.0.0 (Emerald Edition)</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About the App</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                ROMVault is your dedicated destination for discovering and tracking the best Custom ROMs for <b>POCO M6 Pro 4G</b> and <b>Redmi Note 13 Pro 4G</b>. 
                Built with modern design principles, it helps enthusiasts find stable, secure, and feature-rich OS alternatives specifically tailored for these devices.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
            <ul className="space-y-2 mb-8 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Curated ROMs for POCO M6 Pro & RN13 Pro
                </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Detailed Developer Info
                </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Save Favorites Locally
                </li>
                 <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Dark Mode Support
                </li>
            </ul>

            <div className="pt-6 border-t border-gray-100 dark:border-zinc-800 flex justify-center gap-6">
                <a href="#" className="p-3 rounded-full bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={24} />
                </a>
                 <a href="#" className="p-3 rounded-full bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors">
                    <Coffee size={24} />
                </a>
            </div>
            
             <p className="text-center text-xs text-gray-400 mt-8">
                © 2024 ROMVault Open Source.
            </p>
        </div>
    </div>
  );
};

export default About;