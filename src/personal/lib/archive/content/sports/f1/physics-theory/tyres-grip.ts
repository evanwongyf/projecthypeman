import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Every single force an F1 car generates, braking, accelerating, cornering, even the benefit of all that downforce, ultimately has to pass through four contact patches of rubber, each roughly the size of an A4 sheet of paper. Tyres are arguably the single most strategically important component on the car, which is why Formula 1 has built entire sporting rules around forcing teams to think about them.',
  nutshell: [
    'Grip comes from the **contact patch**: the small area of tyre actually touching the track at any moment, and the friction (see [friction and traction](@sports/physics/friction-traction)) available there.',
    'F1 mandates multiple tyre **compounds** (soft, medium, hard, plus wet-weather tyres) with a fixed, well-understood trade-off: softer means more grip but faster degradation.',
    'Tyres have an **operating window** of temperature, too cold and they lack grip ("graining"); too hot and they wear out fast or lose performance ("overheating" or "blistering").',
    'Every dry race (barring exceptional circumstances) must use at least two different dry compounds, a rule specifically designed to force strategic variety.',
  ],
  sections: [
    {
      id: 'contact-patch',
      title: 'The contact patch',
      blocks: [
        {
          t: 'p',
          text: 'An F1 tyre is inflated to a relatively low pressure and runs on a wide, slightly curved tread. At any instant, only a small, roughly oval area, the contact patch, actually touches the track, and essentially all of the car\'s acceleration, braking and cornering force passes through that patch via friction, exactly as described in [friction and traction](@sports/physics/friction-traction).',
        },
        {
          t: 'math',
          tex: String.raw`F_{\text{grip, max}} \approx \mu \,(W + F_{\text{downforce}})`,
          caption: 'The maximum cornering or braking force available is (approximately) the tyre\'s friction coefficient multiplied by the total vertical load pressing it onto the track, the car\'s weight plus whatever downforce the aerodynamics are generating at that speed. This is exactly why downforce and tyre grip are inseparable topics: more downforce directly raises the available grip from the same tyres.',
        },
      ],
    },
    {
      id: 'compounds',
      title: 'Compounds: the softer-faster, harder-longer trade-off',
      blocks: [
        { t: 'sports-viz', viz: 'tyre-strategy' },
        {
          t: 'table',
          head: ['Compound', 'Relative grip', 'Relative durability', 'Typical use'],
          rows: [
            ['Soft (marked red)', 'Highest', 'Lowest, degrades fastest', 'Qualifying, short stints, overtaking attempts'],
            ['Medium (marked yellow)', 'Moderate', 'Moderate', 'A common balanced choice for a middle race stint'],
            ['Hard (marked white)', 'Lowest of the dry compounds', 'Highest, degrades slowest', 'Long stints, especially on hot, abrasive tracks'],
            ['Intermediate (marked green)', 'Designed for light rain / drying track', 'N/A, different rubber and tread entirely', 'Light rain, or a drying track after heavier rain'],
            ['Wet / full wet (marked blue)', 'Designed for standing water', 'N/A, deep tread channels water away', 'Heavy rain, to prevent aquaplaning'],
          ],
          caption: 'The compound names (soft/medium/hard) are relative within each race weekend: the tyre supplier selects three specific compounds, from a wider range, for each circuit based on its demands, so "the hard tyre" at one circuit may be physically softer than "the soft tyre" at another.',
        },
        {
          t: 'metric',
          name: 'tyre degradation',
          shows: 'How much slower a tyre makes the car go, lap after lap, as the rubber wears and its internal structure heats and changes through a stint, the central number behind every pit-stop strategy decision.',
          eli5: 'Think of a pencil eraser. Fresh out of the packet it grips and erases cleanly. After heavy use it gets smooth, rounded and far less effective, not broken, just gradually worn past its best. A tyre does something similar: it starts at peak grip and gradually loses performance, lap after lap, as the rubber compound and tread wear down.',
          higher: 'Faster lap-time loss stint after stint, typically true of softer compounds, hotter track temperatures, and more aggressive driving (more wheelspin, more sliding, more braking heat). A high-degradation tyre forces an earlier pit stop to avoid losing more time staying out than a stop would cost.',
          lower: 'Slower lap-time loss, typically true of harder compounds and smoother, more tyre-conscious driving. A low-degradation tyre can be run for a much longer stint, which is why a "hard tyre, one-stop" strategy is sometimes faster overall than a "soft tyre, two-stop" one, despite the hard tyre being slower on a single fresh lap.',
          typical: 'Illustrative orders of magnitude: a soft compound might lose roughly 0.05–0.15 seconds per lap of accumulated degradation, a hard compound perhaps a third to a half of that, the exact numbers vary enormously by circuit, weather and that season\'s specific tyre construction, which is exactly why teams run their own detailed tyre models rather than relying on any single public number.',
        },
      ],
    },
    {
      id: 'operating-window',
      title: 'The operating window',
      blocks: [
        {
          t: 'p',
          text: 'Tyre rubber is a complex material whose grip depends strongly on temperature, there is a specific range (the "operating window") where a given compound performs best, and performance drops off meaningfully on either side of it.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Too cold', body: '"Graining": the tyre surface can tear into small rubber granules rather than gripping cleanly, especially common on tyres that have not been warmed up enough, or in cool, low-grip conditions, it actually feels and looks like the tyre is covered in tiny beads of rubber.' },
            { title: 'Too hot', body: '"Overheating" (temporary loss of grip that can recover) or "blistering" (permanent damage, where trapped heat causes the tread to bubble and tear), both push a driver to deliberately manage tyre temperature mid-stint, sometimes backing off pace specifically to cool the tyres down.' },
            { title: 'Just right', body: 'Tyres are chemically designed to grip best within a specific temperature band (commonly cited in the roughly 90–110°C surface range for slicks, though this varies by compound and supplier), pre-race tyre blankets and practice laps of weaving exist specifically to get tyres into this window before it matters.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A single supplier, by design', text: 'Since 2007, F1 has used a single spec tyre supplier (currently Pirelli) for the entire grid, specifically instructed by the sport to produce tyres that degrade meaningfully over a stint, a deliberate design choice to inject strategic variety and additional overtaking opportunity into races, rather than supplying the most durable tyre technically possible.' },
      ],
    },
    {
      id: 'mandatory-rule',
      title: 'Why two compounds are mandatory',
      blocks: [
        {
          t: 'p',
          text: 'In a dry race, every car must use at least two different dry-weather compounds during the race (barring wet conditions, which suspend the rule). This single regulation is one of the most consequential in the sport: it guarantees every driver must pit at least once, turning tyre strategy into a mandatory tactical puzzle rather than an optional one, covered in full in [race strategy and pit stops](@sports/f1/racecraft/race-strategy).',
        },
      ],
    },
  ],
  sources: ['Pirelli Motorsport. *F1 Tyre Technical Guide* (published annually).', 'FIA. *Formula 1 Sporting Regulations*, Article 30 (Tyres).', 'Katz, J. (2006). *Race Car Aerodynamics* (2nd ed.). Bentley Publishers.'],
  related: ['sports/f1/racecraft/race-strategy', 'sports/physics/friction-traction', 'sports/f1/physics-theory/downforce-aerodynamics'],
}

export default guide
