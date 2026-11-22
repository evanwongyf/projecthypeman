import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Drifting is the motorsport of controlled oversteer: the driver deliberately makes the rear tyres slide and then holds the car at a big angle through a corner, steering with the throttle and counter-steer. It began in Japan, grew into professional series such as D1 Grand Prix and Formula Drift, and is judged on style and control rather than lap time.',
  nutshell: [
    'A **drift** is a sustained, controlled slide in which the rear of the car steps out, the front wheels point against the turn (counter-steer) and the driver holds the angle on purpose.',
    'It traces back to Japanese racing in the 1970s, where **Kunimitsu Takahashi** became famous for sliding through corners at speed.',
    '**Keiichi Tsuchiya**, the “Drift King”, popularised it from the late 1970s and 1980s, and co-founded **D1 Grand Prix** around 2000–2001.',
    '**Formula Drift**, the main US series, held its first season in 2004; Europe, Asia and Oceania have their own championships.',
    'Drifting is judged on **line, angle, speed and style**, not on who is quickest.',
    'It belongs on **closed courses**: on public roads it is dangerous and illegal.',
  ],
  sections: [
    {
      id: 'definition',
      title: 'What a drift actually is',
      blocks: [
        { t: 'p', text: 'Every car that corners has its tyres working at a small **slip angle**, the angle between where a wheel points and where it actually travels. In normal driving these angles are a few degrees and no one notices. In a drift the rear tyres are pushed far past the angle at which they grip best, so they slide sideways, while the driver steers the front wheels the opposite way to stop the car spinning. The car travels around the corner pointing well inside it. The details are in [the physics of a drift](@sports/f1/drift/drift-physics).' },
        {
          t: 'terms',
          items: [
            { term: 'Oversteer', def: 'The rear of the car slides more than the front, so the car turns more than the driver asked. A drift is oversteer held on purpose.' },
            { term: 'Understeer', def: 'The front slides more than the rear and the car runs wide. The opposite of a drift.' },
            { term: 'Counter-steer (opposite lock)', def: 'Steering the front wheels away from the corner, towards the direction of the slide, to keep the car balanced.' },
            { term: 'Drift angle', def: 'Informally, how far the car’s nose points away from its direction of travel. Competition drifts often run at very large angles.' },
            { term: 'Initiation', def: 'The moment the driver breaks rear grip to begin the drift.' },
            { term: 'Transition', def: 'Swinging the car from a slide one way to a slide the other way between linked corners.' },
            { term: 'Touge', def: 'Japanese for a mountain pass; the winding hill roads where the culture began, long before it moved onto circuits.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Powerslide in racing', 'Rally slide', 'Competition drift'],
          rows: [
            ['Aim', 'Fastest lap; slide only if it helps', 'Fastest stage time on a loose surface', 'Highest judged score'],
            ['Amount of slide', 'Small and brief', 'Moderate, often useful on gravel', 'Large and sustained'],
            ['Surface', 'Tarmac', 'Gravel, snow, tarmac', 'Usually tarmac'],
            ['What wins', 'Time', 'Time', 'Line, angle, speed, style'],
          ],
        },
      ],
    },
    {
      id: 'history',
      title: 'History: from mountain passes to stadiums',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1970s: Kunimitsu Takahashi', body: 'A former Grand Prix motorcycle racer turned car racer, Takahashi became known in Japanese touring-car racing for taking corners in high-speed slides that carried speed and thrilled crowds. He is widely credited as an early inspiration for drifting as a style.' },
            { title: 'Late 1970s–1980s: Keiichi Tsuchiya, the Drift King', body: 'Tsuchiya honed his sliding on mountain roads and brought the style into circuit racing. Video features from the late 1980s, notably *Pluspy* (1987), showed his car control and spread the style among enthusiasts. He went on to a professional racing career, including the Le Mans 24 Hours.' },
            { title: '1980s–1990s: grassroots and the media', body: 'Japanese car magazines and videos, notably those around Daijiro Inada and *Option* magazine, ran amateur drift contests and helped turn a road-culture habit into an organised hobby on closed courses. The manga *Initial D* (from 1995) carried touge and drift culture worldwide.' },
            { title: '2000–2001: D1 Grand Prix', body: 'Tsuchiya and Inada created D1 Grand Prix, the first major professional drift championship, held on circuits with judges and tandem battles. It brought the sport to international audiences.' },
            { title: '2004: Formula Drift', body: 'The US series founded by Jim Liaw and Ryan Sage held its first season in 2004 and has become one of the world’s best-known professional championships, with highly modified cars producing very high power.' },
            { title: '2010s onwards: a global sport', body: 'National and regional series spread across Europe (for example Drift Masters), Asia, Oceania and the Middle East, and the FIA began sanctioning an international drifting event, the Intercontinental Drifting Cup, in 2017.' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: drifting started as street racing and stayed there', text: 'The roots are partly in Japanese road culture, but the sport as it exists today is organised competition on closed courses, with licences, scrutineering, safety equipment and marshals. The grassroots side lives on in “drift days” at circuits and car parks hired for the purpose.' },
      ],
    },
    {
      id: 'cars-and-culture',
      title: 'The cars and the culture',
      blocks: [
        { t: 'p', text: 'Drifting is easiest in **rear-wheel-drive** cars with a limited-slip or locked differential, enough power to spin the rear wheels at will and a well-balanced chassis. Classic choices are light Japanese coupés of the 1980s and 1990s; modern professional cars are often purpose-built around a production shell.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Toyota AE86', body: 'The light, front-engine, rear-drive Corolla Levin and Sprinter Trueno of the 1980s. Tied to Tsuchiya and to *Initial D*.', tag: 'icon' },
            { title: 'Nissan Silvia and 180SX', body: 'The S13, S14 and S15 generations became the default grassroots and professional drift platform for years.', tag: 'icon' },
            { title: 'Mazda RX-7', body: 'Rotary-engined, light and balanced; long a favourite in Japanese drifting.', tag: 'icon' },
            { title: 'BMW 3 Series', body: 'Older rear-drive BMWs such as the E36 and E46 are common in European grassroots drifting.', tag: 'grassroots' },
            { title: 'Pro builds', body: 'Professional cars combine a production body with a full roll cage, very high power, extra steering lock and hydraulic handbrake.', tag: 'pro' },
            { title: 'Not drift-friendly', body: 'Front-wheel-drive cars cannot hold a power-driven drift, because the driven wheels are the ones doing the steering.', tag: 'why not' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Spectacle:** smoke, noise and close tandem battles make drifting one of the most crowd-pleasing motorsports.',
            '**Accessibility:** grassroots events run with older, cheaper cars, which keeps entry costs lower than many racing series.',
            '**Craft:** many drivers build and repair their own cars, and the culture prizes car control and style.',
          ],
        },
      ],
    },
    {
      id: 'safety',
      title: 'Safety and the law',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Closed courses only', text: 'Drifting deliberately takes a car beyond its grip. On public roads that endangers the driver, passengers, other road users and pedestrians, and it is illegal in most countries, with offences ranging from careless or dangerous driving to vehicle seizure. Learn and practise only at organised events on closed venues, with marshals, run-off, safety equipment and instruction.' },
        {
          t: 'dodont',
          do: [
            'Start at a driving school or a beginners’ drift day at a licensed venue.',
            'Wear the helmet and safety equipment the event requires, and have the car checked before it runs.',
            'Begin on a skid pan or wet circle at low speed with an instructor.',
          ],
          dont: [
            'Practise on public roads, car parks without permission or empty industrial estates.',
            'Copy techniques from videos without instruction; they hide the risk and the preparation.',
            'Assume a road car’s brakes, tyres and cooling will survive drift use unmodified.',
          ],
        },
      ],
    },
    {
      id: 'where-next',
      title: 'Where to go next',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'sports/f1/drift/drift-physics', note: 'Slip angle, weight transfer, counter-steer and the grip curve.' },
            { path: 'sports/f1/drift/drift-technique-and-setup', note: 'How slides are started and held, and what a drift car changes.' },
            { path: 'sports/f1/drift/drift-competition-and-judging', note: 'Tandem battles and how judges score a run.' },
            { path: 'sports/f1/drift/f1-vs-drift', note: 'Why a racing car is fastest when it barely slides.' },
          ],
        },
        {
          t: 'example',
          title: 'Check yourself',
          lines: [
            { label: 'Q1', text: 'Who is known as the Drift King?' },
            { label: 'A1', text: 'Keiichi Tsuchiya.' },
            { label: 'Q2', text: 'Why is a front-wheel-drive car a poor drift car?' },
            { label: 'A2', text: 'Power goes to the front wheels, so throttle tends to pull the front, not push the rear out; the rear cannot be held sliding under power.' },
            { label: 'Q3', text: 'What wins a drift competition?' },
            { label: 'A3', text: 'A judged score for line, angle, speed and style, not the fastest time.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Formula Drift official site, series history and rules (formulad.com).',
    'D1 Grand Prix official site, series history (d1gp.co.jp).',
    'FIA. Intercontinental Drifting Cup, event information.',
  ],
  related: [
    'sports/f1/drift/drift-physics',
    'sports/f1/drift/drift-technique-and-setup',
    'sports/f1/drift/drift-competition-and-judging',
    'sports/f1/drift/f1-vs-drift',
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
  ],
}

export default guide
