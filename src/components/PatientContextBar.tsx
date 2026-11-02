import React, { useState, useEffect } from 'react';
import { PatientContext } from '../types/templates';
import { 
  Clock, 
  Bed, 
  ChevronDown, 
  ChevronUp, 
  FilePlus2, 
  Check, 
  ShieldCheck,
  User,
  AlertCircle,
  Edit2
} from 'lucide-react';
import { formatCurrentMilitaryTime, formatCurrentDate } from '../utils/storage';

interface PatientContextBarProps {
  context: PatientContext;
  onUpdateContext: (ctx: PatientContext) => void;
  nightMode: boolean;
  onPrependHeaderToNote: (headerText: string) => void;
}

export const PatientContextBar: React.FC<PatientContextBarProps> = ({
  context,
  onUpdateContext,
  nightMode,
  onPrependHeaderToNote
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [liveTime, setLiveTime] = useState<string>(formatCurrentMilitaryTime());
  const [insertedNotice, setInsertedNotice] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(formatCurrentMilitaryTime());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handlePrepend = () => {
    const header = `[DATE: ${formatCurrentDate()} | TIME: ${liveTime} | UNIT/BED: ${context.unitBed || 'Unassigned'} | SHIFT: ${context.shift} | CODE: ${context.codeStatus} | ALLERGIES: ${context.allergies} | ATTENDING: ${context.attendingMD || 'On-Duty'}]\n\n`;
    onPrependHeaderToNote(header);
    setInsertedNotice(true);
    setTimeout(() => setInsertedNotice(false), 2200);
  };

  return (
    <div className={`transition-all border-b ${
      nightMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-slate-50/60 border-slate-200/70 text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs">
          
          {/* Quick Context Summary Badges */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Clock Pill */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono font-bold text-xs ${
              nightMode ? 'bg-slate-800 text-emerald-400' : 'bg-white text-emerald-700 border border-slate-200 shadow-2xs'
            }`}>
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>{liveTime} hrs</span>
            </div>

            {/* Room / Bed */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium ${
              nightMode ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
            }`}>
              <Bed className="w-3.5 h-3.5 text-slate-400" />
              <span>{context.unitBed || 'Room / Bed'}</span>
            </div>

            {/* Code Status */}
            <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${
              context.codeStatus === 'Full Code' 
                ? (nightMode ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40' : 'bg-blue-50 text-blue-700 border border-blue-200')
                : (nightMode ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40' : 'bg-purple-50 text-purple-700 border border-purple-200')
            }`}>
              {context.codeStatus}
            </span>

            {/* Allergies */}
            <span className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ${
              context.allergies === 'NKDA'
                ? (nightMode ? 'text-slate-400' : 'text-slate-500')
                : (nightMode ? 'bg-rose-950/40 text-rose-300' : 'bg-rose-50 text-rose-700 border border-rose-200')
            }`}>
              <AlertCircle className="w-3 h-3 text-rose-400" />
              <span>{context.allergies}</span>
            </span>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Insert Header Button */}
            <button
              onClick={handlePrepend}
              disabled={insertedNotice}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                insertedNotice
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : (nightMode 
                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700' 
                      : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-300 shadow-2xs')
              }`}
              title="Add hospital timestamp & room header to current note"
            >
              {insertedNotice ? <Check className="w-3.5 h-3.5 text-white" /> : <FilePlus2 className="w-3.5 h-3.5 text-emerald-500" />}
              <span>{insertedNotice ? 'Header Added!' : '+ Prepend Header'}</span>
            </button>

            {/* Edit Drawer Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                nightMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Edit2 className="w-3 h-3" />
              <span>{isExpanded ? 'Close' : 'Edit Shift'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

          </div>
        </div>

        {/* Expandable Shift Info Drawer */}
        {isExpanded && (
          <div className={`mt-3 p-3.5 rounded-xl border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs ${
            nightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div>
              <label className="block font-semibold mb-1 opacity-80">Room / Bed Location</label>
              <input
                type="text"
                value={context.unitBed}
                onChange={(e) => onUpdateContext({ ...context, unitBed: e.target.value })}
                placeholder="e.g. 4-West / Bed 412"
                className={`w-full px-3 py-1.5 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 opacity-80">Shift</label>
              <select
                value={context.shift}
                onChange={(e) => onUpdateContext({ ...context, shift: e.target.value as any })}
                className={`w-full px-3 py-1.5 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              >
                <option value="Day">Day Shift (07:00 - 19:30)</option>
                <option value="Night">Night Shift (19:00 - 07:30)</option>
                <option value="Evening">Evening (15:00 - 23:30)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 opacity-80">Code Status</label>
              <select
                value={context.codeStatus}
                onChange={(e) => onUpdateContext({ ...context, codeStatus: e.target.value as any })}
                className={`w-full px-3 py-1.5 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              >
                <option value="Full Code">Full Code</option>
                <option value="DNR">DNR</option>
                <option value="DNI">DNI</option>
                <option value="DNR/DNI">DNR / DNI</option>
                <option value="Comfort Care">Comfort Care</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 opacity-80">Allergies</label>
              <input
                type="text"
                value={context.allergies}
                onChange={(e) => onUpdateContext({ ...context, allergies: e.target.value })}
                placeholder="NKDA or e.g. Penicillin"
                className={`w-full px-3 py-1.5 rounded-lg border text-xs ${
                  nightMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
