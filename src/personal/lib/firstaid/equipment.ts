// What is in a well-stocked first aid kit, and what each item is actually for. No usable
// public-domain photo dataset of first aid equipment could be found (checked GitHub, object-
// detection datasets and open repositories), so each item is shown as an original schematic
// icon rather than a photo, consistent, clear, and honestly not a real product photo.

export type EquipmentItem = {
  id: string
  name: string
  category: string
  use: string
  howToUse: string
  note?: string
}

export const CATEGORIES = ['Wound care', 'Bandages and wraps', 'Tools', 'Protection', 'Medication', 'Splinting and immobilisation', 'Emergency'] as const

export const EQUIPMENT: EquipmentItem[] = [
  { id: 'adhesive-bandage', name: 'Adhesive bandage (plaster)', category: 'Wound care', use: 'Small cuts, scrapes and blisters', howToUse: 'Clean and dry the wound first, then apply so the pad sits directly over it without touching the sticky edges.', note: 'Replace daily or whenever it gets wet or dirty.' },
  { id: 'gauze-pad', name: 'Sterile gauze pad', category: 'Wound care', use: 'Covering larger wounds, absorbing blood or fluid', howToUse: 'Open the sterile packet without touching the pad face, lay it directly over the wound, and secure with tape or a bandage.', note: 'Never remove a pad that has soaked through, add more on top.' },
  { id: 'non-stick-dressing', name: 'Non-adherent dressing', category: 'Wound care', use: 'Burns, grazes and wounds likely to weep', howToUse: 'The shiny or coated side goes against the wound so it does not stick to healing tissue when changed.' },
  { id: 'antiseptic-wipe', name: 'Antiseptic wipe', category: 'Wound care', use: 'Cleaning the skin around a wound before dressing it', howToUse: 'Wipe outward from the wound edge, not into it, and use a fresh wipe for each pass.', note: 'Do not use antiseptic inside a deep wound, clean water or saline is gentler on tissue.' },
  { id: 'triangular-bandage', name: 'Triangular bandage', category: 'Bandages and wraps', use: 'Arm slings, securing dressings, improvised padding', howToUse: 'Folded flat it becomes a broad or narrow bandage; opened fully it makes a sling. See the sling technique below.' },
  { id: 'roller-gauze', name: 'Roller (conforming) gauze bandage', category: 'Bandages and wraps', use: 'Holding a dressing in place with light, even pressure', howToUse: 'Wrap in overlapping spiral turns, each covering about half of the one before, from the far end of the limb toward the body.' },
  { id: 'elastic-bandage', name: 'Elastic (crepe) bandage', category: 'Bandages and wraps', use: 'Supporting sprains and strains, holding splints in place', howToUse: 'Wrap firmly but not tightly, you should be able to slip two fingers under it, and fingers or toes beyond it should stay warm and pink.' },
  { id: 'adhesive-tape', name: 'Medical adhesive tape', category: 'Bandages and wraps', use: 'Securing dressing edges and bandage ends', howToUse: 'Tape across, not around, a limb where possible, so it cannot act like a tourniquet if swelling occurs.' },
  { id: 'scissors', name: 'Trauma shears', category: 'Tools', use: 'Cutting clothing or bandages quickly and safely', howToUse: 'The blunt tip slides under fabric against the skin without cutting it, so clothing can be removed fast to see an injury.' },
  { id: 'tweezers', name: 'Fine-point tweezers', category: 'Tools', use: 'Removing splinters, stingers or debris from a wound', howToUse: 'Grip as close to the skin as possible and pull straight out at the angle it went in, not at an angle that could snap it.' },
  { id: 'thermometer', name: 'Digital thermometer', category: 'Tools', use: 'Checking for a fever or hypothermia', howToUse: 'Follow the device’s instructions for the site used (oral, underarm, ear); allow it to finish its full reading cycle.' },
  { id: 'cold-pack', name: 'Instant cold pack', category: 'Tools', use: 'Reducing swelling and pain from sprains, strains and bruises', howToUse: 'Squeeze or strike to activate, wrap in a thin cloth (never apply directly to skin), and use for 15-20 minutes at a time.' },
  { id: 'gloves', name: 'Disposable gloves', category: 'Protection', use: 'Protecting both the helper and the injured person from infection', howToUse: 'Put on before any contact with blood or body fluids; remove by peeling from the wrist without touching the outside, and wash hands after.' },
  { id: 'cpr-mask', name: 'CPR face shield / pocket mask', category: 'Protection', use: 'Giving rescue breaths without direct mouth-to-mouth contact', howToUse: 'Place over the person’s mouth and nose, seal the edges, and breathe through the one-way valve.' },
  { id: 'eye-wash', name: 'Sterile eyewash / saline', category: 'Wound care', use: 'Flushing a chemical, dust or debris from the eye', howToUse: 'Tilt the head to the affected side and pour gently from the inner corner of the eye outward, for several minutes for a chemical splash.' },
  { id: 'pain-reliever', name: 'Pain and fever relief tablets', category: 'Medication', use: 'Mild pain, fever and headache', howToUse: 'Follow the label dose exactly; see the Medication reference for how acetaminophen and NSAIDs differ.', note: 'Check for allergies, current medicines and medical conditions before giving anything to someone else.' },
  { id: 'antihistamine', name: 'Oral antihistamine', category: 'Medication', use: 'Mild allergic reactions, itching, hives, a runny nose', howToUse: 'Taken by mouth; does not replace epinephrine for a severe reaction (see Anaphylaxis).', note: 'Not a treatment for anaphylaxis on its own.' },
  { id: 'epipen', name: 'Epinephrine auto-injector', category: 'Medication', use: 'Severe allergic reaction (anaphylaxis)', howToUse: 'Press firmly against the outer thigh (through clothing if needed) until it clicks, hold for several seconds, then call emergency services immediately.', note: 'Prescribed for a specific person; using someone else’s requires real urgency.' },
  { id: 'sam-splint', name: 'SAM (malleable) splint', category: 'Splinting and immobilisation', use: 'Supporting a suspected fracture or sprain', howToUse: 'Bend it to the shape of the limb before applying, support the joint above and below the injury, and secure with a bandage without cutting off circulation.' },
  { id: 'arm-sling', name: 'Arm sling (pre-made or triangular bandage)', category: 'Splinting and immobilisation', use: 'Supporting an injured arm, wrist or collarbone', howToUse: 'See the sling technique below for the full triangular-bandage method.' },
  { id: 'rigid-collar', name: 'Cervical collar', category: 'Splinting and immobilisation', use: 'Limiting neck movement after a suspected spinal injury', howToUse: 'Specialist equipment: used by trained responders, and only after checking the airway and breathing first.', note: 'Do not attempt to fit one without training; focus on keeping the head and neck still by hand instead.' },
  { id: 'emergency-blanket', name: 'Emergency (space) blanket', category: 'Emergency', use: 'Preventing heat loss in shock or cold exposure', howToUse: 'Wrap around the whole body, shiny side in to reflect body heat, and secure so it stays in place.' },
  { id: 'tourniquet', name: 'Commercial tourniquet', category: 'Emergency', use: 'Life-threatening limb bleeding that direct pressure has not controlled', howToUse: 'Apply 5-7cm above the wound (never on a joint), tighten until bleeding stops, and note the exact time applied, it will be needed by other responders.', note: 'A last resort after direct pressure has failed, not a first response to ordinary bleeding.' },
  { id: 'first-aid-kit-box', name: 'First aid kit container', category: 'Emergency', use: 'Keeping everything together, dry and easy to find', howToUse: 'Store somewhere accessible but away from children, check and restock contents every few months, and note any expiry dates.' },
]

export function itemsByCategory(cat: string): EquipmentItem[] {
  return EQUIPMENT.filter((e) => e.category === cat)
}
