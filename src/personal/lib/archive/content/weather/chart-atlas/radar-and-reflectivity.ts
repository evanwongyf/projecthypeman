import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The rain radar is the most-used weather chart in Singapore: a picture of blues, greens, yellows and reds sweeping across the island every few minutes. Each colour is a number, the reflectivity of the raindrops in decibels (dBZ), and the scale from light blue to magenta is a ladder from drizzle to the heaviest tropical cloudburst. Reading it well means knowing what a radar measures, how reflectivity becomes a rain rate (and why that conversion is uncertain), how the beam climbs with distance, what false echoes look like, and what shape a squall line or a supercell takes. This guide explains each, with a live radar lab where you can run a storm forward in time and read the rain it puts down at any point.',
  nutshell: [
    'A radar sends out microwave pulses and times the echo: the **delay** gives the range and the **strength** gives the **reflectivity Z**, quoted as **dBZ = 10 log₁₀ Z**.',
    'Light blue and green mean **light rain** (about 15 to 30 dBZ); yellow and orange **moderate to heavy** (35 to 45); red and magenta **intense convection** (50 and above, with a chance of hail).',
    'Rain rate comes from an empirical **Z–R relation** \\(Z=aR^b\\); the coefficients vary, so **50 dBZ can be 50 or 150 mm/h**.',
    'The beam rises with range (about **1.5 km at 100 km**), so distant radar echoes see only the upper part of the storm and miss low rain.',
    'Learn the **false echoes** (ground clutter, sea clutter, bright band, birds and insects, anomalous propagation) and the **shapes** (cell, squall line, bow, hook).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The radar lab',
      lead: 'Run a storm forward and read the rain.',
      blocks: [
        { t: 'wx-chart', viz: 'radar' },
        {
          t: 'table',
          head: ['Colour', 'Reflectivity (dBZ)', 'Typical meaning', 'Rain rate (Marshall–Palmer)'],
          rows: [
            ['Light blue', '5 to 15', 'Drizzle, very light rain, or insects and haze', 'under 0.2 mm/h'],
            ['Blue to green', '15 to 30', 'Light rain; the usual stratiform area', '0.2 to 2.7 mm/h'],
            ['Dark green', '30 to 35', 'Moderate rain', '2.7 to 5.6 mm/h'],
            ['Yellow', '35 to 40', 'Moderate to heavy rain', '5.6 to 11.5 mm/h'],
            ['Orange', '40 to 45', 'Heavy rain; thunderstorm cells', '11.5 to 24 mm/h'],
            ['Red', '45 to 55', 'Very heavy rain; strong convection; possible hail', '24 to 100 mm/h'],
            ['Dark red and magenta', 'above 55', 'Intense core, large drops or hail; flash-flood potential', 'over 100 mm/h (very uncertain)'],
          ],
          caption: 'The colour table varies between agencies (some use dBZ, others rain rate in mm/h with their own colours), so always check the legend. Rain rates here use Z = 200R^1.6.',
        },
      ],
    },
    {
      id: 'zr',
      title: 'From reflectivity to rain rate',
      lead: 'Z, R and the drop-size distribution.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Z=\int N(D)\,D^{6}\,dD,\qquad Z=aR^{b}\ \Longrightarrow\ R=\left(\frac{Z}{a}\right)^{1/b},\qquad \text{dBZ}=10\log_{10}Z`,
          caption: 'Reflectivity is the sixth moment of the drop-size distribution; rain rate comes from an empirical power law.',
          where: [{ sym: 'N(D)', def: 'the number of drops of diameter D per unit volume' }, { sym: 'Z', def: 'reflectivity factor (mm⁶ per m³)' }, { sym: 'R', def: 'rain rate (mm/h)' }, { sym: 'a,\\ b', def: 'empirical constants that depend on the drop-size distribution' }],
          syntax: [{ sym: 'D^{6}', say: 'big drops dominate the echo. Effect: a few large drops (or hail) can give a high dBZ with modest rainfall. Why: the radar echo of a drop grows with the sixth power of its diameter.' }, { sym: 'Z=aR^{b}', say: 'the empirical conversion. Effect: a bigger exponent b compresses the range of rain rates for a given range of dBZ. Why: it is fitted to drop-size data for a type of rain.' }],
          worked: {
            title: 'A 50 dBZ echo',
            steps: ['Z = 10^(50/10) = 100,000 mm⁶/m³.', 'Marshall–Palmer (a = 200, b = 1.6): R = (100,000/200)^(1/1.6) = 500^0.625 = 49 mm/h.', 'NEXRAD convective (a = 300, b = 1.4): 63 mm/h; tropical convective (a = 250, b = 1.2): 147 mm/h.'],
            answer: 'The same echo can mean 50 or 150 mm/h, depending on the relation. This is why radar rainfall is calibrated against rain gauges: operational services adjust the relation, and blend radar with gauges, to produce rainfall estimates.',
          },
        },
        { t: 'wx-chart', viz: 'zr-relation' },
        {
          t: 'math',
          tex: String.raw`h\approx\frac{r^{2}}{2k_eR_E}+r\tan\theta,\qquad k_e=\tfrac43`,
          caption: 'The height of the beam centre above the radar at range r and elevation angle θ, including the Earth’s curvature and standard refraction.',
          where: [{ sym: 'r', def: 'range from the radar (km)' }, { sym: '\\theta', def: 'beam elevation angle' }, { sym: 'R_E', def: 'Earth’s radius, 6,371 km' }, { sym: 'k_e', def: 'the effective-radius factor for standard refraction' }],
          syntax: [{ sym: 'r^{2}/(2k_eR_E)', say: 'the Earth curves away below the beam. Effect: the beam is higher above the ground at long range. Why: a straight beam leaves the curved surface.' }],
          worked: {
            title: 'A 0.5° beam',
            steps: ['At 50 km: 50²/(2 × 8,495) + 50 × tan 0.5° = 0.15 + 0.44 = 0.58 km.', 'At 100 km: 0.59 + 0.87 = 1.46 km.', 'At 200 km: 2.36 + 1.75 = 4.1 km.'],
            answer: 'At 100 km the beam is nearly 1.5 km up and its width (about 1.7 km for a 1° beam) is wider than a small cell. Rain that forms below the beam, or shallow rain, is invisible. This is why a radar is most reliable within about 100 km, and why the 240 km images are useful for the big picture but not for island-scale rain.',
          },
        },
      ],
    },
    {
      id: 'shapes',
      title: 'Echoes, false echoes and shapes',
      lead: 'What the pattern tells you.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Convective cell', tag: 'a pop-up storm', body: 'A compact blob with a red or orange core, a few kilometres across, growing in 10 to 20 minutes and dying in an hour: the afternoon thunderstorm.' },
            { title: 'Squall line', tag: 'a line of cells', body: 'A narrow line of intense echoes, 100 km or more long, with a trailing area of lighter stratiform rain behind it: the pattern of a Sumatra squall.' },
            { title: 'Bow echo', tag: 'damaging winds', body: 'A line that bows forward as strong outflow winds push it, often linked to damaging gusts.' },
            { title: 'Hook echo', tag: 'a supercell', body: 'A hook at the rear of a strong echo marks the rotating updraft (mesocyclone); more common in the mid-latitudes than in Singapore.' },
            { title: 'Stratiform rain', tag: 'widespread rain', body: 'A broad area of 20 to 30 dBZ with a few embedded stronger cells: the monsoon surge.' },
            { title: 'Bright band', tag: 'melting layer', body: 'A ring of stronger echo near the height of the 0 °C level, where melting snow looks like very large wet drops: it can fool a rain-rate estimate.' },
          ],
        },
        {
          t: 'table',
          head: ['False echo', 'What it looks like', 'Cause'],
          rows: [
            ['Ground clutter', 'A fixed blotchy pattern near the radar, present in clear weather', 'Beam hitting buildings, hills or towers'],
            ['Sea clutter', 'A speckled echo near the radar over water in strong wind', 'Beam reflecting from waves'],
            ['Anomalous propagation', 'Ground-like echoes at long range after a temperature inversion', 'The beam bends down and hits the surface'],
            ['Birds and insects', 'Weak ring-shaped or diffuse echoes at dawn or dusk in clear air', 'Animals in flight; filtered by dual-polarisation'],
            ['Beam blockage', 'A wedge with missing or weak echoes behind a hill or tall building', 'The terrain blocks the beam'],
            ['Attenuation', 'Weak echoes behind a strong storm (at short wavelengths)', 'Heavy rain absorbs the beam'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Doppler and dual-polarisation', text: 'Modern radars also measure the radial velocity of the rain (Doppler), which shows wind toward and away from the radar and rotation in storms, and the shape of the particles (dual-polarisation), which distinguishes rain from hail, snow, birds and debris. Both help to find the real rain and to refine the rainfall estimate.' },
      ],
    },
  ],
  sources: [
    'Doviak, R. J. & Zrnić, D. S. (1993). *Doppler Radar and Weather Observations*. Academic Press.',
    'Marshall, J. S. & Palmer, W. M. K. (1948). The distribution of raindrops with size. *Journal of Meteorology*, 5, 165–166.',
    'Rinehart, R. E. (2010). *Radar for Meteorologists*. Rinehart Publications.',
    'Meteorological Service Singapore: rain-area radar images and explanatory notes (weather.gov.sg).',
  ],
  related: ['weather/charts-and-forecasts/radar-and-satellite', 'weather/chart-atlas/satellite-imagery', 'weather/singapore/rain-in-singapore'],
}

export default guide
