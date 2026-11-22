import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sport increasingly measures itself to a precision the naked eye simply cannot match, a photo finish splitting hundredths of a second, a ball-tracking system predicting a tennis ball\'s path to the millimetre, GPS units logging every metre a footballer runs. This technology has quietly changed not just how sport is officiated, but how it is trained and understood.',
  nutshell: [
    'The **photo finish** camera, which captures a continuous vertical strip of the finish line over time rather than a single instant, has decided Olympic medals by thousandths of a second.',
    '**Ball-tracking systems** (Hawk-Eye and similar) use multiple synchronised cameras to reconstruct a ball\'s 3D trajectory, predicting its path with sub-millimetre accuracy in testing.',
    '**GPS and inertial tracking** units, worn by players in training and (increasingly) matches, quantify distance, speed and acceleration loads that used to be purely qualitative coaching judgements.',
    'Video-assisted officiating (VAR and similar) has improved decision accuracy by most measures but introduced new, genuinely debated trade-offs around flow, timing and fan experience.',
  ],
  sections: [
    {
      id: 'photo-finish',
      title: 'The photo finish',
      blocks: [
        {
          t: 'p',
          text: 'A photo-finish camera does not take a normal photograph at all, it captures a single, extremely thin vertical slice of the finish line continuously over time, building up an image where the horizontal axis represents *time*, not space. Every competitor appears in the image at the exact moment their body crossed that one-pixel-wide line, which is what lets officials read times down to the thousandth of a second from a single image.',
        },
        {
          t: 'callout', tone: 'fact', title: 'A dead heat resolved by technology', text: 'At the 2012 London Olympics, the men\'s 100m freestyle swimming event could not be separated by the naked eye between Michael Phelps and Chad le Clos for silver (behind Nathan Adrian\'s gold), with both recording 47.80 seconds, but swimming timing uses touchpads, not photo-finish images, and the system still resolved the race order to within its measurement precision. Photo finishes themselves have separated Olympic sprint medals by margins too small for any human judge to call reliably, which is precisely why the technology exists.',
        },
      ],
    },
    {
      id: 'ball-tracking',
      title: 'Ball-tracking: Hawk-Eye and relatives',
      blocks: [
        {
          t: 'flow',
          title: 'How ball-tracking reconstructs a 3D path',
          nodes: [
            { label: 'Multiple synchronised cameras around the court/pitch', tone: 'data' },
            { label: 'Each camera tracks the ball\'s 2D position in its own view', tone: 'process' },
            { label: 'Triangulation combines views into a 3D trajectory', sub: 'the same geometric idea behind GPS positioning', tone: 'process' },
            { label: 'Physics model predicts the path forward/backward in time', sub: 'including where it bounced', tone: 'model' },
            { label: 'Decision (in/out, LBW, goal-line) rendered with an estimated margin of error', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Sport', 'System', 'What it decides'],
          rows: [
            ['Tennis', 'Hawk-Eye (and similar systems)', 'Whether a ball landed in or out, down to a published sub-10-mm margin of error in independent testing, now used for fully automated line-calling at several major tournaments'],
            ['Cricket', 'Hawk-Eye / ball-tracking for DRS', 'LBW (leg-before-wicket) decisions, projecting the ball\'s predicted path after impact with the pad'],
            ['Football (soccer)', 'Goal-line technology', 'Whether the whole ball crossed the goal line, communicated to the referee\'s watch within roughly one second'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Independent testing, not just manufacturer claims', text: 'International Tennis Federation-commissioned independent testing of Hawk-Eye found its average error to be under 5 mm in controlled conditions, an impressively small figure, though still a reminder that these systems report a prediction with a margin of error, not a perfect, error-free measurement, which is why some governing bodies publish the tested accuracy figures alongside the technology\'s use.' },
      ],
    },
    {
      id: 'player-tracking',
      title: 'Player tracking in training and matches',
      blocks: [
        {
          t: 'p',
          text: 'Wearable GPS and inertial-sensor units, now standard in professional football, rugby and Australian rules football training and (in many competitions) matches, continuously log position, speed, acceleration and deceleration, feeding directly into the [load management](@sports/analytics/load-management-injury) systems covered elsewhere on this shelf.',
        },
        {
          t: 'checklist',
          items: [
            'Total distance covered, and distance covered at high speed specifically (often considered more performance-relevant than total distance alone)',
            'Number and intensity of accelerations and decelerations, now understood to be a major, separate contributor to fatigue and injury risk beyond distance alone',
            'Heart-rate response, layered with GPS data to distinguish physical output from physiological strain',
            'Individual player load history, compared against their own baseline rather than generic team averages',
          ],
        },
      ],
    },
    {
      id: 'var',
      title: 'Video-assisted officiating: a genuine trade-off',
      blocks: [
        {
          t: 'p',
          text: 'Video-assisted refereeing systems (VAR in football, similar systems across many sports) generally improve decision accuracy by most studied measures, but introduce real costs: added delay disrupting a sport\'s flow, decisions overturned on marginal technical grounds that can feel disconnected from the spirit of the original rule, and ongoing public debate about how and when the technology should intervene.',
        },
        {
          t: 'table',
          head: ['Benefit generally found in research and governing-body reviews', 'Cost or criticism commonly raised'],
          rows: [
            ['Meaningfully higher rate of correct decisions on reviewed incidents', 'Added stoppage time and disrupted match flow and celebration'],
            ['Reduced high-profile, clearly incorrect decisions reaching headlines', 'Very fine margins (e.g. millimetre offside calls) can feel disproportionate to the error being corrected'],
            ['Greater perceived fairness in high-stakes matches, in many fan surveys', 'Debate persists over exactly which categories of decision should be reviewable at all'],
          ],
          caption: 'This is a genuinely live, ongoing debate across many sports\' governing bodies, not a settled question, different sports and competitions have made different choices about how much video review to use and how to apply it.',
        },
      ],
    },
  ],
  sources: ['International Tennis Federation. (2008). *ITF Approved Player Line Calling Systems: Independent Test Report*.', 'FIFA. (2018). *Video Assistant Referee (VAR) Protocol and Implementation*.', 'Buchheit, M., & Simpson, B. M. (2017). GPS and sport-specific running loads. *International Journal of Sports Physiology and Performance*, 12(S2), 161–170.'],
  related: ['sports/analytics/load-management-injury', 'sports/f1/racecraft/race-strategy', 'sports/analytics/expected-goals'],
}

export default guide
