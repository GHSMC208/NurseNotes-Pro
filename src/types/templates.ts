export type TemplateCategory = 'all' | 'routine' | 'procedure' | 'situational' | 'transitions' | 'custom';

export type TopicFilter = 
  | 'all' 
  | 'receiving'
  | 'bedridden' 
  | 'skin' 
  | 'suction' 
  | 'vascular' 
  | 'foley' 
  | 'routine' 
  | 'urgent' 
  | 'transitions' 
  | 'favorites' 
  | 'custom';

export type DocumentationFormat = 'narrative' | 'fdar' | 'soap' | 'checklist';

export interface VariableOption {
  key: string;
  label: string;
  defaultValue: string;
  options: string[];
  helperText?: string;
}

export interface NoteTemplate {
  id: string;
  title: string;
  category: 'routine' | 'procedure' | 'situational' | 'transitions' | 'custom';
  subcategory: string;
  tags: string[];
  description: string;
  badge?: string;
  formats: {
    narrative: string;
    fdar: string;
    soap: string;
    checklist: string;
  };
  variables: VariableOption[];
  isCustom?: boolean;
}

export interface QuickPhrase {
  id: string;
  label: string;
  text: string;
  category: 'safety' | 'tolerance' | 'notification' | 'reassessment' | 'discharge' | 'general';
}

export interface PatientContext {
  unitBed: string;
  patientInitials: string;
  attendingMD: string;
  shift: 'Day' | 'Night' | 'Evening';
  allergies: string;
  codeStatus: 'Full Code' | 'DNR' | 'DNI' | 'DNR/DNI' | 'Comfort Care';
}
