import React, { useState } from 'react';
import { DO_NOT_USE_ABBREVIATIONS, COMMON_CLINICAL_ACRONYMS } from '../data/abbreviations';
import { X, AlertTriangle, ShieldCheck, Search, BookOpen } from 'lucide-react';

interface AbbreviationModalProps {
  isOpen: boolean;
  onClose: () => void;
  nightMode: boolean;
}

export const AbbreviationModal: React.FC<AbbreviationModalProps> = ({
  isOpen,
  onClose,
  nightMode
}) => {
  const [activeTab, setActiveTab] = useState<'donotuse' | 'acronyms'>('donotuse');
  const [acronymSearch, setAcronymSearch] = useState('');

  if (!isOpen) return null;

  const filteredAcronyms = COMMON_CLINICAL_ACRONYMS.filter(item => 
    item.abbr.toLowerCase().includes(acronymSearch.toLowerCase()) ||
    item.meaning.toLowerCase().includes(acronymSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(acronymSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className={`relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
        nightMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          nightMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
              <ShieldCheck className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h2 className="text-base font-bold">Clinical Documentation Safety &amp; Acronym Reference</h2>
              <p className="text-xs text-slate-400">Official Joint Commission (TJC) standards and hospital charting guide</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className={`px-4 pt-3 flex items-center gap-3 border-b text-xs ${
          nightMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
        }`}>
          <button
            onClick={() => setActiveTab('donotuse')}
            className={`pb-2.5 font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === 'donotuse'
                ? 'border-rose-500 text-rose-500'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Joint Commission "Do Not Use" List</span>
          </button>

          <button
            onClick={() => setActiveTab('acronyms')}
            className={`pb-2.5 font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === 'acronyms'
                ? 'border-emerald-500 text-emerald-500'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Common Approved Acronyms</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 text-xs space-y-4">
          
          {activeTab === 'donotuse' && (
            <div>
              <div className={`p-3 rounded-xl border mb-3 text-xs leading-relaxed ${
                nightMode ? 'bg-rose-950/20 border-rose-900/40 text-rose-200' : 'bg-rose-50/70 border-rose-200 text-rose-900'
              }`}>
                <strong>National Patient Safety Goal Mandate:</strong> The Joint Commission requires healthcare organizations to ban the following dangerous abbreviations. NurseNotes Pro automatically detects and highlights these in your note editor to prevent medication administration errors and chart rejections.
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 border rounded-xl overflow-hidden">
                {DO_NOT_USE_ABBREVIATIONS.map((rule, idx) => (
                  <div key={idx} className={`p-3.5 transition-colors ${
                    nightMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                          {rule.flagged}
                        </span>
                        <span className="text-slate-400 font-medium text-[11px]">(Prohibited)</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        <span>Safe Alternative:</span>
                        <span className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {rule.correction}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${nightMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <strong>Hazard / Reason:</strong> {rule.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'acronyms' && (
            <div>
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={acronymSearch}
                  onChange={(e) => setAcronymSearch(e.target.value)}
                  placeholder="Filter acronyms (e.g. WNL, PERRLA, SBAR, GCS)..."
                  className={`w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs ${
                    nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredAcronyms.map((acronym, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border ${
                      nightMode ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                        {acronym.abbr}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {acronym.category}
                      </span>
                    </div>
                    <p className={`text-[11px] ${nightMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {acronym.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className={`p-3 border-t flex justify-end ${
          nightMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
        }`}>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
