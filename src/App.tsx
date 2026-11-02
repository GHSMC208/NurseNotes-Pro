import React, { useState, useEffect, useMemo } from 'react';
import { NoteTemplate, TopicFilter, PatientContext } from './types/templates';
import { CLINICAL_TEMPLATES } from './data/templates';
import { 
  getStoredFavorites, 
  saveStoredFavorites, 
  getStoredCustomTemplates, 
  saveStoredCustomTemplates, 
  getStoredPatientContext, 
  saveStoredPatientContext, 
  getStoredNightMode, 
  saveStoredNightMode 
} from './utils/storage';
import { Header } from './components/Header';
import { PatientContextBar } from './components/PatientContextBar';
import { CategoryNav } from './components/CategoryNav';
import { TemplateCard } from './components/TemplateCard';
import { NoteEditor } from './components/NoteEditor';
import { CustomTemplateModal } from './components/CustomTemplateModal';
import { AbbreviationModal } from './components/AbbreviationModal';
import { 
  FileText, 
  Search, 
  Layers, 
  Sparkles,
  FilterX
} from 'lucide-react';

function matchesTopic(template: NoteTemplate, topic: TopicFilter, favorites: string[]): boolean {
  if (topic === 'all') return true;
  if (topic === 'favorites') return favorites.includes(template.id);
  if (topic === 'custom') return !!template.isCustom;

  const id = template.id.toLowerCase();
  const sub = (template.subcategory || '').toLowerCase();
  const tags = (template.tags || []).join(' ').toLowerCase();

  switch (topic) {
    case 'receiving':
      return id.includes('receiving') || sub.includes('receiving') || tags.includes('receiving') || tags.includes('arrival') || tags.includes('intake') || tags.includes('transfer in') || id.includes('admission');
    case 'bedridden':
      return id.includes('bedridden') || id.includes('positioning') || sub.includes('bedridden') || sub.includes('mobility') || tags.includes('bedridden') || tags.includes('turn');
    case 'skin':
      return id.includes('skin') || id.includes('wound') || id.includes('pressure') || sub.includes('wound') || sub.includes('skin') || tags.includes('skin') || tags.includes('braden');
    case 'suction':
      return id.includes('suction') || id.includes('trach') || id.includes('chest-tube') || sub.includes('respiratory') || tags.includes('suction') || tags.includes('airway');
    case 'vascular':
      return id.includes('piv') || id.includes('cvc') || id.includes('blood') || sub.includes('vascular') || sub.includes('transfusion') || tags.includes('iv') || tags.includes('line');
    case 'foley':
      return id.includes('foley') || sub.includes('genitourinary') || tags.includes('catheter') || tags.includes('foley') || tags.includes('urine');
    case 'routine':
      return (template.category === 'routine' && !id.includes('bedridden') && !id.includes('positioning') && !id.includes('skin')) || sub.includes('general') || sub.includes('neuro') || sub.includes('safety');
    case 'urgent':
      return template.category === 'situational' || sub.includes('emergency') || sub.includes('incident') || tags.includes('code') || tags.includes('fall') || tags.includes('sepsis') || tags.includes('stroke') || tags.includes('rapid response') || tags.includes('pain');
    case 'transitions':
      return template.category === 'transitions' || sub.includes('intake') || sub.includes('discharge') || sub.includes('handoff') || tags.includes('sbar') || tags.includes('admission');
    default:
      return true;
  }
}

