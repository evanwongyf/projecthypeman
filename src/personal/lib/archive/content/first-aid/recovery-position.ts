import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'An unresponsive person who is breathing on their own is at real risk of their tongue blocking the airway, or of choking on vomit, if left on their back. Turning them onto their side, the recovery position, lets gravity keep the airway clear while you wait for help, without you having to hold their head in place the whole time.',
  nutshell: [
    'Use it for someone who is **unresponsive but breathing normally** and has already completed the primary survey.',
    'Do not use it on someone you suspect has a spinal injury unless the airway is genuinely at risk, in that case, protecting the airway still comes first.',
    'The position keeps the airway open and lets fluid drain from the mouth rather than being inhaled.',
    'Recheck breathing regularly while waiting for help; be ready to start CPR if breathing stops or becomes abnormal.',
    'If already lying on their front (prone) and breathing normally, it is usually fine to leave them as they are rather than rolling them over unnecessarily.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'The method',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Kneel beside them', body: 'Remove glasses and bulky items from pockets. Straighten both legs.' },
            { title: 'Position the near arm', body: 'Place the arm nearest you at a right angle to the body, elbow bent, palm facing up.' },
            { title: 'Bring the far arm across', body: 'Take the far arm and bring it across the chest, holding the back of their hand against the cheek nearest you.' },
            { title: 'Bend the far knee', body: 'With your other hand, grasp the far leg just above the knee and pull it up, keeping the foot on the ground.' },
            { title: 'Roll them toward you', body: 'Pull on the bent knee to roll the person toward you and onto their side, using their hand against their cheek to support and protect the head as they turn.' },
            { title: 'Adjust the position', body: 'Tilt the head back slightly to keep the airway open, and adjust the top leg so the hip and knee are bent at right angles to stop them rolling further.' },
            { title: 'Monitor', body: 'Stay with them, recheck breathing regularly, and keep monitoring until help arrives.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'If you suspect a spinal injury',
          text: 'Moving someone with a possible spinal injury carries real risk, so the usual advice is to keep them still and support the head and neck by hand instead, unless their airway is actually blocked or they start vomiting, in which case protecting the airway takes priority over the small added risk of moving them, because an unprotected airway is the more immediate threat to life.',
        },
      ],
    },
  ],
}

export default guide
