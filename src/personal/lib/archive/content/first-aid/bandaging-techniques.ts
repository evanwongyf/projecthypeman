import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Six techniques cover almost every bandaging situation a first aider meets: a sling for a supported arm, a spiral wrap for holding a dressing on a limb, a figure-eight for a joint that needs support while still bending, a pressure dressing for serious bleeding, a head bandage, and a joint spica wrap. Each is shown here step by step, animated, so you can watch the whole sequence or work through it at your own pace.',
  nutshell: [
    'All six techniques share the same underlying checks: **snug but not tight**, and **check circulation beyond the bandage**, colour, warmth, sensation.',
    'A spiral wrap moves from **far to near** (away from the heart, toward it) to avoid trapping swelling below the bandage.',
    'A figure-eight crossing pattern supports a joint while still allowing some movement, unlike a straight wrap.',
    'Practise these on a willing volunteer, a cushion, or your own limb before you need them for real, the diagrams teach the pattern, but your hands need the repetition.',
    'None of this replaces proper training or medical care for anything beyond a minor injury.',
  ],
  sections: [
    {
      id: 'sling',
      title: '1. Triangular bandage arm sling',
      lead: 'For a supported, injured arm, wrist or suspected collarbone injury.',
      blocks: [{ t: 'bandage', id: 'sling' }],
    },
    {
      id: 'spiral',
      title: '2. Spiral wrap',
      lead: 'For holding a dressing in place along a limb with light, even pressure.',
      blocks: [{ t: 'bandage', id: 'spiral-wrap' }],
    },
    {
      id: 'figure8',
      title: '3. Figure-eight ankle wrap',
      lead: 'For supporting a sprained or injured ankle.',
      blocks: [{ t: 'bandage', id: 'figure-eight-ankle' }],
    },
    {
      id: 'pressure',
      title: '4. Pressure dressing',
      lead: 'For a wound that is bleeding seriously.',
      blocks: [{ t: 'bandage', id: 'pressure-dressing' }],
    },
    {
      id: 'head',
      title: '5. Circular (recoil) head bandage',
      lead: 'For a scalp wound or securing a head dressing.',
      blocks: [{ t: 'bandage', id: 'head-wrap' }],
    },
    {
      id: 'spica',
      title: '6. Joint figure-eight (spica) wrap',
      lead: 'For supporting an elbow or knee while allowing some bend.',
      blocks: [{ t: 'bandage', id: 'joint-spica' }],
    },
  ],
}

export default guide