export default function App() {
  const [customTemplates, setCustomTemplates] = useState<NoteTemplate[]>(() => getStoredCustomTemplates());
  const [favorites, setFavorites] = useState<string[]>(() => getStoredFavorites());
  const [patientContext, setPatientContext] = useState<PatientContext>(() => getStoredPatientContext());
  const [nightMode, setNightMode] = useState<boolean>(() => getStoredNightMode());
  
  const [activeTopic, setActiveTopic] = useState<TopicFilter>('all');
  const [filterFavoritesOnly, setFilterFavoritesOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('proc-piv-insert');
  const [mobileTab, setMobileTab] = useState<'catalog' | 'editor'>('editor');

  const [isCustomModalOpen, setIsCustomModalOpen] = useState<boolean>(false);
  const [isAbbrevModalOpen, setIsAbbrevModalOpen] = useState<boolean>(false);

  // Combine built-in templates + user custom templates
  const allTemplates = useMemo(() => {
    return [...customTemplates, ...CLINICAL_TEMPLATES];
  }, [customTemplates]);

  // Selected template object
  const selectedTemplate = useMemo(() => {
    return allTemplates.find(t => t.id === selectedTemplateId) || allTemplates[0] || null;
  }, [allTemplates, selectedTemplateId]);

  // Save changes to localStorage
  useEffect(() => {
    saveStoredFavorites(favorites);
  }, [favorites]);

  useEffect(() => {
    saveStoredCustomTemplates(customTemplates);
  }, [customTemplates]);

  useEffect(() => {
    saveStoredPatientContext(patientContext);
  }, [patientContext]);

  useEffect(() => {
    saveStoredNightMode(nightMode);
    if (nightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [nightMode]);

  // Toggle favorite
  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Add custom template
  const handleSaveCustomTemplate = (newTemplate: NoteTemplate) => {
    setCustomTemplates(prev => [newTemplate, ...prev]);
    setSelectedTemplateId(newTemplate.id);
    setActiveTopic('custom');
    setMobileTab('editor');
  };

  // Delete custom template
  const handleDeleteCustomTemplate = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Delete this custom template?')) {
      setCustomTemplates(prev => prev.filter(t => t.id !== id));
      if (selectedTemplateId === id) {
        setSelectedTemplateId('proc-piv-insert');
      }
    }
  };

  // Prepend patient context header to current note in editor
  const [prependedHeaderTrigger, setPrependedHeaderTrigger] = useState<{ id: string; header: string } | null>(null);

  const handlePrependHeader = (headerText: string) => {
    setPrependedHeaderTrigger({ id: Date.now().toString(), header: headerText });
  };

  // Compute topic counts
  const topicCounts = useMemo(() => {
    const counts: Record<TopicFilter, number> = {
      all: allTemplates.length,
      receiving: 0,
      bedridden: 0,
      skin: 0,
      suction: 0,
      vascular: 0,
      foley: 0,
      routine: 0,
      urgent: 0,
      transitions: 0,
      favorites: favorites.length,
      custom: customTemplates.length
    };

    for (const t of allTemplates) {
      if (matchesTopic(t, 'receiving', favorites)) counts.receiving++;
      if (matchesTopic(t, 'bedridden', favorites)) counts.bedridden++;
      if (matchesTopic(t, 'skin', favorites)) counts.skin++;
      if (matchesTopic(t, 'suction', favorites)) counts.suction++;
      if (matchesTopic(t, 'vascular', favorites)) counts.vascular++;
      if (matchesTopic(t, 'foley', favorites)) counts.foley++;
      if (matchesTopic(t, 'routine', favorites)) counts.routine++;
      if (matchesTopic(t, 'urgent', favorites)) counts.urgent++;
      if (matchesTopic(t, 'transitions', favorites)) counts.transitions++;
    }
    return counts;
  }, [allTemplates, customTemplates, favorites]);

  // Filter templates based on topic, search query, and favorites filter
  const filteredTemplates = useMemo(() => {
    return allTemplates.filter(template => {
      // Favorites filter toggle
      if (filterFavoritesOnly && !favorites.includes(template.id)) {
        return false;
      }

      // Topic filter
      if (!filterFavoritesOnly && !matchesTopic(template, activeTopic, favorites)) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = template.title.toLowerCase().includes(q);
        const matchesSubcategory = template.subcategory.toLowerCase().includes(q);
        const matchesDesc = template.description.toLowerCase().includes(q);
        const matchesTags = template.tags?.some(tag => tag.toLowerCase().includes(q));
        const matchesContent = Object.values(template.formats).some(text => text.toLowerCase().includes(q));
        return matchesTitle || matchesSubcategory || matchesDesc || matchesTags || matchesContent;
      }

      return true;
    });
  }, [allTemplates, activeTopic, filterFavoritesOnly, searchQuery, favorites]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${
      nightMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/60 text-slate-900'
    }`}>
      
      {/* Friendly Top Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        nightMode={nightMode}
        onToggleNightMode={() => setNightMode(!nightMode)}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenAbbrevModal={() => setIsAbbrevModalOpen(true)}
        favoritesCount={favorites.length}
        totalTemplatesCount={allTemplates.length}
        filterFavoritesOnly={filterFavoritesOnly}
        onToggleFavoritesFilter={() => setFilterFavoritesOnly(!filterFavoritesOnly)}
      />

      {/* Bedside Context & Shift Info Bar */}
      <PatientContextBar
        context={patientContext}
        onUpdateContext={setPatientContext}
        nightMode={nightMode}
        onPrependHeaderToNote={handlePrependHeader}
      />

      {/* Friendly Topic Filter Pills */}
      <CategoryNav
        activeTopic={activeTopic}
        onSelectTopic={(topic) => {
          setActiveTopic(topic);
          setFilterFavoritesOnly(false);
        }}
        counts={topicCounts}
        nightMode={nightMode}
      />

      {/* Mobile Tab Switcher */}
      <div className={`lg:hidden px-4 py-2 border-b flex items-center justify-center gap-2 ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <button
          onClick={() => setMobileTab('catalog')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === 'catalog'
              ? 'bg-emerald-600 text-white shadow-xs'
              : (nightMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700')
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Browse Notes ({filteredTemplates.length})</span>
        </button>

        <button
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === 'editor'
              ? 'bg-emerald-600 text-white shadow-xs'
              : (nightMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700')
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Customize &amp; Copy</span>
        </button>
      </div>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full">
          
          {/* LEFT COLUMN: Template Cards (5 cols on lg) */}
          <div className={`lg:col-span-5 flex flex-col space-y-3 ${
            mobileTab === 'editor' ? 'hidden lg:flex' : 'flex'
          }`}>
            
            {/* Friendly List Subtitle */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-bold text-slate-500 dark:text-slate-400">
                {filterFavoritesOnly ? '⭐ Starred Favorites' : 'Ready Clinical Notes'}:
                <strong className="ml-1 text-slate-800 dark:text-slate-100">{filteredTemplates.length}</strong> available
              </span>

              {(filterFavoritesOnly || searchQuery) && (
                <button
                  onClick={() => {
                    setFilterFavoritesOnly(false);
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-bold text-xs cursor-pointer"
                >
                  <FilterX className="w-3.5 h-3.5" />
                  <span>Show All Notes</span>
                </button>
              )}
            </div>

            {/* Template Card Scroll Area */}
            <div className="space-y-3 max-h-[calc(100vh-230px)] overflow-y-auto pr-1 scrollbar-thin">
              {filteredTemplates.length === 0 ? (
                <div className={`p-8 text-center rounded-2xl border border-dashed ${
                  nightMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-white border-slate-300 text-slate-500'
                }`}>
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="font-bold text-xs">No matching notes found</p>
                  <p className="text-[11px] mt-1 text-slate-400">Try searching for a different procedure or tap below to reset.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFilterFavoritesOnly(false);
                      setActiveTopic('all');
                    }}
                    className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer"
                  >
                    View All Notes
                  </button>
                </div>
              ) : (
                filteredTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    isSelected={selectedTemplate?.id === template.id}
                    isFavorite={favorites.includes(template.id)}
                    onSelect={(t) => {
                      setSelectedTemplateId(t.id);
                      setMobileTab('editor');
                    }}
                    onToggleFavorite={handleToggleFavorite}
                    onDeleteCustom={handleDeleteCustomTemplate}
                    nightMode={nightMode}
                  />
                ))
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Note Workstation (7 cols on lg) */}
          <div className={`lg:col-span-7 flex flex-col h-full min-h-[600px] ${
            mobileTab === 'catalog' ? 'hidden lg:flex' : 'flex'
          }`}>
            <NoteEditor
              template={selectedTemplate}
              nightMode={nightMode}
              prependedHeaderTrigger={prependedHeaderTrigger}
            />
          </div>

        </div>
      </main>

      {/* Modals */}
      <CustomTemplateModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onSave={handleSaveCustomTemplate}
        nightMode={nightMode}
      />

      <AbbreviationModal
        isOpen={isAbbrevModalOpen}
        onClose={() => setIsAbbrevModalOpen(false)}
        nightMode={nightMode}
      />

    </div>
  );
}
