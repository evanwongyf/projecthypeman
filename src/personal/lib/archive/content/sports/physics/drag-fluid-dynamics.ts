import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Air and water both resist motion through them, drag, and because both humans and vehicles move through one or the other constantly, drag quietly shapes an enormous amount of sport: why cyclists tuck into a line, why swimmers shave their bodies, and why a sprinter genuinely does run faster with the wind at their back.',
  nutshell: [
    'Drag force grows with the **square of speed**: doubling your speed roughly quadruples the air or water resistance fighting you.',
    'Drag also scales with **frontal area** and a shape-dependent **drag coefficient**, which is why aerodynamic tucks, skinsuits and streamlined helmets matter so much at speed.',
    '**Drafting** (riding or running directly behind someone) can cut the drag an athlete feels by a large fraction, because the leader has already disturbed the air.',
    'Water is roughly 800 times denser than air, which is why drag dominates swimming far more than running, and why tiny technique changes matter enormously in the pool.',
  ],
  sections: [
    {
      id: 'equation',
      title: 'The drag equation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_{\text{drag}} = \tfrac{1}{2}\,\rho\,C_D\,A\,v^2`,
          where: [
            { sym: '\\rho', def: 'Density of the fluid (air or water)' },
            { sym: 'C_D', def: 'Drag coefficient: how aerodynamic the shape is (lower is more streamlined)' },
            { sym: 'A', def: 'Frontal area facing the direction of travel' },
            { sym: 'v', def: 'Speed relative to the fluid' },
          ],
          caption: 'The same equation behind an F1 car\'s drag (see [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics)) and the Magnus lift force (see [spin and rotation](@sports/physics/spin-rotation)), all aerodynamic forces share this structure, differing only in which coefficient and geometry apply.',
        },
        {
          t: 'metric',
          name: 'the drag coefficient (C_D)',
          shows: 'How aerodynamically "slippery" a shape is, independent of its actual size, a streamlined teardrop and a flat board of the same frontal area experience very different drag because of their shape alone, and C_D is the number that captures that difference.',
          eli5: 'Push your open hand, palm-first, through water in a bath, then turn it sideways (thin edge first) and push again. Same hand, same effort to move it the same speed, but one direction feels like pushing through syrup and the other barely resists at all, that difference, after accounting for the size of your hand, is what the drag coefficient measures.',
          higher: 'More drag for a given size and speed, a blunt, flat-fronted, turbulence-inducing shape (an upright cyclist, a splayed-out swimmer) fights the fluid harder, costing more energy to maintain the same speed.',
          lower: 'Less drag for the same size and speed, a streamlined, tapered shape (a tucked downhill skier, a time-trial cyclist\'s position, a swimmer\'s streamlined push-off) lets more speed be maintained for the same effort, which is why so much of elite technique coaching in speed sports is about minimising C_D, not just building more raw power.',
          typical: 'A time-trial cyclist in an aerodynamic tuck can roughly halve their C_D·A compared with an upright riding position; elite swimmers\' full-body "super suits" (now banned in competition, see [equipment science](@sports/technology/equipment-science)) were found to meaningfully reduce effective drag, which is exactly why they were controversial enough to be banned after the 2008–09 record-breaking seasons.',
        },
      ],
    },
    {
      id: 'drafting',
      title: 'Drafting',
      blocks: [
        {
          t: 'p',
          text: 'A leading athlete or vehicle pushes air (or water) out of the way, leaving a lower-pressure, slower-moving pocket directly behind them. An athlete riding, running or swimming in that pocket experiences meaningfully less drag, they are "drafting".',
        },
        {
          t: 'table',
          head: ['Context', 'Reported drag reduction (illustrative, from published studies)', 'Why it matters'],
          rows: [
            ['Cycling, directly behind one rider', 'Often cited in the range of 25–40% less drag for the trailing rider at road-race speeds', 'A major reason road cycling is such a tactical, pack-based sport, breaking away alone is far more costly than it looks'],
            ['Cycling, mid-pack in a large group (peloton)', 'Studies of wind-tunnel and on-road data suggest riders deep in a large peloton can save 40%+ versus a lone rider', 'Explains why the peloton can reliably reel in lone breakaway riders late in a race'],
            ['Running, directly behind another runner', 'Smaller but real effect, more significant at higher speeds (sprinting) than in distance running', 'Marathon pacers and "pacemaker" rabbits partly serve this purpose, especially in world-record attempts'],
            ['Motorsport ("slipstreaming")', 'Substantial straight-line speed and fuel-saving benefit, historically up to several km/h of extra top speed', 'A major tactical factor before DRS, see [DRS and overtaking](@sports/f1/physics-theory/drs-overtaking)'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Eliud Kipchoge\'s sub-2-hour marathon', text: 'In the 2019 INEOS 1:59 Challenge (an exhibition, not an official record event), Eliud Kipchoge ran a marathon in 1:59:40 using a rotating team of pacers running in a precise formation specifically designed, with input from aerodynamicists, to shield him from air resistance, alongside a car projecting a laser pace line. It is a direct, large-scale demonstration of how much drafting can save over a long effort.' },
      ],
    },
    {
      id: 'water',
      title: 'Why water is a different game',
      blocks: [
        {
          t: 'p',
          text: 'Water is roughly 800 times denser than air at sea level. Looking at the drag equation, that density term (ρ) means the same speed through water generates vastly more drag than through air, which is why swimming speeds (roughly 2 m/s for elite sprinters) are so much lower than running speeds (roughly 10–12 m/s), despite swimmers being extremely fit, powerful athletes.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Body position', body: 'A horizontal, streamlined body position with minimal frontal area is worth far more in swimming than in almost any other sport, because of water\'s density, a small postural error costs disproportionately more energy.' },
            { title: 'Shaving and suits', body: 'Shaving body hair and wearing tight-fitting swimsuits reduce skin friction drag by a small but, at elite level, meaningful amount, enough that competitive swimmers have shaved down before major meets for decades.' },
            { title: 'The push-off and streamline', body: 'Elite swimmers spend a notable fraction of each lap in an underwater "streamline" position off the wall, precisely because that is the position with the lowest drag coefficient of the entire stroke cycle.' },
          ],
        },
      ],
    },
  ],
  sources: ['Kyle, C. R., & Burke, E. (1984). Improving the racing bicycle. *Mechanical Engineering*, 106(9), 34–45.', 'Blocken, B., et al. (2018). Aerodynamic drag in cycling pelotons: New insights by CFD simulation and wind tunnel testing. *Journal of Wind Engineering and Industrial Aerodynamics*, 179, 319–337.', 'Toussaint, H. M., & Truijens, M. (2005). Biomechanical aspects of peak performance in human swimming. *Animal Biology*, 55(1), 17–40.'],
  related: ['sports/f1/physics-theory/downforce-aerodynamics', 'sports/physics/spin-rotation', 'sports/technology/equipment-science'],
}

export default guide
