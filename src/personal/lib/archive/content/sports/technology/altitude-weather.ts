import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The air itself is part of every outdoor sport\'s equipment, whether anyone thinks about it or not, its density changes how far a ball flies and how hard an F1 car\'s wings bite, its oxygen content changes how an athlete\'s body performs, and its temperature and moisture change everything from a marathon\'s risk profile to a cricket ball\'s swing.',
  nutshell: [
    'Air is **thinner at altitude**: less oxygen for the body, but also less aerodynamic drag, a genuine double-edged sword for performance, favouring different events in different ways.',
    'High **heat and humidity** impair performance and raise real medical risk, through reduced sweat-cooling efficiency and cardiovascular strain, a serious concern in endurance events especially.',
    'F1 teams actively adjust wing angles and tyre choices for cooler or hotter, wetter or drier conditions, because air density and track temperature measurably change both downforce and tyre grip.',
    'Several major marathons and endurance events are deliberately scheduled or routed to avoid the worst heat, altitude or humidity risk for exactly these physiological reasons.',
  ],
  sections: [
    {
      id: 'altitude',
      title: 'Altitude: a genuine double-edged sword',
      blocks: [
        {
          t: 'p',
          text: 'At altitude, air pressure (and so air density and available oxygen per breath) is lower, famously, Mexico City sits at roughly 2,240 m, with about 23% less oxygen available per breath than sea level. This cuts both ways for athletic performance, in opposite directions depending on the event.',
        },
        {
          t: 'table',
          head: ['Event type', 'Effect of altitude', 'Why'],
          rows: [
            ['Short sprints, jumps, throws', 'Often slightly helped', 'Thinner air means less aerodynamic drag on the athlete (or thrown object) for the same muscular effort, see [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics)'],
            ['Middle- and long-distance endurance events', 'Clearly hurt, usually substantially', 'Reduced oxygen availability directly limits the aerobic energy system (see [energy systems](@sports/physiology/energy-systems)) that these events depend on most'],
            ['Team sports with repeated sprints (football, rugby)', 'Generally hurt, especially for visiting teams unacclimatised to the altitude', 'Combines reduced oxygen availability with sustained high-intensity demands throughout a match'],
          ],
        },
        { t: 'callout', tone: 'fact', title: '1968 Mexico City: the clearest real-world test', text: 'The 1968 Summer Olympics, held at Mexico City\'s altitude, remain one of the clearest natural experiments in sports science: Bob Beamon\'s long jump of 8.90m shattered the existing world record by over half a metre and stood for 23 years, widely attributed partly to the thinner air\'s reduced drag; meanwhile, distance-running medals were markedly dominated by athletes from high-altitude training backgrounds (several East African nations), and times in longer events were generally slower than sea-level competitions of the same era.' },
        {
          t: 'p',
          text: 'This same altitude effect is also deliberately exploited in training, not just competition: many elite endurance athletes train at altitude for weeks at a time specifically to trigger physiological adaptations (including increased red blood cell production) before returning to race at sea level, the basis of "altitude training" and "live high, train low" methodologies, connected to the VO2 max adaptations covered in [VO2 max and training zones](@sports/physiology/vo2-training-zones).',
        },
      ],
    },
    {
      id: 'heat-humidity',
      title: 'Heat and humidity',
      blocks: [
        {
          t: 'p',
          text: 'The body\'s primary cooling mechanism during exercise is sweat evaporation. High humidity directly undermines this: the air is already close to saturated with water vapour, so sweat evaporates more slowly, cooling the body less effectively for the same sweat output, meaning heat and humidity together are considerably more dangerous than either alone.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Wet bulb globe temperature (WBGT)', body: 'A combined measure accounting for temperature, humidity, wind and radiant heat (not just air temperature alone), widely used by endurance-event organisers to set heat-related warnings or cancellation thresholds, since air temperature alone is a poor proxy for real physiological heat stress.' },
            { title: 'Exertional heat illness', body: 'A genuine medical risk, not just a performance issue, ranges from heat cramps and heat exhaustion up to heat stroke, a medical emergency; several marathons and endurance events have recorded serious incidents and occasional fatalities in high-heat, high-humidity conditions.' },
            { title: 'Scheduling as mitigation', body: 'Many major marathons (Boston, London, New York, Chicago) are deliberately scheduled in spring or autumn specifically to avoid peak summer heat and humidity risk in their respective climates.' },
          ],
        },
      ],
    },
    {
      id: 'motorsport-weather',
      title: 'Weather and motorsport',
      blocks: [
        {
          t: 'p',
          text: 'Air density (affected by temperature, humidity and altitude together) directly changes the downforce and drag an F1 car\'s aerodynamics generate, see the \\(\\rho\\) (air density) term in [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics). Hotter, "thinner" air produces less downforce and less engine power for the same car set-up, which is one of several reasons teams run detailed weather and track-temperature models throughout a race weekend.',
        },
        {
          t: 'table',
          head: ['Condition', 'Effect on an F1 car and race'],
          rows: [
            ['Higher track/air temperature', 'Reduced air density lowers downforce and engine power slightly; tyres reach their operating window faster but risk overheating and degrading faster too, see [tyres and grip](@sports/f1/physics-theory/tyres-grip)'],
            ['Rain', 'Dramatically reduces available grip, forcing a switch to intermediate or full wet tyres with deep tread to channel water away and prevent aquaplaning'],
            ['High altitude circuits (e.g. Mexico City, at over 2,200 m)', 'Thinner air reduces both downforce and engine power noticeably, often requiring teams to run unusually large wing angles just to recover some of the lost downforce'],
          ],
        },
      ],
    },
  ],
  sources: ['Levine, B. D. (2002). Intermittent hypoxic training: Fact and fancy. *High Altitude Medicine & Biology*, 3(2), 177–193.', 'Racinais, S., et al. (2015). Consensus recommendations on training and competing in the heat. *British Journal of Sports Medicine*, 49(18), 1164–1173.', 'Katz, J. (2006). *Race Car Aerodynamics* (2nd ed.). Bentley Publishers.'],
  related: ['sports/physiology/vo2-training-zones', 'sports/f1/physics-theory/downforce-aerodynamics', 'sports/physics/drag-fluid-dynamics'],
}

export default guide
