import React from 'react';
import { TopicFilter } from '../types/templates';
import { 
  Sparkles, 
  Bed, 
  Bandage, 
  Wind, 
  Syringe, 
  Activity, 
  AlertCircle, 
  ArrowRightLeft, 
  FolderHeart,
  Droplets,
  UserCheck
} from 'lucide-react';

interface CategoryNavProps {
  activeTopic: TopicFilter;
  onSelectTopic: (topic: TopicFilter) => void;
  counts: Record<TopicFilter, number>;
  nightMode: boolean;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeTopic,
  onSelectTopic,
  counts,
  nightMode
}) => {
  const topics: Array<{
    id: TopicFilter;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    emoji?: string;
  }> = [
    { id: 'all', label: 'All Notes', icon: Sparkles },
    { id: 'receiving', label: 'Receiving Patient', icon: UserCheck },
    { id: 'bedridden', label: 'Bedridden & Turning', icon: Bed },
    { id: 'skin', label: 'Skin & Pressure Care', icon: Bandage },
    { id: 'suction', label: 'Suctioning & Airway', icon: Wind },
    { id: 'vascular', label: 'IVs & Lines', icon: Syringe },
    { id: 'foley', label: 'Foley & Bladder', icon: Droplets },
    { id: 'routine', label: 'Routine Assessment', icon: Activity },
    { id: 'urgent', label: 'Urgent & Emergency', icon: AlertCircle },
    { id: 'transitions', label: 'Handoff & Discharge', icon: ArrowRightLeft },
    { id: 'custom', label: 'My Custom Notes', icon: FolderHeart }
  ];

  return (
    <div className={`overflow-x-auto scrollbar-none py-2.5 border-b transition-colors ${
      nightMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 min-w-max">
          {topics.map((t) => {
            const Icon = t.icon;
            const isSelected = activeTopic === t.id;
            const count = counts[t.id] || 0;

            if (t.id === 'custom' && count === 0) {
              return null; // hide custom tab if none created yet, keeps UI extra clean
            }

            return (
              <button
                key={t.id}
                onClick={() => onSelectTopic(t.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                  isSelected
                    ? (nightMode 
                        ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400/40' 
                        : 'bg-emerald-600 text-white shadow-sm')
                    : (nightMode 
                        ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800' 
                        : 'bg-white text-slate-700 hover:bg-slate-100/90 border border-slate-200/80 shadow-2xs')
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                <span>{t.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : (nightMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600')
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
