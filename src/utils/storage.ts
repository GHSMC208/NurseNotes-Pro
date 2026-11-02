import { NoteTemplate, PatientContext } from '../types/templates';

const FAVORITES_KEY = 'nursenotes_favorites_v1';
const CUSTOM_TEMPLATES_KEY = 'nursenotes_custom_templates_v1';
const PATIENT_CONTEXT_KEY = 'nursenotes_patient_context_v1';
const NIGHT_MODE_KEY = 'nursenotes_night_mode_v1';

export function getStoredFavorites(): string[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [
      'trans-receiving-ed',
      'trans-receiving-pacu',
      'proc-piv-insert', 
      'rout-bedridden-care',
      'rout-positioning-turn',
      'rout-skin-pressure-care',
      'proc-suctioning-care',
      'proc-foley-insert', 
      'rout-shift-assessment', 
      'trans-sbar-handover'
    ];
  } catch (e) {
    console.error('Failed to load favorites', e);
    return ['proc-piv-insert', 'rout-bedridden-care', 'rout-positioning-turn'];
  }
}

export function saveStoredFavorites(favs: string[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error('Failed to save favorites', e);
  }
}

export function getStoredCustomTemplates(): NoteTemplate[] {
  try {
    const data = localStorage.getItem(CUSTOM_TEMPLATES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load custom templates', e);
    return [];
  }
}

export function saveStoredCustomTemplates(templates: NoteTemplate[]): void {
  try {
    localStorage.setItem(CUSTOM_TEMPLATES_KEY, JSON.stringify(templates));
  } catch (e) {
    console.error('Failed to save custom templates', e);
  }
}

export function getStoredPatientContext(): PatientContext {
  try {
    const data = localStorage.getItem(PATIENT_CONTEXT_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load patient context', e);
  }
  return {
    unitBed: '4-West / Bed 412',
    patientInitials: 'P.T.',
    attendingMD: 'Dr. Sarah Jenkins',
    shift: 'Day',
    allergies: 'NKDA',
    codeStatus: 'Full Code'
  };
}

export function saveStoredPatientContext(ctx: PatientContext): void {
  try {
    localStorage.setItem(PATIENT_CONTEXT_KEY, JSON.stringify(ctx));
  } catch (e) {
    console.error('Failed to save patient context', e);
  }
}

export function getStoredNightMode(): boolean {
  try {
    const val = localStorage.getItem(NIGHT_MODE_KEY);
    return val === 'true';
  } catch (e) {
    return false;
  }
}

export function saveStoredNightMode(enabled: boolean): void {
  try {
    localStorage.setItem(NIGHT_MODE_KEY, enabled ? 'true' : 'false');
  } catch (e) {
    console.error('Failed to save night mode', e);
  }
}

export function formatCurrentMilitaryTime(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function formatCurrentDate(): string {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}
