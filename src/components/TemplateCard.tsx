import React, { useState } from 'react';
import { NoteTemplate } from '../types/templates';
import { 
  Star, 
  Copy, 
  Check, 
  ChevronRight, 
  Edit3, 
  Trash2,
  Bed,
  Bandage,
  Wind,
  Syringe,
  Droplets,
  Activity,
  AlertTriangle,
  ArrowRightLeft,
  FileText,
  UserCheck
} from 'lucide-react';

interface TemplateCardProps {
  template: NoteTemplate;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: (t: NoteTemplate) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onDeleteCustom?: (id: string, e: React.MouseEvent) => void;
  nightMode: boolean;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
  onDeleteCustom,
  nightMode
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleQuickCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = template.formats.narrative || Object.values(template.formats)[0];
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Select friendly icon based on subcategory or tags
  const getIcon = () => {
    const sub = (template.subcategory || '').toLowerCase();
    const tags = (template.tags || []).join(' ').toLowerCase();
    const id = template.id.toLowerCase();

    if (sub.includes('receiving') || id.includes('receiving') || tags.includes('receiving')) {
      return UserCheck;
    }
    if (sub.includes('bedridden') || id.includes('bedridden') || id.includes('positioning')) {
      return Bed;
    }
    if (sub.includes('skin') || sub.includes('wound') || tags.includes('wound') || tags.includes('braden')) {
      return Bandage;
    }
    if (sub.includes('respiratory') || sub.includes('suction') || tags.includes('suction') || tags.includes('airway')) {
      return Wind;
    }
    if (sub.includes('vascular') || tags.includes('iv') || tags.includes('line') || tags.includes('transfusion')) {
      return Syringe;
    }
    if (sub.includes('genitourinary') || tags.includes('foley') || tags.includes('urine')) {
      return Droplets;
    }
    if (sub.includes('emergency') || sub.includes('incident') || tags.includes('fall') || tags.includes('stroke')) {
      return AlertTriangle;
    }
    if (sub.includes('handoff') || sub.includes('discharge') || sub.includes('intake') || tags.includes('sbar')) {
      return ArrowRightLeft;
    }
    return Activity;
  };

  const IconComponent = getIcon();

  return (
    <div
      onClick={() => onSelect(template)}
      className={`group relative rounded-2xl border p-4 transition-all cursor-pointer text-left ${
        isSelected
          ? (nightMode 
              ? 'bg-slate-800/95 border-emerald-500 ring-2 ring-emerald-500/30 shadow-md' 
              : 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-md')
          : (nightMode 
              ? 'bg-slate-900/80 border-slate-800/90 hover:border-slate-700 hover:bg-slate-800/60' 
              : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xs')
      }`}
    >
      {/* Top Header: Icon + Category Badge + Star */}
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
            isSelected
              ? 'bg-emerald-600 text-white'
              : (nightMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700 border border-emerald-100')
          }`}>
            <IconComponent className="w-4 h-4" />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              nightMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600'
            }`}>
              {template.subcategory}
            </span>
            {template.badge && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                template.badge === 'Total Care' || template.badge === 'Q2H Schedule'
                  ? (nightMode ? 'bg-teal-950/70 text-teal-300 border border-teal-800/40' : 'bg-teal-50 text-teal-700 border border-teal-200')
                  : (nightMode ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/40' : 'bg-emerald-50 text-emerald-700 border border-emerald-200')
              }`}>
                {template.badge}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {template.isCustom && onDeleteCustom && (
            <button
              onClick={(e) => onDeleteCustom(template.id, e)}
              className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
              title="Delete custom note"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={(e) => onToggleFavorite(template.id, e)}
            className={`p-1.5 rounded-lg transition-transform active:scale-90 ${
              isFavorite 
                ? 'text-amber-400 hover:text-amber-300' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-sm font-bold tracking-tight mb-1 group-hover:text-emerald-500 transition-colors ${
        nightMode ? 'text-slate-100' : 'text-slate-900'
      }`}>
        {template.title}
      </h3>

      {/* Description */}
      <p className={`text-xs line-clamp-2 mb-3 leading-relaxed ${
        nightMode ? 'text-slate-400' : 'text-slate-500'
      }`}>
        {template.description}
      </p>

      {/* Bottom Action Row: 1-Tap Copy & Customize */}
      <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
        
        {/* Fast 1-Tap Copy */}
        <button
          onClick={handleQuickCopy}
          className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-2xs cursor-pointer ${
            copied
              ? 'bg-emerald-500 text-white'
              : (nightMode 
                  ? 'bg-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-slate-700' 
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200')
          }`}
          title="Instant 1-tap copy ready for EHR"
        >
          {copied ? <Check className="w-3.5 h-3.5 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied!' : '1-Tap Copy'}</span>
        </button>

        {/* Customize indicator */}
        <div className={`flex items-center gap-1 text-xs font-semibold ${
          isSelected 
            ? 'text-emerald-500 font-bold' 
            : (nightMode ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-700')
        }`}>
          <span>Customize</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>

      </div>
    </div>
  );
};
