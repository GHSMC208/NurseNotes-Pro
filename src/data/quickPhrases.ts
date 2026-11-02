import { QuickPhrase } from '../types/templates';

export const QUICK_PHRASES: QuickPhrase[] = [
  {
    id: 'tol-1',
    label: 'Tolerated Well',
    text: 'Patient tolerated the procedure well with no acute distress, adverse reaction, or complications reported.',
    category: 'tolerance'
  },
  {
    id: 'safe-1',
    label: 'Safety Environment',
    text: 'Bed maintained in lowest position with brakes locked, call bell within direct reach, and 2 upper side rails elevated.',
    category: 'safety'
  },
  {
    id: 'aseptic-1',
    label: 'Aseptic Technique',
    text: 'Aseptic non-touch technique strictly maintained throughout procedure. Skin prepped with chlorhexidine and allowed to air dry completely.',
    category: 'general'
  },
  {
    id: 'notif-1',
    label: 'MD Notified & Read-Back',
    text: 'Attending physician Dr. [Provider Name] notified of findings at [Time]. Orders received, confirmed, and read back verbatim.',
    category: 'notification'
  },
  {
    id: 'pain-1',
    label: 'Pain Reassessment',
    text: 'Pain score reassessed 30 minutes post-intervention: decreased from [Pre-pain]/10 to [Post-pain]/10. Patient resting comfortably.',
    category: 'reassessment'
  },
  {
    id: 'vital-1',
    label: 'Vitals Post-Procedure',
    text: 'Post-procedure vital signs stable and consistent with pre-procedure baseline: BP [BP], HR [HR], RR [RR], SpO2 [SpO2]% on [O2 Support].',
    category: 'tolerance'
  },
  {
    id: 'site-1',
    label: 'Site Clean & Intact',
    text: 'Insertion site clean, dry, and intact with sterile transparent dressing applied. No active bleeding, hematoma, swelling, or erythema observed.',
    category: 'general'
  },
  {
    id: 'teach-1',
    label: 'Patient Education / Teach-Back',
    text: 'Procedure, rationale, and post-care precautions reviewed with patient and family. Patient demonstrated comprehension via teach-back method.',
    category: 'discharge'
  },
  {
    id: 'fall-1',
    label: 'Fall Precautions Intact',
    text: 'Universal fall precautions maintained: non-skid footwear on, pathway clear, assistive device bedside, bed alarm activated.',
    category: 'safety'
  },
  {
    id: 'disch-1',
    label: 'Discharged in Stable Condition',
    text: 'Patient escorted via wheelchair in stable condition accompanied by adult family member. Prescriptions and follow-up appointment instructions provided.',
    category: 'discharge'
  },
  {
    id: 'pos-1',
    label: 'Q2H 30° Tilt & Heel Offloading',
    text: 'Patient turned and repositioned to 30-degree lateral tilt; pillows placed between knees and behind back. Bilateral heels suspended completely floating off mattress.',
    category: 'safety'
  },
  {
    id: 'skin-1',
    label: 'Sacral Foam Dressing Intact',
    text: 'Prophylactic 5-layer silicone bordered foam dressing over sacrum/coccyx inspected: clean, dry, and intact. No non-blanchable erythema or bogginess noted.',
    category: 'general'
  },
  {
    id: 'suct-1',
    label: 'Oral Yankauer Suction Cleared',
    text: 'Oral cavity suctioned with Yankauer catheter with copious thick secretions evacuated. Oral hygiene performed with CHG swab. Breath sounds cleared bilaterally.',
    category: 'tolerance'
  },
  {
    id: 'scd-1',
    label: 'SCDs & PROM Maintained',
    text: 'Bilateral sequential compression devices (SCDs) verified active and functioning. Passive range of motion (PROM) completed to all four extremities.',
    category: 'safety'
  },
  {
    id: 'barrier-1',
    label: 'Incontinence Barrier Applied',
    text: 'Perineal area cleansed with gentle pH-balanced foam cleanser and dried thoroughly. Dimethicone moisture barrier cream applied to perianal skin.',
    category: 'general'
  },
  {
    id: 'recv-1',
    label: 'Bedside Handoff Received',
    text: 'Patient received via stretcher accompanied by transferring staff; comprehensive bedside SBAR handoff conducted; 2 patient identifiers verified.',
    category: 'general'
  },
  {
    id: 'recv-2',
    label: 'Surgical Dressing Checked (Clean/Dry)',
    text: 'Surgical dressing inspected jointly on arrival: clean, dry, and intact with zero strike-through drainage or bleeding.',
    category: 'general'
  },
  {
    id: 'recv-3',
    label: 'Arrival Room Orientation',
    text: 'Bed locked in lowest position, call bell demonstrated in hand, 2 side rails up, belongings inventoried, and room orientation completed.',
    category: 'safety'
  }
];
