import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A dozen circuits carry most of Formula 1’s history and character. Each has corners known by name, a reason drivers love or fear it, and a set of demands that reward a particular kind of car. This tour goes lap by lap through the famous ones.',
  nutshell: [
    '**Monaco** is the slow, narrow street classic where qualifying decides the race; **Monza** is the low-drag “Temple of Speed”.',
    '**Spa-Francorchamps** is the longest track on the calendar, with Eau Rouge–Raidillon and its own weather; **Suzuka** is a figure of eight with a bridge and the Esses.',
    '**Silverstone** hosted the first World Championship race in 1950 and has the high-speed Maggotts–Becketts–Chapel sequence.',
    '**Interlagos** runs anticlockwise over hills in São Paulo; **Marina Bay** is the original night race; **Baku** mixes a huge straight with a castle section.',
    '**Zandvoort** has steeply banked corners in the dunes; **COTA** opens with a steep uphill turn 1; **Albert Park** and the **Red Bull Ring** round out the tour.',
    'Lap lengths and corner counts below are rounded: layouts are revised, and sources count corners differently.',
  ],
  sections: [
    {
      id: 'at-a-glance',
      title: 'At a glance',
      blocks: [
        {
          t: 'table',
          head: ['Circuit', 'Country', 'Approx. length', 'Approx. corners', 'Type', 'Signature'],
          rows: [
            ['Monaco', 'Monaco', '3.3 km', '19', 'Street', 'Grand Hotel hairpin, tunnel, Swimming Pool'],
            ['Spa-Francorchamps', 'Belgium', '7.0 km', '19', 'Permanent', 'Eau Rouge–Raidillon, Pouhon, Blanchimont'],
            ['Monza', 'Italy', '5.8 km', '11', 'Permanent', 'Parabolica, Lesmos, long straights'],
            ['Suzuka', 'Japan', '5.8 km', '18', 'Permanent', 'S Curves, Degner, Spoon, 130R'],
            ['Silverstone', 'Great Britain', '5.9 km', '18', 'Permanent', 'Copse, Maggotts–Becketts–Chapel'],
            ['Interlagos', 'Brazil', '4.3 km', '15', 'Permanent', 'Senna S, anticlockwise, hills'],
            ['Marina Bay', 'Singapore', '4.9 km', '19', 'Street', 'Night race, heat, walls'],
            ['Baku', 'Azerbaijan', '6.0 km', '20', 'Street', 'Castle section, very long straight'],
            ['Zandvoort', 'Netherlands', '4.3 km', '14', 'Permanent', 'Banked corners, dunes'],
            ['Circuit of the Americas', 'USA', '5.5 km', '20', 'Permanent', 'Uphill turn 1, Esses'],
            ['Albert Park', 'Australia', '5.3 km', '14', 'Park', 'Lakeside, fast chicanes'],
            ['Red Bull Ring', 'Austria', '4.3 km', '10', 'Permanent', 'Short lap, steep climb to Remus'],
          ],
          caption: 'Figures rounded from official circuit information for recent layouts; check the current season’s guide for exact values.',
        },
      ],
    },
    {
      id: 'classics',
      title: 'The old classics: Monaco, Spa, Monza, Silverstone',
      blocks: [
        {
          t: 'example',
          title: 'Monaco: a lap of the principality',
          lines: [
            { label: 'Sainte Dévote', text: 'A tight right at the end of the short pit straight; first-lap collisions are common here.' },
            { label: 'Beau Rivage', text: 'A climb up the hill towards Massenet and Casino Square, the car going light over the crest.' },
            { label: 'Mirabeau and the hairpin', text: 'Downhill to Mirabeau, then the Grand Hotel hairpin (formerly Loews, later Fairmont), the slowest corner in F1 at around 50 km/h, needing maximum steering lock.' },
            { label: 'Portier and the tunnel', text: 'A right onto the seafront and into the tunnel, the fastest part of the lap, flat out in a curve, from light into shade.' },
            { label: 'Nouvelle Chicane and Tabac', text: 'Heavy braking out of the tunnel into the chicane, the one realistic overtaking spot, then the fast left at Tabac.' },
            { label: 'Swimming Pool to Anthony Noghès', text: 'Quick direction changes past the pool, then La Rascasse and the final right onto the straight.' },
            { label: 'Why it matters', text: 'Grand prix racing has run here since 1929 and in the championship since 1950. The prestige is huge and passing almost impossible, which is why the organisers required two pit stops in 2025 to try to create more racing.' },
          ],
        },
        {
          t: 'example',
          title: 'Spa-Francorchamps: the Ardennes rollercoaster',
          lines: [
            { label: 'La Source', text: 'A tight hairpin straight after the start, followed by a steep descent.' },
            { label: 'Eau Rouge–Raidillon', text: 'A left-right-left at the bottom of the valley that compresses the car and then climbs steeply and blindly. Modern cars take it flat in the dry, but it still demands total commitment. Run-off at Raidillon was enlarged after the fatal Formula 2 accident of Anthoine Hubert in 2019.' },
            { label: 'Kemmel Straight to Les Combes', text: 'A long uphill run, the main slipstream and overtaking zone, into the Les Combes chicane.' },
            { label: 'Bruxelles, Pouhon, Fagnes', text: 'Downhill through Bruxelles to Pouhon, a fast, double-apex left, then the Fagnes chicane.' },
            { label: 'Stavelot, Blanchimont, Bus Stop', text: 'Fast curves back up the hill, Blanchimont at full speed, and the slow Bus Stop chicane before the line.' },
            { label: 'Why it matters', text: 'At about 7 km it is the longest track on the calendar, and its size means it can rain on one part of the lap while another is dry. The current layout dates from 1979, shortened from a much longer road course.' },
          ],
        },
        {
          t: 'example',
          title: 'Monza: the Temple of Speed',
          lines: [
            { label: 'Variante del Rettifilo', text: 'A tight right-left chicane after the longest straight; a frequent turn-1 tangle.' },
            { label: 'Curva Grande', text: 'A long, flat-out right-hander.' },
            { label: 'Variante della Roggia', text: 'A second chicane, and a braking zone for overtaking.' },
            { label: 'Lesmo 1 and 2', text: 'Two quick rights where the car needs grip it has given away for straight-line speed.' },
            { label: 'Variante Ascari', text: 'A fast left-right-left chicane, then a long straight.' },
            { label: 'Parabolica (Curva Alboreto)', text: 'The long, opening right onto the main straight, renamed in 2021 after Michele Alboreto. Exit speed here is carried the whole length of the straight.' },
            { label: 'Why it matters', text: 'Opened in 1922, Monza has the highest average lap speeds of the season and hosts most Italian Grands Prix. Teams bring their lowest-drag wings. The 1971 race was won by 0.01 s, and the podium overhangs the track so the tifosi can gather beneath it.' },
          ],
        },
        {
          t: 'example',
          title: 'Silverstone: where the championship began',
          lines: [
            { label: 'History', text: 'A former wartime RAF airfield, Silverstone hosted the first World Championship race on 13 May 1950.' },
            { label: 'Abbey to Village', text: 'Since 2011 the start-finish straight is between Club and Abbey; the lap opens with fast Abbey and Farm, then slow Village and The Loop.' },
            { label: 'Brooklands, Luffield, Woodcote', text: 'A slow, long-radius complex that rewards traction.' },
            { label: 'Copse', text: 'A very fast right taken at high speed, where wheel-to-wheel racing is fearsome.' },
            { label: 'Maggotts–Becketts–Chapel', text: 'A flowing high-speed sequence of left-right changes, among the hardest tests of an aerodynamic platform anywhere.' },
            { label: 'Hangar Straight to Stowe, Vale and Club', text: 'A long straight, a fast right at Stowe, then the slow Vale and Club to finish.' },
            { label: 'Why it matters', text: 'Fast corners load the tyres heavily, so tyre wear and wind direction on an exposed airfield both matter.' },
          ],
        },
      ],
    },
    {
      id: 'drivers-tracks',
      title: 'Drivers’ tracks: Suzuka, Interlagos, Zandvoort',
      blocks: [
        {
          t: 'example',
          title: 'Suzuka: the figure of eight',
          lines: [
            { label: 'Layout', text: 'Designed by John (Hans) Hugenholtz and owned by Honda, it is a figure of eight: the track passes over itself on a bridge.' },
            { label: 'S Curves', text: 'A rhythmic run of linked bends straight after turns 1 and 2. A small error in the first ruins the rest.' },
            { label: 'Dunlop and Degner', text: 'A fast uphill left, then the two Degner rights, the first very quick and narrow, with gravel waiting.' },
            { label: 'Hairpin and Spoon', text: 'Under the bridge to the hairpin, then the long, double-apex Spoon curve onto the back straight.' },
            { label: '130R and the Casio Triangle', text: '130R is a fast left once named for its 130 m radius, now taken flat; the Casio Triangle chicane follows before the line.' },
            { label: 'Why it matters', text: 'Drivers rate it among the hardest tracks. It saw the title-deciding Senna–Prost collisions in 1989 (at the chicane) and 1990 (at turn 1).' },
          ],
        },
        {
          t: 'example',
          title: 'Interlagos: hills and an anticlockwise lap',
          lines: [
            { label: 'Senna S', text: 'A downhill left-right after the start, named after Ayrton Senna, leading onto the Reta Oposta straight.' },
            { label: 'Descida do Lago to Ferradura', text: 'Down to the lake, then the long horseshoe Ferradura.' },
            { label: 'Infield', text: 'Pinheirinho, Bico de Pato and the fast left at Mergulho in a twisty middle sector.' },
            { label: 'Junção and the climb', text: 'Junção leads onto the long, uphill, curving run to the line, full throttle and a big slipstream.' },
            { label: 'Why it matters', text: 'Formally the Autódromo José Carlos Pace. The anticlockwise direction loads drivers’ necks the opposite way. In 2008 Lewis Hamilton passed Timo Glock on the final lap to win the title by a point.' },
          ],
        },
        {
          t: 'example',
          title: 'Zandvoort: banking in the dunes',
          lines: [
            { label: 'Tarzanbocht', text: 'Turn 1, a long right-hand hairpin and the best overtaking spot.' },
            { label: 'Hugenholtzbocht', text: 'Turn 3, steeply banked (around 19°), named after Hans Hugenholtz, who also designed Suzuka.' },
            { label: 'Scheivlak', text: 'A fast, blind, downhill right over a crest.' },
            { label: 'Arie Luyendykbocht', text: 'The banked final corner onto the straight, taken flat.' },
            { label: 'Why it matters', text: 'The track returned to F1 in 2021 after decades away, rebuilt with banking to allow different lines. Sand blown from the dunes can coat the surface. Organisers have announced the 2026 race as the last under the current arrangement.' },
          ],
        },
      ],
    },
    {
      id: 'modern',
      title: 'Modern venues: Marina Bay, Baku, COTA',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Marina Bay', body: 'F1’s first night race (2008), lit by floodlights around the harbour, crossing the Anderson Bridge. Ninety-minute-plus races in high heat and humidity drain drivers physically. A 2023 change removed the slow section under the old Bay Grandstand, shortening the lap.', tag: 'Singapore' },
            { title: 'Baku City Circuit', body: 'Since 2016 (first as the European Grand Prix). The lap runs past the Old City walls through a section only a few metres wide, then along a flat-out seafront run of around 2 km. Restarts and slipstreams have produced several chaotic races.', tag: 'Azerbaijan' },
            { title: 'Circuit of the Americas', body: 'Opened in 2012 near Austin. The run to turn 1 climbs steeply to a blind left-hander with a wide entry. The Esses (turns 3–6) were inspired by Maggotts–Becketts, and the long multi-apex turns 16–18 nod to Istanbul Park. Its surface has a reputation for bumps.', tag: 'USA' },
          ],
        },
      ],
    },
    {
      id: 'others',
      title: 'Albert Park and the Red Bull Ring',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Albert Park, Melbourne', body: 'Park roads around a lake, in use since 1996 and often the season opener. A 2021–22 redesign removed the old turns 9–10 chicane, creating a fast left-right sweep and a longer flat-out section.', tag: 'Australia' },
            { title: 'Red Bull Ring, Spielberg', body: 'Formerly the Österreichring and the A1-Ring, back on the calendar since 2014. Only ten corners and a lap of just over a minute; the climb to Remus (turn 3) is a key braking zone. Its tight track limits once led to more than a thousand reported infringements in a single race weekend.', tag: 'Austria' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Track names change', text: 'Corner names honour sponsors, drivers and landmarks, and some change: Monaco’s hairpin has carried several hotel names, and Monza’s Parabolica is officially Curva Alboreto. Turn numbers also shift when a layout is revised.' },
      ],
    },
    {
      id: 'compare',
      title: 'What the tracks demand',
      blocks: [
        {
          t: 'table',
          head: ['Demand', 'Most extreme examples', 'Why'],
          rows: [
            ['Low drag', 'Monza, Baku, Las Vegas', 'Long time at full throttle'],
            ['High downforce', 'Monaco, Marina Bay, Hungaroring', 'Many slow and medium corners'],
            ['High-speed balance', 'Silverstone, Suzuka, Spa sector 2', 'Fast direction changes'],
            ['Braking', 'Monza, Montréal, Baku', 'Repeated stops from very high speed'],
            ['Driver fitness', 'Marina Bay', 'Heat, humidity, a long race'],
            ['Precision', 'Monaco, Baku castle section', 'Walls within centimetres'],
          ],
        },
        {
          t: 'example',
          title: 'Quiz, with answers',
          lines: [
            { label: 'Q1', text: 'Which circuit crosses over itself?' },
            { label: 'A1', text: 'Suzuka, the figure of eight.' },
            { label: 'Q2', text: 'Where would you find Raidillon and Blanchimont?' },
            { label: 'A2', text: 'Spa-Francorchamps.' },
            { label: 'Q3', text: 'Which two corners at Zandvoort are banked?' },
            { label: 'A3', text: 'Hugenholtzbocht (turn 3) and the final corner, the Arie Luyendykbocht.' },
            { label: 'Q4', text: 'Which track hosted the first World Championship race?' },
            { label: 'A4', text: 'Silverstone, in 1950.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Formula 1 official circuit guides at formula1.com.',
    'Circuit owners’ official histories (Autodromo Nazionale Monza, Circuit de Spa-Francorchamps, Silverstone, Suzuka Circuit).',
  ],
  related: [
    'sports/f1/circuits/circuit-anatomy',
    'sports/f1/circuits/street-vs-permanent',
    'sports/f1/circuits/circuit-setup-and-characteristics',
    'sports/f1/circuits/tracks-racing-line',
  ],
}

export default guide
