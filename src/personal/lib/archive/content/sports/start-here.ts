import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Every sport is applied physics, physiology and, increasingly, data science. A thrown ball obeys the same equations as a satellite; a Formula 1 car is a rolling aerodynamics experiment; a sprinter\'s start is a nervous-system reaction-time test; a baseball trade is a statistics problem. This shelf pulls back the curtain on the maths and science most fans never see, with diagrams you can drag and explore.',
  nutshell: [
    'Two ways in: shelves for specific sports (**Formula 1**, with football and basketball to follow) and four shelves of sports science that apply to any sport: physics, human performance, analytics, and equipment and technology.',
    'Every interactive diagram uses real (sometimes simplified-for-teaching) physics: change a number and the picture genuinely recalculates.',
    'Many pages link back to the [mathematics shelf](@mathematics/start-here) for the underlying tools: quadratics for trajectories, exponentials for fatigue, statistics for analytics.',
    'This is a teaching shelf, not betting or performance advice, treat figures as illustrative of real orders of magnitude, not a substitute for real coaching or engineering data.',
  ],
  sections: [
    {
      id: 'taste',
      title: 'A taste: launch something',
      blocks: [
        { t: 'p', text: 'Try the angle and speed sliders below, this is the exact physics behind a basketball shot, a javelin throw, or a golf drive, covered in full on [projectile motion](@sports/physics/projectile-motion).' },
        { t: 'sports-viz', viz: 'projectile' },
      ],
    },
    {
      id: 'paths',
      title: 'Suggested route',
      blocks: [
        { t: 'p', text: '**1. The physics of sport.** The mechanics behind any throw, kick, spin or swim.' },
        {
          t: 'links',
          items: [
            { path: 'sports/physics/projectile-motion' },
            { path: 'sports/physics/spin-rotation', note: 'Why a curveball curves.' },
            { path: 'sports/physics/drag-fluid-dynamics' },
          ],
        },
        { t: 'p', text: '**Formula 1** has the deepest shelf here: aerodynamics, tyres, DRS, a circuit atlas of every track on the calendar, drifting, rules and penalties. Start at [Formula 1](@sports/f1/start-here).' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/physics-theory/downforce-aerodynamics' },
            { path: 'sports/f1/physics-theory/tyres-grip' },
            { path: 'sports/f1/physics-theory/drs-overtaking' },
            { path: 'sports/f1/racecraft/race-strategy' },
            { path: 'sports/f1/atlas/compare-circuits', note: 'Every circuit on the calendar, mapped and analysed.' },
          ],
        },
        { t: 'p', text: '**2. Human performance.** The body as the engine.' },
        {
          t: 'links',
          items: [
            { path: 'sports/physiology/energy-systems' },
            { path: 'sports/physiology/vo2-training-zones' },
          ],
        },
        { t: 'p', text: '**3. Analytics and technology.** How data and equipment changed sport.' },
        {
          t: 'links',
          items: [
            { path: 'sports/analytics/sabermetrics-moneyball' },
            { path: 'sports/technology/equipment-science' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The first sports scientist?', text: 'In 1968 at the Mexico City Olympics, at 2,240 m altitude, with roughly 23% less oxygen than sea level, endurance performances suffered while short, explosive events (including Bob Beamon\'s long jump world record, which stood for 23 years) were helped by thinner air offering less drag. It was one of the first times the whole world watched altitude physics decide an Olympics; see [altitude, heat and weather](@sports/technology/altitude-weather).' },
      ],
    },
  ],
  sources: ['McGinnis, P. M. (2020). *Biomechanics of Sport and Exercise* (4th ed.). Human Kinetics.', 'Katz, D. L. (2016). *The Physics of Sports*. World Scientific.'],
  related: ['sports/physics/projectile-motion', 'sports/f1/physics-theory/downforce-aerodynamics', 'mathematics/start-here'],
}

export default guide
