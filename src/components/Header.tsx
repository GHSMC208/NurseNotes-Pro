import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Moon, 
  Sun, 
  Plus, 
  Star, 
  X, 
  Heart,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  nightMode: boolean;
  onToggleNightMode: () => void;
  onOpenCustomModal: () => void;
  onOpenAbbrevModal: () => void;
  favoritesCount: number;
  totalTemplatesCount: number;
  filterFavoritesOnly: boolean;
  onToggleFavoritesFilter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  nightMode,
  onToggleNightMode,
  onOpenCustomModal,
  onOpenAbbrevModal,
  favoritesCount,
  totalTemplatesCount,
  filterFavoritesOnly,
  onToggleFavoritesFilter
}) => {
  return (
    <header className={`border-b transition-colors sticky top-0 z-30 ${
      nightMode 
        ? 'bg-slate-900/95 border-slate-800 text-slate-100 backdrop-blur-md' 
        : 'bg-white/95 border-slate-200/90 text-slate-800 backdrop-blur-md shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Friendly Logo & Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 shadow-sm ${
              nightMode 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white' 
                : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'
            }`}>
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight">
                  NurseNotes<span className="text-emerald-500 font-extrabold">.</span>
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  nightMode 
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/40' 
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  Fast &amp; Friendly
                </span>
              </div>
              <p className={`text-xs hidden sm:block ${nightMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Select, customize &amp; copy into EHR in seconds
              </p>
            </div>
          </div>

          {/* Friendly Search Bar */}
          <div className="flex-1 max-w-md mx-1 sm:mx-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className={`w-4 h-4 ${nightMode ? 'text-slate-400' : 'text-slate-400'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search anything (e.g. Bedridden, Turn, Foley, Suction, Fall, IV)..."
                className={`w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-xl border transition-all focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                  nightMode 
                    ? 'bg-slate-800/80 border-slate-700 text-slate-100 placeholder-slate-400 focus:bg-slate-800' 
                    : 'bg-slate-100/80 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:shadow-xs'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Favorites Button */}
            <button
              onClick={onToggleFavoritesFilter}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                filterFavoritesOnly
                  ? (nightMode ? 'bg-amber-950/60 text-amber-300 border-amber-500/50 shadow-xs' : 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs')
                  : (nightMode ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100')
              }`}
              title="Show Starred Notes"
            >
              <Star className={`w-3.5 h-3.5 ${filterFavoritesOnly ? 'fill-amber-400 text-amber-400' : 'text-amber-400'}`} />
              <span className="hidden md:inline">Favorites</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                filterFavoritesOnly ? 'bg-amber-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}>
                {favoritesCount}
              </span>
            </button>

            {/* Safety Rules Guide */}
            <button
              onClick={onOpenAbbrevModal}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                nightMode 
                  ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-rose-400' 
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200'
              }`}
              title="Joint Commission Do-Not-Use Abbreviations & Safe Acronyms"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="hidden lg:inline">Safety Guide</span>
            </button>

            {/* New Custom Note Button */}
            <button
              onClick={onOpenCustomModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-sm cursor-pointer"
              title="Create your own custom note template"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Note</span>
            </button>

            {/* Night Shift Mode Toggle */}
            <button
              onClick={onToggleNightMode}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                nightMode 
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title={nightMode ? 'Switch to Day Shift Mode' : 'Switch to Night Shift Mode (Dark)'}
              aria-label="Toggle Night Shift Mode"
            >
              {nightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
