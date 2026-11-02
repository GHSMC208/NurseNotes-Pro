import { NoteTemplate } from '../types/templates';

export const CLINICAL_TEMPLATES: NoteTemplate[] = [
  // ==========================================
  // PROCEDURES
  // ==========================================
  {
    id: 'proc-piv-insert',
    title: 'Peripheral IV (PIV) Insertion',
    category: 'procedure',
    subcategory: 'Vascular Access',
    badge: 'High Frequency',
    tags: ['PIV', 'IV start', 'vascular', 'line', 'venipuncture'],
    description: 'Sterile peripheral intravenous catheter placement, site assessment, flush, and dressing application.',
    variables: [
      {
        key: 'gauge',
        label: 'Catheter Gauge',
        defaultValue: '20G',
        options: ['18G', '20G', '22G', '24G']
      },
      {
        key: 'site',
        label: 'Anatomical Site',
        defaultValue: 'Right forearm',
        options: ['Right forearm', 'Left forearm', 'Right hand dorsum', 'Left hand dorsum', 'Right antecubital', 'Left antecubital']
      },
      {
        key: 'attempts',
        label: 'Attempts',
        defaultValue: '1st attempt',
        options: ['1st attempt', '2nd attempt']
      },
      {
        key: 'prep',
        label: 'Skin Prep',
        defaultValue: 'ChloraPrep (2% CHG / 70% IPA)',
        options: ['ChloraPrep (2% CHG / 70% IPA)', 'Povidone-iodine', 'Alcohol 70%']
      },
      {
        key: 'blood_return',
        label: 'Blood Return',
        defaultValue: 'Brisk blood return obtained',
        options: ['Brisk blood return obtained', 'Positive flash and brisk return confirmed']
      },
      {
        key: 'flush',
        label: 'Flushed With',
        defaultValue: 'Flushed effortlessly with 10 mL 0.9% sterile saline; no resistance, swelling, or infiltration',
        options: [
          'Flushed effortlessly with 10 mL 0.9% sterile saline; no resistance, swelling, or infiltration',
          'Flushed with 5 mL 0.9% sterile saline without resistance; site stable'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Peripheral IV Catheter Insertion.
Two patient identifiers verified prior to procedure. Indication confirmed with MD order. Skin prepped with [Skin Prep] with friction for 30 seconds and allowed to air dry completely. A [Catheter Gauge] safety catheter inserted into [Anatomical Site] on [Attempts]. [Blood Return]. Catheter advanced smoothly, stylet retracted into safety lock. Extension set attached and primed. [Flushed With]. Secured using sterile transparent semi-permeable adhesive dressing and securement device. Site labeled with date, time, gauge, and RN initials. Patient tolerated procedure well without complication. Bed in low position, call bell within reach.`,
      fdar: `Focus: Peripheral Vascular Access / PIV Insertion
D (Data): MD order verified for peripheral IV access. Patient assessed for suitable venipuncture sites. Skin warm, non-compromised in upper extremities.
A (Action): Explained procedure to patient. Chlorhexidine scrub applied to [Anatomical Site] and air-dried. A [Catheter Gauge] peripheral IV catheter successfully placed on [Attempts]. [Blood Return]. Extension loop connected; [Flushed With]. Clean transparent bio-occlusive dressing applied and dated/timed/initialed.
R (Response): Patient reported minimal discomfort and denies localized pain. Site clean, dry, intact without swelling or blanching.`,
      soap: `S (Subjective): Patient informed of order for IV placement and verbalized consent. Stated "ready for the stick."
O (Objective): [Catheter Gauge] catheter placed in [Anatomical Site] on [Attempts] after [Skin Prep]. [Blood Return]. [Flushed With]. Occlusive sterile transparent dressing applied. No erythema or edema at insertion site.
A (Assessment): Functional peripheral intravenous access established for prescribed infusions.
P (Plan): Maintain line patency per hospital vascular bundle. Flush Q8H and PRN pre/post medications. Monitor insertion site Q4H for signs of phlebitis or infiltration.`,
      checklist: `• Procedure: Peripheral IV Catheter Insertion
• Size / Site: [Catheter Gauge] in [Anatomical Site]
• Attempts: [Attempts]
• Skin Prep: [Skin Prep] (friction 30s, air-dried)
• Patency: [Blood Return] | [Flushed With]
• Dressing: Sterile transparent membrane with securement device, labeled
• Complications: None; tolerated well`
    }
  },
  {
    id: 'proc-piv-removal',
    title: 'Peripheral IV (PIV) Discontinuation / Removal',
    category: 'procedure',
    subcategory: 'Vascular Access',
    badge: 'Routine',
    tags: ['PIV removal', 'DC IV', 'line removal', 'phlebitis'],
    description: 'Catheter discontinuation, catheter integrity check, hemostasis, and site status.',
    variables: [
      {
        key: 'reason',
        label: 'Reason for Removal',
        defaultValue: 'Discharge / No longer clinically indicated',
        options: ['Discharge / No longer clinically indicated', 'Line infiltration', 'Erythema / suspected phlebitis', 'Clotted / non-patent', 'Pain at site']
      },
      {
        key: 'site',
        label: 'Catheter Location',
        defaultValue: 'Right forearm',
        options: ['Right forearm', 'Left forearm', 'Right hand', 'Left hand', 'Right AC', 'Left AC']
      },
      {
        key: 'integrity',
        label: 'Catheter Tip Integrity',
        defaultValue: 'Intact catheter tip inspected and verified',
        options: ['Intact catheter tip inspected and verified', 'Catheter tip complete and undamaged']
      },
      {
        key: 'hemostasis',
        label: 'Hemostasis',
        defaultValue: 'Direct pressure applied for 2 minutes; complete hemostasis achieved',
        options: ['Direct pressure applied for 2 minutes; complete hemostasis achieved', 'Pressure held for 5 minutes (patient on anticoagulation); hemostasis achieved']
      }
    ],
    formats: {
      narrative: `Peripheral IV Discontinuation Note:
Peripheral IV catheter located at [Catheter Location] discontinued due to: [Reason for Removal]. Transparent dressing removed gently. Catheter withdrawn in one steady motion. [Catheter Tip Integrity]. [Hemostasis]. Sterile gauze and adhesive bandage applied. Site free of edema, erythema, purulent drainage, or tenderness. Patient tolerated removal without distress.`,
      fdar: `Focus: Peripheral IV Line Discontinuation
D (Data): PIV at [Catheter Location] assessed. Order/indication for discontinuation confirmed: [Reason for Removal].
A (Action): Dressing removed with adhesive remover wipe. Catheter removed parallel to skin. [Catheter Tip Integrity]. [Hemostasis]. Sterile bandage applied.
R (Response): Patient denied discomfort. Site inspected: no active bleeding, swelling, or redness.`,
      soap: `S (Subjective): Patient states "glad to have that line out." Denies pain at insertion site.
O (Objective): Catheter removed from [Catheter Location]. [Catheter Tip Integrity]. [Hemostasis]. Puncture site clean, dry, intact without hematoma or erythema.
A (Assessment): PIV line successfully discontinued without complication.
P (Plan): Keep dressing clean and dry for 24 hours. Instructed patient to alert nursing if swelling or bleeding occurs.`,
      checklist: `• Procedure: Peripheral IV Discontinuation
• Site: [Catheter Location]
• Indication: [Reason for Removal]
• Tip Check: [Catheter Tip Integrity]
• Hemostasis: [Hemostasis]
• Site Condition: Clean, dry, intact, no erythema or hematoma`
    }
  },
  {
    id: 'proc-foley-insert',
    title: 'Indwelling Foley Catheter Insertion',
    category: 'procedure',
    subcategory: 'Genitourinary',
    badge: 'Sterile',
    tags: ['foley', 'catheter', 'urinary', 'sterile', 'retention'],
    description: 'Sterile insertion of indwelling urinary catheter, balloon inflation, urine return, and stat-lock placement.',
    variables: [
      {
        key: 'indication',
        label: 'Clinical Indication',
        defaultValue: 'Acute urinary retention confirmed by bladder scan (>600 mL)',
        options: [
          'Acute urinary retention confirmed by bladder scan (>600 mL)',
          'Strict output monitoring in critically ill / hemodynamic instability',
          'Perioperative use for designated surgical procedure',
          'Stage III/IV sacral pressure ulcer healing in incontinent patient'
        ]
      },
      {
        key: 'size',
        label: 'Catheter Size',
        defaultValue: '14 Fr / 10 mL balloon',
        options: ['14 Fr / 10 mL balloon', '16 Fr / 10 mL balloon', '18 Fr / 10 mL balloon', '16 Fr Coude tip / 10 mL balloon']
      },
      {
        key: 'urine_return',
        label: 'Initial Urine Return',
        defaultValue: 'Immediate return of clear, amber urine (~450 mL)',
        options: [
          'Immediate return of clear, amber urine (~450 mL)',
          'Immediate return of cloudy, dark yellow urine (~600 mL)',
          'Clear yellow urine return of 300 mL',
          'Tea-colored urine return of 500 mL, no gross hematuria'
        ]
      },
      {
        key: 'balloon',
        label: 'Balloon Inflation',
        defaultValue: 'Inflated with 10 mL sterile water without resistance or patient pain',
        options: ['Inflated with 10 mL sterile water without resistance or patient pain', 'Inflated with 10 mL sterile water following urine return confirmation']
      }
    ],
    formats: {
      narrative: `Procedure: Indwelling Foley Catheter Insertion.
Indication: [Clinical Indication]. Procedure, risks, and benefits explained to patient. Strict aseptic surgical technique maintained throughout. Perineal care completed prior to draping. Sterile field established. Periurethral area cleansed with antiseptic solution per protocol. A [Catheter Size] Foley catheter lubricated and gently advanced into the bladder. [Initial Urine Return]. Catheter advanced an additional 2 inches. Balloon [Balloon Inflation]. Catheter gently retracted until balloon seated against bladder neck. Secured to anterior upper thigh with Foley StatLock securement device allowing slack for leg movement. Drainage bag placed below bladder level and off the floor. Patient tolerated procedure well.`,
      fdar: `Focus: Urinary Catheterization / Retention Management
D (Data): [Clinical Indication]. Patient reported suprapubic discomfort and fullness. Bladder scan verified urinary volume.
A (Action): Sterile field established with sterile kit. Urethral meatus cleansed with antiseptic swabs. [Catheter Size] indwelling catheter inserted smoothly under strict aseptic technique. [Initial Urine Return]. Balloon [Balloon Inflation]. Catheter secured to thigh with StatLock device. Closed gravity drainage system hung below level of bladder.
R (Response): Patient expressed immediate relief of bladder pressure. Denies sharp pain. Drainage running clear without obstruction.`,
      soap: `S (Subjective): Patient reports significant relief of abdominal tightness and bladder fullness. Denies burning or pain following insertion.
O (Objective): [Catheter Size] catheter inserted using sterile technique for [Clinical Indication]. [Initial Urine Return]. Balloon [Balloon Inflation]. Catheter secured with StatLock to right anterior thigh. Drainage bag below bladder level without dependent loops.
A (Assessment): Indwelling catheter patent, draining appropriately. Acute retention resolved.
P (Plan): Monitor urine output Q2H (notify MD if <30 mL/hr). Daily CHG peri-care. Assess necessity daily for early CAUTI prevention removal.`,
      checklist: `• Procedure: Indwelling Urinary Catheter Insertion
• Indication: [Clinical Indication]
• Size/Type: [Catheter Size]
• Technique: Strict sterile surgical technique
• Return: [Initial Urine Return]
• Balloon: [Balloon Inflation]
• Securement: StatLock on anterior thigh; bag below bladder level without dependent loops
• Tolerance: Tolerated well, immediate relief noted`
    }
  },
  {
    id: 'proc-foley-removal',
    title: 'Indwelling Foley Catheter Discontinuation',
    category: 'procedure',
    subcategory: 'Genitourinary',
    badge: 'Routine',
    tags: ['foley removal', 'DC foley', 'CAUTI', 'voiding trial'],
    description: 'Catheter balloon deflation, intact catheter removal, and voiding trial instructions.',
    variables: [
      {
        key: 'deflation',
        label: 'Fluid Withdrawn',
        defaultValue: 'Deflated with 10 mL sterile water actively returned and verified',
        options: ['Deflated with 10 mL sterile water actively returned and verified', '10 mL sterile water withdrawn via passive gravity syringe return']
      },
      {
        key: 'tolerance',
        label: 'Patient Tolerance',
        defaultValue: 'Tolerated well with minimal momentary pinching sensation',
        options: ['Tolerated well with minimal momentary pinching sensation', 'Tolerated without complaints or discomfort']
      },
      {
        key: 'time_to_void',
        label: 'Voiding Window',
        defaultValue: '6 hours (due to void by [Time + 6 hrs])',
        options: ['6 hours (due to void by [Time + 6 hrs])', '4 to 6 hours per protocol']
      }
    ],
    formats: {
      narrative: `Procedure: Indwelling Foley Catheter Discontinuation.
MD order verified for catheter removal. Procedure explained to patient. 10 mL syringe attached to balloon port; balloon [Fluid Withdrawn]. Catheter withdrawn slowly and smoothly without resistance. Catheter tip inspected and noted to be intact. Perineal area cleansed and dried. [Patient Tolerance]. Instructed patient to inform nursing of first urge to void, use urinal/bedpan to measure output, and report dysuria or retention. Due to void within [Voiding Window]. Bladder scan protocol reviewed if unable to void.`,
      fdar: `Focus: Foley Catheter Removal & Voiding Trial
D (Data): Order for Foley discontinuation confirmed. Patient alert and oriented. Urine in tubing clear amber prior to removal.
A (Action): Syringe attached to inflation port; [Fluid Withdrawn]. Catheter withdrawn smoothly with tip fully intact. Peri-care provided. Educated on voiding expectations and measuring output.
R (Response): [Patient Tolerance]. Patient verbalized understanding to call nursing before first void. Scheduled voiding trial initiated (deadline [Voiding Window]).`,
      soap: `S (Subjective): Patient states understanding that catheter has been removed and agrees to notify nurse upon first sensation to urinate.
O (Objective): Foley balloon completely deflated; [Fluid Withdrawn]. Catheter removed with intact tip. Urethral meatus clean without bleeding or discharge.
A (Assessment): Indwelling catheter safely removed. Patient initiated on post-catheter voiding trial.
P (Plan): Measure and record all spontaneous voids. If no spontaneous void within [Voiding Window], perform bedside bladder scan and notify provider per urinary protocol.`,
      checklist: `• Procedure: Foley Catheter Discontinuation
• Balloon: [Fluid Withdrawn]
• Integrity: Catheter tip intact, no breakdown
• Instruction: Voiding trial initiated; due to void by [Voiding Window]
• Nursing: Measure post-void volume, bladder scan if no void in 6 hours`
    }
  },
  {
    id: 'proc-cvc-dressing',
    title: 'Central Line / PICC Sterile Dressing Change',
    category: 'procedure',
    subcategory: 'Vascular Access',
    badge: 'Sterile / CLABSI',
    tags: ['central line', 'PICC', 'CVC', 'dressing change', 'biopatch', 'CLABSI'],
    description: 'Sterile dressing change, ChloraPrep scrub, Biopatch / CHG sponge, StatLock securement, and line measurement.',
    variables: [
      {
        key: 'line_type',
        label: 'Line Type & Location',
        defaultValue: 'Right internal jugular CVC (Triple Lumen)',
        options: ['Right internal jugular CVC (Triple Lumen)', 'Right basilic PICC line (Dual Lumen)', 'Left cephalic PICC line (Dual Lumen)', 'Subclavian CVC (Triple Lumen)', 'Implanted Chest Port (Port-a-Cath)']
      },
      {
        key: 'site_condition',
        label: 'Insertion Site Assessment',
        defaultValue: 'Site clean, dry, intact without redness, edema, warmth, or purulent drainage',
        options: [
          'Site clean, dry, intact without redness, edema, warmth, or purulent drainage',
          'Slight serosanguinous trace at puncture, sutures intact, no erythema or purulence'
        ]
      },
      {
        key: 'external_length',
        label: 'External Catheter Length',
        defaultValue: 'External length measured at 4 cm (unchanged from baseline)',
        options: [
          'External length measured at 4 cm (unchanged from baseline)',
          'External length measured at 2 cm (unchanged)',
          'External length unchanged from previous shift documentation'
        ]
      },
      {
        key: 'caps_changed',
        label: 'Needleless Connectors (Caps)',
        defaultValue: 'All injection caps replaced with new primed microclave connectors and disinfected with Curos alcohol caps',
        options: [
          'All injection caps replaced with new primed microclave connectors and disinfected with Curos alcohol caps',
          'Injection caps scrubbed with 70% IPA for 15 seconds; caps intact'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Central Venous Access Device (CVAD) Sterile Dressing Change.
Indication: Routine 7-day dressing change / loose edge per CLABSI protocol. Both patient and RN donned surgical masks; patient turned head away from insertion site. Previous dressing removed with non-sterile gloves while stabilizing catheter. Non-sterile gloves removed, sterile gloves donned. [Insertion Site Assessment]. [External Catheter Length]. Skin prepped with 2% chlorhexidine gluconate with 70% isopropyl alcohol using vigorous cross-hatch friction for 30 seconds and allowed to air dry completely for 2 minutes. CHG-impregnated sponge (Biopatch) placed blue-side-up around catheter. StatLock securement device placed. Sterile transparent semipermeable occlusive dressing applied centered over site. [Needleless Connectors (Caps)]. All lumens flushed smoothly with 10 mL sterile 0.9% NS using push-pause technique with brisk blood return confirmed on each lumen. Dressing labeled with date, time, and RN initials.`,
      fdar: `Focus: Central Line Care / CLABSI Prevention Protocol
D (Data): [Line Type & Location] due for scheduled sterile dressing change. Intravenous fluids paused briefly during procedure.
A (Action): Strict sterile aseptic technique used. Masks worn by nurse and patient. Old dressing removed. [Insertion Site Assessment]. [External Catheter Length]. ChloraPrep applied with friction for 30 seconds, allowed to dry. CHG biopatch applied. New sterile transparent occlusive dressing placed. [Needleless Connectors (Caps)]. Lumens aspirated for brisk blood return, flushed with 10 mL NS (push-pause technique).
R (Response): Patient tolerated procedure without discomfort. Line intact, dressing fully occlusive without wrinkles or air channels.`,
      soap: `S (Subjective): Patient denied tenderness or discomfort at central line site during dressing change.
O (Objective): Sterile dressing change completed on [Line Type & Location]. [Insertion Site Assessment]. [External Catheter Length]. ChloraPrep scrub x 30 sec air dried. Biopatch and sterile transparent occlusive dressing placed. Lumens patent with brisk blood return; flushed with NS. [Needleless Connectors (Caps)].
A (Assessment): Central venous access device patent, well-secured, and compliant with hospital CLABSI prevention bundle.
P (Plan): Assess site Q4H for dressing integrity, tenderness, and signs of infection. Routine dressing change in 7 days or PRN if soiled/loose.`,
      checklist: `• Procedure: Central Line Sterile Dressing Change
• Line: [Line Type & Location]
• Site Condition: [Insertion Site Assessment]
• Catheter Position: [External Catheter Length]
• Prep/CHG: ChloraPrep 30s friction air-dried; CHG Biopatch applied
• Caps/Flushes: [Needleless Connectors (Caps)]; patent with brisk blood return
• Complications: None; sterile barrier maintained throughout`
    }
  },
  {
    id: 'proc-blood-transfusion-init',
    title: 'Blood Product (PRBC) Transfusion Initiation',
    category: 'procedure',
    subcategory: 'Transfusion',
    badge: 'Dual RN Check',
    tags: ['blood', 'PRBC', 'transfusion', 'dual RN', 'type and screen', '15 min vitals'],
    description: 'Dual RN bedside verification, pre-transfusion vitals, filter tubing setup, and first 15-minute observation.',
    variables: [
      {
        key: 'product',
        label: 'Blood Product',
        defaultValue: '1 Unit Packed Red Blood Cells (PRBCs) (Unit # [Unit ID])',
        options: [
          '1 Unit Packed Red Blood Cells (PRBCs) (Unit # [Unit ID])',
          '1 Unit Platelet Pheresis Leukoreduced',
          '1 Unit Fresh Frozen Plasma (FFP)',
          '1 Unit Cryoprecipitate'
        ]
      },
      {
        key: 'dual_rn',
        label: 'Dual RN Verification',
        defaultValue: 'Dual RN independent bedside verification completed by [RN 1 Name], RN and [RN 2 Name], RN',
        options: [
          'Dual RN independent bedside verification completed by [RN 1 Name], RN and [RN 2 Name], RN',
          'Two RNs verified patient name, MRN, blood type, unit number, expiration date, and crossmatch tag'
        ]
      },
      {
        key: 'pre_vitals',
        label: 'Pre-Transfusion Baseline Vitals',
        defaultValue: 'T: 98.4°F (36.9°C), HR: 78, BP: 124/76, RR: 16, SpO2: 98% on room air',
        options: [
          'T: 98.4°F (36.9°C), HR: 78, BP: 124/76, RR: 16, SpO2: 98% on room air',
          'T: 98.6°F (37.0°C), HR: 84, BP: 118/72, RR: 18, SpO2: 99% on 2L NC'
        ]
      },
      {
        key: 'iv_site',
        label: 'IV Access Line',
        defaultValue: '20G PIV in Right forearm; patent with brisk blood return',
        options: [
          '20G PIV in Right forearm; patent with brisk blood return',
          '18G PIV in Left forearm; patent with blood return',
          'Right IJ CVC Medial Lumen; patent with blood return'
        ]
      },
      {
        key: 'fifteen_vitals',
        label: '15-Minute Vitals',
        defaultValue: 'T: 98.6°F (37.0°C), HR: 80, BP: 122/74, RR: 16, SpO2: 98% RA',
        options: [
          'T: 98.6°F (37.0°C), HR: 80, BP: 122/74, RR: 16, SpO2: 98% RA',
          'T: 98.7°F (37.1°C), HR: 82, BP: 120/70, RR: 18, SpO2: 99% on 2L NC'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Blood Product Transfusion Initiation.
Informed consent verified on chart. [Dual RN Verification] matching patient name, MRN, unit number, blood group/Rh type, donor unit expiration, and crossmatch compatibility. Pre-transfusion baseline vitals recorded at [Time]: [Pre-Transfusion Baseline Vitals]. Infusion initiated via dedicated Y-type blood tubing with standard micro-aggregate filter primed with 0.9% Normal Saline via [IV Access Line]. Infusion started at initial rate of 2 mL/min (120 mL/hr) for the first 15 minutes. Bedside RN remained with patient continuously throughout the initial 15 minutes. At 15 minutes ([Time + 15 min]), vitals reassessed: [15-Minute Vitals]. Patient denies chills, fever, pruritus, rash, dyspnea, back pain, or chest discomfort. Infusion rate increased to prescribed rate to complete within 3 hours. Instructed patient to report any itching, flushing, or breathing difficulty immediately.`,
      fdar: `Focus: Blood Product Administration / 15-Minute Monitoring
D (Data): Order confirmed for [Blood Product]. Patient informed consent verified. Pre-transfusion vitals: [Pre-Transfusion Baseline Vitals]. Dedicated IV line checked: [IV Access Line].
A (Action): [Dual RN Verification] performed at bedside. Blood tubing primed with 0.9% NS only. Transfusion initiated at slow rate (2 mL/min). RN remained at bedside for continuous direct observation. At 15-minute mark, vitals repeated: [15-Minute Vitals].
R (Response): Patient alert and oriented. No evidence of hemolytic, febrile, or allergic transfusion reaction. Denies fever, rigors, flank pain, or shortness of breath. Infusion adjusted to finish within 4-hour window.`,
      soap: `S (Subjective): Patient informed of transfusion risks and agrees to procedure. Denies fever, chills, itching, or flank pain at 15-minute assessment.
O (Objective): [Blood Product] initiated. [Dual RN Verification]. Pre-vitals: [Pre-Transfusion Baseline Vitals]. 15-min vitals: [15-Minute Vitals]. Infusing via [IV Access Line] through blood filter tubing with 0.9% NS.
A (Assessment): Blood transfusion initiated safely without acute adverse transfusion reaction during critical initial 15-minute window.
P (Plan): Vital signs Q1H until transfusion completed, and 1 hour post-completion. Ensure unit finishes within 4 hours of release from blood bank. Emergency stop protocol ready at bedside.`,
      checklist: `• Product: [Blood Product]
• Verification: [Dual RN Verification]
• Line: [IV Access Line] with blood filter tubing & 0.9% NS
• Pre-Vitals: [Pre-Transfusion Baseline Vitals]
• 15-Min Vitals: [15-Minute Vitals]
• Adverse Signs: None (no rash, chills, dyspnea, temp spike, or flank pain)
• Rate: Advanced to complete within 3-4 hours per protocol`
    }
  },
  {
    id: 'proc-ng-tube',
    title: 'Nasogastric (NG) / Dobhoff Tube Placement',
    category: 'procedure',
    subcategory: 'Gastrointestinal',
    badge: 'X-Ray Verified',
    tags: ['NG tube', 'Dobhoff', 'enteral', 'decompression', 'gastric', 'KUB'],
    description: 'Insertion of nasogastric tube, measurement, patient swallowing assist, gastric aspirate pH check, and X-ray verification order.',
    variables: [
      {
        key: 'tube_type',
        label: 'Tube Size & Type',
        defaultValue: '16 Fr Salem Sump NG Tube',
        options: ['16 Fr Salem Sump NG Tube', '14 Fr Salem Sump NG Tube', '18 Fr Salem Sump NG Tube', '10 Fr Dobhoff Enteral Feeding Tube with guidewire']
      },
      {
        key: 'measurement',
        label: 'NEX Measurement',
        defaultValue: '55 cm (Nose to Earlobe to Xiphoid process)',
        options: ['50 cm (Nose to Earlobe to Xiphoid)', '55 cm (Nose to Earlobe to Xiphoid process)', '60 cm (Nose to Earlobe to Xiphoid process)']
      },
      {
        key: 'naris',
        label: 'Naris Selected',
        defaultValue: 'Right naris (patent, without obstruction or septal deviation)',
        options: ['Right naris (patent, without obstruction or septal deviation)', 'Left naris (patent, unobstructed)']
      },
      {
        key: 'aspirate',
        label: 'Gastric Aspirate pH',
        defaultValue: 'Gastric contents aspirated (greenish-brown fluid, pH 3.5 on indicator strip)',
        options: [
          'Gastric contents aspirated (greenish-brown fluid, pH 3.5 on indicator strip)',
          'Gastric aspirate obtained (cloudy gastric juice, pH 4.0)',
          'No initial aspirate; abdominal radiograph ordered to confirm placement'
        ]
      },
      {
        key: 'indication',
        label: 'Clinical Purpose',
        defaultValue: 'Connected to low intermittent wall suction (40-60 mmHg) for gastric decompression',
        options: [
          'Connected to low intermittent wall suction (40-60 mmHg) for gastric decompression',
          'Capped and clamped pending portable KUB X-ray confirmation for enteral feeding',
          'Connected to gravity drainage bag'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Nasogastric Tube Placement.
Indication confirmed with provider order. Patient positioned in high Fowler's position (90 degrees). NEX distance measured from nose to earlobe to xiphoid process and marked at [NEX Measurement]. Selected [Naris Selected]. Catheter tip lubricated with water-soluble lubricant. Tube gently inserted through naris. As tube passed nasopharynx, patient instructed to flex neck forward and swallow water sips through a straw. Tube advanced smoothly with swallowing to marked distance without coughing, cyanosis, or respiratory resistance. Tube secured to nose with hypoallergenic securement device. Placement assessed: [Gastric Aspirate pH]. Air vent blue pigtail kept above stomach level. [Clinical Purpose]. Portable abdominal X-ray ordered for definitive confirmation prior to any enteral administration. Patient tolerated procedure well.`,
      fdar: `Focus: Nasogastric Tube Insertion
D (Data): Provider order for NG tube placement reviewed. Patient conscious, seated upright in high Fowler's. Nostril patency assessed.
A (Action): Measured NEX length: [NEX Measurement]. Water-soluble gel applied. [Tube Size & Type] inserted via [Naris Selected] with sips of water. Secured to nose and pinned to gown with slack. Checked aspirate: [Gastric Aspirate pH]. [Clinical Purpose]. X-ray requisition placed.
R (Response): Patient experienced expected gagging during passage, resolved once tube seated. SpO2 remained >96% RA. No respiratory distress. Tube draining appropriately.`,
      soap: `S (Subjective): Patient states feeling slight throat irritation but acknowledges procedure was tolerable and relief from nausea is beginning.
O (Objective): [Tube Size & Type] inserted via [Naris Selected] to [NEX Measurement]. [Gastric Aspirate pH]. [Clinical Purpose]. No coughing, choking, or dyspnea during or post placement.
A (Assessment): NG tube placed successfully in stomach without respiratory compromise.
P (Plan): Confirm placement via abdominal KUB X-ray before administering meds or nutrition. Check tape security Q shift. Provide frequent oral and nasal hygiene.`,
      checklist: `• Procedure: NG Tube Insertion
• Tube/Size: [Tube Size & Type]
• Site/Depth: [Naris Selected] to [NEX Measurement]
• Aspirate & pH: [Gastric Aspirate pH]
• Suction / Purpose: [Clinical Purpose]
• Safety: No respiratory compromise; X-ray ordered for definitive check`
    }
  },
  {
    id: 'proc-wound-vac',
    title: 'Wound VAC (Negative Pressure) Dressing Change',
    category: 'procedure',
    subcategory: 'Wound Care',
    badge: 'Specialized',
    tags: ['wound vac', 'wound care', 'negative pressure', 'foam', 'sterile dressing'],
    description: 'Negative pressure wound therapy dressing removal, wound measurement, foam packing, airtight drape seal, and suction verification.',
    variables: [
      {
        key: 'wound_site',
        label: 'Wound Location',
        defaultValue: 'Sacral stage 4 pressure injury',
        options: ['Sacral stage 4 pressure injury', 'Left lower extremity surgical dehiscence', 'Abdominal midline incision', 'Right heel ulceration']
      },
      {
        key: 'measurement',
        label: 'Wound Measurements',
        defaultValue: 'Length: 4.5 cm, Width: 3.2 cm, Depth: 1.8 cm; no undermining or tunneling',
        options: [
          'Length: 4.5 cm, Width: 3.2 cm, Depth: 1.8 cm; no undermining or tunneling',
          'Length: 6.0 cm, Width: 4.0 cm, Depth: 2.5 cm; 1 cm tunneling at 12 o\'clock',
          'Length: 3.0 cm, Width: 2.0 cm, Depth: 1.0 cm; clean granulating bed'
        ]
      },
      {
        key: 'wound_bed',
        label: 'Wound Bed Description',
        defaultValue: '85% beefy red healthy granulation tissue, 15% pale slough, minimal serosanguinous exudate',
        options: [
          '85% beefy red healthy granulation tissue, 15% pale slough, minimal serosanguinous exudate',
          '100% viable pink/red granulation tissue with smooth wound edges',
          '70% red granulation, 30% yellow slough at base; periwound intact'
        ]
      },
      {
        key: 'settings',
        label: 'VAC Therapy Settings',
        defaultValue: 'Continuous negative pressure at -125 mmHg',
        options: [
          'Continuous negative pressure at -125 mmHg',
          'Continuous negative pressure at -100 mmHg',
          'Intermittent negative pressure at -125 mmHg'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Negative Pressure Wound Therapy (Wound VAC) Dressing Change.
Pre-medicated with prescribed analgesic 30 minutes prior to procedure. Old VAC dressing removed with adhesive remover; black foam count removed: 1 piece. Wound irrigated with copious sterile 0.9% normal saline. Wound inspected and measured: [Wound Location]. [Wound Measurements]. Wound bed: [Wound Bed Description]. Periwound skin cleansed, dried, and skin prep barrier film applied. Sterile black GranuFoam cut to wound dimensions (1 piece placed, no contact with intact peri-skin). Transparent occlusive drape applied with 3-5 cm border on intact skin. SENSATRAC pad applied over small cut aperture. VAC unit connected and set to [VAC Therapy Settings]. Unit engaged; foam collapsed firmly into wound bed creating airtight seal without audible leaks or alarms. Dressing labeled with date, time, and foam count (1). Patient tolerated dressing change well.`,
      fdar: `Focus: Wound VAC Dressing Change / Negative Pressure Therapy
D (Data): Order for Wound VAC dressing change on [Wound Location]. Patient reported pre-procedure pain score 2/10 following analgesia.
A (Action): Old dressing and 1 piece of foam removed. Cleansed with sterile saline. Assessed: [Wound Measurements]. Bed: [Wound Bed Description]. Periwound protected with barrier film. 1 piece sterile foam fitted inside wound margins. Sealed with transparent drape. [VAC Therapy Settings] initiated.
R (Response): Airtight seal confirmed immediately; foam compressed into wrinkle-free seal. Canister draining minimal serosanguinous fluid. Patient tolerated well; post-procedure pain 2/10.`,
      soap: `S (Subjective): Patient reports minimal discomfort during dressing change following scheduled pain medication.
O (Objective): Wound VAC dressing changed on [Wound Location]. [Wound Measurements]. [Wound Bed Description]. Periwound skin intact without maceration or erythema. 1 foam piece placed, drape sealed airtight. Machine set to [VAC Therapy Settings]; seal intact with zero leaks.
A (Assessment): Wound healing progressing with healthy granulation tissue. Negative pressure therapy effectively maintained.
P (Plan): Maintain continuous negative pressure. Check canister volume and seal integrity Q shift. Next scheduled dressing change in 48-72 hours per wound protocol.`,
      checklist: `• Procedure: Wound VAC Dressing Change
• Location: [Wound Location]
• Dimensions: [Wound Measurements]
• Wound Bed: [Wound Bed Description]
• Foam Count: 1 removed / 1 placed
• Therapy: [VAC Therapy Settings]
• Seal: Airtight seal verified, no leaks or alarms`
    }
  },
  {
    id: 'proc-trach-care',
    title: 'Tracheostomy Care & Suctioning',
    category: 'procedure',
    subcategory: 'Respiratory',
    badge: 'Sterile / Airway',
    tags: ['trach', 'suction', 'respiratory', 'airway', 'inner cannula', 'sterile'],
    description: 'In-line / sterile open suctioning, inner cannula replacement or cleaning, stoma inspection, and trach tie change.',
    variables: [
      {
        key: 'trach_size',
        label: 'Trach Type & Size',
        defaultValue: 'Shiley #6 cuffed tracheostomy tube',
        options: ['Shiley #6 cuffed tracheostomy tube', 'Shiley #8 cuffed tracheostomy tube', 'Bivona #6 tight-to-shaft tracheostomy tube', 'Jackson #6 uncuffed metal tube']
      },
      {
        key: 'secretions',
        label: 'Secretions Aspirated',
        defaultValue: 'Moderate amount of thick, whitish-clear secretions retrieved on 2 passes',
        options: [
          'Moderate amount of thick, whitish-clear secretions retrieved on 2 passes',
          'Copious thick yellow-green secretions removed; specimen sent for culture',
          'Small amount of thin clear secretions aspirated smoothly'
        ]
      },
      {
        key: 'stoma',
        label: 'Stoma Condition',
        defaultValue: 'Stoma clean, pink, dry, intact without redness, swelling, skin breakdown, or foul odor',
        options: [
          'Stoma clean, pink, dry, intact without redness, swelling, skin breakdown, or foul odor',
          'Stoma slightly hyperemic at inferior edge; periwound barrier cream applied; no purulence'
        ]
      },
      {
        key: 'tie_security',
        label: 'Trach Tie Security',
        defaultValue: 'Velcro trach collar replaced; security verified allowing 1-finger snug fit between tie and neck',
        options: [
          'Velcro trach collar replaced; security verified allowing 1-finger snug fit between tie and neck',
          'Ties secured; two fingers fit snugly, tube stabilized during change'
        ]
      }
    ],
    formats: {
      narrative: `Procedure: Tracheostomy Care and Suctioning.
Hyperoxygenated with 100% O2 for 2 minutes prior to suctioning. Tracheostomy suctioned using sterile catheter technique (suction pressure set at 100-120 mmHg). Catheter inserted without suction to carinal resistance, then withdrawn 1 cm and intermittent suction applied while rotating catheter for <10 seconds. [Secretions Aspirated]. Disposable inner cannula removed and replaced with new sterile [Trach Type & Size] inner cannula locked in position. Old pre-cut trach dressing removed. Stoma and neck cleansed with sterile saline and dried thoroughly: [Stoma Condition]. New sterile split-gauze drain sponge placed beneath flange. [Trach Tie Security]. Post-procedure breath sounds auscultated: bilateral aeration improved, rhonchi cleared. SpO2 99% on prescribed collar settings. Patient tolerated procedure well.`,
      fdar: `Focus: Tracheostomy Airway Maintenance & Stoma Care
D (Data): Coarse rhonchi audible on auscultation. Patient coughing with secretions pooling in trach tube. SpO2 94%.
A (Action): Pre-oxygenated with 100% O2. Suctioned trach tube x 2 passes: [Secretions Aspirated]. Replaced disposable inner cannula with new sterile cannula. Cleaned peristomal skin with sterile saline. [Stoma Condition]. Applied new pre-cut drain sponge. [Trach Tie Security].
R (Response): Patient breathing comfortably, WOB decreased. Lungs CTA bilaterally. SpO2 improved to 98%.`,
      soap: `S (Subjective): Patient non-verbal due to cuffed trach; nodded "yes" when asked if breathing felt easier post-suctioning.
O (Objective): [Trach Type & Size]. Suctioned x 2 passes with [Secretions Aspirated]. Clean new sterile inner cannula locked in place. [Stoma Condition]. Split trach pad replaced. [Trach Tie Security]. Post-suction breath sounds clear to bilateral bases, SpO2 99%.
A (Assessment): Patent airway restored; stoma clean without infection or breakdown.
P (Plan): Suction PRN. Maintain humidified tracheostomy collar. Perform stoma care and replace inner cannula every shift and PRN.`,
      checklist: `• Procedure: Tracheostomy Care & Suction
• Tube: [Trach Type & Size]
• Suction Findings: [Secretions Aspirated]
• Cannula: Replaced with new sterile inner cannula locked
• Stoma: [Stoma Condition]
• Ties: [Trach Tie Security]
• Breath Sounds: Clearer bilaterally; SpO2 stable`
    }
  },

  // ==========================================
  // ROUTINE ASSESSMENTS
  // ==========================================
  {
    id: 'rout-shift-assessment',
    title: 'Comprehensive Adult Shift Assessment',
    category: 'routine',
    subcategory: 'General Assessment',
    badge: 'Core Routine',
    tags: ['shift assessment', 'head to toe', 'routine', 'systems', 'baseline'],
    description: 'Complete systemic head-to-toe nursing assessment covering Neuro, Cardiac, Resp, GI, GU, Musculoskeletal, and Skin.',
    variables: [
      {
        key: 'neuro',
        label: 'Neurological Status',
        defaultValue: 'Alert and oriented x 4. PERRLA 3mm brisk. Speech clear and fluent. Moves all extremities with 5/5 symmetric strength.',
        options: [
          'Alert and oriented x 4. PERRLA 3mm brisk. Speech clear and fluent. Moves all extremities with 5/5 symmetric strength.',
          'Alert and oriented x 3 (person, place, time; confused to situation). Follows commands. Pupils equal and reactive.',
          'Drowsy but easily rousable to voice. Oriented x 4. Cranial nerves intact.'
        ]
      },
      {
        key: 'resp',
        label: 'Respiratory Status',
        defaultValue: 'Lungs clear to auscultation bilaterally in all fields. Non-labored chest expansion. SpO2 98% on room air.',
        options: [
          'Lungs clear to auscultation bilaterally in all fields. Non-labored chest expansion. SpO2 98% on room air.',
          'Lungs with fine crackles at bilateral bases, clearing with cough. SpO2 96% on 2L NC.',
          'Diminished breath sounds at right base; no wheezing or stridor. SpO2 95% on room air.'
        ]
      },
      {
        key: 'cardiac',
        label: 'Cardiovascular Status',
        defaultValue: 'Regular rate and rhythm (RRR). S1/S2 audible, no murmurs, rubs, or gallops. Radial and pedal pulses 2+ bilaterally. Cap refill <2 seconds. No peripheral edema.',
        options: [
          'Regular rate and rhythm (RRR). S1/S2 audible, no murmurs, rubs, or gallops. Radial and pedal pulses 2+ bilaterally. Cap refill <2 seconds. No peripheral edema.',
          'Sinus rhythm on telemetry with occasional PVCs. Heart sounds distinct. 1+ pitting pretibial edema bilaterally.',
          'Atrial fibrillation with controlled ventricular rate (70-85 bpm). Peripheral pulses palpable.'
        ]
      },
      {
        key: 'gi_gu',
        label: 'GI / GU Status',
        defaultValue: 'Abdomen soft, non-distended, non-tender to light palpation. Active normoactive bowel sounds in all 4 quadrants. Tolerating regular diet. Voiding spontaneously clear yellow urine without dysuria.',
        options: [
          'Abdomen soft, non-distended, non-tender to light palpation. Active normoactive bowel sounds in all 4 quadrants. Tolerating regular diet. Voiding spontaneously clear yellow urine without dysuria.',
          'Abdomen slightly firm, non-tender, hypoactive bowel sounds x 4. Passing flatus. Voiding via Foley catheter (clear amber urine).',
          'Abdomen soft, mild midline tenderness near incision. Bowel sounds present. NPO with IVF infusing.'
        ]
      },
      {
        key: 'skin',
        label: 'Skin & Integumentary',
        defaultValue: 'Skin warm, pink, dry, and intact throughout. Braden score 19 (low risk). No stageable pressure injuries. Universal fall precautions in place.',
        options: [
          'Skin warm, pink, dry, and intact throughout. Braden score 19 (low risk). No stageable pressure injuries. Universal fall precautions in place.',
          'Skin intact except for surgical incision site (clean, dry, edges approximated). Braden score 16.',
          'Skin thin and fragile. Stage 1 non-blanchable erythema on coccyx; barrier cream applied and Q2H turn protocol initiated. Braden 14.'
        ]
      }
    ],
    formats: {
      narrative: `Shift Assessment Note:
Patient received at change of shift resting in bed in no acute distress.
• NEURO: [Neurological Status]
• RESP: [Respiratory Status]
• CARDIAC: [Cardiovascular Status]
• GI/GU: [GI / GU Status]
• SKIN/SAFETY: [Skin & Integumentary]
Pain reported as 0/10 at time of assessment. Bed in lowest locked position, call light within easy grasp, environment clean and free of tripping hazards. Plan of care discussed with patient.`,
      fdar: `Focus: Comprehensive Shift Assessment
D (Data): Patient awake, calm, and cooperative. Vitals stable.
Neuro: [Neurological Status].
Cardiopulmonary: [Cardiovascular Status] [Respiratory Status].
Abdominal/Urinary: [GI / GU Status].
Integumentary: [Skin & Integumentary].
A (Action): Performed complete head-to-toe examination. Medication schedule reviewed. Fall and pressure injury prevention strategies maintained. Hourly rounding established.
R (Response): Patient states feeling comfortable, denies new pain or acute distress. Needs met.`,
      soap: `S (Subjective): Patient states: "I feel good this morning, slept well through the night." Denies pain, dizziness, nausea, or shortness of breath.
O (Objective): Vitals stable.
• Neuro: [Neurological Status]
• Cardiac: [Cardiovascular Status]
• Resp: [Respiratory Status]
• GI/GU: [GI / GU Status]
• Skin: [Skin & Integumentary]
A (Assessment): Stable adult inpatient maintaining baseline clinical status across all bodily systems.
P (Plan): Continue current inpatient care plan, scheduled medications, and therapy consults. Hourly safety rounding and assistance with ambulation.`,
      checklist: `• Neuro: [Neurological Status]
• Resp: [Respiratory Status]
• Cardiac: [Cardiovascular Status]
• GI/GU: [GI / GU Status]
• Skin/Safety: [Skin & Integumentary]
• Pain: 0/10 at assessment
• Environment: Bed locked/lowered, call bell in hand, 2 side rails up`
    }
  },
  {
    id: 'rout-neuro-focused',
    title: 'Focused Neurological Assessment (Neuro Checks)',
    category: 'routine',
    subcategory: 'Neuro',
    badge: 'Neuro Checks',
    tags: ['neuro', 'GCS', 'pupils', 'stroke', 'head injury', 'cranial nerves'],
    description: 'Detailed neurological assessment including Glasgow Coma Scale (GCS), pupillary response, motor strength, and speech.',
    variables: [
      {
        key: 'gcs',
        label: 'Glasgow Coma Scale',
        defaultValue: 'GCS 15 (Eye: 4, Verbal: 5, Motor: 6)',
        options: [
          'GCS 15 (Eye: 4, Verbal: 5, Motor: 6)',
          'GCS 14 (Eye: 4, Verbal: 4, Motor: 6)',
          'GCS 13 (Eye: 3, Verbal: 4, Motor: 6)',
          'GCS 10 (Eye: 3, Verbal: 2, Motor: 5)'
        ]
      },
      {
        key: 'pupils',
        label: 'Pupillary Assessment',
        defaultValue: 'Pupils equal, round, and reactive to light (PERRLA): 3mm briskly constricting to 2mm bilaterally',
        options: [
          'Pupils equal, round, and reactive to light (PERRLA): 3mm briskly constricting to 2mm bilaterally',
          'Pupils 4mm equal, sluggish bilaterally',
          'Right pupil 3mm brisk; Left pupil 5mm sluggishly reactive'
        ]
      },
      {
        key: 'motor',
        label: 'Motor Strength & Symmetry',
        defaultValue: 'Upper extremities 5/5 bilateral hand grasps. Lower extremities 5/5 bilateral dorsi/plantar flexion. No pronator drift.',
        options: [
          'Upper extremities 5/5 bilateral hand grasps. Lower extremities 5/5 bilateral dorsi/plantar flexion. No pronator drift.',
          'Right upper and lower 5/5; Left upper extremity 3/5 with pronator drift; Left lower extremity 4/5.',
          'Moves all 4 extremities spontaneously against full resistance without tremors or ataxia.'
        ]
      },
      {
        key: 'facial',
        label: 'Facial Symmetry & Speech',
        defaultValue: 'Facial movements symmetric; smiles and shows teeth without asymmetry. Speech clear without dysarthria or aphasia.',
        options: [
          'Facial movements symmetric; smiles and shows teeth without asymmetry. Speech clear without dysarthria or aphasia.',
          'Mild left facial droop noted on smile; speech slightly slurred but intelligible.',
          'Speech clear, comprehension intact; follows complex multi-step commands.'
        ]
      }
    ],
    formats: {
      narrative: `Focused Neurological Assessment Note:
Scheduled neuro check performed. Patient alert, responsive, and oriented to person, place, time, and situation. [Glasgow Coma Scale]. [Pupillary Assessment]. Extraocular movements intact without nystagmus. [Facial Symmetry & Speech]. [Motor Strength & Symmetry]. Sensation to light touch intact bilaterally in all dermatomes. Gait/balance steady during assisted transfer. Denies headache, visual changes, vertigo, numbness, or tingling. Findings stable from baseline.`,
      fdar: `Focus: Neurological Assessment / Q2H Neuro Checks
D (Data): Scheduled neuro evaluation. Patient awake and responsive. Vitals: BP stable, within designated neuro parameters.
A (Action): Evaluated LOC, cognitive function, cranial nerves, motor/sensory function:
• GCS: [Glasgow Coma Scale]
• Eyes: [Pupillary Assessment]
• Face/Speech: [Facial Symmetry & Speech]
• Motor: [Motor Strength & Symmetry]
R (Response): Patient demonstrated intact, symmetric responses consistent with baseline. No focal deficits, seizure activity, or acute deterioration noted.`,
      soap: `S (Subjective): Patient states: "I feel clear-headed today." Denies headache, dizziness, nausea, or visual changes.
O (Objective): [Glasgow Coma Scale]. [Pupillary Assessment]. [Facial Symmetry & Speech]. [Motor Strength & Symmetry]. Denies sensory loss.
A (Assessment): Neurologically stable; baseline function preserved without acute neuro compromise.
P (Plan): Continue serial neuro assessments per protocol. Notify provider immediately if GCS decreases by >=2 points or new focal neurological deficits emerge.`,
      checklist: `• GCS: [Glasgow Coma Scale]
• Pupils: [Pupillary Assessment]
• Cranial/Face: [Facial Symmetry & Speech]
• Motor Exam: [Motor Strength & Symmetry]
• Changes: Stable from prior shift; no acute focal deficit noted`
    }
  },
  {
    id: 'rout-hourly-rounding',
    title: 'Hourly Safety & Rounding Note (4 P\'s)',
    category: 'routine',
    subcategory: 'Safety',
    badge: 'Safety',
    tags: ['hourly rounding', 'safety', '4 Ps', 'fall prevention', 'comfort'],
    description: 'Documentation of routine hourly patient rounding addressing Pain, Position, Potty, and Possessions.',
    variables: [
      {
        key: 'pain',
        label: 'Pain Assessment',
        defaultValue: 'Pain assessed; patient reports 0/10 comfort score. No analgesia requested.',
        options: [
          'Pain assessed; patient reports 0/10 comfort score. No analgesia requested.',
          'Pain reported as 4/10 aching in surgical site; prescribed PRN oral analgesic offered and administered.',
          'Patient resting comfortably without non-verbal cues of distress.'
        ]
      },
      {
        key: 'position',
        label: 'Positioning',
        defaultValue: 'Repositioned to semi-Fowler\'s with pillows supporting back and heels offloaded.',
        options: [
          'Repositioned to semi-Fowler\'s with pillows supporting back and heels offloaded.',
          'Turned to left lateral position; pillows supporting lumbar and knees.',
          'Patient comfortably seated in bedside armchair with non-skid socks on.'
        ]
      },
      {
        key: 'potty',
        label: 'Toileting / Potty',
        defaultValue: 'Assisted to bathroom; voided 250 mL clear urine. Perineal care provided.',
        options: [
          'Assisted to bathroom; voided 250 mL clear urine. Perineal care provided.',
          'Urinal offered and emptied (300 mL amber urine).',
          'Incontinent care provided; skin barrier cream reapplied; dry linen placed.',
          'Toileting needs queried; patient denied need to void at this time.'
        ]
      },
      {
        key: 'possessions',
        label: 'Possessions & Safety',
        defaultValue: 'Call bell placed directly in dominant hand. Water pitcher, phone, and eyeglasses within easy reach on bedside table.',
        options: [
          'Call bell placed directly in dominant hand. Water pitcher, phone, and eyeglasses within easy reach on bedside table.',
          'Bedside table moved within direct reach; call light cord secured to pillow.',
          'Environment uncluttered, floor dry and clear of cords.'
        ]
      }
    ],
    formats: {
      narrative: `Hourly Rounding & Safety Assessment:
Routine hourly patient rounding conducted. The 4 P\'s evaluated:
• PAIN: [Pain Assessment]
• POSITION: [Positioning]
• POTTY: [Toileting / Potty]
• POSSESSIONS: [Possessions & Safety]
Environment verified: bed in lowest locked position, upper side rails up x 2, floor dry and clear of obstacles. Patient reminded to ring call light before getting out of bed. Verbalized understanding.`,
      fdar: `Focus: Hourly Safety Rounding (4 P\'s)
D (Data): Routine safety observation. Patient awake, calm, and resting in room.
A (Action): Completed 4 P\'s assessment: [Pain Assessment] [Positioning] [Toileting / Potty] [Possessions & Safety]. Bed lowered and locked.
R (Response): Patient states comfortable and feels safe. Reiterated commitment to call for assistance before standing.`,
      soap: `S (Subjective): Patient states: "I have everything I need right now, thank you for checking on me."
O (Objective): [Pain Assessment]. [Positioning]. [Toileting / Potty]. [Possessions & Safety]. Bed low and locked.
A (Assessment): Patient comfort and safety maintained; zero fall hazards identified.
P (Plan): Continue hourly purposeful rounding throughout shift.`,
      checklist: `• Pain: [Pain Assessment]
• Position: [Positioning]
• Potty: [Toileting / Potty]
• Possessions: [Possessions & Safety]
• Bed Status: Lowest locked position, 2 rails up, call bell within reach`
    }
  },

  // ==========================================
  // SITUATIONAL & CRITICAL INCIDENTS
  // ==========================================
  {
    id: 'sit-fall-incident',
    title: 'Inpatient Fall Incident & Post-Fall Assessment',
    category: 'situational',
    subcategory: 'Incident',
    badge: 'Critical Incident',
    tags: ['fall', 'incident', 'post fall', 'neuro checks', 'physician notification', 'safety event'],
    description: 'Post-fall immediate assessment, vital signs, injury inspection, ROM checks, provider notification, and safe transfer.',
    variables: [
      {
        key: 'witnessed',
        label: 'Fall Type',
        defaultValue: 'Unwitnessed fall found seated on floor adjacent to bed',
        options: [
          'Unwitnessed fall found seated on floor adjacent to bed',
          'Witnessed fall while attempting unassisted transfer from bed to commode',
          'Assisted fall (eased to floor by nursing staff during dizzy spell)'
        ]
      },
      {
        key: 'injury',
        label: 'Physical Exam & Injury Assessment',
        defaultValue: 'No visible head strike, laceration, hematoma, deformity, or bleeding. Full passive and active ROM intact in all extremities without pain.',
        options: [
          'No visible head strike, laceration, hematoma, deformity, or bleeding. Full passive and active ROM intact in all extremities without pain.',
          'Small 1 cm superficial skin tear on left forearm; cleansed and steri-stripped. No head trauma or joint deformity.',
          'Erythema over right greater trochanter; denies acute hip pain; leg lengths equal without external rotation.'
        ]
      },
      {
        key: 'vitals',
        label: 'Post-Fall Vitals',
        defaultValue: 'BP: 128/78, HR: 82, RR: 18, SpO2: 97% RA, Blood Glucose: 112 mg/dL',
        options: [
          'BP: 128/78, HR: 82, RR: 18, SpO2: 97% RA, Blood Glucose: 112 mg/dL',
          'BP: 98/62 (orthostatic drop from baseline), HR: 96, RR: 20, SpO2: 98% RA'
        ]
      },
      {
        key: 'md_notification',
        label: 'Provider Notification',
        defaultValue: 'Attending physician Dr. [Provider Name] notified at [Time]. Order received for post-fall neuro checks Q1H x 4 and portable pelvic/hip X-ray.',
        options: [
          'Attending physician Dr. [Provider Name] notified at [Time]. Order received for post-fall neuro checks Q1H x 4 and portable pelvic/hip X-ray.',
          'Hospitalist Dr. [Provider Name] evaluated patient at bedside; confirmed no acute trauma; orders updated.',
          'On-call resident Dr. [Provider Name] notified at [Time]; no new diagnostic orders needed.'
        ]
      }
    ],
    formats: {
      narrative: `Clinical Incident Note: Patient Fall.
At [Time], nurse alerted to patient room: [Fall Type]. Immediate primary survey performed: airway patent, breathing unlabored, pulses present. Patient responsive, oriented x 4, denied hitting head or loss of consciousness. Cervical spine immobilized pending exam. Complete body inspection conducted: [Physical Exam & Injury Assessment]. Immediate vital signs: [Post-Fall Vitals]. Patient safely assisted back into bed using mechanical lift / slide board with 2 staff members. [Provider Notification]. Post-fall neurological checks initiated. Family notified. Fall risk score updated to high risk; yellow fall prevention wristband verified, bed alarm activated. Incident report filed per hospital quality protocol.`,
      fdar: `Focus: Inpatient Fall Incident & Post-Fall Management
D (Data): [Fall Type]. Patient found on floor. Denies LOC or hitting head. Post-fall vitals: [Post-Fall Vitals].
A (Action): Immediate physical examination completed: [Physical Exam & Injury Assessment]. Neuro checks initiated. Patient transferred safely to bed with assistance. [Provider Notification]. Bed alarm activated, non-skid socks verified, call bell placed in hand. Hospital safety event report submitted.
R (Response): Patient resting comfortably in bed. Denies acute pain or headache. Follow-up neuro checks remain stable and unchanged from baseline.`,
      soap: `S (Subjective): Patient states: "I tried to get up to use the bathroom without calling because I didn't want to bother anyone. My legs just gave out." Denies pain or striking head.
O (Objective): [Fall Type]. Post-fall vitals: [Post-Fall Vitals]. Physical assessment: [Physical Exam & Injury Assessment]. Pupils equal and reactive. Neck non-tender. Assisted to bed without difficulty.
A (Assessment): Inpatient fall event; no acute physical trauma or musculoskeletal deformity identified on primary exam.
P (Plan): [Provider Notification]. Serial post-fall neuro checks Q1H x 4, then Q4H x 24h. Keep bed alarm armed continuously. 1-to-1 assistance required for all mobility.`,
      checklist: `• Event: [Fall Type] at [Time]
• Assessment: [Physical Exam & Injury Assessment]
• Post-Fall Vitals: [Post-Fall Vitals]
• MD Communication: [Provider Notification]
• Transfers: Safely returned to bed via lift/assist
• Interventions: Bed alarm armed, fall bracelet on, neuro checks initiated, incident report filed`
    }
  },
  {
    id: 'sit-rapid-response',
    title: 'Rapid Response Team (RRT) Activation',
    category: 'situational',
    subcategory: 'Emergency',
    badge: 'High Acuity',
    tags: ['rapid response', 'RRT', 'code', 'deterioration', 'critical', 'respiratory distress'],
    description: 'Documentation of clinical deterioration, trigger criteria, RRT arrival, interventions, medications, and disposition.',
    variables: [
      {
        key: 'trigger',
        label: 'RRT Trigger Reason',
        defaultValue: 'Acute respiratory distress with SpO2 drop to 84% on RA, tachypnea (RR 32), and accessory muscle use',
        options: [
          'Acute respiratory distress with SpO2 drop to 84% on RA, tachypnea (RR 32), and accessory muscle use',
          'Acute hypotension with SBP dropping to 78/46 mmHg, unresponsive to initial fluid bolus',
          'Sudden altered mental status with acute drop in GCS from 15 to 11',
          'Sustained supraventricular tachycardia (HR 160-175 bpm) with dizziness and chest pressure'
        ]
      },
      {
        key: 'interventions',
        label: 'Bedside Interventions Taken',
        defaultValue: 'Placed on 15L Non-Rebreather mask, head of bed elevated to 90 degrees, stat ABG drawn, 12-lead ECG obtained',
        options: [
          'Placed on 15L Non-Rebreather mask, head of bed elevated to 90 degrees, stat ABG drawn, 12-lead ECG obtained',
          '500 mL normal saline IV pressure bolus administered, 2nd 18G PIV placed, stat labs and troponin drawn',
          'Airway suctioned, DuoNeb nebulizer treatment administered, portable chest X-ray performed bedside'
        ]
      },
      {
        key: 'team_response',
        label: 'RRT Team & Provider Arrival',
        defaultValue: 'Rapid Response Team (ICU RN, Respiratory Therapist, Hospitalist Dr. [Provider Name]) arrived at bedside within 3 minutes',
        options: [
          'Rapid Response Team (ICU RN, Respiratory Therapist, Hospitalist Dr. [Provider Name]) arrived at bedside within 3 minutes',
          'RRT and Critical Care Fellow arrived immediately; assumed bedside management'
        ]
      },
      {
        key: 'disposition',
        label: 'Event Resolution / Disposition',
        defaultValue: 'Patient stabilized on high-flow nasal cannula (40L / 60% FiO2); SpO2 improved to 95%; order placed for transfer to Medical ICU',
        options: [
          'Patient stabilized on high-flow nasal cannula (40L / 60% FiO2); SpO2 improved to 95%; order placed for transfer to Medical ICU',
          'Hemodynamics improved post-bolus (BP 108/65); patient to remain on Step-Down unit with continuous telemetry',
          'Patient transferred to ICU via transport team for continued hemodynamic vasopressor support'
        ]
      }
    ],
    formats: {
      narrative: `Rapid Response Event Note:
At [Time], acute clinical deterioration identified: [RRT Trigger Reason]. Rapid Response Team activated via emergency call button. [RRT Team & Provider Arrival]. Immediate nursing actions: [Bedside Interventions Taken]. Team collaborated on bedside resuscitation. SBAR handoff provided to responding physician. [Event Resolution / Disposition]. Family updated on patient status and transfer plan. Event debriefed with primary care team.`,
      fdar: `Focus: Rapid Response Team Activation & Resuscitation
D (Data): [RRT Trigger Reason]. Pre-event vitals reviewed. Patient visibly distressed.
A (Action): RRT mobilized. [RRT Team & Provider Arrival]. Executed emergent orders: [Bedside Interventions Taken]. Serial vitals monitored Q5 min.
R (Response): [Event Resolution / Disposition]. Patient breathing more comfortably; vital signs stabilized prior to transport.`,
      soap: `S (Subjective): Patient non-verbal initially due to respiratory effort; subsequent to treatment whispered: "I can catch my breath now."
O (Objective): Trigger: [RRT Trigger Reason]. [RRT Team & Provider Arrival]. Interventions: [Bedside Interventions Taken]. Repeat vitals documented.
A (Assessment): Acute physiological decompensation stabilized with Rapid Response Team multidisciplinary intervention.
P (Plan): [Event Resolution / Disposition]. Prepare formal SBAR transfer chart for receiving unit.`,
      checklist: `• Activation Time: [Time]
• Trigger: [RRT Trigger Reason]
• Responders: [RRT Team & Provider Arrival]
• Actions Taken: [Bedside Interventions Taken]
• Outcome/Disposition: [Event Resolution / Disposition]
• Family Notification: Completed`
    }
  },
  {
    id: 'sit-critical-lab',
    title: 'Critical Lab Value Notification (SBAR)',
    category: 'situational',
    subcategory: 'Communication',
    badge: 'SBAR / Protocol',
    tags: ['critical lab', 'potassium', 'troponin', 'SBAR', 'physician notification', 'read-back'],
    description: 'Documentation of critical laboratory value receipt, lab read-back, provider notification, read-back of orders, and follow-up.',
    variables: [
      {
        key: 'lab_result',
        label: 'Critical Lab Value & Result',
        defaultValue: 'Serum Potassium (K+) = 6.4 mEq/L (Critical High; reference 3.5 - 5.0)',
        options: [
          'Serum Potassium (K+) = 6.4 mEq/L (Critical High; reference 3.5 - 5.0)',
          'Serum Sodium (Na+) = 118 mEq/L (Critical Low; reference 135 - 145)',
          'High-Sensitivity Troponin = 485 ng/L (Critical Elevation)',
          'Hemoglobin (Hgb) = 6.2 g/dL (Critical Low; reference 12.0 - 16.0)',
          'INR = 6.8 (Critical High on Warfarin therapy)'
        ]
      },
      {
        key: 'lab_caller',
        label: 'Lab Technologist & Read-Back',
        defaultValue: 'Received from Central Laboratory technologist [Tech Name]; result read back and confirmed verbatim at [Time]',
        options: [
          'Received from Central Laboratory technologist [Tech Name]; result read back and confirmed verbatim at [Time]',
          'Critical phone alert from Core Lab; verified with secondary RN and read back'
        ]
      },
      {
        key: 'provider',
        label: 'Provider Notified',
        defaultValue: 'Attending physician Dr. [Provider Name] notified at [Time + 5 min]',
        options: [
          'Attending physician Dr. [Provider Name] notified at [Time + 5 min]',
          'On-call resident Dr. [Provider Name] contacted via direct hospital phone at [Time + 5 min]',
          'Hospitalist Dr. [Provider Name] paged and returned call within 4 minutes'
        ]
      },
      {
        key: 'new_orders',
        label: 'Orders Received & Executed',
        defaultValue: 'STAT 12-lead ECG ordered, continuous cardiac monitoring initiated, and orders received for IV calcium gluconate 1g, regular insulin 10 units IV with D50 50 mL IV push. Orders read back and verified.',
        options: [
          'STAT 12-lead ECG ordered, continuous cardiac monitoring initiated, and orders received for IV calcium gluconate 1g, regular insulin 10 units IV with D50 50 mL IV push. Orders read back and verified.',
          'Hold anticoagulation; administer 10 mg oral Vitamin K; recheck INR in 6 hours. Orders confirmed and read back.',
          'Crossmatch 2 units PRBCs stat; initiate IV fluid bolus of 500 mL normal saline; repeat CBC in 4 hours. Orders read back.'
        ]
      }
    ],
    formats: {
      narrative: `Critical Laboratory Value Communication Note:
At [Time], critical lab alert received: [Critical Lab Value & Result]. [Lab Technologist & Read-Back]. Patient immediately assessed: alert, oriented, telemetry rhythm reviewed, vital signs stable. [Provider Notified]. Critical result communicated via SBAR format. [Orders Received & Executed]. Medications retrieved from Pyxis and administered as ordered. Patient will continue to be monitored closely.`,
      fdar: `Focus: Critical Laboratory Alert & Provider Notification
D (Data): Critical laboratory result reported: [Critical Lab Value & Result]. [Lab Technologist & Read-Back]. Baseline patient vitals and rhythm assessed.
A (Action): [Provider Notified]. Reported critical data and current patient status. [Orders Received & Executed].
R (Response): Patient resting comfortably, denies acute distress. Telemetry monitored continuously. Repeat testing scheduled per orders.`,
      soap: `S (Subjective): Patient informed of lab result and denies acute symptoms (palpitations, chest pain, numbness, or weakness).
O (Objective): Critical Result: [Critical Lab Value & Result]. [Lab Technologist & Read-Back]. Vitals and telemetry stable.
A (Assessment): Critical electrolyte/lab abnormality requiring immediate clinical intervention and monitoring.
P (Plan): [Provider Notified]. [Orders Received & Executed]. Repeat lab draw scheduled per provider orders.`,
      checklist: `• Critical Result: [Critical Lab Value & Result]
• Lab Verification: [Lab Technologist & Read-Back]
• Provider Notified: [Provider Notified]
• Orders: [Orders Received & Executed]
• Read-Back: Confirmed and documented per Joint Commission standards`
    }
  },
  {
    id: 'sit-ama-discharge',
    title: 'Patient Leaving Against Medical Advice (AMA)',
    category: 'situational',
    subcategory: 'Discharge',
    badge: 'Legal / Risk',
    tags: ['AMA', 'against medical advice', 'refusal', 'risk', 'capacity', 'elopement'],
    description: 'Documentation of patient decision to leave AMA, mental capacity evaluation, risks explained, provider conversation, and discharge belongings.',
    variables: [
      {
        key: 'reason',
        label: 'Patient Stated Reason',
        defaultValue: 'States: "I have to get home to take care of my dog and go to work tomorrow. I feel fine now."',
        options: [
          'States: "I have to get home to take care of my dog and go to work tomorrow. I feel fine now."',
          'States: "I do not want to stay in the hospital any longer. I want to leave right now."',
          'States dissatisfaction with wait times for testing and insists on leaving.'
        ]
      },
      {
        key: 'capacity',
        label: 'Mental Capacity Assessment',
        defaultValue: 'Alert, oriented x 4, speech fluent and coherent. Demonstrates decisional capacity to understand treatment risks.',
        options: [
          'Alert, oriented x 4, speech fluent and coherent. Demonstrates decisional capacity to understand treatment risks.',
          'Oriented to person, place, and time; logical thought process; no signs of acute intoxication or psychosis.'
        ]
      },
      {
        key: 'risks_explained',
        label: 'Risks Explained by MD & RN',
        defaultValue: 'Specific risks of premature departure explained in detail, including worsening infection, permanent disability, organ failure, and death.',
        options: [
          'Specific risks of premature departure explained in detail, including worsening infection, permanent disability, organ failure, and death.',
          'Potential complications of untreated condition discussed, including sepsis, stroke, readmission, and death.'
        ]
      },
      {
        key: 'form_signed',
        label: 'AMA Form Status',
        defaultValue: 'Patient reviewed and voluntarily signed official Hospital AMA Release Form witnessed by bedside RN.',
        options: [
          'Patient reviewed and voluntarily signed official Hospital AMA Release Form witnessed by bedside RN.',
          'Patient refused to sign AMA form; witnessed by two nurses ([RN 1 Name] and [RN 2 Name]); verbal refusal documented.'
        ]
      }
    ],
    formats: {
      narrative: `Discharge Against Medical Advice (AMA) Note:
At [Time], patient expressed intent to leave the hospital against medical advice. Stated reason: [Patient Stated Reason].
Assessment of decisional capacity: [Mental Capacity Assessment].
Attending physician Dr. [Provider Name] notified and discussed situation directly with patient at bedside. [Risks Explained by MD & RN]. Patient acknowledged understanding of stated risks and reiterated unwavering desire to leave. [AMA Form Status].
Peripheral IV catheter discontinued; catheter intact; pressure held with hemostasis achieved. All personal belongings, valuables, and clothing returned and verified with patient. Prescriptions for oral discharge medications offered and provided. Instructed that patient may return to the emergency department or hospital at any time if symptoms worsen or if they reconsider. Patient exited unit ambulatory in stable condition.`,
      fdar: `Focus: Discharge Against Medical Advice (AMA)
D (Data): Patient declared intention to terminate hospitalization prematurely. [Patient Stated Reason]. [Mental Capacity Assessment].
A (Action): Attending physician paged and evaluated patient. Thorough education provided regarding risks: [Risks Explained by MD & RN]. Alternatives to discharge explored. [AMA Form Status]. PIV safely discontinued. Belongings returned.
R (Response): Patient departed unit against medical advice. Expressed comprehension of instructions and door-open return policy.`,
      soap: `S (Subjective): [Patient Stated Reason]. Patient states: "I understand the risks you told me, including death, but I am still choosing to leave."
O (Objective): [Mental Capacity Assessment]. Attending MD at bedside. [Risks Explained by MD & RN]. [AMA Form Status]. PIV removed with intact tip, bandage dry.
A (Assessment): Patient with documented decision-making capacity electing to leave against medical advice.
P (Plan): Outpatient prescriptions and follow-up guidance provided. Reassured that hospital return is welcomed at any time without penalty.`,
      checklist: `• Reason: [Patient Stated Reason]
• Decisional Capacity: [Mental Capacity Assessment]
• Risks Explained: [Risks Explained by MD & RN]
• Form Status: [AMA Form Status]
• Lines Discontinued: PIV removed, hemostasis achieved
• Safety: Belongings returned, open door policy explained, patient escorted off unit`
    }
  },

  // ==========================================
  // TRANSITIONS OF CARE
  // ==========================================
  {
    id: 'trans-admission-note',
    title: 'Inpatient Admission Nursing Intake Note',
    category: 'transitions',
    subcategory: 'Intake',
    badge: 'Admission',
    tags: ['admission', 'intake', 'history', 'reconciliation', 'skin survey', 'allergies'],
    description: 'Comprehensive admission assessment, medication reconciliation check, allergy verification, skin survey, and safety orientation.',
    variables: [
      {
        key: 'admit_diagnosis',
        label: 'Admitting Diagnosis & Origin',
        defaultValue: 'Community-Acquired Pneumonia admitted from the Emergency Department',
        options: [
          'Community-Acquired Pneumonia admitted from the Emergency Department',
          'Acute Decompensated Heart Failure (NYHA Class III) from ED',
          'Diabetic Ketoacidosis (DKA) resolving from ICU step-down',
          'Elective total hip arthroplasty direct from PACU'
        ]
      },
      {
        key: 'allergies',
        label: 'Allergies Verified',
        defaultValue: 'No Known Drug Allergies (NKDA) verified with patient and pharmacy',
        options: [
          'No Known Drug Allergies (NKDA) verified with patient and pharmacy',
          'Penicillin (Anaphylaxis - hives and throat tightness)',
          'Sulfa drugs (Rash), Codeine (Nausea)'
        ]
      },
      {
        key: 'code_status',
        label: 'Code Status Confirmed',
        defaultValue: 'Full Code confirmed with patient',
        options: ['Full Code confirmed with patient', 'DNR / DNI confirmed with POLST on chart', 'Comfort Care / Palliative goals']
      },
      {
        key: 'skin_admit',
        label: 'Admission Skin Survey',
        defaultValue: 'Full body dual-RN skin inspection completed: skin intact, no hospital-acquired pressure injuries or unstageable wounds.',
        options: [
          'Full body dual-RN skin inspection completed: skin intact, no hospital-acquired pressure injuries or unstageable wounds.',
          'Dual RN skin check: Stage 2 pressure ulcer (1x1 cm) on sacrum present on admission (POA). Photo documented.',
          'Dry, intact skin; bilateral lower extremity venous stasis changes noted without open ulceration.'
        ]
      }
    ],
    formats: {
      narrative: `Inpatient Admission Nursing Assessment:
Patient received onto unit via stretcher accompanied by transport team. [Admitting Diagnosis & Origin].
Two patient identifiers verified; allergy band and hospital ID band intact. Allergies: [Allergies Verified]. [Code Status Confirmed].
Vital signs upon arrival: BP 126/78, HR 76, RR 18, SpO2 97% on room air, Temp 98.4°F.
Admission history, electronic medication reconciliation, and nursing database completed. [Admission Skin Survey]. Fall and Braden risk assessments scored.
Room orientation provided: demonstrated call light operation, TV remote, emergency bathroom cord, and visiting hours. Patient and family questions answered. Belongings inventoried and secured in closet.`,
      fdar: `Focus: Inpatient Admission & Initial Assessment
D (Data): [Admitting Diagnosis & Origin]. Patient alert, pleasant, oriented x 4. Vitals stable on arrival.
A (Action): Verified ID, [Allergies Verified], and [Code Status Confirmed]. Completed nursing admission database. [Admission Skin Survey]. Installed pressure-relieving mattress. Oriented patient to room and call bell system.
R (Response): Patient settled comfortably into room. Expressed satisfaction with admission process. Call light tested and functioning within reach.`,
      soap: `S (Subjective): Patient states: "I'm relieved to be in a quiet room upstairs." Reports pain 2/10. Confirms [Code Status Confirmed].
O (Objective): [Admitting Diagnosis & Origin]. Vitals stable. [Allergies Verified]. [Admission Skin Survey]. Braden score 18, Morse Fall score 35 (moderate risk).
A (Assessment): Adult patient successfully admitted to medical-surgical floor; initial assessment and safety baselines established.
P (Plan): Administer scheduled admission medications. Coordinate PT/OT consults per orders. Continue shift monitoring and hourly rounding.`,
      checklist: `• Diagnosis: [Admitting Diagnosis & Origin]
• Allergies: [Allergies Verified]
• Code Status: [Code Status Confirmed]
• Skin: [Admission Skin Survey]
• Vitals: Stable on unit arrival
• Safety: Call light in hand, bed locked in low position, room oriented`
    }
  },
  {
    id: 'trans-discharge-note',
    title: 'Discharge Summary & Patient Education Note',
    category: 'transitions',
    subcategory: 'Discharge',
    badge: 'Discharge',
    tags: ['discharge', 'education', 'teach back', 'prescriptions', 'home health', 'transport'],
    description: 'Final discharge assessment, reconciliation of discharge medications, written instructions, follow-up appointments, and safe escort.',
    variables: [
      {
        key: 'destination',
        label: 'Discharge Destination',
        defaultValue: 'Discharged to home with self-care and supportive family',
        options: [
          'Discharged to home with self-care and supportive family',
          'Discharged to Skilled Nursing Facility (SNF) via medical transport',
          'Discharged to home with Home Health Nursing and Physical Therapy orders'
        ]
      },
      {
        key: 'education',
        label: 'Teach-Back Education Topics',
        defaultValue: 'Medication administration, warning signs/red flags requiring immediate medical attention, activity restrictions, and wound care',
        options: [
          'Medication administration, warning signs/red flags requiring immediate medical attention, activity restrictions, and wound care',
          'Low sodium cardiac diet, daily weight logging, fluid restrictions, and diuretic timing',
          'Incentive spirometry, oral antibiotic completion, and deep breathing exercises'
        ]
      },
      {
        key: 'follow_up',
        label: 'Follow-Up Appointments',
        defaultValue: 'Primary Care Physician Dr. [Provider Name] in 5-7 days; appointment confirmed for [Date/Time]',
        options: [
          'Primary Care Physician Dr. [Provider Name] in 5-7 days; appointment confirmed for [Date/Time]',
          'Cardiology clinic follow-up in 2 weeks; requisition provided',
          'Surgeon post-op follow-up in 10-14 days for wound check'
        ]
      },
      {
        key: 'transport',
        label: 'Mode of Departure',
        defaultValue: 'Ambulatory via wheelchair escorted by RN to family vehicle at hospital main entrance',
        options: [
          'Ambulatory via wheelchair escorted by RN to family vehicle at hospital main entrance',
          'Departed ambulatory under own power accompanied by spouse',
          'Transferred via non-emergent ambulance stretcher service'
        ]
      }
    ],
    formats: {
      narrative: `Discharge Nursing Summary:
Patient prepared for discharge following attending physician order. [Destination].
Final vital signs recorded: BP 122/74, HR 72, RR 16, SpO2 98% RA, Temp 98.2°F.
Comprehensive discharge instructions reviewed with patient and family member. Education covered: [Teach-Back Education Topics]. Patient successfully demonstrated understanding using teach-back method.
Discharge medication reconciliation completed; hardcopy prescriptions and medication schedule provided. [Follow-Up Appointments].
All hospital-issued lines, telemetry patches, and catheters previously discontinued. Personal belongings, clothing, and valuables retrieved from hospital safe and verified. [Mode of Departure]. Patient left unit in stable, comfortable condition.`,
      fdar: `Focus: Discharge Planning & Patient Education
D (Data): Attending order for discharge verified. Final vitals stable. Patient alert and eager for discharge to home.
A (Action): Reviewed typed discharge instructions, red-flag symptoms, and medication reconciliation. Provided education on: [Teach-Back Education Topics]. Confirmed [Follow-Up Appointments]. Returned all personal property.
R (Response): Patient verbalized comprehension of all instructions via teach-back. Escorted safely: [Mode of Departure].`,
      soap: `S (Subjective): Patient states: "I understand how to take my new pills and know to call my doctor if I get dizzy or short of breath."
O (Objective): Final vitals stable. Lines removed. Discharge packet signed. [Follow-Up Appointments]. [Mode of Departure].
A (Assessment): Patient clinically stable, educated, and safely discharged [Destination].
P (Plan): Chart closed. Discharge notification sent to care management and outpatient pharmacy.`,
      checklist: `• Destination: [Destination]
• Education: [Teach-Back Education Topics] (Teach-back confirmed)
• Follow-up: [Follow-Up Appointments]
• Lines/Tubes: All IV lines discontinued, hemostasis intact
• Escort: [Mode of Departure]`
    }
  },
  {
    id: 'trans-sbar-handover',
    title: 'Inter-Shift Bedside Handoff (SBAR)',
    category: 'transitions',
    subcategory: 'Handoff',
    badge: 'Shift Handover',
    tags: ['SBAR', 'handoff', 'shift report', 'bedside report', 'cross cover'],
    description: 'Structured SBAR format bedside handoff for oncoming nurse, covering Situation, Background, Assessment, and Recommendation.',
    variables: [
      {
        key: 'situation',
        label: 'Situation',
        defaultValue: '64-year-old male, Room 412, admitted Day 2 for Acute Exacerbation of COPD on 2L nasal cannula. Attending Dr. [Provider Name].',
        options: [
          '64-year-old male, Room 412, admitted Day 2 for Acute Exacerbation of COPD on 2L nasal cannula. Attending Dr. [Provider Name].',
          '72-year-old female, Room 308, Post-op Day 1 following laparoscopic cholecystectomy.',
          '58-year-old male, Room 515, admitted for sepsis secondary to UTI, completing IV antibiotic course.'
        ]
      },
      {
        key: 'background',
        label: 'Background',
        defaultValue: 'Past medical history includes CAD, HTN, 30 pack-year smoking history. Full code. Allergic to Penicillin. 20G PIV in Right Forearm placed yesterday.',
        options: [
          'Past medical history includes CAD, HTN, 30 pack-year smoking history. Full code. Allergic to Penicillin. 20G PIV in Right Forearm placed yesterday.',
          'History of Type 2 DM, CKD Stage 3, and OA. Code status Full Code. NKDA. PICC line in right upper arm.',
          'DNR/DNI with POLST on file. History of atrial fibrillation on apixaban.'
        ]
      },
      {
        key: 'assessment',
        label: 'Assessment',
        defaultValue: 'Lungs with faint expiratory wheezes, improved post-nebulizer. SpO2 95% on 2L NC. Vitals stable. Tolerating regular diet. Voided 850 mL clear yellow urine this shift. Pain 1/10.',
        options: [
          'Lungs with faint expiratory wheezes, improved post-nebulizer. SpO2 95% on 2L NC. Vitals stable. Tolerating regular diet. Voided 850 mL clear yellow urine this shift. Pain 1/10.',
          'Alert, oriented x 4. Incision clean and dry with surgical glue. Pain controlled with oral PRN medication at 3/10. Ambulated hallway twice.',
          'Afebrile x 24h. WBC trending down from 16k to 10.2k. Tolerating oral fluids.'
        ]
      },
      {
        key: 'recommendation',
        label: 'Recommendation',
        defaultValue: 'Continue scheduled duo-nebs Q6H. Repeat morning CBC and basic metabolic panel ordered for 0500. Encourage incentive spirometry Q1H while awake.',
        options: [
          'Continue scheduled duo-nebs Q6H. Repeat morning CBC and basic metabolic panel ordered for 0500. Encourage incentive spirometry Q1H while awake.',
          'Advance diet as tolerated. Physical therapy session scheduled for tomorrow 0900. Re-evaluate IV line in 24 hours.',
          'Follow up blood culture final sensitivity report in AM. Anticipate transition to oral antibiotics if afebrile.'
        ]
      }
    ],
    formats: {
      narrative: `Bedside Shift Handoff Report (SBAR):
Conducted interactive bedside handoff with oncoming nurse [RN Name]. Two patient identifiers confirmed.
• SITUATION: [Situation]
• BACKGROUND: [Background]
• ASSESSMENT: [Assessment]
• RECOMMENDATION: [Recommendation]
Bedside safety check performed jointly: IV bag and pump rate verified, bedside suction and oxygen emergency equipment tested, bed locked in lowest position, call light in patient hand. Patient participated in handoff and agreed with plan of care.`,
      fdar: `Focus: Inter-Shift Bedside SBAR Report
D (Data): Bedside exchange of clinical care with oncoming registered nurse.
Situation: [Situation]
Background: [Background]
Assessment: [Assessment]
A (Action): Performed joint safety inspection of IV lines, infusions, incisions, and monitors. Verified emergency airway equipment at head of bed.
R (Response): Oncoming nurse verbalized understanding of care plan and outstanding orders: [Recommendation]. Patient invited to ask questions and expressed satisfaction.`,
      soap: `S (Subjective): Patient active participant in bedside report; states feeling well-cared for and satisfied with shift progress.
O (Objective): Dual RN verification of patient ID, allergy band, IV infusions, and telemetry. [Assessment].
A (Assessment): Clinical transition of care executed accurately with zero communication gaps.
P (Plan): [Recommendation]. Care safely transferred to oncoming RN.`,
      checklist: `• Situation: [Situation]
• Background: [Background]
• Assessment: [Assessment]
• Recommendation: [Recommendation]
• Joint Check: IV lines inspected, safety equipment verified, call bell in hand`
    }
  },

  // Additional High-Acuity & Frequent Hospital Templates
  {
    id: 'proc-chest-tube',
    title: 'Chest Tube & Pleurovac Drainage Assessment',
    category: 'procedure',
    subcategory: 'Respiratory',
    badge: 'Thoracic',
    tags: ['chest tube', 'pleurovac', 'air leak', 'tidaling', 'suction', 'pneumothorax'],
    description: 'Chest tube insertion site check, water seal chamber, suction level, tidaling, air leak check, and drainage character.',
    variables: [
      {
        key: 'site_tube',
        label: 'Chest Tube Location',
        defaultValue: 'Right mid-axillary 5th intercostal space 28 Fr chest tube',
        options: [
          'Right mid-axillary 5th intercostal space 28 Fr chest tube',
          'Left anterior 2nd intercostal space 20 Fr pigtail catheter',
          'Bilateral mediastinal chest tubes post-CABG'
        ]
      },
      {
        key: 'suction_status',
        label: 'Suction Level / Water Seal',
        defaultValue: 'Set to -20 cmH2O continuous wall suction; bellow fully expanded to mark',
        options: [
          'Set to -20 cmH2O continuous wall suction; bellow fully expanded to mark',
          'Water seal mode (no active wall suction); chamber filled to 2 cm mark',
          'Set to -15 cmH2O dry suction'
        ]
      },
      {
        key: 'tidaling_leak',
        label: 'Tidaling & Air Leak Check',
        defaultValue: 'Fluctuation (tidaling) present with respiration; NO continuous air leak noted in water chamber (Grade 0/5)',
        options: [
          'Fluctuation (tidaling) present with respiration; NO continuous air leak noted in water chamber (Grade 0/5)',
          'Intermittent small air leak observed only during forced expiration or cough (Grade 1/5)',
          'Continuous bubbling observed across columns (indicative of active air leak)'
        ]
      },
      {
        key: 'drainage',
        label: 'Drainage Quantity & Quality',
        defaultValue: '45 mL serosanguinous drainage accumulated over 4 hours; no sudden increase or clots',
        options: [
          '45 mL serosanguinous drainage accumulated over 4 hours; no sudden increase or clots',
          '15 mL straw-colored serous drainage over 8 hours',
          '120 mL bright red sanguinous drainage in past hour (MD notified)'
        ]
      }
    ],
    formats: {
      narrative: `Procedure/Assessment: Chest Tube Drainage System Evaluation.
Chest tube site inspected: [Chest Tube Location]. Vaseline petroleum gauze and sterile occlusive 4x4 gauze dressing clean, dry, and intact; taped securely on 4 sides. No subcutaneous emphysema (crepitus) palpated around chest wall or neck. Drainage unit upright, secured below chest level: [Suction Level / Water Seal]. [Tidaling & Air Leak Check]. [Drainage Quantity & Quality]. System tubing straight, free of dependent loops or kinking. Connections taped. Two rubber-tipped chest tube clamps and bottle of sterile water present at bedside for emergencies. Patient denies acute pleuritic chest pain; SpO2 97% on room air.`,
      fdar: `Focus: Thoracic Drainage System / Chest Tube Monitoring
D (Data): [Chest Tube Location]. Patient resting in bed with HOB 45 degrees. Breath sounds present bilaterally.
A (Action): Inspected dressing, palpated for subcutaneous emphysema, evaluated Pleurovac unit: [Suction Level / Water Seal]. Checked chamber: [Tidaling & Air Leak Check]. Measured drainage: [Drainage Quantity & Quality]. Verified emergency clamps and sterile water at bedside.
R (Response): Patient breathing easily, denies shortness of breath. Drainage container intact and operating as prescribed.`,
      soap: `S (Subjective): Patient reports pain 2/10 at chest tube insertion site, well controlled. Denies difficulty breathing or sudden sharp pain.
O (Objective): [Chest Tube Location]. Dressing occlusive and dry. No crepitus. [Suction Level / Water Seal]. [Tidaling & Air Leak Check]. [Drainage Quantity & Quality]. SpO2 97%.
A (Assessment): Chest tube functioning normally; pleural space draining effectively without active air leak.
P (Plan): Continue Q4H drainage output recording and site assessment. Keep drainage unit upright and below chest height at all times.`,
      checklist: `• Tube/Site: [Chest Tube Location]
• Dressing: Occlusive, intact, no crepitus
• Suction: [Suction Level / Water Seal]
• Air Leak / Tidaling: [Tidaling & Air Leak Check]
• Drainage: [Drainage Quantity & Quality]
• Emergency Equipment: 2 rubber clamps & sterile water bottle at bedside`
    }
  },
  {
    id: 'sit-pain-management',
    title: 'Acute Pain Assessment, Intervention & Reassessment',
    category: 'situational',
    subcategory: 'Pain',
    badge: 'JCAHO Standard',
    tags: ['pain', 'analgesia', 'reassessment', 'opioid', 'comfort', 'PQRST'],
    description: 'Documentation of pain intensity, location, quality, intervention given, and required 30-60 min reassessment.',
    variables: [
      {
        key: 'pre_score',
        label: 'Pre-Intervention Pain Score & Location',
        defaultValue: '8/10 sharp stabbing pain located at right lower quadrant surgical incision site, non-radiating',
        options: [
          '8/10 sharp stabbing pain located at right lower quadrant surgical incision site, non-radiating',
          '7/10 aching pressure in lower lumbar spine, worsening with movement',
          '6/10 throbbing right-sided headache, photophobia present',
          '9/10 severe colicky flank pain radiating to groin'
        ]
      },
      {
        key: 'med_given',
        label: 'Analgesic Intervention Administered',
        defaultValue: 'Oxycodone 5 mg PO administered per PRN provider order',
        options: [
          'Oxycodone 5 mg PO administered per PRN provider order',
          'Morphine 2 mg IV push administered over 2 minutes per PRN order',
          'Hydromorphone (Dilaudid) 0.5 mg IV push administered per PRN order',
          'Acetaminophen 1000 mg IV piggyback infused over 15 minutes',
          'Ice pack applied to affected site with elevation and deep breathing coaching'
        ]
      },
      {
        key: 'post_score',
        label: 'Reassessment Score (30-60 min post)',
        defaultValue: 'Pain reassessed at 45 minutes: decreased from 8/10 to 2/10 mild dull ache',
        options: [
          'Pain reassessed at 45 minutes: decreased from 8/10 to 2/10 mild dull ache',
          'Pain reassessed at 30 minutes: decreased from 7/10 to 1/10',
          'Pain reassessed at 30 minutes: completely resolved (0/10 comfort score)',
          'Pain reassessed at 60 minutes: partially decreased from 8/10 to 5/10; provider notified for additional orders'
        ]
      },
      {
        key: 'sedation',
        label: 'POSS Sedation Level',
        defaultValue: 'POSS Score 1: Alert, awake, speech coherent, RR 16, SpO2 98%',
        options: [
          'POSS Score 1: Alert, awake, speech coherent, RR 16, SpO2 98%',
          'POSS Score 2: Slightly drowsy, easily aroused, easily oriented, RR 14',
          'POSS Score 3: Frequently drowsy, drifts off during conversation (opioid dose held, monitored)'
        ]
      }
    ],
    formats: {
      narrative: `Pain Management & Reassessment Note:
Initial Pain Assessment at [Time]: Patient verbalized acute discomfort. [Pre-Intervention Pain Score & Location]. Aggravating and relieving factors evaluated. Vital signs prior to medication: BP 136/82, HR 88, RR 18, SpO2 98%.
Intervention: [Analgesic Intervention Administered]. Non-pharmacologic comfort measures provided (pillow support and relaxed positioning).
Timed Reassessment: [Reassessment Score (30-60 min post)]. Patient verbalized satisfaction with pain reduction. Sedation score: [POSS Sedation Level]. No nausea, pruritus, respiratory depression, or adverse effects observed.`,
      fdar: `Focus: Acute Pain Management & Mandated Reassessment
D (Data): [Pre-Intervention Pain Score & Location]. Pre-med vitals stable.
A (Action): Verified MAR. Administered: [Analgesic Intervention Administered]. Provided supportive positioning.
R (Response): [Reassessment Score (30-60 min post)]. Sedation: [POSS Sedation Level]. Patient reports being able to rest comfortably.`,
      soap: `S (Subjective): Initial: "[Pre-Intervention Pain Score & Location]". Reassessment: Patient states: "The pain medicine helped tremendously."
O (Objective): Administered [Analgesic Intervention Administered]. Follow-up evaluation: [Reassessment Score (30-60 min post)]. [POSS Sedation Level].
A (Assessment): Acute surgical/somatic pain successfully mitigated with prescribed analgesic therapy.
P (Plan): Continue PRN pain protocol as ordered. Reassess pain score with all subsequent vital sign checks.`,
      checklist: `• Baseline Pain: [Pre-Intervention Pain Score & Location]
• Medication Given: [Analgesic Intervention Administered] at [Time]
• Reassessment: [Reassessment Score (30-60 min post)]
• Sedation Check: [POSS Sedation Level]
• Adverse Effects: None noted`
    }
  },
  {
    id: 'sit-sepsis-bundle',
    title: 'Sepsis Alert / Severe Sepsis Bundle Initiation',
    category: 'situational',
    subcategory: 'Emergency',
    badge: 'Code Sepsis',
    tags: ['sepsis', 'bundle', 'lactate', 'blood cultures', 'antibiotics', 'fluid bolus'],
    description: 'Documentation of sepsis screening trigger, provider notification, 3-hour bundle execution, and repeat lactate draw.',
    variables: [
      {
        key: 'screening_trigger',
        label: 'Sepsis Screen Criteria',
        defaultValue: 'Temp 102.1°F (38.9°C), HR 118 bpm, RR 24, WBC 18.5k, suspected urinary tract infection',
        options: [
          'Temp 102.1°F (38.9°C), HR 118 bpm, RR 24, WBC 18.5k, suspected urinary tract infection',
          'Temp 95.8°F (35.4°C), HR 112 bpm, SBP 88/50 mmHg, suspected pneumonia',
          'HR 124, RR 26, altered mentation, positive SIRS criteria with suspected intra-abdominal focus'
        ]
      },
      {
        key: 'lactate_result',
        label: 'Initial Serum Lactate',
        defaultValue: 'Initial venous lactate drawn at [Time]: result 3.2 mmol/L (Elevated)',
        options: [
          'Initial venous lactate drawn at [Time]: result 3.2 mmol/L (Elevated)',
          'Initial serum lactate drawn: result 4.4 mmol/L (Severe hyperlactatemia, MAP <65)',
          'Initial serum lactate drawn: result 2.2 mmol/L'
        ]
      },
      {
        key: 'blood_cultures',
        label: 'Blood Cultures',
        defaultValue: '2 sets of peripheral blood cultures drawn from 2 separate venipuncture sites PRIOR to antibiotic administration',
        options: [
          '2 sets of peripheral blood cultures drawn from 2 separate venipuncture sites PRIOR to antibiotic administration',
          '1 peripheral blood culture set and 1 central line blood culture set drawn prior to antimicrobials'
        ]
      },
      {
        key: 'resuscitation',
        label: 'Fluids & Antibiotics',
        defaultValue: 'Started 30 mL/kg IV crystalloid fluid bolus (Normal Saline 2000 mL under pressure infuser). Broad-spectrum IV Ceftriaxone 2g initiated within 45 minutes.',
        options: [
          'Started 30 mL/kg IV crystalloid fluid bolus (Normal Saline 2000 mL under pressure infuser). Broad-spectrum IV Ceftriaxone 2g initiated within 45 minutes.',
          'Administered 30 mL/kg Lactated Ringer\'s bolus; IV Vancomycin and Zosyn hung and infusing.',
          'IV crystalloid fluid bolus of 1000 mL running wide open; empiric IV antibiotics initiated.'
        ]
      }
    ],
    formats: {
      narrative: `Sepsis Management Note (3-Hour CMS Sepsis Bundle):
At [Time], patient screened positive for sepsis criteria: [Sepsis Screen Criteria].
Attending physician Dr. [Provider Name] notified immediately at bedside. Sepsis protocol engaged.
Bundle Execution:
1. [Initial Serum Lactate].
2. [Blood Cultures].
3. [Fluids & Antibiotics].
Vitals monitored Q15 min during rapid fluid resuscitation: BP improved from 88/52 to 112/68 mmHg (MAP >65 mmHg). Urine output monitored via Foley catheter: 65 mL/hr clear yellow urine. Repeat serum lactate ordered to be drawn within 4 hours. Patient warm and well perfused without signs of pulmonary fluid overload.`,
      fdar: `Focus: Sepsis Alert / Surviving Sepsis Bundle
D (Data): [Sepsis Screen Criteria]. Sepsis alert triggered.
A (Action): Notified provider. Executed 3-hour bundle: [Initial Serum Lactate]. Obtained [Blood Cultures]. Infused [Fluids & Antibiotics]. Placed indwelling Foley for strict urometer tracking.
R (Response): Blood pressure stabilized with MAP maintained >=65 mmHg. HR decreased to 92 bpm. Lungs auscultated frequently: CTA, no pulmonary edema.`,
      soap: `S (Subjective): Patient states feeling fatigued and feverish; chills subsided following antipyretic and fluid therapy.
O (Objective): [Sepsis Screen Criteria]. [Initial Serum Lactate]. [Blood Cultures]. [Fluids & Antibiotics]. Post-bolus MAP 72 mmHg. Urine output >0.5 mL/kg/hr.
A (Assessment): Sepsis bundle initiated rapidly per hospital clinical guideline with positive hemodynamic response.
P (Plan): Complete antibiotic infusions. Draw repeat serum lactate at [Time + 3 hrs]. Transfer to ICU/Step-down if MAP drops <65 despite fluid loading.`,
      checklist: `• Criteria: [Sepsis Screen Criteria]
• Lactate: [Initial Serum Lactate]
• Cultures: [Blood Cultures]
• Therapy: [Fluids & Antibiotics]
• Vitals Post-Bolus: MAP >65 mmHg maintained
• Follow-up: Repeat lactate scheduled within 4 hours`
    }
  },
  {
    id: 'sit-code-stroke',
    title: 'Acute Stroke Alert / Code Stroke Activation',
    category: 'situational',
    subcategory: 'Emergency',
    badge: 'Code Stroke',
    tags: ['stroke', 'NIHSS', 'BE FAST', 'tPA', 'TNK', 'head CT', 'neuro'],
    description: 'Documentation of sudden focal neurologic deficits, last known normal (LKN), Code Stroke activation, stat CT escort, and NIHSS baseline.',
    variables: [
      {
        key: 'lkn',
        label: 'Last Known Normal (LKN)',
        defaultValue: 'Last Known Normal verified with patient spouse: today at 08:30 (approx 45 minutes prior)',
        options: [
          'Last Known Normal verified with patient spouse: today at 08:30 (approx 45 minutes prior)',
          'Last Known Normal witnessed by staff in hospital room 15 minutes ago',
          'Wake-up stroke; last known normal yesterday at 22:00 before falling asleep'
        ]
      },
      {
        key: 'symptoms',
        label: 'BE-FAST Stroke Symptoms',
        defaultValue: 'Acute right-sided facial droop, right upper extremity pronator drift (strength 1/5), expressive aphasia with unintelligible speech',
        options: [
          'Acute right-sided facial droop, right upper extremity pronator drift (strength 1/5), expressive aphasia with unintelligible speech',
          'Left hemiplegia (0/5 strength in left arm and leg), left neglect, and severe slurred speech',
          'Sudden ataxia, loss of balance, acute diplopia, and severe vertigo'
        ]
      },
      {
        key: 'glucose_vitals',
        label: 'Bedside Blood Glucose & Vitals',
        defaultValue: 'Point-of-care glucose: 114 mg/dL (hypoglycemia excluded). BP: 168/94, HR: 84 regular, SpO2: 98% RA',
        options: [
          'Point-of-care glucose: 114 mg/dL (hypoglycemia excluded). BP: 168/94, HR: 84 regular, SpO2: 98% RA',
          'Blood glucose: 126 mg/dL. BP: 192/104 (labetalol ordered by stroke team), HR: 76'
        ]
      },
      {
        key: 'transport_ct',
        label: 'Stroke Team & CT Transfer',
        defaultValue: 'Code Stroke called overhead at [Time]. Neurology stroke team responded bedside in 2 minutes. Patient expedited immediately to CT scanner for STAT non-contrast head CT and CTA.',
        options: [
          'Code Stroke called overhead at [Time]. Neurology stroke team responded bedside in 2 minutes. Patient expedited immediately to CT scanner for STAT non-contrast head CT and CTA.',
          'Stroke team evaluated at bedside. Escorted directly to CT suite with RN and stroke coordinator.'
        ]
      }
    ],
    formats: {
      narrative: `Code Stroke Activation Note:
At [Time], acute focal neurological deficit detected: [BE-FAST Stroke Symptoms].
[Last Known Normal (LKN)].
Immediate bedside assessment: [Bedside Blood Glucose & Vitals].
Code Stroke activated overhead immediately. [Stroke Team & CT Transfer]. Two large-bore peripheral IVs (18G) verified. Patient escorted directly to radiology by bedside RN and stroke team. Weight obtained on bed scale (78 kg). Patient kept strictly NPO. Head CT non-contrast completed to evaluate for acute intracranial hemorrhage. Thrombolysis / thrombectomy eligibility evaluation underway.`,
      fdar: `Focus: Acute Stroke Alert / Code Stroke
D (Data): Sudden onset neurological deficit: [BE-FAST Stroke Symptoms]. LKN: [Last Known Normal (LKN)]. Bedside glucose: [Bedside Blood Glucose & Vitals].
A (Action): Code Stroke called. Stroke neurology arrived bedside. IV access secured. Patient transported immediately to CT suite for emergent neuroimaging.
R (Response): Non-contrast CT and CTA completed without delay. NIHSS calculated with stroke team. Preparing for acute reperfusion decision.`,
      soap: `S (Subjective): Patient attempts to communicate but exhibits expressive aphasia; nods affirmatively to simple yes/no questions.
O (Objective): [BE-FAST Stroke Symptoms]. [Last Known Normal (LKN)]. [Bedside Blood Glucose & Vitals]. 18G IV patent. Non-contrast head CT completed.
A (Assessment): Acute ischemic cerebrovascular event (stroke) within treatment window.
P (Plan): Follow stroke neurology instructions regarding thrombolysis (TNK/tPA) or mechanical thrombectomy. Maintain strict NPO. Continuous neuro and BP monitoring Q15 min.`,
      checklist: `• LKN: [Last Known Normal (LKN)]
• Symptoms: [BE-FAST Stroke Symptoms]
• Glucose / Vitals: [Bedside Blood Glucose & Vitals]
• Code Stroke: Overhead activation logged
• Imaging: Transported to STAT non-contrast Head CT / CTA
• Status: NPO, 18G IV patent, weight recorded`
    }
  },

  // ==========================================
  // BEDRIDDEN PATIENTS, POSITIONING & SKIN CARE
  // ==========================================
  {
    id: 'rout-bedridden-care',
    title: 'Bedridden Patient Total Care & Hygiene Shift Note',
    category: 'routine',
    subcategory: 'Bedridden Care',
    badge: 'Total Care',
    tags: ['bedridden', 'total care', 'bed bath', 'hygiene', 'PROM', 'SCDs', 'incontinence', 'ADLs'],
    description: 'Comprehensive documentation of dependent bedridden patient care: complete bed bath, oral care, PROM, SCDs, eye care, and incontinence management.',
    variables: [
      {
        key: 'bath_hygiene',
        label: 'Hygiene & Bed Bath',
        defaultValue: 'Complete bed bath provided with pre-warmed 2% CHG washcloths. Hair washed with disposable shampoo cap.',
        options: [
          'Complete bed bath provided with pre-warmed 2% CHG washcloths. Hair washed with disposable shampoo cap.',
          'Complete bed bath with mild pH-balanced soap and warm water; skin dried by patting.',
          'Partial bed bath and linen refresh completed with 2 staff members.'
        ]
      },
      {
        key: 'oral_eye_care',
        label: 'Oral & Eye Care',
        defaultValue: 'Suction toothbrush with 0.12% Chlorhexidine gluconate oral rinse performed; tongue and buccal mucosa cleansed; lips lubricated with water-soluble balm. Eye lubrication drops instilled OU.',
        options: [
          'Suction toothbrush with 0.12% Chlorhexidine gluconate oral rinse performed; tongue and buccal mucosa cleansed; lips lubricated with water-soluble balm. Eye lubrication drops instilled OU.',
          'Oral care with soft foam swabs and moist saline rinse Q4H; teeth brushed; lips moist.',
          'Comprehensive VAP oral hygiene bundle executed; subglottic suctioning cleared.'
        ]
      },
      {
        key: 'prom_mobility',
        label: 'Passive Range of Motion & Contracture Prevention',
        defaultValue: 'Passive Range of Motion (PROM) exercises performed to all four extremities (10 repetitions per joint: shoulders, elbows, wrists, hips, knees, ankles). Bilateral anti-contracture resting hand splints repositioned.',
        options: [
          'Passive Range of Motion (PROM) exercises performed to all four extremities (10 repetitions per joint: shoulders, elbows, wrists, hips, knees, ankles). Bilateral anti-contracture resting hand splints repositioned.',
          'Gentle PROM performed to bilateral upper and lower extremities within pain-free limits. Trochanter rolls placed.',
          'PROM completed; physical therapy consult ordered for bilateral footdrop braces.'
        ]
      },
      {
        key: 'vte_prophylaxis',
        label: 'VTE / DVT Mechanical Prophylaxis',
        defaultValue: 'Bilateral knee-high sequential compression devices (SCDs) verified active and cycling continuously. Calf skin inspected: no erythema, edema, or calf tenderness.',
        options: [
          'Bilateral knee-high sequential compression devices (SCDs) verified active and cycling continuously. Calf skin inspected: no erythema, edema, or calf tenderness.',
          'Bilateral thigh-high SCDs in place and functioning properly. Removed for 30 minutes during bath for skin check.',
          'Graduated compression anti-embolism stockings (TED hose) clean, dry, wrinkle-free, and paired with active SCD sleeves.'
        ]
      },
      {
        key: 'incontinence_care',
        label: 'Elimination & Incontinence Care',
        defaultValue: 'Brief inspected Q2H: incontinent of urine and soft stool. Perineal area cleansed promptly with pH-balanced no-rinse foam; skin dried thoroughly. Dimethicone moisture barrier cream reapplied.',
        options: [
          'Brief inspected Q2H: incontinent of urine and soft stool. Perineal area cleansed promptly with pH-balanced no-rinse foam; skin dried thoroughly. Dimethicone moisture barrier cream reapplied.',
          'PureWick female external urinary catheter in place with low continuous wall suction (40 mmHg); skin dry and intact.',
          'External male condom catheter intact, draining clear yellow urine; no penile swelling or skin maceration.',
          'Indwelling Foley catheter draining clear amber urine; daily CHG meatal care performed.'
        ]
      }
    ],
    formats: {
      narrative: `Bedridden Patient Comprehensive Shift Care:
Patient is completely dependent for all Activities of Daily Living (ADLs) and cared for per bedridden clinical bundle.
• HYGIENE & BATH: [Hygiene & Bed Bath] Bed linens completely changed without shearing using slide sheet.
• ORAL & FACIAL CARE: [Oral & Eye Care]
• MOBILITY & PROM: [Passive Range of Motion & Contracture Prevention]
• DVT / VTE PREVENTION: [VTE / DVT Mechanical Prophylaxis]
• ELIMINATION & PERI-CARE: [Elimination & Incontinence Care]
Bed maintained in lowest position with wheels locked and padded side rails up x 2. Call light in direct reach with assistive cord. Patient resting comfortably in neutral body alignment.`,
      fdar: `Focus: Bedridden Patient Total Care & Hygiene
D (Data): Completely dependent adult inpatient requiring total nursing care. Baseline vital signs stable. Braden score 11 (high risk).
A (Action): Completed total care bundle: [Hygiene & Bed Bath]. Executed [Oral & Eye Care]. Conducted [Passive Range of Motion & Contracture Prevention]. Inspected lower extremities and reapplied [VTE / DVT Mechanical Prophylaxis]. Provided [Elimination & Incontinence Care].
R (Response): Patient calm and clean. Skin warm and dry. Extremities repositioned in functional alignment. Zero signs of acute distress.`,
      soap: `S (Subjective): Patient non-verbal / minimally responsive; calm facial expression during care. No non-verbal cues of pain (grimacing, guarding, or diaphoresis).
O (Objective): Total care provided. [Hygiene & Bed Bath]. [Oral & Eye Care]. [Passive Range of Motion & Contracture Prevention]. [VTE / DVT Mechanical Prophylaxis]. [Elimination & Incontinence Care].
A (Assessment): Dependent bedridden status maintained with comprehensive preventative nursing interventions.
P (Plan): Continue Q2H turn and repositioning schedule. Reassess skin integrity each shift. Maintain strict aspiration precautions and VTE prophylaxis.`,
      checklist: `• Hygiene: [Hygiene & Bed Bath]
• Oral/Eyes: [Oral & Eye Care]
• PROM: [Passive Range of Motion & Contracture Prevention]
• VTE: [VTE / DVT Mechanical Prophylaxis]
• Elimination: [Elimination & Incontinence Care]
• Bed Status: Low/locked, padded rails up x 2, call bell in reach`
    }
  },

  {
    id: 'rout-positioning-turn',
    title: 'Patient Positioning & Q2H Turn Protocol',
    category: 'routine',
    subcategory: 'Mobility & Positioning',
    badge: 'Q2H Schedule',
    tags: ['positioning', 'turn schedule', 'repositioning', 'bedridden', 'offloading', 'pressure ulcer', 'heels'],
    description: 'Structured documentation of Q2H scheduled patient turning, 30-degree lateral tilts, pillow support, and heel floating.',
    variables: [
      {
        key: 'current_position',
        label: 'Position Established',
        defaultValue: 'Repositioned to Left 30-degree lateral tilt utilizing high-density wedge pillow along dorsal spine',
        options: [
          'Repositioned to Left 30-degree lateral tilt utilizing high-density wedge pillow along dorsal spine',
          'Repositioned to Right 30-degree lateral tilt utilizing high-density wedge pillow along dorsal spine',
          'Positioned in supine alignment with head of bed elevated to 30 degrees (semi-Fowler\'s)',
          'Positioned in high Fowler\'s (75-90 degrees) during and for 60 minutes following enteral feeding',
          'Assisted to cardiac chair position via specialized bed function'
        ]
      },
      {
        key: 'offloading_prominences',
        label: 'Bony Prominence Offloading',
        defaultValue: 'Pillows placed between knees and ankles to prevent bone-on-bone contact. Bilateral heels suspended completely floating off mattress surface.',
        options: [
          'Pillows placed between knees and ankles to prevent bone-on-bone contact. Bilateral heels suspended completely floating off mattress surface.',
          'Heel suspension offloading boots (Prevalon / Multi-podus) placed bilaterally with Achilles tendon relieved of pressure.',
          'Pillows placed along lumbar region, knees flexed at 30 degrees with trochanter roll supporting right hip.'
        ]
      },
      {
        key: 'support_surface',
        label: 'Bed Support Surface',
        defaultValue: 'Alternating pressure low-air-loss mattress active, verified set to patient weight and calibrated',
        options: [
          'Alternating pressure low-air-loss mattress active, verified set to patient weight and calibrated',
          'Microclimate low-air-loss specialty mattress operating without error codes',
          'Standard hospital foam pressure redistribution mattress with friction-reducing slide sheet beneath patient'
        ]
      },
      {
        key: 'skin_observation',
        label: 'Skin Inspection During Turn',
        defaultValue: 'Previously dependent skin surfaces inspected: no new areas of non-blanchable erythema, induration, or breakdown over trochanters, sacrum, or scapulae.',
        options: [
          'Previously dependent skin surfaces inspected: no new areas of non-blanchable erythema, induration, or breakdown over trochanters, sacrum, or scapulae.',
          'Mild blanchable erythema noted over right greater trochanter; relieved within 10 minutes of pressure offloading.',
          'Sacral skin intact; prophylactic silicone border dressing inspected and remained adherent without edge curl.'
        ]
      },
      {
        key: 'next_turn',
        label: 'Next Scheduled Turn',
        defaultValue: 'Due for next turn in 2 hours ([Time + 2 hrs]) to Right 30-degree lateral tilt',
        options: [
          'Due for next turn in 2 hours ([Time + 2 hrs]) to Right 30-degree lateral tilt',
          'Due for next turn in 2 hours ([Time + 2 hrs]) to Left 30-degree lateral tilt',
          'Due for next turn in 2 hours ([Time + 2 hrs]) to Supine with heel suspension'
        ]
      }
    ],
    formats: {
      narrative: `Scheduled Patient Positioning & Turn Note:
Q2H pressure redistribution turn completed with assistance of 2 staff members using friction-reducing slide sheet.
Position: [Position Established].
Pressure Offloading: [Bony Prominence Offloading].
Support Surface: [Support Surface].
Skin Inspection: [Skin Inspection During Turn].
Patient aligned in neutral anatomical posture without spinal torque or hip external rotation. Call bell placed within reach. [Next Scheduled Turn]. Patient denies discomfort and appears relaxed.`,
      fdar: `Focus: Patient Repositioning / Pressure Injury Prevention
D (Data): Bedbound patient due for scheduled Q2H repositioning per fall and pressure injury protocols.
A (Action): Repositioned with slide sheet: [Position Established]. Applied pillows and supports: [Bony Prominence Offloading]. Verified [Support Surface]. Inspected dependent skin: [Skin Inspection During Turn]. Logged [Next Scheduled Turn].
R (Response): Patient comfortable, breathing effortlessly. Bony prominences successfully offloaded. Zero friction or shear injuries incurred.`,
      soap: `S (Subjective): Patient states: "That feels much better on my back, thank you." Denies pressure pain or pinching.
O (Objective): [Position Established]. [Bony Prominence Offloading]. [Support Surface]. [Skin Inspection During Turn]. [Next Scheduled Turn].
A (Assessment): Effective pressure offloading achieved per hospital pressure injury prevention protocol.
P (Plan): Continue strict Q2H turning schedule throughout shift. Ensure heels remain continuously floating.`,
      checklist: `• Position: [Position Established]
• Offloading: [Bony Prominence Offloading]
• Mattress: [Support Surface]
• Skin Status: [Skin Inspection During Turn]
• Next Turn Due: [Next Scheduled Turn]`
    }
  },

  {
    id: 'rout-skin-pressure-care',
    title: 'Skin Assessment & Pressure Injury Prevention',
    category: 'routine',
    subcategory: 'Wound & Skin',
    badge: 'Braden Protocol',
    tags: ['skin assessment', 'Braden', 'pressure ulcer', 'sacrum', 'heels', 'prevention', 'moisture', 'MASD'],
    description: 'Comprehensive shift skin survey, Braden risk breakdown, bony prominence inspection, and barrier cream / foam dressing placement.',
    variables: [
      {
        key: 'braden_score',
        label: 'Braden Score & Risk Level',
        defaultValue: 'Braden Score: 12 (High Risk) - Sensory: 3, Moisture: 2, Activity: 1, Mobility: 2, Nutrition: 2, Friction/Shear: 2',
        options: [
          'Braden Score: 12 (High Risk) - Sensory: 3, Moisture: 2, Activity: 1, Mobility: 2, Nutrition: 2, Friction/Shear: 2',
          'Braden Score: 14 (Moderate Risk) - Sensory: 3, Moisture: 3, Activity: 2, Mobility: 2, Nutrition: 2, Friction/Shear: 2',
          'Braden Score: 9 (Very High Risk) - Sensory: 2, Moisture: 1, Activity: 1, Mobility: 1, Nutrition: 2, Friction/Shear: 2',
          'Braden Score: 18 (Mild / Low Risk)'
        ]
      },
      {
        key: 'sacral_status',
        label: 'Sacrum & Coccyx Inspection',
        defaultValue: 'Sacrum clean, warm, pink, and intact without non-blanchable erythema or bogginess. Prophylactic 5-layer silicone bordered foam dressing intact.',
        options: [
          'Sacrum clean, warm, pink, and intact without non-blanchable erythema or bogginess. Prophylactic 5-layer silicone bordered foam dressing intact.',
          'Sacrum with 2x2 cm area of blanchable pink erythema; massaged gently around periphery (not over prominence); barrier film applied.',
          'Sacral skin intact; silicone foam dressing replaced due to edge rolling; skin beneath inspected and non-compromised.'
        ]
      },
      {
        key: 'heel_status',
        label: 'Bilateral Heels & Malleoli',
        defaultValue: 'Heels inspected bilaterally: skin intact, no boggy feel, purple discoloration, or blisters. Heel-floating boots applied.',
        options: [
          'Heels inspected bilaterally: skin intact, no boggy feel, purple discoloration, or blisters. Heel-floating boots applied.',
          'Right heel with intact dark boggy area suspected Deep Tissue Injury (DTI); wound care nurse consult requested; heel floated off bed.',
          'Bilateral heels soft and pink with normal capillary refill; suspended on pillows.'
        ]
      },
      {
        key: 'moisture_management',
        label: 'Moisture & Perianal Skin',
        defaultValue: 'Perianal skin free of incontinence-associated dermatitis (IAD). Dimethicone-based moisture barrier cream applied after perineal cleansing.',
        options: [
          'Perianal skin free of incontinence-associated dermatitis (IAD). Dimethicone-based moisture barrier cream applied after perineal cleansing.',
          'Mild perianal erythema from frequent liquid stools; zinc oxide / petrolatum protective barrier paste applied generously.',
          'Perianal and groin skin dry and intact without candidiasis or intertrigo; moisture-wicking sheet placed in skin folds.'
        ]
      },
      {
        key: 'medical_devices',
        label: 'Medical Device-Related Skin Check',
        defaultValue: 'Ears inspected under nasal cannula tubing (foam ear guards in place); skin under pulse oximeter probe and blood pressure cuff intact and rotated.',
        options: [
          'Ears inspected under nasal cannula tubing (foam ear guards in place); skin under pulse oximeter probe and blood pressure cuff intact and rotated.',
          'Tracheostomy stoma and flange area clean without pressure necrosis; split foam drain sponge in place.',
          'Endotracheal tube securement device repositioned from right to left side of mouth to prevent lip pressure injury.'
        ]
      }
    ],
    formats: {
      narrative: `Comprehensive Skin Assessment & Pressure Injury Prevention Note:
Dual-RN head-to-toe skin inspection conducted at start of shift.
[Braden Score & Risk Level].
• SACRUM & COCCYX: [Sacrum & Coccyx Inspection]
• HEELS & LOWER EXTREMITIES: [Bilateral Heels & Malleoli]
• MOISTURE & PERI-CARE: [Moisture & Perianal Skin]
• MEDICAL DEVICES: [Medical Device-Related Skin Check]
Care Plan Interventions Active: Q2H repositioning schedule enforced, alternating pressure mattress verified, skin kept clean and moisturized, friction-reducing transfer sheet utilized for all bed moves. Patient and family educated on skin protection.`,
      fdar: `Focus: Skin Integrity / Pressure Injury Prevention Protocol
D (Data): [Braden Score & Risk Level]. Dependent bedbound patient with high risk for pressure injury.
A (Action): Completed four-eye skin assessment with secondary RN. Checked prominences: [Sacrum & Coccyx Inspection]. Evaluated [Bilateral Heels & Malleoli]. Applied [Moisture & Perianal Skin]. Inspected and rotated [Medical Device-Related Skin Check].
R (Response): Skin integrity preserved without new hospital-acquired pressure injuries (HAPI). Moisture barrier intact.`,
      soap: `S (Subjective): Patient denies localized soreness, burning, or itching on buttocks, heels, or back.
O (Objective): Dual RN skin survey: [Braden Score & Risk Level]. [Sacrum & Coccyx Inspection]. [Bilateral Heels & Malleoli]. [Moisture & Perianal Skin]. [Medical Device-Related Skin Check].
A (Assessment): High risk for pressure injury; skin currently intact under active pressure injury prevention bundle.
P (Plan): Continue Q2H turning, heel offloading, barrier cream post-incontinence, and daily dual-RN skin survey.`,
      checklist: `• Braden Risk: [Braden Score & Risk Level]
• Sacrum: [Sacrum & Coccyx Inspection]
• Heels: [Bilateral Heels & Malleoli]
• Moisture Care: [Moisture & Perianal Skin]
• Device Check: [Medical Device-Related Skin Check]
• Status: Skin intact, HAPI prevention bundle active`
    }
  },

  {
    id: 'proc-pressure-injury-stage',
    title: 'Pressure Injury Staging & Local Wound Care',
    category: 'procedure',
    subcategory: 'Wound & Skin',
    badge: 'Staging & Care',
    tags: ['pressure injury', 'staging', 'wound care', 'sacral ulcer', 'dressing', 'slough', 'granulation'],
    description: 'Documentation of pressure injury staging (Stage 1-4, DTI, Unstageable), wound bed assessment, measurements, and dressing application.',
    variables: [
      {
        key: 'stage_location',
        label: 'Pressure Injury Stage & Site',
        defaultValue: 'Stage 2 Pressure Injury located on central sacrum',
        options: [
          'Stage 2 Pressure Injury located on central sacrum',
          'Stage 1 Pressure Injury (non-blanchable erythema over intact skin) on right greater trochanter',
          'Stage 3 Pressure Injury (full-thickness skin loss) on coccyx',
          'Stage 4 Pressure Injury (exposed muscle/bone) on ischial tuberosity',
          'Deep Tissue Pressure Injury (DTPI - persistent non-blanchable deep red/maroon discoloration) on left heel',
          'Unstageable Pressure Injury (obscured by 100% thick dark adherent eschar) on right heel'
        ]
      },
      {
        key: 'measurements',
        label: 'Wound Dimensions',
        defaultValue: 'Length: 2.0 cm, Width: 1.5 cm, Depth: 0.2 cm; no undermining, tunneling, or sinus tracts',
        options: [
          'Length: 2.0 cm, Width: 1.5 cm, Depth: 0.2 cm; no undermining, tunneling, or sinus tracts',
          'Length: 3.5 cm, Width: 2.8 cm, Depth: 1.2 cm; 0.5 cm undermining from 12 to 3 o\'clock',
          'Intact blister (serous filled) measuring 1.8 cm x 1.2 cm over bony prominence',
          'Surface erythema measuring 4.0 cm x 3.0 cm with intact epidermis'
        ]
      },
      {
        key: 'wound_bed',
        label: 'Wound Bed & Drainage',
        defaultValue: 'Viable pink-red granulating wound bed (100%), wound edges well-defined; scant serosanguinous drainage; no foul odor',
        options: [
          'Viable pink-red granulating wound bed (100%), wound edges well-defined; scant serosanguinous drainage; no foul odor',
          'Wound base 70% pink granulation tissue, 30% yellow soft slough; moderate serous exudate',
          'Partial thickness shallow crater; dermis exposed; minimal serous drainage; no purulence'
        ]
      },
      {
        key: 'periwound',
        label: 'Periwound Skin',
        defaultValue: 'Periwound skin pink, dry, intact without maceration, erythema, induration, or fluctuance',
        options: [
          'Periwound skin pink, dry, intact without maceration, erythema, induration, or fluctuance',
          'Mild periwound maceration from wound drainage; skin barrier film applied to margins',
          'Periwound intact; 1 cm border of blanchable pink skin'
        ]
      },
      {
        key: 'dressing_applied',
        label: 'Dressing & Treatment Applied',
        defaultValue: 'Cleansed with sterile 0.9% normal saline. Skin prep barrier wipe applied to periwound. Multi-layer silicone bordered foam dressing applied smoothly without tension.',
        options: [
          'Cleansed with sterile 0.9% normal saline. Skin prep barrier wipe applied to periwound. Multi-layer silicone bordered foam dressing applied smoothly without tension.',
          'Cleansed with sterile saline. Hydrogel applied to wound bed, covered with non-adherent pad and bordered transparent foam dressing.',
          'Cleansed with normal saline. Calcium alginate ribbon packed gently into base, covered with bordered secondary foam dressing.',
          'No dressing required; skin prep barrier film and protective offloading boot applied.'
        ]
      }
    ],
    formats: {
      narrative: `Pressure Injury Assessment & Wound Care Note:
Assessment and dressing change completed for: [Pressure Injury Stage & Site].
Measurements: [Wound Dimensions].
Wound Bed: [Wound Bed & Drainage].
Periwound: [Periwound Skin].
Local Wound Intervention: [Dressing & Treatment Applied]. Dressing dated, timed, and initialed. Area completely offloaded from direct pressure. Patient tolerated wound care well without acute distress. Wound care nurse consult active.`,
      fdar: `Focus: Pressure Injury Staging & Local Treatment
D (Data): [Pressure Injury Stage & Site]. Assessed baseline: [Wound Dimensions]. Bed: [Wound Bed & Drainage]. Periwound: [Periwound Skin].
A (Action): Cleaned wound bed with sterile saline. Applied [Dressing & Treatment Applied]. Positioned patient with pressure entirely offloaded from affected area.
R (Response): Dressing secure and clean. Patient reported pain score 1/10 during care. Zero bleeding or trauma to wound bed.`,
      soap: `S (Subjective): Patient states: "It doesn't hurt when you touch it, just feels cold." Denies throbbing or sharp pain.
O (Objective): [Pressure Injury Stage & Site]. [Wound Dimensions]. [Wound Bed & Drainage]. [Periwound Skin]. [Dressing & Treatment Applied].
A (Assessment): Localized pressure injury without signs of secondary cellulitis or purulent infection.
P (Plan): Maintain offloading at all times. Scheduled dressing change in 3 days or PRN if soiled/displaced. Monitor dimensions weekly.`,
      checklist: `• Stage & Site: [Pressure Injury Stage & Site]
• Measurements: [Wound Dimensions]
• Wound Bed: [Wound Bed & Drainage]
• Periwound: [Periwound Skin]
• Dressing Applied: [Dressing & Treatment Applied]
• Offloading: Verified and maintained`
    }
  },

  // ==========================================
  // SUCTIONING & AIRWAY CLEARANCE
  // ==========================================
  {
    id: 'proc-suctioning-care',
    title: 'Airway Suctioning (Oral, Nasopharyngeal & In-Line Tracheal)',
    category: 'procedure',
    subcategory: 'Respiratory & Airway',
    badge: 'Airway Clearance',
    tags: ['suctioning', 'yankauer', 'oral suction', 'nasopharyngeal', 'NTR', 'in-line', 'tracheal', 'secretions'],
    description: 'Documentation of oral (Yankauer), nasopharyngeal, or closed in-line endotracheal/tracheal suctioning, secretion characteristics, and lung sound response.',
    variables: [
      {
        key: 'suction_type',
        label: 'Suction Route & Device',
        defaultValue: 'Oral cavity and oropharynx suctioned using rigid Yankauer catheter connected to 100-120 mmHg wall suction',
        options: [
          'Oral cavity and oropharynx suctioned using rigid Yankauer catheter connected to 100-120 mmHg wall suction',
          'Nasopharyngeal suctioning performed via right naris with 12 Fr sterile catheter lubricated with water-soluble gel',
          'Closed in-line (Ballard) endotracheal tube suctioning (14 Fr) connected to regulated continuous suction at 120 mmHg',
          'Tracheostomy tube suctioned using sterile single-use 12 Fr catheter with thumb-control port'
        ]
      },
      {
        key: 'indication_trigger',
        label: 'Clinical Indication / Trigger',
        defaultValue: 'Audible coarse gurgling upper airway secretions, weak voluntary cough, and SpO2 dip from 97% to 92%',
        options: [
          'Audible coarse gurgling upper airway secretions, weak voluntary cough, and SpO2 dip from 97% to 92%',
          'Patient coughing on ventilator circuit with elevated peak inspiratory pressure (PIP 34 cmH2O)',
          'Accumulation of saliva and oral secretions in buccal space with risk of aspiration',
          'Coarse rhonchi audible on lung auscultation with ineffective clearance'
        ]
      },
      {
        key: 'pre_oxygenation',
        label: 'Pre-Oxygenation',
        defaultValue: 'Pre-oxygenated with 100% O2 for 1 minute prior to suction passes; baseline heart rate 78 bpm regular',
        options: [
          'Pre-oxygenated with 100% O2 for 1 minute prior to suction passes; baseline heart rate 78 bpm regular',
          'Pre-oxygenation button engaged on mechanical ventilator delivering 100% FiO2 for 2 minutes',
          'O2 nasal cannula flow temporarily increased to 4L during procedure'
        ]
      },
      {
        key: 'secretions_retrieved',
        label: 'Secretions Volume & Character',
        defaultValue: 'Moderate amount of thick, whitish-tenacious secretions successfully retrieved on 2 gentle passes (<10 seconds each)',
        options: [
          'Moderate amount of thick, whitish-tenacious secretions successfully retrieved on 2 gentle passes (<10 seconds each)',
          'Copious thick yellowish secretions removed; specimen collected for microbiological culture',
          'Small amount of thin clear mucous retrieved smoothly; airway cleared',
          'Moderate tan secretions with specks of dried blood; gentle technique reinforced'
        ]
      },
      {
        key: 'post_response',
        label: 'Post-Procedure Response & Lung Sounds',
        defaultValue: 'Post-suction breath sounds auscultated: rhonchi and upper airway gurgling resolved; bilateral chest expansion symmetric. SpO2 recovered to 98% on baseline O2. Heart rate remained stable without arrhythmia.',
        options: [
          'Post-suction breath sounds auscultated: rhonchi and upper airway gurgling resolved; bilateral chest expansion symmetric. SpO2 recovered to 98% on baseline O2. Heart rate remained stable without arrhythmia.',
          'Ventilator peak pressures decreased from 34 to 22 cmH2O. Patient resting comfortably with relaxed breathing.',
          'Airway cleared; patient coughed productively into tissue; verbalized relief and easy breathing.'
        ]
      }
    ],
    formats: {
      narrative: `Airway Suctioning Procedure Note:
Indication: [Clinical Indication / Trigger].
[Pre-Oxygenation].
Method: [Suction Route & Device]. Suction applied intermittently for less than 10 seconds per pass while rotating catheter upon withdrawal.
Results: [Secretions Volume & Character]. Catheter and tubing flushed clear with sterile saline.
Post-Procedure Evaluation: [Post-Procedure Response & Lung Sounds]. Suction equipment stored clean in protective sleeve at bedside. Patient tolerated procedure well without acute desaturation or trauma.`,
      fdar: `Focus: Airway Patency / Suctioning & Secretion Clearance
D (Data): [Clinical Indication / Trigger]. Breath sounds coarse bilaterally.
A (Action): [Pre-Oxygenation]. Performed [Suction Route & Device]. Retrieved [Secretions Volume & Character]. Flushed tubing. Auscultated lungs post-procedure.
R (Response): [Post-Procedure Response & Lung Sounds]. Airway patent and clear. Patient in no acute respiratory distress.`,
      soap: `S (Subjective): Patient nodded affirmatively when asked if breathing felt clearer; expressed visible relief following clearance of secretions.
O (Objective): Trigger: [Clinical Indication / Trigger]. [Pre-Oxygenation]. [Suction Route & Device]. Retrieved [Secretions Volume & Character]. [Post-Procedure Response & Lung Sounds].
A (Assessment): Ineffective airway clearance successfully resolved with targeted suctioning.
P (Plan): Continue suctioning PRN. Maintain HOB elevated 30-45 degrees. Perform Q2-4H oral care and auscultate breath sounds each shift.`,
      checklist: `• Indication: [Clinical Indication / Trigger]
• Device/Route: [Suction Route & Device]
• Pre-Oxygenation: [Pre-Oxygenation]
• Secretions: [Secretions Volume & Character]
• Response: [Post-Procedure Response & Lung Sounds]
• Tolerance: Tolerated well, SpO2 recovered`
    }
  },

  // ==========================================
  // RECEIVING PATIENT NOTES (ED, PACU, ICU, SHIFT)
  // ==========================================
  {
    id: 'trans-receiving-ed',
    title: 'Receiving Patient from Emergency Department (ED Transfer)',
    category: 'transitions',
    subcategory: 'Receiving Patient',
    badge: 'ED Arrival',
    tags: ['receiving', 'ED transfer', 'arrival', 'intake', 'bedside handoff', 'admission', 'transfer in'],
    description: 'Documentation of patient arrival from the ED, SBAR handoff from ED RN, initial floor vitals, line audits, allergy check, and room orientation.',
    variables: [
      {
        key: 'diagnosis_source',
        label: 'Admitting Diagnosis & ED Report',
        defaultValue: 'Community-Acquired Pneumonia with hypoxemia, admitted from Emergency Dept via stretcher accompanied by ED RN [ED RN Name]',
        options: [
          'Community-Acquired Pneumonia with hypoxemia, admitted from Emergency Dept via stretcher accompanied by ED RN [ED RN Name]',
          'Acute Decompensated Heart Failure (CHF exacerbation) admitted from ED via transport team',
          'Sepsis secondary to Urinary Tract Infection admitted from ED via stretcher',
          'Acute Gastrointestinal Bleed stabilized in ED, transferred to floor via stretcher',
          'Altered mental status / acute delirium workup admitted from ED via wheelchair'
        ]
      },
      {
        key: 'arrival_vitals',
        label: 'Arrival Vital Signs',
        defaultValue: 'BP: 126/78, HR: 82 regular, RR: 18, SpO2: 97% on 2L nasal cannula, Temp: 98.4°F (36.9°C)',
        options: [
          'BP: 126/78, HR: 82 regular, RR: 18, SpO2: 97% on 2L nasal cannula, Temp: 98.4°F (36.9°C)',
          'BP: 138/84, HR: 88, RR: 16, SpO2: 98% on room air, Temp: 98.6°F',
          'BP: 112/68, HR: 92, RR: 20, SpO2: 95% on 3L NC, Temp: 99.1°F'
        ]
      },
      {
        key: 'lines_drips',
        label: 'Lines, Tubes & Active Infusions',
        defaultValue: '20G PIV in Right Forearm patent with blood return, infusing 0.9% Normal Saline at 75 mL/hr via primary pump. No erythema or infiltration.',
        options: [
          '20G PIV in Right Forearm patent with blood return, infusing 0.9% Normal Saline at 75 mL/hr via primary pump. No erythema or infiltration.',
          '18G PIV in Left AC patent with blood return, saline locked. PureWick external female catheter in place draining clear urine.',
          'Dual peripheral IVs: 20G in Right Forearm (saline locked) and 20G in Left Forearm with maintenance IVF running. Indwelling Foley draining clear amber urine.',
          'PICC line in right upper arm; clean dressing; antibiotic piggyback infusing on schedule.'
        ]
      },
      {
        key: 'skin_allergies',
        label: 'Allergies & Skin Survey on Arrival',
        defaultValue: 'Two patient identifiers and allergy band verified: NKDA. Initial arrival skin survey completed with ED staff: skin intact, zero hospital-acquired pressure injuries present.',
        options: [
          'Two patient identifiers and allergy band verified: NKDA. Initial arrival skin survey completed with ED staff: skin intact, zero hospital-acquired pressure injuries present.',
          'Allergy band confirmed: Penicillin (hives). Dual-RN skin inspection: 2x2 cm blanchable redness on sacrum present on admission; barrier cream applied.',
          'Allergies verified: Sulfa drugs. Skin intact throughout; yellow fall risk band applied.'
        ]
      },
      {
        key: 'pain_needs',
        label: 'Pain Score & Immediate Needs',
        defaultValue: 'Pain score on arrival 1/10. Patient resting comfortably, denying acute nausea or shortness of breath.',
        options: [
          'Pain score on arrival 1/10. Patient resting comfortably, denying acute nausea or shortness of breath.',
          'Pain reported as 4/10 aching; admitting orders reviewed; PRN pain medication available and verified.',
          'Patient denies pain (0/10); oriented x 4; requested a warm blanket and water.'
        ]
      }
    ],
    formats: {
      narrative: `Receiving Patient Note (ED Transfer to Floor):
Patient received onto floor at [Time]: [Admitting Diagnosis & ED Report].
Full bedside SBAR handoff conducted with transferring staff. Two patient identifiers confirmed against hospital wristband.
Arrival Vital Signs: [Arrival Vital Signs].
Lines & Infusions: [Lines, Tubes & Active Infusions].
Safety & Allergies: [Allergies & Skin Survey on Arrival].
Clinical Status & Pain: [Pain Score & Immediate Needs].
Patient safely transferred from ED stretcher into hospital bed using slide sheet with assistance of 2 staff members. Bed placed in lowest locked position with 2 upper side rails elevated. Call bell demonstrated and placed in patient's dominant hand. Belongings verified and accounted for. Telemetry leads placed and confirmed at central station. Admitting physician notified of arrival; admission orders reviewed and acknowledged.`,
      fdar: `Focus: Patient Receiving / Emergency Dept Transfer Arrival
D (Data): [Admitting Diagnosis & ED Report]. Baseline vitals recorded on arrival: [Arrival Vital Signs]. Patient alert and oriented.
A (Action): Exchanged bedside SBAR report. Verified ID and allergy band: [Allergies & Skin Survey on Arrival]. Audited lines and fluids: [Lines, Tubes & Active Infusions]. Transferred to bed safely. Oriented to room and emergency call system. Notified attending MD.
R (Response): Patient settled comfortably in room. [Pain Score & Immediate Needs]. Expressed feeling safe and well-cared for.`,
      soap: `S (Subjective): Patient states: "I'm glad to finally be in a room upstairs." [Pain Score & Immediate Needs]. Confirms allergies and medical history.
O (Objective): Arrived via stretcher. [Arrival Vital Signs]. [Lines, Tubes & Active Infusions]. [Allergies & Skin Survey on Arrival]. Bed lowered/locked, call light in reach.
A (Assessment): Stable adult inpatient received from Emergency Department; care safely transitioned to acute floor.
P (Plan): Complete formal electronic nursing admission database. Administer scheduled floor medications. Establish hourly rounding and fall precautions.`,
      checklist: `• Diagnosis & Source: [Admitting Diagnosis & ED Report]
• Vitals on Arrival: [Arrival Vital Signs]
• Lines & Tubes: [Lines, Tubes & Active Infusions]
• ID & Allergies: [Allergies & Skin Survey on Arrival]
• Pain & Comfort: [Pain Score & Immediate Needs]
• Safety: Bed in lowest position, brakes locked, call light in hand, MD notified`
    }
  },

  {
    id: 'trans-receiving-pacu',
    title: 'Receiving Post-Op Patient from PACU / Surgical Arrival',
    category: 'transitions',
    subcategory: 'Receiving Patient',
    badge: 'Post-Op Arrival',
    tags: ['post-op', 'PACU', 'receiving', 'surgical arrival', 'dressing', 'aldrete', 'drains', 'anesthesia'],
    description: 'Documentation of patient arrival from PACU following surgery, surgical dressing check, drains, pain/sedation score, post-op orders, and initial floor vitals.',
    variables: [
      {
        key: 'surgical_procedure',
        label: 'Surgical Procedure & Anesthesia',
        defaultValue: 'Status post laparoscopic cholecystectomy under general endotracheal anesthesia; transferred from PACU via stretcher accompanied by PACU RN [PACU RN Name]',
        options: [
          'Status post laparoscopic cholecystectomy under general endotracheal anesthesia; transferred from PACU via stretcher accompanied by PACU RN [PACU RN Name]',
          'Status post total knee arthroplasty (TKA) under spinal anesthesia with peripheral nerve block; accompanied by PACU RN',
          'Status post open exploratory laparotomy and bowel resection under general anesthesia',
          'Status post robotic-assisted laparoscopic prostatectomy with PACU handoff complete'
        ]
      },
      {
        key: 'surgical_site',
        label: 'Surgical Site & Dressing Assessment',
        defaultValue: 'Surgical dressings inspected jointly at bedside: clean, dry, and intact with zero strike-through drainage or bleeding. Steri-Strips in place.',
        options: [
          'Surgical dressings inspected jointly at bedside: clean, dry, and intact with zero strike-through drainage or bleeding. Steri-Strips in place.',
          'Surgical incision covered with silver-impregnated bordered foam dressing; clean and dry; margins marked.',
          'Incision clean and approximated with surgical staples; small 1 cm serosanguinous trace on gauze dressing (shadowed and dated).'
        ]
      },
      {
        key: 'drains_catheters',
        label: 'Drains, Tubes & Catheters',
        defaultValue: 'Jackson-Pratt (JP #1) drain situated in right upper quadrant on active bulb suction; draining 25 mL serosanguinous fluid. Foley catheter draining clear yellow urine.',
        options: [
          'Jackson-Pratt (JP #1) drain situated in right upper quadrant on active bulb suction; draining 25 mL serosanguinous fluid. Foley catheter draining clear yellow urine.',
          'No surgical drains present. Voiding spontaneously prior to PACU discharge.',
          'Bilateral hemovac drains on active spring suction draining minimal serosanguinous fluid; Foley patent.',
          'Incisional wound VAC running continuous negative pressure at -125 mmHg; airtight seal verified.'
        ]
      },
      {
        key: 'sedation_pain',
        label: 'Sedation & Post-Op Pain Score',
        defaultValue: 'Aldrete score 9/10. Easily rousable, alert, oriented x 4. Post-op pain reported as 3/10 aching at incision site; well controlled.',
        options: [
          'Aldrete score 9/10. Easily rousable, alert, oriented x 4. Post-op pain reported as 3/10 aching at incision site; well controlled.',
          'Drowsy but opens eyes to voice; oriented x 3; pain 4/10; oral PRN analgesia available per post-op protocol.',
          'Wide awake, oriented x 4; pain 2/10 with IV PCA pump functioning in demand mode.'
        ]
      },
      {
        key: 'postop_vitals',
        label: 'Arrival Post-Op Vital Signs',
        defaultValue: 'BP: 122/74, HR: 76 regular, RR: 16, SpO2: 98% on 2L NC, Temp: 98.2°F (36.8°C)',
        options: [
          'BP: 122/74, HR: 76 regular, RR: 16, SpO2: 98% on 2L NC, Temp: 98.2°F (36.8°C)',
          'BP: 134/80, HR: 84, RR: 18, SpO2: 99% on room air, Temp: 98.4°F',
          'BP: 110/68, HR: 72, RR: 14, SpO2: 97% on 2L NC, Temp: 97.9°F'
        ]
      }
    ],
    formats: {
      narrative: `Receiving Post-Op Patient Note (PACU to Floor):
At [Time], patient received on surgical unit: [Surgical Procedure & Anesthesia].
Bedside SBAR report and surgical count handoff exchanged with PACU RN. Two patient identifiers confirmed.
Immediate Surgical Assessment:
• SURGICAL DRESSING: [Surgical Site & Dressing Assessment]
• DRAINS & TUBES: [Drains, Tubes & Catheters]
• SEDATION & PAIN: [Sedation & Post-Op Pain Score]
• ARRIVAL VITALS: [Arrival Post-Op Vital Signs]
Patient safely transferred into bed via slide sheet with 3 staff members. Post-op vital sign schedule initiated (Q15 min x 4, Q30 min x 2, Q1H x 4). Incentive spirometer placed at bedside and initial coaching provided (10 breaths completed). Bilateral sequential compression devices (SCDs) reapplied and active. Post-operative surgeon orders verified and active. Call light in patient's hand.`,
      fdar: `Focus: Post-Operative Receiving / PACU Arrival
D (Data): [Surgical Procedure & Anesthesia]. PACU report received. Vitals on arrival: [Arrival Post-Op Vital Signs].
A (Action): Completed dual-RN arrival inspection. Assessed [Surgical Site & Dressing Assessment]. Verified [Drains, Tubes & Catheters]. Evaluated [Sedation & Post-Op Pain Score]. Initiated post-op vital sign protocol. Reapplied SCDs. Set up incentive spirometry.
R (Response): Patient resting comfortably, denying nausea. Surgical site intact without active bleeding. Pain controlled.`,
      soap: `S (Subjective): Patient states: "Surgery went well, just feel a little groggy and sore around the cuts." Denies chills or nausea.
O (Objective): [Surgical Procedure & Anesthesia]. [Arrival Post-Op Vital Signs]. [Surgical Site & Dressing Assessment]. [Drains, Tubes & Catheters]. [Sedation & Post-Op Pain Score].
A (Assessment): Stable post-operative recovery progressing normally on surgical acute floor.
P (Plan): Follow serial post-op vitals per protocol. Empty and record surgical drain output Q shift. Provide multimodal pain control. Encourage early mobilization when fully awake.`,
      checklist: `• Surgery & Source: [Surgical Procedure & Anesthesia]
• Dressing: [Surgical Site & Dressing Assessment]
• Drains: [Drains, Tubes & Catheters]
• Sedation / Pain: [Sedation & Post-Op Pain Score]
• Post-Op Vitals: [Arrival Post-Op Vital Signs]
• Interventions: Post-op vitals protocol begun, SCDs active, IS coaching done, call light in hand`
    }
  },

  {
    id: 'trans-receiving-icu',
    title: 'Receiving ICU / Step-Down Transfer Note (Downgrade)',
    category: 'transitions',
    subcategory: 'Receiving Patient',
    badge: 'ICU Downgrade',
    tags: ['ICU transfer', 'receiving', 'step-down', 'downgrade', 'telemetry', 'arrival', 'hemodynamic stability'],
    description: 'Documentation of patient arrival from ICU or Step-Down following clinical stabilization, transfer handoff, line audit, and floor care setup.',
    variables: [
      {
        key: 'transfer_reason',
        label: 'Clinical Course & Downgrade Reason',
        defaultValue: 'Transferred from Medical ICU following successful extubation and resolution of septic shock, downgraded to Telemetry floor status',
        options: [
          'Transferred from Medical ICU following successful extubation and resolution of septic shock, downgraded to Telemetry floor status',
          'Transferred from Cardiac ICU post-NSTEMI / PCI stabilization, cleared for step-down telemetry care',
          'Transferred from Neuro ICU following stabilization of subarachnoid hemorrhage, cleared for floor care',
          'Transferred from Surgical ICU following abdominal surgery, vasopressors weaned off 24 hours ago'
        ]
      },
      {
        key: 'telemetry_hemodynamics',
        label: 'Telemetry Rhythm & Hemodynamic Stability',
        defaultValue: 'Continuous telemetry established: Normal Sinus Rhythm (HR 72-84 bpm) without ectopy or pauses. Vasopressors successfully discontinued x 18 hours.',
        options: [
          'Continuous telemetry established: Normal Sinus Rhythm (HR 72-84 bpm) without ectopy or pauses. Vasopressors successfully discontinued x 18 hours.',
          'Telemetry shows Atrial Fibrillation with controlled ventricular rate (70-85 bpm). Hemodynamically stable.',
          'Sinus rhythm on telemetry with occasional premature ventricular contractions (PVCs). No chest pain or dizziness.'
        ]
      },
      {
        key: 'lines_meds',
        label: 'Lines & Medication Reconciliation',
        defaultValue: 'Right IJ Central Line remains in place (dressing clean and intact, Biopatch on, all lumens flush easily). Peripheral IV in Left Forearm patent. Maintenance fluids running per order.',
        options: [
          'Right IJ Central Line remains in place (dressing clean and intact, Biopatch on, all lumens flush easily). Peripheral IV in Left Forearm patent. Maintenance fluids running per order.',
          'Arterial line discontinued prior to ICU departure (hemostasis confirmed). 20G PIV in Right Forearm patent.',
          'PICC line in right basilic vein patent; ICU continuous drips successfully converted to oral floor medications.'
        ]
      },
      {
        key: 'arrival_vitals',
        label: 'Arrival Floor Vitals',
        defaultValue: 'BP: 124/76, HR: 78, RR: 16, SpO2: 97% on room air, Temp: 98.4°F (36.9°C)',
        options: [
          'BP: 124/76, HR: 78, RR: 16, SpO2: 97% on room air, Temp: 98.4°F (36.9°C)',
          'BP: 118/72, HR: 82, RR: 18, SpO2: 98% on 2L NC, Temp: 98.6°F',
          'BP: 130/80, HR: 74, RR: 16, SpO2: 96% on room air, Temp: 98.0°F'
        ]
      }
    ],
    formats: {
      narrative: `Receiving ICU Transfer Note (Downgrade to Floor):
At [Time], patient received on telemetry floor: [Clinical Course & Downgrade Reason].
Comprehensive bedside SBAR transfer handoff received from ICU RN.
Telemetry & Rhythm: [Telemetry Rhythm & Hemodynamic Stability].
Lines & Access: [Lines & Medication Reconciliation].
Arrival Vitals: [Arrival Floor Vitals].
Patient alert and oriented x 4. Skin survey performed: skin intact, no sacral pressure injury. Floor care plan initiated. Patient oriented to room and call bell system. Attending floor hospitalist notified of transfer arrival.`,
      fdar: `Focus: ICU Transfer Receiving / Step-Down Downgrade
D (Data): [Clinical Course & Downgrade Reason]. ICU handoff completed. Vitals: [Arrival Floor Vitals].
A (Action): Connected patient to wireless floor telemetry: [Telemetry Rhythm & Hemodynamic Stability]. Audited lines and infusions: [Lines & Medication Reconciliation]. Oriented to floor safety rules. Notified attending provider.
R (Response): Patient pleased with transition out of ICU. Alert, comfortable, and hemodynamically stable.`,
      soap: `S (Subjective): Patient states: "I'm so happy to be out of the ICU and into a regular room." Denies chest pain, dyspnea, or dizziness.
O (Objective): [Clinical Course & Downgrade Reason]. [Arrival Floor Vitals]. [Telemetry Rhythm & Hemodynamic Stability]. [Lines & Medication Reconciliation].
A (Assessment): Hemodynamically stable adult patient successfully downgraded from critical care to telemetry floor.
P (Plan): Continue continuous telemetry monitoring. Assess central line daily for necessity/removal. Coordinate physical therapy consult for progressive ambulation.`,
      checklist: `• Course/Downgrade: [Clinical Course & Downgrade Reason]
• Telemetry: [Telemetry Rhythm & Hemodynamic Stability]
• Lines/Tubes: [Lines & Medication Reconciliation]
• Arrival Vitals: [Arrival Floor Vitals]
• Floor Setup: Telemetry online, safety call bell within reach, attending notified`
    }
  },

  {
    id: 'trans-receiving-shift',
    title: 'Receiving Patient at Shift Change & Bedside Safety Audit',
    category: 'transitions',
    subcategory: 'Shift Receiving',
    badge: 'Shift Handover',
    tags: ['receiving', 'shift change', 'bedside report', 'joint check', 'safety audit', 'handoff'],
    description: 'Documentation of patient received at start of nursing shift, bedside SBAR verification, infusion pump check, and initial patient condition.',
    variables: [
      {
        key: 'handover_rn',
        label: 'Bedside Report Exchanged With',
        defaultValue: 'Bedside SBAR clinical report received from off-going registered nurse [RN Name], RN',
        options: [
          'Bedside SBAR clinical report received from off-going registered nurse [RN Name], RN',
          'Joint bedside handover completed with night-shift RN [RN Name]',
          'Comprehensive change-of-shift report conducted at bedside with patient actively participating'
        ]
      },
      {
        key: 'joint_pump_check',
        label: 'Dual-RN Infusion & Line Verification',
        defaultValue: 'Joint bedside verification performed: patient ID and allergy band verified; IV infusion bags, medication concentrations, and smart pump rates independently verified against MAR orders',
        options: [
          'Joint bedside verification performed: patient ID and allergy band verified; IV infusion bags, medication concentrations, and smart pump rates independently verified against MAR orders',
          'Dual verification of high-alert Heparin infusion completed: pump rate matched active provider order; line patent',
          'Saline locked peripheral IV inspected jointly: site soft, no erythema or tenderness; flushes easily'
        ]
      },
      {
        key: 'patient_baseline',
        label: 'Initial Patient Status & Safety Check',
        defaultValue: 'Patient awake, calm, and oriented x 4. Resting in bed in no acute distress. Bed in lowest locked position, call light in hand, 2 side rails up, path clear.',
        options: [
          'Patient awake, calm, and oriented x 4. Resting in bed in no acute distress. Bed in lowest locked position, call light in hand, 2 side rails up, path clear.',
          'Patient resting with eyes closed, easily rouses to voice, oriented x 4. Breathing unlabored on room air.',
          'Patient seated in bedside chair eating breakfast; pleasant and cooperative; call bell within reach.'
        ]
      },
      {
        key: 'shift_priorities',
        label: 'Key Shift Priorities & Plan of Care',
        defaultValue: 'Shift priorities identified: morning antibiotic administration at 0900, wound dressing change, physical therapy evaluation, and preparation for potential discharge tomorrow.',
        options: [
          'Shift priorities identified: morning antibiotic administration at 0900, wound dressing change, physical therapy evaluation, and preparation for potential discharge tomorrow.',
          'Priorities: strict I&O monitoring, repeat basic metabolic panel at 1100, and pain management reassessment.',
          'Priorities: serial neuro checks Q2H, blood glucose checks AC/HS, and ambulation in hallway x 2.'
        ]
      }
    ],
    formats: {
      narrative: `Shift Change Receiving & Bedside Safety Note:
Patient received at change of shift. [Bedside Report Exchanged With].
Two patient identifiers confirmed at bedside.
Joint Safety & Line Audit: [Dual-RN Infusion & Line Verification]. Emergency bedside airway and suction equipment verified functional at head of bed.
Initial Clinical Status: [Patient Baseline Status & Safety Check].
Care Plan: [Key Shift Priorities & Plan of Care].
Patient invited to ask questions during bedside report and verbalized agreement with shift goals. Plan of care established for current shift.`,
      fdar: `Focus: Change of Shift Receiving & Bedside Safety Audit
D (Data): Care transitioned at start of shift. [Bedside Report Exchanged With]. Patient comfortable and stable.
A (Action): Completed joint safety check: [Dual-RN Infusion & Line Verification]. Audited emergency bedside equipment. Evaluated [Patient Baseline Status & Safety Check]. Established [Key Shift Priorities & Plan of Care].
R (Response): Patient expressed confidence in oncoming nurse. Stated needs are currently met. Safety environment confirmed.`,
      soap: `S (Subjective): Patient states: "I had a peaceful night. I'm ready for physical therapy today."
O (Objective): [Bedside Report Exchanged With]. [Dual-RN Infusion & Line Verification]. [Patient Baseline Status & Safety Check]. Emergency equipment operational.
A (Assessment): Clinical care smoothly transitioned at shift change; baseline stability verified.
P (Plan): [Key Shift Priorities & Plan of Care]. Hourly purposeful rounding initiated.`,
      checklist: `• Handoff: [Bedside Report Exchanged With]
• Joint Check: [Dual-RN Infusion & Line Verification]
• Initial Status: [Patient Baseline Status & Safety Check]
• Priorities: [Key Shift Priorities & Plan of Care]
• Environment: Bed locked/low, call light in hand, suction/O2 verified`
    }
  }
];



