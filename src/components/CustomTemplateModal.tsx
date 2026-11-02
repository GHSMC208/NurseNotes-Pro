import React, { useState } from 'react';
import { NoteTemplate, TemplateCategory } from '../types/templates';
import { X, Plus, Save, Sparkles } from 'lucide-react';

interface CustomTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: NoteTemplate) => void;
  nightMode: boolean;
}

export const CustomTemplateModal: React.FC<CustomTemplateModalProps> = ({
  isOpen,
  onClose,
  onSave,
  nightMode
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'routine' | 'procedure' | 'situational' | 'transitions'>('procedure');
  const [subcategory, setSubcategory] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [narrativeText, setNarrativeText] = useState('');
  const [fdarText, setFdarText] = useState('');
  const [soapText, setSoapText] = useState('');
  const [checklistText, setChecklistText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !narrativeText.trim()) return;

    const parsedTags = tags
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    const newTemplate: NoteTemplate = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category: 'custom',
      subcategory: subcategory.trim() || 'Custom Note',
      tags: parsedTags.length > 0 ? parsedTags : ['custom', 'unit-preset'],
      description: description.trim() || 'Custom user-created clinical documentation template.',
      badge: 'Custom',
      isCustom: true,
      formats: {
        narrative: narrativeText.trim(),
        fdar: fdarText.trim() || `Focus: ${title.trim()}\nD: Patient assessed.\nA: Interventions completed.\nR: Tolerated well.`,
        soap: soapText.trim() || `S: Verbalized readiness.\nO: Procedure completed without complication.\nA: Tolerated well.\nP: Routine post-procedure care.`,
        checklist: checklistText.trim() || `• ${title.trim()} completed\n• Vital signs stable\n• Tolerated well without complications`
      },
      variables: []
    };

    onSave(newTemplate);
    onClose();
  };

  const loadExample = () => {
    setTitle('Post-Cardiac Cath Sheath Removal & Groin Hold');
    setCategory('procedure');
    setSubcategory('Cardiology');
    setTags('cath lab, sheath, groin, hemostasis, femoral');
    setDescription('Manual femoral sheath pull, 20-minute manual pressure hold, and distal pulse evaluation.');
    setNarrativeText(`Procedure: Femoral Sheath Removal & Manual Hemostasis.
ACT checked prior to pull: [ACT result] seconds (<180 sec target). Baseline vitals and distal pedal pulses confirmed intact (Dorsalis Pedis 2+, Posterior Tibial 2+). Right femoral arterial sheath removed slowly. Manual occlusive compression held for 20 continuous minutes. Hemostasis successfully achieved. Femoral puncture site assessed: soft, flat, zero hematoma or bruit audible. Sterile pressure dressing and sandbag applied. Strict flat supine bedrest protocol initiated for 4 hours. Patient instructed to keep right leg completely straight. Tolerated well.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className={`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
        nightMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          nightMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-600 text-white">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold">Create Custom Note Template</h2>
              <p className="text-xs text-slate-400">Save custom dot-phrases or hospital-specific protocol notes</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadExample}
              className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded border transition-colors ${
                nightMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Load Cath Example</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Template Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Lumbar Puncture RN Assist"
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Subcategory / Unit</label>
              <input
                type="text"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                placeholder="e.g. Vascular, Neuro, Post-Op"
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Tags (comma separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. cath lab, groin, sheath, pressure hold"
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Short Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief summary of procedure/assessment"
                className={`w-full px-3 py-2 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>
          </div>

          {/* Narrative Text */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-emerald-600 dark:text-emerald-400">
                Narrative Note Content * (Use [Brackets] for customizable variables)
              </label>
            </div>
            <textarea
              required
              rows={6}
              value={narrativeText}
              onChange={(e) => setNarrativeText(e.target.value)}
              placeholder="Enter your clinical narrative note. Example: Procedure: [Procedure Name] performed at [Time]. Tolerated well without complications..."
              className={`w-full p-3 font-mono text-xs rounded-lg border leading-relaxed ${
                nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
              }`}
            />
          </div>

          {/* Optional FDAR */}
          <div>
            <label className="block font-semibold mb-1 text-slate-500">
              Optional FDAR Format (Focus, Data, Action, Response)
            </label>
            <textarea
              rows={3}
              value={fdarText}
              onChange={(e) => setFdarText(e.target.value)}
              placeholder="Focus: ... \nD: ... \nA: ... \nR: ..."
              className={`w-full p-2.5 font-mono text-xs rounded-lg border ${
                nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                nightMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Template</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
