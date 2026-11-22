import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A fracture is a break in a bone, and a bone X-ray is the standard way to find and describe one. The same few habits apply to every bone from a finger to a femur: take two views, look at the whole bone and the joints either side, and describe what you see in a fixed vocabulary so another clinician can picture it without seeing the film.',
  nutshell: [
    'Always take **two views at right angles** (for example AP and lateral); a break can hide in one view.',
    'Include **the joint above and below** a long-bone fracture; there may be a second injury.',
    'Read with **ABCS**: **A**lignment, **B**one density, **C**artilage (joint spaces) and **S**oft tissues.',
    'Describe a fracture by **site, pattern, displacement, angulation** and whether it is **open** or **closed**, and whether it enters a joint.',
    'Some fractures are **occult**: invisible on the first film (the scaphoid is the classic). A normal film does not exclude a fracture if the patient is tender.',
  ],
  sections: [
    {
      id: 'abcs',
      title: 'The ABCS checklist',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'A', title: 'Alignment', body: 'Do the bones line up smoothly? Follow the edges of the bone. A step or a break in an arc suggests a fracture or a dislocation.' },
            { tag: 'B', title: 'Bone', body: 'Trace the whole cortex (the white outer shell) round the bone. Look for lines, steps, bulges and areas of whiter (impacted) or darker (lytic) bone.' },
            { tag: 'C', title: 'Cartilage', body: 'The gap between bones in a joint should be even. Widening or narrowing, or a bone out of its socket, means a ligament or joint injury.' },
            { tag: 'S', title: 'Soft tissues', body: 'Swelling, a displaced fat pad or air in the soft tissue can be the only clue to a subtle fracture or an open wound.' },
          ],
        },
      ],
    },
    {
      id: 'normal',
      title: 'A normal wrist',
      lead: 'Find each structure, then try Quiz me.',
      blocks: [{ t: 'med-chart', viz: 'imaging', case: 'bone-normal' }],
    },
    {
      id: 'describe',
      title: 'How to describe a fracture',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Words', 'Example'],
          rows: [
            ['Site', 'Which bone, and which part: proximal, mid-shaft, distal', 'Distal third of the radius'],
            ['Pattern', 'Transverse, oblique, spiral, comminuted (many pieces), greenstick (children), avulsion', 'Transverse'],
            ['Displacement', 'How far the fragments have shifted, sideways or lengthways', 'Displaced by half a shaft width, shortened'],
            ['Angulation', 'The angle between the fragments, named by where the tip points', 'Dorsal angulation'],
            ['Open or closed', 'Does the bone break through the skin?', 'Closed'],
            ['Joint', 'Does the fracture line enter the joint surface?', 'Extra-articular'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Eponyms', text: 'A Colles fracture is a break of the distal radius with the lower fragment tilted towards the back of the hand (dorsal), often after falling on an outstretched hand. The “dinner fork” deformity gets its name from the shape of the wrist. The AP view shows the shift and shortening; the lateral view shows the tilt.' },
      ],
    },
    {
      id: 'case',
      title: 'A distal radius fracture',
      lead: 'The red boxes mark the fracture, a small avulsion from the ulna and soft-tissue swelling. Click each to read it.',
      blocks: [{ t: 'med-chart', viz: 'imaging', case: 'bone-fracture' }],
    },
    {
      id: 'children',
      title: 'Children and special situations',
      blocks: [
        {
          t: 'list',
          items: [
            '**Growth plates.** In children the soft cartilage plate near a joint (the physis) can look like a fracture and can itself be fractured. The Salter-Harris classification grades these injuries.',
            '**Greenstick and buckle fractures.** Children’s bones bend before they break, giving partial breaks.',
            '**Non-accidental injury.** Certain fracture patterns in a young child, especially without a convincing history, must prompt a safeguarding review. Hospitals have child-protection processes for this.',
            '**Occult fractures.** If a patient is tender over the scaphoid but the film is normal, they are often treated as if there is a fracture and imaged again, or with MRI or CT.',
            '**Stress fractures.** Repeated loading (runners, recruits) can cause a hairline crack that only shows on later films or on MRI.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Not for real injuries', text: 'If you think you or someone else has broken a bone, keep the limb still, support it, and get it checked. These pages teach the pattern of what you see on an X-ray; they cannot diagnose an injury.' },
      ],
    },
  ],
  sources: [
    'Raby, N., Berman, L., and de Lacey, G. (2005). Accident and Emergency Radiology: A Survival Guide (2nd ed.). Saunders.',
    'Salter, R. B., and Harris, W. R. (1963). Injuries involving the epiphyseal plate. Journal of Bone and Joint Surgery.',
    'Royal College of Radiologists. Standards for interpretation of plain radiographs.',
  ],
  related: ['medicine/chart-reading/chest-xray', 'medicine/chart-reading/mri-basics', 'medicine/chart-reading/practice-workspace'],
}

export default guide
