// The hand-written side of the circuit atlas: what each circuit is, what decides a lap there,
// and the named stretches worth pointing at. Everything numerical (speeds, braking points,
// sector splits) is computed by the lap model, never written here.
//
// Corner numbers refer to the atlas's own numbering, which counts the bends of the traced
// centreline in order from the start line. The FIA's official map sometimes numbers a gentle
// kink the traced line does not show, or groups a complex differently, so a name here marks
// the same stretch of track as the official name but not always the same turn number.

export type Feature = {
  // First and last corner of the stretch, by atlas number (the same number for a single bend).
  at: [number, number]
  name: string
  note: string
}

export type CircuitNotes = {
  id: string
  name: string
  place: string
  kind: 'street' | 'permanent' | 'hybrid'
  // Typical wing level on the 0 (skinny, Monza) to 1 (full, Monaco) scale used by the lap model.
  wing: number
  // The one-line card blurb in the archive.
  blurb: string
  // What the place is, in a short paragraph.
  character: string
  // What decides a lap here, as short statements.
  decides: string[]
  features?: Feature[]
}

export const CIRCUIT_NOTES: CircuitNotes[] = [
  {
    id: 'albert-park',
    name: 'Albert Park Circuit',
    place: 'Melbourne, Australia',
    kind: 'street',
    wing: 0.4,
    blurb: 'Public roads around a lake: dusty and slippery on Thursday, quick and flowing by Sunday.',
    character:
      'Albert Park is a loop of ordinary park roads around a lake, closed to traffic only for the grand prix, so the surface starts the weekend dusty and slippery and gains grip session by session. The lap is a string of quick corners joined by short straights, with walls and barriers close at several of them, and it was reprofiled for 2022 to remove a chicane and speed the lap up.',
    decides: [
      'Grip evolution: the track at the start of qualifying is faster than at the start of practice by a wide margin, so one lap run early or late can be worth more than a tenth of car performance.',
      'Traction out of the slow corners: the lap is built from a handful of slow right-angle bends followed by short bursts of full throttle.',
      'Confidence near the walls: several flowing sections give no run-off at all.',
    ],
    features: [{ at: [1, 2], name: 'The opening complex', note: 'A right then a left after the start line: the first braking zone, where a start-line crowd always bunches up.' }],
  },
  {
    id: 'shanghai',
    name: 'Shanghai International Circuit',
    place: 'Shanghai, China',
    kind: 'permanent',
    wing: 0.7,
    blurb: 'A circuit drawn to resemble a Chinese character, with a snail of a first corner and a 1.2 km back straight.',
    character:
      'Shanghai was drawn to echo the Chinese character for "above" (上), and the plan view really does look like it. Two things define the lap: a snail-shaped opening complex that keeps tightening, which punishes front tyres, and one of the longest straights of the season ending in a hairpin, which is where nearly all the overtaking happens.',
    decides: [
      'Front-tyre life in the snail: the long, tightening opening complex loads one front tyre for many seconds at a time.',
      'Straight-line speed against downforce: the back straight rewards a trimmed rear wing, the infield rewards the opposite.',
      'The braking zone at the end of the back straight: the best place to pass, and the place a poor exit from the previous corner costs the most.',
    ],
    features: [
      { at: [1, 2], name: 'The snail', note: 'A long right-hander that keeps tightening, then a second bend: a test of front-tyre durability more than of one-lap speed.' },
      { at: [13, 14], name: 'The back-straight hairpin', note: 'The sharp right at the end of the longest straight and the main overtaking spot of the lap.' },
    ],
  },
  {
    id: 'suzuka',
    name: 'Suzuka International Racing Course',
    place: 'Suzuka, Japan',
    kind: 'permanent',
    wing: 0.85,
    blurb: 'The figure-of-eight: the only crossover circuit on the calendar, and a driver’s favourite.',
    character:
      'Built by Honda as a test track in 1962, Suzuka is the only circuit on the calendar that crosses over itself, which is why the plan view is a figure of eight. It is rare among modern tracks in mixing every kind of corner: a flowing set of S-curves, a double-apex hairpin, the long Spoon curve, the fast 130R and a final chicane to finish.',
    decides: [
      'Rhythm through the S-curves: a car that is balanced in the first change of direction carries that speed through all five corners, and the lap time compounds.',
      'Aerodynamic balance: fast corners reward downforce, but the long straights punish too much of it.',
      'Courage and car stability at 130R: the fastest corner of the lap, taken flat by almost every car.',
    ],
    features: [
      { at: [1, 2], name: 'First and Second curves', note: 'A fast right then left immediately after the start line.' },
      { at: [3, 7], name: 'The S-curves', note: 'A rapid series of linked direction changes where one early mistake spoils the whole sequence.' },
      { at: [10, 10], name: 'The hairpin', note: 'The tight right-hander at the far end of the infield, taken after the track passes under the crossover.' },
      { at: [12, 14], name: 'Spoon curve', note: 'A long double-apex left-hander; the exit speed carries the whole of the following straight.' },
      { at: [15, 15], name: '130R', note: 'A fast left-hander at the end of the back straight, famous for its speed and its history.' },
      { at: [16, 17], name: 'Casio Triangle', note: 'The slow chicane that closes the lap, and the last real chance to pass before the line.' },
    ],
  },
  {
    id: 'bahrain',
    name: 'Bahrain International Circuit',
    place: 'Sakhir, Bahrain',
    kind: 'permanent',
    wing: 0.6,
    blurb: 'A desert circuit built around heavy braking and big traction demands.',
    character:
      'Bahrain was the first grand prix in the Middle East, and it is a classic stop-and-go layout: long straights ended by heavy braking zones, joined by a few quick corners. Sand blows onto the track, the surface is abrasive, and since the race moved to the evening the cooler air makes tyre wear even more of a story.',
    decides: [
      'Braking and traction: more of the lap is spent braking or accelerating hard than at most circuits.',
      'Rear tyre degradation: the abrasive asphalt and constant traction demands wear the rear tyres.',
      'Overtaking: three heavy braking zones give genuine passing chances, so strategy and tyre age matter more than raw qualifying position.',
    ],
    features: [
      { at: [1, 1], name: 'The first braking zone', note: 'The hard stop at the end of the main straight, taken from top speed: the place for the opening-lap move.' },
      { at: [4, 4], name: 'The end of the second straight', note: 'A tight corner after a long run of full throttle, and a classic passing place.' },
      { at: [10, 10], name: 'The tight left-hander', note: 'A heavy stop from high speed into a slow corner at the top of the infield.' },
    ],
  },
  {
    id: 'jeddah',
    name: 'Jeddah Corniche Circuit',
    place: 'Jeddah, Saudi Arabia',
    kind: 'street',
    wing: 0.3,
    blurb: 'The fastest street circuit on the calendar: 27 corners, concrete walls and almost no margin.',
    character:
      'Jeddah is a waterfront street circuit with more corners (27) than any other on the calendar, and yet it is also the fastest street track in the sport. Most of the corners are flat-out or nearly so, and every one has a concrete wall on the outside, so the margin for error is almost nothing.',
    decides: [
      'Commitment through the fast sequences: because the corners are linked, one lifted corner loses speed all the way through the next.',
      'Safety cars: the walls make incidents likely, and a safety car changes the race more here than at almost any other circuit.',
      'Low-drag efficiency: the long straights between the bursts of corners reward a car that is quick in a straight line.',
    ],
  },
  {
    id: 'miami',
    name: 'Miami International Autodrome',
    place: 'Miami Gardens, United States',
    kind: 'hybrid',
    wing: 0.4,
    blurb: 'A track built around a stadium car park: a long back straight and a tight chicane section.',
    character:
      'Miami was built in and around the grounds of the Hard Rock Stadium, so it is part street course and part purpose-built track. Its signature is a very long back straight ended by a tight corner, a slow chicane complex, and a surface that gets very hot and bakes in the sun, so tyre temperatures matter.',
    decides: [
      'Tyre temperature: the surface gets very hot, and a tyre that overheats on the long run loses grip quickly.',
      'The braking zone after the long straight: it is the best passing opportunity of the lap.',
      'Traction out of the slow corners: because the lap alternates long straights with tight sections, every exit is worth a lot of time.',
    ],
  },
  {
    id: 'montreal',
    name: 'Circuit Gilles Villeneuve',
    place: 'Montreal, Canada',
    kind: 'hybrid',
    wing: 0.4,
    blurb: 'Straights joined by chicanes on an island in the St Lawrence River, ending at the Wall of Champions.',
    character:
      'Built on the Île Notre-Dame, the Montreal circuit is the purest stop-and-go design in the sport: a few long straights, each ended by a chicane or a hairpin, with walls close on the outside of every one. The last chicane has become infamous: the wall on its exit has caught out world champions so often it is known as the Wall of Champions.',
    decides: [
      'Kerb use in the chicanes: attacking the kerbs without upsetting the car is worth far more here than at a flowing circuit.',
      'Brake and engine cooling: heavy braking from high speed over and over punishes the brakes.',
      'Exit speed out of the hairpin and the last chicane: each leads onto a straight that lasts several seconds.',
    ],
    features: [
      { at: [11, 12], name: 'The hairpin', note: 'The slowest corner of the lap, at the end of a long straight and a classic overtaking place.' },
      { at: [13, 14], name: 'The final chicane and the Wall of Champions', note: 'A quick left-right to the line; running wide on the exit puts the car in the wall that has caught several champions.' },
    ],
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    place: 'Monte Carlo, Monaco',
    kind: 'street',
    wing: 1,
    blurb: 'The shortest, slowest, tightest lap of the year: qualifying decides the race.',
    character:
      'The Monaco Grand Prix has run on these public streets since 1929. At 3.3 km it is the shortest lap on the calendar, and the race is run over a shorter distance (about 260 km), yet it is the slowest by average speed. Walls sit centimetres from the track on both sides, there is almost nowhere to overtake, and a mistake is not a spin but a crash.',
    decides: [
      'Qualifying: with so little passing, the starting grid is close to the final result.',
      'Confidence in the car: the best laps come from drivers who trust the car enough to run millimetres from the wall.',
      'Maximum downforce: speed on the short straights hardly matters, so teams run the biggest wings they have.',
    ],
    features: [
      { at: [1, 1], name: 'Sainte Dévote', note: 'The tight right-hander just after the start line, and the site of the first-lap pile-ups.' },
      { at: [4, 4], name: 'The Grand Hotel hairpin', note: 'The tightest and slowest corner in Formula 1, taken in first gear with the steering at full lock.' },
      { at: [7, 9], name: 'The Nouvelle Chicane', note: 'A slow left-right at the end of the tunnel straight; the one place with a real chance to overtake.' },
    ],
  },
  {
    id: 'barcelona',
    name: 'Circuit de Barcelona-Catalunya',
    place: 'Montmeló, Spain',
    kind: 'permanent',
    wing: 0.85,
    blurb: 'The circuit teams know best: a complete test of every part of a car, now without its last chicane.',
    character:
      'For decades, Barcelona was where every team tested, so it is the track the teams know best, and it remains a good complete test of a car: it has fast and slow corners, long and short straights, and a bit of everything in between. The last chicane was removed in 2023, which opened up a quick final corner that leads straight onto the main straight.',
    decides: [
      'All-round aerodynamics: there is a long straight but also fast corners, so there is no single quick fix.',
      'Tyre management: the long, fast corners are hard on the front-left tyre.',
      'Qualifying position: a lack of overtaking chances makes the grid important.',
    ],
  },
  {
    id: 'red-bull-ring',
    name: 'Red Bull Ring',
    place: 'Spielberg, Austria',
    kind: 'permanent',
    wing: 0.5,
    blurb: 'Ten corners, mountain scenery and one of the shortest laps of the year.',
    character:
      'The Red Bull Ring has the fewest corners on the calendar (ten) and one of the shortest laps, so a qualifying lap takes just over a minute. It sits in the Styrian hills at about 700 m above sea level, where the thinner air cuts both engine power and downforce, and it is a stop-start circuit of three long straights ended by heavy braking.',
    decides: [
      'Traction and braking: the whole lap is straights and braking zones, with few flowing corners.',
      'Closeness of the field: the lap is so short that the gaps between cars are tiny, so a tenth of a second can be several grid places.',
      'Thin air: at about 700 m, the lower air density takes away some downforce and cooling.',
    ],
  },
  {
    id: 'silverstone',
    name: 'Silverstone Circuit',
    place: 'Silverstone, United Kingdom',
    kind: 'permanent',
    wing: 0.7,
    blurb: 'A former airfield with the fastest flowing corners in the world and a very British chance of rain.',
    character:
      'Silverstone was a Second World War bomber airfield, and the first world championship grand prix was run here in 1950. Its character is speed: fast, flowing corners taken at very high g-force, joined by long straights. The famous run of fast changes of direction through Maggotts, Becketts and Chapel is one of the greatest tests of a car in the sport.',
    decides: [
      'Aerodynamic efficiency: the corners are fast enough to need downforce, and the straights are long enough to punish drag.',
      'The fast sequence of changes of direction: how a car handles the first corner decides how it handles the next five.',
      'Weather and wind: a hint of rain, or a change in wind direction, can change the balance of the car between sessions.',
    ],
    features: [
      { at: [1, 1], name: 'Abbey', note: 'The quick right-hander after the start line, taken at very high speed.' },
    ],
  },
  {
    id: 'spa',
    name: 'Circuit de Spa-Francorchamps',
    place: 'Stavelot, Belgium',
    kind: 'permanent',
    wing: 0.2,
    blurb: 'The longest lap, the biggest elevation change and a climate of its own.',
    character:
      'At 7.0 km Spa is the longest lap on the calendar, built on a road course through the Ardennes forest with about 100 m of elevation change. The weather can differ from one end of the lap to the other, so it can be raining in one place and dry in another. Eau Rouge and Raidillon, the dip and climb after the first corner, are among the most famous corners in motorsport.',
    decides: [
      'Low-drag efficiency: the long straights, especially the climb from Raidillon, make straight-line speed vital.',
      'Commitment through the fast corners: Eau Rouge, Pouhon and Blanchimont are taken at very high speed, where a good car and a brave driver find the most time.',
      'The weather: changing conditions often decide the race.',
    ],
    features: [
      { at: [1, 1], name: 'La Source', note: 'A slow hairpin right after the start line, and the scene of countless first-lap incidents.' },
      { at: [2, 4], name: 'Eau Rouge and Raidillon', note: 'A steep downhill then uphill sequence of fast direction changes, leading onto the Kemmel Straight.' },
      { at: [5, 6], name: 'Les Combes', note: 'The chicane at the end of the Kemmel Straight, the main overtaking place of the lap.' },
      { at: [8, 8], name: 'Rivage', note: 'The slow hairpin that follows the sweeping Malmedy bend.' },
      { at: [10, 10], name: 'Pouhon', note: 'A long, fast left-hander, taken downhill and one of the quickest corners of the lap.' },
      { at: [17, 17], name: 'Blanchimont', note: 'A very fast left-hander at nearly full throttle, just before the final chicane.' },
      { at: [18, 19], name: 'The Bus Stop', note: 'A slow chicane that completes the lap and offers a last chance to overtake before the line.' },
    ],
  },
  {
    id: 'hungaroring',
    name: 'Hungaroring',
    place: 'Mogyoród, Hungary',
    kind: 'permanent',
    wing: 1,
    blurb: '"Monaco without the walls": twisty, dusty, and hot.',
    character:
      'The Hungaroring was the first grand prix behind the Iron Curtain, in 1986, and it is a tight, twisty track in a natural bowl near Budapest. It is often called "Monaco without the walls" because the layout is slow and winding with few overtaking places, and the surface is dusty and gets less grip off the racing line. A summer race in high temperatures makes it physically tough.',
    decides: [
      'Maximum downforce: the lap is almost all corners, so downforce is worth far more than straight-line speed.',
      'Track position: overtaking is so hard that the starting grid and the strategy matter most.',
      'Tyre and driver stamina: the heat and the constant changes of direction take their toll over a race.',
    ],
  },
  {
    id: 'zandvoort',
    name: 'Circuit Zandvoort',
    place: 'Zandvoort, Netherlands',
    kind: 'permanent',
    wing: 0.9,
    blurb: 'A narrow, undulating track through the dunes with banked corners.',
    character:
      'Zandvoort lies in the dunes beside the North Sea and was reprofiled for its return to the calendar in 2021 with two banked corners: one early in the lap, and one at the end of it. It is narrow, undulating and has few straights, so the lap is a rhythm of corners, and overtaking is hard.',
    decides: [
      'Rhythm and precision: the track is narrow, the corners are linked, and there is little room for error.',
      'Banked corners: banking adds grip and allows higher speeds, but only for a driver who commits.',
      'Qualifying position: with a lap this tight, the grid is critical.',
    ],
    features: [
      { at: [1, 1], name: 'Tarzan', note: 'The first corner, a tight right-hander at the end of the main straight, and the main passing place.' },
      { at: [14, 14], name: 'The banked final corner', note: 'A fast banked turn that allows high speed, which feeds onto the start-finish straight.' },
    ],
  },
  {
    id: 'monza',
    name: 'Autodromo Nazionale Monza',
    place: 'Monza, Italy',
    kind: 'permanent',
    wing: 0,
    blurb: 'The Temple of Speed: the fastest circuit on the calendar, run with the skinniest wings of the year.',
    character:
      'Monza opened in 1922 and has hosted a grand prix in almost every year since. It is the fastest circuit on the calendar, built from four long straights joined by chicanes and a few high-speed curves, so cars run the smallest wings of the year to cut drag. The old banking can still be seen beside the modern track.',
    decides: [
      'Low drag and engine power: the car spends the lap at full throttle for a larger share than anywhere else.',
      'Braking and traction in the chicanes: the slowest corners are the places to gain time on the long straights that follow.',
      'Slipstream: the tow from the car in front is worth more here than almost anywhere, so qualifying has a tactical side.',
    ],
    features: [
      { at: [1, 2], name: 'Variante del Rettifilo', note: 'The tight first chicane at the end of the start-finish straight, braked for from top speed.' },
      { at: [3, 3], name: 'Curva Grande', note: 'A long, fast right-hander flat out for almost every car.' },
      { at: [4, 5], name: 'Variante della Roggia', note: 'A second tight chicane that follows the Curva Grande.' },
      { at: [6, 7], name: 'The Lesmo corners', note: 'Two quick right-handers taken at high speed through the park trees.' },
      { at: [8, 10], name: 'Variante Ascari', note: 'A fast left-right-left chicane that leads onto the back straight.' },
      { at: [11, 11], name: 'Parabolica', note: 'The long right-hander onto the finishing straight: a good exit speed here lasts the entire straight.' },
    ],
  },
  {
    id: 'madring',
    name: 'Madring',
    place: 'Madrid, Spain',
    kind: 'hybrid',
    wing: 0.85,
    blurb: 'The newest circuit on the calendar, in and around the Madrid exhibition grounds.',
    character:
      'Madring joins the calendar in 2026 as a new hybrid circuit in and around the IFEMA exhibition grounds in Madrid. It is a long lap with a large number of corners and a mix of slow sections and quicker, flowing ones. Because it is new, there is far less accumulated knowledge about it than about the other tracks in this atlas, and its model should be read as a first estimate.',
    decides: [
      'Learning the track: with no history of data, the teams that learn it fastest gain the most.',
      'Traction out of the many slow corners: the lap has a large number of tight turns.',
      'Setup compromise: the lap needs both downforce and straight-line speed, so it is a balance.',
    ],
  },
  {
    id: 'baku',
    name: 'Baku City Circuit',
    place: 'Baku, Azerbaijan',
    kind: 'street',
    wing: 0.3,
    blurb: 'A 2.2 km flat-out straight and a medieval castle section just 7.6 m wide.',
    character:
      'Baku is a city circuit of two halves: a modern boulevard with a 2.2 km main straight along the Caspian seafront, and the old town, where the track squeezes through the ancient castle walls at a narrowest point of only 7.6 m. Cars run the lowest downforce of any street race, and the tow down the straight is an important weapon.',
    decides: [
      'Straight-line speed: the main straight is one of the longest on the calendar, and slipstream tactics are central.',
      'Precision in the castle section: a tiny mistake in the narrowest part of the track ends the lap.',
      'Safety cars and red flags: the walls and the mix of speeds make incidents common, so races often turn on restarts.',
    ],
  },
  {
    id: 'marina-bay',
    name: 'Marina Bay Street Circuit',
    place: 'Singapore',
    kind: 'street',
    wing: 0.9,
    blurb: 'A hot, humid night race under floodlights, a physical test for every driver.',
    character:
      'Singapore was the first night race in Formula 1, run under floodlights on the streets around Marina Bay. The air is very hot and humid even after dark, there are many slow corners, and the bumpy walls-lined track makes it among the most physically demanding races of the year, often close to the two-hour time limit. The layout was revised in 2023.',
    decides: [
      'Physical endurance: the heat, humidity and constant steering effort wear drivers down.',
      'Traction and braking: it is a stop-start lap with many slow corners and few high-speed ones.',
      'Safety cars: the walls make them likely, and they often decide the strategy.',
    ],
  },
  {
    id: 'cota',
    name: 'Circuit of the Americas',
    place: 'Austin, United States',
    kind: 'permanent',
    wing: 0.8,
    blurb: 'A purpose-built track with an uphill first corner and corners inspired by famous circuits.',
    character:
      'The Circuit of the Americas opened in 2012 and borrows ideas from other famous tracks: a sequence of esses inspired by Silverstone, a stadium section inspired by Hockenheim, and a huge climb to a tight right-hander at the first corner. A very long back straight leads to a hairpin that is one of the best overtaking places of the season.',
    decides: [
      'Turn 1: the steep climb and the tight turn make the start a very busy place.',
      'The esses: a fast sequence of changes of direction through which a well-balanced car finds a great deal of time.',
      'The hairpin at the end of the back straight: a big braking zone and the main place to pass.',
    ],
    features: [
      { at: [1, 1], name: 'The uphill first corner', note: 'A steep uphill braking zone into a tight, wide left-hander; the track climbs about 40 m in a few seconds.' },
      { at: [3, 7], name: 'The esses', note: 'A rapid, flowing sequence of direction changes inspired by the Maggotts-Becketts section at Silverstone.' },
      { at: [11, 11], name: 'The back-straight hairpin', note: 'A tight turn at the end of the longest straight, and a prime overtaking place.' },
      { at: [16, 18], name: 'The stadium section', note: 'A slow, tight set of corners wrapped around the grandstands.' },
    ],
  },
  {
    id: 'mexico-city',
    name: 'Autódromo Hermanos Rodríguez',
    place: 'Mexico City, Mexico',
    kind: 'permanent',
    wing: 0.9,
    blurb: 'At 2,240 m above sea level, the thin air changes everything about how a car works.',
    character:
      'Mexico City sits at about 2,240 m above sea level, higher than any other circuit on the calendar, where the air is roughly 20% thinner. Thin air cuts downforce, so cars run maximum wings but still have less grip, and it also cuts drag, so top speeds are high. Cooling is hard in thin air, and the lap ends with a slow run through the Foro Sol baseball stadium.',
    decides: [
      'Thin air: less downforce means cars feel like they are sliding, and less cooling makes brakes and engines run hot.',
      'The long main straight: with low drag, the cars reach very high top speeds and the tow is strong.',
      'The stadium section: a slow, technical sequence at the end of the lap that rewards traction.',
    ],
    features: [
      { at: [1, 1], name: 'The first braking zone', note: 'A heavy stop from very high speed at the end of the long main straight.' },
      { at: [14, 17], name: 'The Foro Sol stadium section', note: 'A tight, slow sequence of corners that winds through a baseball stadium, finishing the lap.' },
    ],
  },
  {
    id: 'interlagos',
    name: 'Autódromo José Carlos Pace',
    place: 'São Paulo, Brazil',
    kind: 'permanent',
    wing: 0.6,
    blurb: 'A short, hilly, anticlockwise circuit where the weather and the crowd make a race.',
    character:
      'Interlagos is run anticlockwise on a natural bowl in São Paulo, about 760 m above sea level. It is a short lap with a lot of elevation change and a famous flowing layout, and it often rains. The first corner, the Senna S, is a quick left-right going downhill, and the run back up the hill to the start-finish line is one of the longest and steepest climbs of the season.',
    decides: [
      'The Senna S and the first lap: the opening sequence is a major overtaking place right after a standing start.',
      'The weather: rain is common and changes strategy and the racing order.',
      'Thin air: at 760 m, a car makes a little less downforce and has slightly less cooling.',
    ],
    features: [
      { at: [1, 2], name: 'Senna S', note: 'A tight, fast downhill left-right just after the start; the best-known overtaking place on the circuit.' },
      { at: [3, 3], name: 'Curva do Sol', note: 'A long left-hander at the bottom of the hill, leading onto the Reta Oposta.' },
      { at: [13, 15], name: 'Subida dos Boxes', note: 'The climb back to the start-finish straight, where good traction pays off all along the pit straight.' },
    ],
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas Strip Circuit',
    place: 'Las Vegas, United States',
    kind: 'street',
    wing: 0.1,
    blurb: 'Long straights along the Strip, run at night in cold, low-grip conditions.',
    character:
      'The Las Vegas street circuit loops around the famous Strip and has some of the longest full-throttle sections on the calendar, so cars run low-drag wings and reach very high speeds. The race is at night, often in cold air, which makes it very hard to warm up the tyres, and the street surface is slippery.',
    decides: [
      'Tyre temperature: cold air and a slippery surface make it hard to get the tyres working.',
      'Straight-line speed and the tow: the long straights are where a lot of the time and almost all of the overtaking happens.',
      'Braking for the slow corners at the end of the straights: heavy stops from top speed with cold brakes.',
    ],
  },
  {
    id: 'lusail',
    name: 'Lusail International Circuit',
    place: 'Lusail, Qatar',
    kind: 'permanent',
    wing: 0.9,
    blurb: 'A flowing, fast circuit that was built for motorbikes and punishes tyres.',
    character:
      'Lusail was built for motorcycle racing and floodlit for night events, and it joined Formula 1 in 2021. The lap is a smooth, flowing sequence of medium- and high-speed corners with few heavy braking zones. That makes it hard on tyres, because the cars are loaded for long periods in fast corners, and in 2023 tyre-load limits were introduced for the race.',
    decides: [
      'Tyre wear: long fast corners load the tyres for many seconds at a time, so degradation drives strategy.',
      'Aerodynamic balance: the lap is a succession of medium and fast bends where downforce matters.',
      'Heat: warm evening air and a physically demanding lap test drivers.',
    ],
  },
  {
    id: 'yas-marina',
    name: 'Yas Marina Circuit',
    place: 'Abu Dhabi, United Arab Emirates',
    kind: 'permanent',
    wing: 0.5,
    blurb: 'A twilight race under floodlights, around a marina and through a hotel.',
    character:
      'Yas Marina hosts the season finale, a race that starts at dusk and finishes under floodlights. The track runs around the marina and passes under a hotel. It was reprofiled in 2021 to speed up the lap and improve overtaking by removing some slow corners, and it still has a very long back straight ending in a hairpin.',
    decides: [
      'The back straight and the hairpin at its end: a long full-throttle section and a hard braking zone that provides the main overtaking place.',
      'Traction out of the slow corners: the infield has several tight sections and short straights.',
      'Temperature change: the track cools through the race as the sun sets, shifting the tyre balance.',
    ],
    features: [{ at: [7, 8], name: 'The back-straight hairpin', note: 'A heavy braking zone at the end of the longest straight of the lap.' }],
  },
]

const SHORT: Record<string, string> = {
  'albert-park': 'Albert Park',
  shanghai: 'Shanghai',
  suzuka: 'Suzuka',
  bahrain: 'Bahrain',
  jeddah: 'Jeddah',
  miami: 'Miami',
  montreal: 'Montreal',
  monaco: 'Monaco',
  barcelona: 'Barcelona',
  'red-bull-ring': 'Red Bull Ring',
  silverstone: 'Silverstone',
  spa: 'Spa',
  hungaroring: 'Hungaroring',
  zandvoort: 'Zandvoort',
  monza: 'Monza',
  madring: 'Madring',
  baku: 'Baku',
  'marina-bay': 'Singapore',
  cota: 'Austin (COTA)',
  'mexico-city': 'Mexico City',
  interlagos: 'Interlagos',
  'las-vegas': 'Las Vegas',
  lusail: 'Lusail',
  'yas-marina': 'Abu Dhabi',
}

// A short name for tables and labels.
export const shortName = (id: string) => SHORT[id] ?? id

export const NOTES_BY_ID: Record<string, CircuitNotes> = Object.fromEntries(CIRCUIT_NOTES.map((n) => [n.id, n]))
