import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A sprain (a stretched or torn ligament) and a fracture (a broken bone) can feel surprisingly similar in the first few minutes, and first aid cannot reliably tell them apart, an X-ray can. What matters in the field is the same regardless: support the injury, limit movement, and judge whether it needs urgent care.',
  nutshell: [
    '**You often cannot tell a bad sprain from a fracture by feel alone**, when in doubt, treat it as a possible fracture.',
    '**RICE**: Rest, Ice, Compression, Elevation, the standard first care for most sprains and strains.',
    'Suspect a **fracture** with: deformity, inability to bear weight or use the limb, a grinding sensation, or the limb looking visibly out of normal alignment.',
    '**Do not try to straighten or push a deformed limb back into place**, support it in the position found.',
    'An **open fracture** (bone visible or wound over the fracture site) needs a sterile dressing over the wound and urgent emergency care, do not push the bone back in.',
  ],
  sections: [
    {
      id: 'tell-apart',
      title: 'Sprain, strain or fracture?',
      blocks: [
        {
          t: 'diagram',
          title: 'What the injury might be, and what to do',
          nodes: [
            { id: 'injury', label: 'Joint or limb injury after a fall, twist or blow', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 185 },
            { id: 'q1', label: 'Visible deformity, grinding, or bone through skin?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 185 },
            { id: 'fracture', label: 'Treat as a fracture: support, don’t straighten, immobilise, urgent care', shape: 'rect', tone: 'lavender', col: 0, row: 2, w: 190 },
            { id: 'q2', label: 'Can they bear weight or use it normally?', shape: 'diamond', tone: 'teal', col: 2, row: 2, w: 165 },
            { id: 'rice', label: 'RICE: likely sprain or strain', shape: 'rect', tone: 'mint', col: 2, row: 3, w: 155 },
            { id: 'worse', label: 'Worsening, or no better after a few days?', shape: 'diamond', tone: 'teal', col: 2, row: 4, w: 165 },
            { id: 'seen', label: 'Get it checked', shape: 'rect', tone: 'orange', col: 2, row: 5, w: 140 },
          ],
          edges: [
            { from: 'injury', to: 'q1' },
            { from: 'q1', to: 'fracture', label: 'yes', tone: 'lavender' },
            { from: 'q1', to: 'q2', label: 'unclear / no', tone: 'teal' },
            { from: 'q2', to: 'rice', label: 'yes, with pain', tone: 'mint' },
            { from: 'q2', to: 'fracture', label: 'no, cannot', tone: 'lavender' },
            { from: 'rice', to: 'worse' },
            { from: 'worse', to: 'seen', label: 'yes', tone: 'orange' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'RICE, Rest', def: 'Stop using the injured part; avoid weight-bearing if it is a lower limb.' },
            { term: 'RICE, Ice', def: 'A cold pack wrapped in cloth, 15-20 minutes at a time, for the first 24-48 hours, to limit swelling.' },
            { term: 'RICE, Compression', def: 'A firm (not tight) elastic bandage, checking circulation beyond it regularly.' },
            { term: 'RICE, Elevation', def: 'Raise the injured part above heart level where possible to help drain swelling.' },
          ],
        },
      ],
    },
    {
      id: 'sling',
      title: 'Supporting an arm injury: the sling',
      blocks: [{ t: 'bandage', id: 'sling' }],
    },
    {
      id: 'joint',
      title: 'Supporting a joint: the figure-eight spica wrap',
      blocks: [{ t: 'bandage', id: 'joint-spica' }],
    },
    {
      id: 'splinting',
      title: 'Splinting principles',
      blocks: [
        {
          t: 'list',
          items: [
            'Support the joint above and below the injury, not just the injury site itself.',
            'A splint can be improvised from a rolled magazine, a stick, or even the body itself (strapping an injured leg to the uninjured one).',
            'Check the fingers or toes beyond the splint for warmth, colour and sensation before and after splinting, and loosen immediately if circulation looks affected.',
            'Pad bony areas before splinting to prevent pressure injury.',
            'A splint reduces pain and prevents further injury during transport, it does not replace medical assessment and treatment.',
          ],
        },
      ],
    },
  ],
}

export default guide
