import React, { useState, useEffect, useRef } from 'react';
import { NoteTemplate, DocumentationFormat } from '../types/templates';
import { QUICK_PHRASES } from '../data/quickPhrases';
import { DO_NOT_USE_ABBREVIATIONS, DoNotUseRule } from '../data/abbreviations';
import { formatCurrentMilitaryTime, formatCurrentDate } from '../utils/storage';
import { 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  AlertCircle, 
  ShieldAlert, 
  Wand2, 
  Printer, 
  FileCheck,
  CheckCheck,
  Scissors,
  CheckCircle2
} from 'lucide-react';

interface NoteEditorProps {
  template: NoteTemplate | null;
  nightMode: boolean;
  prependedHeaderTrigger?: { id: string; header: string } | null;
  onUpdateCustomTemplate?: (updated: NoteTemplate) => void;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  template,
  nightMode,
  prependedHeaderTrigger
}) => {
  const [activeFormat, setActiveFormat] = useState<DocumentationFormat>('narrative');
  const [noteContent, setNoteContent] = useState<string>('');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [safetyFlags, setSafetyFlags] = useState<{ rule: DoNotUseRule; match: string }[]>([]);
  const [unfilledBrackets, setUnfilledBrackets] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // When template or activeFormat changes, load base content
  useEffect(() => {
    if (template) {
      const baseText = template.formats[activeFormat] || template.formats.narrative || '';
      setNoteContent(baseText);
    } else {
      setNoteContent('');
    }
  }, [template?.id, activeFormat]);

  // When prependedHeaderTrigger fires, prepend header text to current note
  useEffect(() => {
    if (prependedHeaderTrigger?.header) {
      setNoteContent(prev => {
        if (prev.startsWith(prependedHeaderTrigger.header.slice(0, 20))) {
          return prev;
        }
        return `${prependedHeaderTrigger.header}${prev}`;
      });
    }
  }, [prependedHeaderTrigger]);

  // Scan for unfilled brackets & safety flags
  useEffect(() => {
    if (!noteContent) {
      setUnfilledBrackets([]);
      setSafetyFlags([]);
      return;
    }

    // 1. Detect brackets like [Anatomical Site] or [Time]
    const bracketRegex = /\[(.*?)\]/g;
    const matches: string[] = [];
    let match;
    while ((match = bracketRegex.exec(noteContent)) !== null) {
      matches.push(match[0]);
    }
    setUnfilledBrackets(matches);

    // 2. Detect JCAHO Do Not Use abbreviations
    const detected: { rule: DoNotUseRule; match: string }[] = [];
    for (const rule of DO_NOT_USE_ABBREVIATIONS) {
      const hits = noteContent.match(rule.pattern);
      if (hits && hits.length > 0) {
        detected.push({ rule, match: hits[0] });
      }
    }
    setSafetyFlags(detected);
  }, [noteContent]);

  if (!template) {
    return (
      <div className={`h-full flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed ${
        nightMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-white border-slate-300 text-slate-500'
      }`}>
        <FileCheck className="w-12 h-12 mb-3 text-emerald-500/50" />
        <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">Select a Note to Begin</h3>
        <p className="text-xs max-w-sm mt-1 leading-relaxed">
          Choose any routine care, procedure, bedridden care, or emergency note from the left to customize and copy.
        </p>
      </div>
    );
  }

  // Handle Quick Variable Replace
  const handleVariableSelect = (varLabel: string, chosenValue: string) => {
    const escapedLabel = varLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\[${escapedLabel}(?::[^\\]]+)?\\]`, 'gi');

    let updated = noteContent;
    if (regex.test(updated)) {
      updated = updated.replace(regex, chosenValue);
    } else {
      const looseRegex = new RegExp(`\\[[^\\]]*${escapedLabel}[^\\]]*\\]`, 'gi');
      if (looseRegex.test(updated)) {
        updated = updated.replace(looseRegex, chosenValue);
      }
    }
    setNoteContent(updated);
  };

  // 1-Click: Fill All Variables with Normal / Default values
  const handleFillAllDefaults = () => {
    let updated = noteContent;
    const nowTime = formatCurrentMilitaryTime();
    
    // Replace [Time]
    updated = updated.replace(/\[Time(?:\s*\+\s*\d+\s*(?:hrs?|mins?))?\]/gi, nowTime);
    updated = updated.replace(/\[Date\/Time\]/gi, `${formatCurrentDate()} ${nowTime}`);

    if (template.variables) {
      for (const v of template.variables) {
        const escapedLabel = v.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const reg = new RegExp(`\\[${escapedLabel}(?::[^\\]]+)?\\]`, 'gi');
        updated = updated.replace(reg, v.defaultValue);

        const looseReg = new RegExp(`\\[[^\\]]*${escapedLabel}[^\\]]*\\]`, 'gi');
        updated = updated.replace(looseReg, v.defaultValue);
      }
    }

    setNoteContent(updated);
  };

  // 1-Click: Insert Current Time
  const handleInsertTime = () => {
    const timeStr = formatCurrentMilitaryTime();
    let updated = noteContent;
    if (updated.includes('[Time]')) {
      updated = updated.replace(/\[Time\]/g, timeStr);
    } else {
      updated = `${updated}\nTime: ${timeStr} hrs`;
    }
    setNoteContent(updated);
  };

  // 1-Click: Append Quick Phrase
  const handleAppendPhrase = (phraseText: string) => {
    setNoteContent(prev => {
      const trimmed = prev.trimEnd();
      return `${trimmed}\n\n${phraseText}`;
    });
  };

  // 1-Click: Clean/Remove Remaining Square Brackets
  const handleStripBrackets = () => {
    const cleaned = noteContent.replace(/\[(.*?)\]/g, '$1');
    setNoteContent(cleaned);
  };

  // 1-Click: Fix JCAHO Abbreviation Issues
  const handleFixSafetyAbbreviations = () => {
    let fixed = noteContent;
    fixed = fixed.replace(/(\b\d+)\.0\s*(mg|mcg|mL|g|units)\b/gi, '$1 $2');
    fixed = fixed.replace(/(^|\s)\.(\d+)\s*(mg|mcg|mL|g|units)\b/gi, '$10.$2 $3');
    fixed = fixed.replace(/\b(?:q\.?d\.?|Q\.?D\.?)\b/g, 'daily');
    fixed = fixed.replace(/\b(?:q\.?o\.?d\.?|Q\.?O\.?D\.?)\b/g, 'every other day');
    fixed = fixed.replace(/\b([0-9]+)\s*[Uu]\b/g, '$1 units');
    fixed = fixed.replace(/\b(?:MS|MSO4)\b/g, 'morphine sulfate');
    fixed = fixed.replace(/\bMgSO4\b/g, 'magnesium sulfate');
    setNoteContent(fixed);
  };

  // Jump to Next Unfilled Bracket in Textarea
  const handleJumpToNextBracket = () => {
    if (!textareaRef.current) return;
    const match = /\[.*?\]/.exec(noteContent);
    if (match) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(match.index, match.index + match[0].length);
    }
  };

  // Reset to default template
  const handleReset = () => {
    const base = template.formats[activeFormat] || template.formats.narrative || '';
    setNoteContent(base);
  };

  // Copy Handlers
  const handleCopyStandard = () => {
    navigator.clipboard.writeText(noteContent);
    setCopiedType('standard');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyWithTimestamp = () => {
    const timeHeader = `[${formatCurrentDate()} ${formatCurrentMilitaryTime()} RN Note]\n`;
    navigator.clipboard.writeText(timeHeader + noteContent);
    setCopiedType('timestamp');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyPlainText = () => {
    const plain = noteContent.replace(/^•\s*/gm, '- ');
    navigator.clipboard.writeText(plain);
    setCopiedType('plain');
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Print Note
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${template.title} - Clinical Note</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace; padding: 40px; font-size: 14px; line-height: 1.6; color: #111; }
              .header { border-bottom: 2px solid #333; padding-bottom: 12px; margin-bottom: 20px; }
              .meta { font-size: 12px; color: #555; margin-bottom: 4px; }
              pre { font-family: inherit; white-space: pre-wrap; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>${template.title}</h2>
              <div class="meta">Format: ${activeFormat.toUpperCase()} | Generated: ${formatCurrentDate()} ${formatCurrentMilitaryTime()}</div>
              <div class="meta">Hospital Nursing Documentation</div>
            </div>
            <pre>${noteContent}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  // Word & Char Count
  const charCount = noteContent.length;
  const wordCount = noteContent.trim() ? noteContent.trim().split(/\s+/).length : 0;

  const formatLabels: Record<DocumentationFormat, { name: string; desc: string }> = {
    narrative: { name: 'Standard Story', desc: 'Running clinical paragraph' },
    fdar: { name: 'FDAR', desc: 'Focus, Data, Action, Response' },
    soap: { name: 'SOAP', desc: 'Subjective, Objective, Assessment, Plan' },
    checklist: { name: 'Quick Checklist', desc: 'Bulleted summary' }
  };

  return (
    <div className={`rounded-2xl border transition-all shadow-sm flex flex-col h-full overflow-hidden ${
      nightMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/90 text-slate-900'
    }`}>
      
      {/* Step 1 Header: Title & Format Picker */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-3 ${
        nightMode ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200/80 bg-slate-50/70'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              nightMode ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              {template.subcategory}
            </span>
            <span className="text-xs text-slate-400 font-medium">{template.badge || 'Ready to use'}</span>
          </div>
          <h2 className="text-base sm:text-lg font-black tracking-tight">
            {template.title}
          </h2>
        </div>

        {/* Format Selector Tabs */}
        <div className={`flex items-center p-1 rounded-xl border ${
          nightMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
        }`}>
          {(['narrative', 'fdar', 'soap', 'checklist'] as DocumentationFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setActiveFormat(fmt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFormat === fmt
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : (nightMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
              }`}
              title={formatLabels[fmt].desc}
            >
              {formatLabels[fmt].name}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Interactive Quick Fill Options (Friendly Pills) */}
      {template.variables && template.variables.length > 0 && (
        <div className={`p-4 border-b text-xs transition-colors ${
          nightMode ? 'bg-slate-950/40 border-slate-800' : 'bg-emerald-50/30 border-slate-200/80'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Tap Options to Customize Note:</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleInsertTime}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono font-semibold border transition-all cursor-pointer ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-emerald-400 hover:bg-slate-700' : 'bg-white border-slate-200 text-emerald-700 hover:bg-slate-100 shadow-2xs'
                }`}
                title="Replace [Time] with current clock time"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Fill Time ({formatCurrentMilitaryTime()})</span>
              </button>

              <button
                onClick={handleFillAllDefaults}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs transition-all cursor-pointer"
                title="Instantly fills all options with normal/standard clinical defaults"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>✨ Auto-Fill Normal</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {template.variables.map((variable) => (
              <div 
                key={variable.key}
                className={`p-2.5 rounded-xl border text-xs transition-all ${
                  nightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="font-bold text-slate-600 dark:text-slate-300 mb-1.5 text-[11px] truncate">
                  {variable.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {variable.options.map((opt) => {
                    const isSelected = noteContent.includes(opt);
                    return (
                      <button
                        key={opt}
                        onClick={() => handleVariableSelect(variable.label, opt)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-emerald-600 text-white shadow-2xs ring-1 ring-emerald-400'
                            : (nightMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')
                        }`}
                        title={`Select "${opt}"`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Friendly Status / Warnings Bar */}
      <div className={`px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2 border-b ${
        safetyFlags.length > 0 
          ? (nightMode ? 'bg-rose-950/40 text-rose-300 border-rose-900/50' : 'bg-rose-50 text-rose-800 border-rose-200')
          : unfilledBrackets.length > 0
            ? (nightMode ? 'bg-amber-950/30 text-amber-300 border-amber-900/40' : 'bg-amber-50 text-amber-900 border-amber-200')
            : (nightMode ? 'bg-emerald-950/30 text-emerald-300 border-emerald-900/40' : 'bg-emerald-50/80 text-emerald-800 border-emerald-200')
      }`}>
        <div className="flex items-center gap-2">
          {safetyFlags.length > 0 ? (
            <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
          ) : unfilledBrackets.length > 0 ? (
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          )}

          <span>
            {safetyFlags.length > 0 ? (
              <strong>Safety Alert: Flagged abbreviation ({safetyFlags[0].rule.flagged}) - {safetyFlags[0].rule.correction}</strong>
            ) : unfilledBrackets.length > 0 ? (
              <span>
                <strong>{unfilledBrackets.length} bracket{unfilledBrackets.length > 1 ? 's' : ''} to check:</strong> <span className="font-mono text-[11px] opacity-90">{unfilledBrackets.slice(0, 3).join(', ')}{unfilledBrackets.length > 3 ? '...' : ''}</span>
              </span>
            ) : (
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                ✨ Ready to paste! All details completed.
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {safetyFlags.length > 0 && (
            <button
              onClick={handleFixSafetyAbbreviations}
              className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 transition-colors cursor-pointer"
            >
              Fix Safety Rules
            </button>
          )}

          {unfilledBrackets.length > 0 && (
            <>
              <button
                onClick={handleJumpToNextBracket}
                className="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-[11px] font-bold hover:bg-amber-600 transition-colors cursor-pointer"
              >
                Next [ ]
              </button>
              <button
                onClick={handleStripBrackets}
                className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer flex items-center gap-1"
                title="Remove square brackets for a clean paragraph"
              >
                <Scissors className="w-3 h-3" />
                <span>Clean [ ]</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Editor Textarea */}
      <div className="flex-1 p-4 relative flex flex-col min-h-[260px]">
        <textarea
          ref={textareaRef}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Nurse note content..."
          className={`w-full flex-1 p-3.5 rounded-xl font-mono text-xs sm:text-sm leading-relaxed resize-none border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
            nightMode 
              ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600' 
              : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-emerald-500'
          }`}
          spellCheck={false}
        />

        {/* Status Line */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 px-1">
          <div className="flex items-center gap-3">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
            {unfilledBrackets.length === 0 && (
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> 100% Ready
              </span>
            )}
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            title="Reset note back to original template"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Note</span>
          </button>
        </div>
      </div>

      {/* Quick Nursing Phrases Drawer */}
      <div className={`p-3 border-t text-xs ${
        nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/80 border-slate-200'
      }`}>
        <div className="text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Tap to Append Quick Clinical Statement:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-thin pr-1">
          {QUICK_PHRASES.map((phrase) => (
            <button
              key={phrase.id}
              onClick={() => handleAppendPhrase(phrase.text)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border text-left truncate max-w-xs transition-all cursor-pointer ${
                nightMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-700 shadow-2xs'
              }`}
              title={phrase.text}
            >
              + {phrase.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Friendly Action Footer: BIG PRIMARY COPY BUTTON */}
      <div className={`p-4 border-t flex flex-wrap items-center justify-between gap-3 ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2">
          {/* Print */}
          <button
            onClick={handlePrint}
            className={`p-2 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
              nightMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title="Print clean note for physical binder or chart"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Copy Plain Text */}
          <button
            onClick={handleCopyPlainText}
            className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              copiedType === 'plain'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : (nightMode 
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100')
            }`}
            title="Copy plain text"
          >
            {copiedType === 'plain' ? 'Plain Copied!' : 'Copy Plain'}
          </button>

          {/* Copy With Timestamp */}
          <button
            onClick={handleCopyWithTimestamp}
            className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              copiedType === 'timestamp'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : (nightMode 
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100')
            }`}
            title="Prepend date/time and copy"
          >
            {copiedType === 'timestamp' ? 'Time Copied!' : '+ Timestamp & Copy'}
          </button>
        </div>

        {/* Big Friendly Primary Copy Button */}
        <button
          onClick={handleCopyStandard}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-black shadow-md transition-all transform active:scale-95 cursor-pointer ${
            copiedType === 'standard'
              ? 'bg-emerald-500 text-white scale-102 ring-4 ring-emerald-300/40'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {copiedType === 'standard' ? (
            <>
              <Check className="w-5 h-5 animate-bounce stroke-[3]" />
              <span>Copied to Clipboard! Ready for EHR</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Note to Clipboard</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
