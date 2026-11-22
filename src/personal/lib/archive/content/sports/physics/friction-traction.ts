import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Friction is the quiet force behind almost every sporting action that involves gripping, pushing off, or stopping: a sprinter\'s spikes biting into the track, a tennis shoe cutting a sharp turn, a cyclist braking before a corner. A deceptively simple equation governs nearly all of it.',
  nutshell: [
    'The maximum friction force available is \\(F = \\mu N\\): a **coefficient of friction (μ)** multiplied by the force pressing the surfaces together.',
    'μ depends on the two materials in contact (shoe and surface, tyre and track), it is a property of the pairing, not of the mass or speed involved.',
    '**Static friction** (not yet sliding) is usually higher than **kinetic friction** (already sliding), which is why a skidding tyre has less grip than one on the edge of skidding.',
    'Studs, spikes and tread patterns work by increasing the *effective* friction available, especially on soft or wet ground, more than by changing the underlying μ.',
  ],
  sections: [
    {
      id: 'the-equation',
      title: 'The friction equation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_{\text{friction, max}} = \mu N`,
          where: [
            { sym: '\\mu', def: 'The coefficient of friction between the two surfaces (no units, a pure ratio)' },
            { sym: 'N', def: 'The normal force: how hard the surfaces are pressed together, usually close to body weight on flat ground' },
          ],
          caption: 'This single formula explains why heavier athletes are not automatically grippier (both F and N scale with mass, so μ, the ratio, stays the material property that matters), and why the surface itself (grass, clay, tartan track, ice) dominates how much grip is available.',
        },
        {
          t: 'table',
          head: ['Surface pairing', 'Typical μ (illustrative)', 'What it means in practice'],
          rows: [
            ['Running spike on a tartan track', '~1.0–1.5', 'High grip: spikes can approach or exceed the force of gravity itself in available friction'],
            ['Rubber-soled shoe on dry grass', '~0.5–0.6', 'Moderate grip; enough for most cutting and acceleration'],
            ['Rubber-soled shoe on wet grass', '~0.3–0.4', 'Noticeably reduced; a common cause of slips in field sports'],
            ['Car/F1 tyre on dry tarmac', '~1.0–1.8 (F1 tyres, warm)', 'Very high performance grip, see [tyres and grip](@sports/f1/physics-theory/tyres-grip)'],
            ['Ice skate blade on ice', '~0.005–0.03', 'Extremely low: this is the entire point of skates, trading grip for near-frictionless glide'],
          ],
          caption: 'Figures vary by exact conditions, temperature and equipment; they are included to show the right order of magnitude and relative comparison, not as precise lab values.',
        },
      ],
    },
    {
      id: 'static-kinetic',
      title: 'Static versus kinetic friction',
      blocks: [
        {
          t: 'plot',
          title: 'Friction force as you try to push harder (illustrative)',
          x: [0, 10],
          y: [0, 8],
          xLabel: 'force you apply (N)',
          yLabel: 'friction force resisting you (N)',
          curves: [
            { f: (x: number) => Math.min(x, 6), from: 0, to: 6, label: 'static region: friction matches your push' },
            { f: () => 4.5, from: 6, to: 10, label: 'kinetic region: once sliding, friction drops and stays roughly constant', dashed: true },
          ],
          points: [{ x: 6, y: 6, label: 'breakaway point' }],
          caption: 'Below a threshold, static friction exactly matches whatever force you apply, keeping you still (or gripping). Push past the threshold and the surface starts to slide, kinetic friction kicks in, usually lower than the peak static value, which is why a skidding tyre or a slipping foot often feels like it suddenly "lets go".',
        },
        {
          t: 'metric',
          name: 'the coefficient of friction (μ)',
          shows: 'How much grip is available between two specific surfaces in contact, as a ratio of the maximum sideways (or braking) force to the force pressing them together. It is the single number that determines whether an athlete, a ball, or a vehicle can accelerate, turn or stop as hard as their muscles or engine would otherwise allow.',
          eli5: 'Rub your hand across a dry table, then across a wet, soapy one. The dry table resists your hand sliding much more, that resistance, relative to how hard you are pressing down, is what μ measures. A high μ means a "sticky", grippy pairing of surfaces; a low μ means a slippery one.',
          higher: 'More available grip for a given weight on the surface, more force can be converted into acceleration, cornering or braking before the surface starts to slip. This is why athletes change footwear for different surfaces (spikes for track, studs for grass) and why F1 teams obsess over tyre temperature, which strongly affects μ.',
          lower: 'Less available grip, the same push or turn that worked on a high-μ surface causes a slip or skid on a low-μ one. This is why rain, ice, worn tyres or the wrong shoe for a surface are such common causes of slips, falls and crashes across sport.',
          typical: 'μ depends on the specific pairing of materials (and temperature, wetness, and surface wear), not on either surface alone, the same running shoe can have very different grip on dry grass, wet grass, and an indoor court, which is exactly why athletes own different shoes for different surfaces.',
        },
      ],
    },
    {
      id: 'why-studs',
      title: 'Why studs, spikes and tread patterns work',
      blocks: [
        {
          t: 'p',
          text: 'Studs and spikes do not primarily change the coefficient of friction between rubber and ground, they work by **penetrating** soft surfaces (grass, synthetic turf) so the athlete is gripping against a mechanical interlock with the ground itself, rather than relying on surface friction alone, which is far more effective on soft, deformable ground than a flat sole.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Track spikes', body: 'Short metal pins (often 3–9 mm) bite into the synthetic track surface, giving sprinters far more forward-push grip than a flat sole could achieve on the same surface.' },
            { title: 'Football/rugby studs', body: 'Penetrate turf to resist sideways slip during sharp cuts; stud length and shape are chosen for the specific pitch firmness (longer for soft, wet pitches, shorter for firm, dry ones).' },
            { title: 'Tyre tread (wet-weather)', body: 'Grooves channel water away from the contact patch to prevent hydroplaning, a flat "slick" tyre (like a dry-weather F1 tyre) actually has more contact area and grip in the dry, but is dangerous in the wet, which is why F1 switches to grooved wet-weather tyres, see [tyres and grip](@sports/f1/physics-theory/tyres-grip).' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why ice skates glide', text: 'A long-standing explanation for why ice is slippery is that pressure from the blade melts a thin film of water, which then lubricates the glide, but modern research suggests the dominant effect is actually that ice itself has a naturally slippery, disordered molecular surface layer (similar to a liquid) even without added pressure, with friction-generated heat from the glide also contributing. It remains an active area of physics research.' },
      ],
    },
  ],
  sources: ['McGinnis, P. M. (2020). *Biomechanics of Sport and Exercise* (4th ed.). Human Kinetics.', 'Persson, B. N. J. (2015). The dependency of adhesion and friction on electrostatic attraction. *Journal of Chemical Physics* (for ice friction research context).'],
  related: ['sports/f1/physics-theory/tyres-grip', 'sports/physics/collisions-energy', 'mathematics/algebra/equations-inequalities'],
}

export default guide
