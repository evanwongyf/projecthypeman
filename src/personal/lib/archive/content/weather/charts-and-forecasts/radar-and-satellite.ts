import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For forecasts of the next one to three hours, nothing beats looking: radar shows where rain is falling and how heavy, and satellite shows cloud systems growing, moving and decaying. Both are indirect measurements, and reading them well means knowing what they measure. This guide explains how weather radar works, what the decibels of reflectivity (dBZ) mean and how to convert them to rain rate (the Marshall–Palmer relation), how Doppler radar sees wind, the limits of beam height and attenuation, how infrared and visible satellite images show cloud top temperature and height, and how to combine them into a simple nowcast for Singapore.',
  nutshell: [
    '**Radar** sends a pulse and measures the energy scattered back by raindrops. **Reflectivity** in dBZ rises with drop size and number: about **20 dBZ is light rain, 35 moderate, 45 to 50 heavy, above 55 hail** is possible.',
    '**Marshall–Palmer:** \\(Z=200\\,R^{1.6}\\): 30 dBZ ≈ 2.7 mm/h, 40 dBZ ≈ 11.5 mm/h, 50 dBZ ≈ 49 mm/h. The relation is approximate and differs between storms.',
    '**Doppler radar** measures radial velocity: wind toward or away from the radar, revealing gust fronts, rotation and convergence.',
    '**Satellite infrared** images show **cloud-top temperature**: the colder the top, the higher the cloud; **very cold tops (below −60 °C)** mean deep convection.',
    '**Nowcasting** extrapolates the motion of rain echoes for 0 to 2 hours and is more accurate than any model at that range.',
  ],
  sections: [
    {
      id: 'radar',
      title: 'How radar sees rain',
      lead: 'Echoes and decibels.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Z=\sum_i N_i D_i^{6}\ \ (\text{mm}^6\text{m}^{-3}),\qquad \text{dBZ}=10\log_{10}Z,\qquad Z=a\,R^{b}\ \ (a=200,\ b=1.6)`,
          caption: 'The radar reflectivity factor, its logarithmic scale and the Marshall–Palmer relation to rain rate.',
          where: [{ sym: 'N_i,\\ D_i', def: 'the number and diameter (mm) of drops of size class i in a cubic metre of air' }, { sym: 'R', def: 'rain rate in mm per hour' }, { sym: 'a,\\ b', def: 'empirical constants; (200, 1.6) is the classic Marshall–Palmer value for stratiform rain; tropical convective rain is often fitted with different values' }],
          syntax: [
            { sym: 'D^{6}', say: 'for raindrops much smaller than the radar wavelength the backscattered power is proportional to the sixth power of diameter. Effect: one drop of 4 mm gives as strong an echo as 4,096 drops of 1 mm. Why: Rayleigh scattering.' },
            { sym: '10\\log_{10}Z', say: 'the decibel scale. Effect: reflectivity spans many orders of magnitude, from 1 to 10⁶ mm⁶/m³, so a log scale compresses it: every +10 dBZ is ×10 in Z and about ×4 in rain rate. Why: the dynamic range is huge.' },
            { sym: 'R=(Z/200)^{1/1.6}', say: 'rearranged to find rain rate. Effect: a 10 dBZ increase raises R by a factor of 4.2. Why: with b = 1.6, a tenfold increase in Z gives \\(10^{1/1.6}=4.2\\) times the rain rate.' },
          ],
          worked: {
            title: 'From colour to rainfall',
            steps: ['25 dBZ: \\(Z=316\\); \\(R=(316/200)^{0.625}=1.3\\) mm/h (light rain).', '40 dBZ: \\(Z=10{,}000\\); \\(R=50^{0.625}=11.5\\) mm/h (moderate to heavy).', '50 dBZ: \\(Z=100{,}000\\); \\(R=500^{0.625}=48.6\\) mm/h (very heavy).', 'Thirty minutes at 50 dBZ: about 24 mm of rain.'],
            answer: 'In Singapore, an area of red and magenta on the rain-radar image (about 45 dBZ and above) means a heavy downpour of 25 to 50 mm/h or more; sustained for an hour or two it can cause flash floods in poorly drained areas.',
          },
        },
        {
          t: 'table',
          head: ['Reflectivity (dBZ)', 'Typical colour', 'Rain rate (Marshall–Palmer)', 'Meaning'],
          rows: [
            ['< 20', 'Light blue or green', 'Under 0.6 mm/h', 'Drizzle, very light rain, sometimes only insects or clear-air echoes'],
            ['20 to 30', 'Green', '0.6 to 2.7 mm/h', 'Light rain'],
            ['30 to 40', 'Yellow', '2.7 to 11.5 mm/h', 'Moderate rain'],
            ['40 to 50', 'Orange to red', '11.5 to 49 mm/h', 'Heavy rain; thunderstorm cores'],
            ['50 to 60', 'Red to magenta', '49 to 200 mm/h (the formula overestimates in hail)', 'Very heavy rain, hail possible'],
          ],
          caption: 'Colour scales differ by website; always read the colour bar. Rain-rate values are approximate.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'Doppler and the limits of radar',
      lead: 'Wind, height and attenuation.',
      blocks: [
        { t: 'p', text: 'A Doppler radar measures the frequency shift of the returned pulse, giving the **radial velocity**: the component of the wind toward or away from the radar (red is away, green is toward on many displays). It cannot see motion at right angles to the beam. Patterns reveal gust fronts (a line of convergence), microbursts (diverging outflow), the winds in squall lines and, in strong shear, rotation in storms.' },
        {
          t: 'math',
          tex: String.raw`h\approx r\sin\theta+\frac{r^{2}}{2\,k\,a},\qquad k=\tfrac43,\ a=6371\ \text{km}`,
          caption: 'The height of the radar beam above the ground at range r and elevation angle θ, allowing for the Earth’s curvature and the bending of the beam in the atmosphere.',
          where: [{ sym: 'r', def: 'range from the radar in kilometres' }, { sym: '\\theta', def: 'the elevation angle of the beam' }, { sym: 'k', def: 'the effective earth-radius factor (4/3) for standard refraction' }],
          syntax: [{ sym: 'r\\sin\\theta', say: 'the height from the beam’s upward tilt. Effect: even a 0.5° beam climbs 0.87 km in 100 km. Why: geometry.' }, { sym: 'r^2/(2ka)', say: 'the height gained as the ground curves away. Effect: at 100 km the surface has dropped 0.59 km below the horizontal line from the radar. Why: the Earth is a sphere; it matters because the beam may overshoot shallow rain.' }],
          worked: {
            title: 'A beam at 100 km',
            steps: ['0.5° elevation, r = 100 km: \\(h=0.873+10{,}000/(2\\times1.333\\times6{,}371)=0.873+0.589=1.46\\) km.', 'At 200 km: \\(1.75+2.36=4.1\\) km.'],
            answer: 'Distant rain below about 1.5 km (shallow showers) is invisible to the radar at 100 km, and even tall storms are only partly seen at 200 km. Singapore is small, so the island is well covered, but heavy rain near the radar can attenuate the beam so that storms behind it look weaker than they are.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Attenuation', tag: 'shadowing', body: 'At shorter wavelengths (C and X band), heavy rain absorbs the beam, so echoes behind a strong storm are weakened or missing. S-band radars suffer much less.' },
            { title: 'Ground clutter', tag: 'false echoes', body: 'Buildings, hills and the sea reflect the beam near the radar; filters remove most, but a stationary patch near the radar is probably clutter, not rain.' },
            { title: 'Bright band', tag: 'melting level', body: 'Melting snowflakes and ice give a ring of strong echo near the freezing level (about 5 km in the tropics), which can overestimate rain in stratiform cloud.' },
            { title: 'Dual polarisation', tag: 'drop size and type', body: 'Radars that transmit horizontal and vertical pulses distinguish rain, hail and snow, and improve rainfall estimates.' },
          ],
        },
      ],
    },
    {
      id: 'sat',
      title: 'Satellite imagery',
      lead: 'Cloud-top temperature and height.',
      blocks: [
        { t: 'p', text: 'Geostationary weather satellites such as Himawari (Japan), which covers Singapore, scan the Earth’s disc every 10 minutes or faster in 16 spectral bands. **Visible** images show reflected sunlight (bright thick cloud, only in daylight). **Infrared** images measure the temperature of the emitting surface; since temperature falls with height, a **colder cloud top is higher**. **Water vapour** images show moisture in the upper troposphere, revealing jet streams and dry intrusions. Composite **RGB products** distinguish thick ice cloud, convective storms and fog.' },
        {
          t: 'math',
          tex: String.raw`z_{\text{top}}\approx\frac{T_{\text{sfc}}-T_{B}}{\Gamma},\qquad T_B=\Big(\frac{I}{\sigma_{\text{eff}}}\Big)^{1/4}`,
          caption: 'Estimating the height of a cloud top from its infrared brightness temperature and the lapse rate.',
          where: [{ sym: 'T_B', def: 'the brightness temperature measured by the satellite' }, { sym: 'T_{\\text{sfc}}', def: 'surface temperature' }, { sym: '\\Gamma', def: 'the average lapse rate, about 6 to 6.5 K/km in the tropical troposphere' }],
          syntax: [{ sym: '(T_{\\text{sfc}}-T_B)/\\Gamma', say: 'the height at which the atmosphere has cooled to the cloud-top temperature. Effect: a cloud top at −70 °C over a 30 °C surface is about 100 K colder: 100/6.3 = 16 km. Why: the cloud emits at its own temperature, and temperature is a proxy for height.' }],
          worked: {
            title: 'Reading a cold anvil',
            steps: ['Brightness temperature −65 °C with surface 30 °C: difference 95 K; with Γ = 6.3 K/km → about 15 km.', 'A warm cloud top of 10 °C: difference 20 K → about 3 km: low cloud.'],
            answer: 'Tops colder than about −60 °C in the tropics are within a couple of kilometres of the tropopause: deep convection. An area of such tops that grows over 30 to 60 minutes signals a developing storm cluster.',
          },
        },
      ],
    },
    {
      id: 'nowcast',
      title: 'Making a nowcast',
      lead: 'The next two hours.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find the rain and its motion', body: 'Play the last 30 to 60 minutes of a radar loop and estimate the speed and direction of the main echoes (km per 10 minutes).' },
            { title: 'Project forward', body: 'Extend the motion to see which areas are likely to be hit in the next hour. This works well for echoes that keep their shape.' },
            { title: 'Look for growth and decay', body: 'New cells popping up along a sea-breeze or outflow boundary, and cloud tops that grow colder on satellite, mean storms are intensifying; cores that shrink and soften mean decay.' },
            { title: 'Check the lightning and wind', body: 'Lightning rates and Doppler convergence signal strong updrafts and downdrafts.' },
            { title: 'Compare with the official nowcast', body: 'Use the Meteorological Service Singapore’s 2-hour nowcast and rain-area images; they combine radar extrapolation, satellite and high-resolution model output.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Singapore’s afternoon pattern', text: 'On many days, storms begin to develop over the central and western parts of the island by about 2 to 3 pm, fed by sea-breeze convergence and strong surface heating, then drift east or north-east. A radar loop from 1 pm usually gives a good hint.' },
      ],
    },
  ],
  sources: [
    'Marshall, J. S. & Palmer, W. M. (1948). The distribution of raindrops with size. *Journal of Meteorology*, 5(4).',
    'Rinehart, R. E. (2010). *Radar for Meteorologists* (5th ed.). Rinehart Publications.',
    'Bessho, K. et al. (2016). An introduction to Himawari-8/9: Japan’s new-generation geostationary meteorological satellites. *Journal of the Meteorological Society of Japan*, 94(2).',
    'Doviak, R. J. & Zrnić, D. S. (1993). *Doppler Radar and Weather Observations* (2nd ed.). Academic Press.',
    'Meteorological Service Singapore (weather.gov.sg): rain-area radar, satellite imagery and the 2-hour nowcast.',
  ],
  related: ['weather/atmosphere/stability-and-convection', 'weather/singapore/rain-in-singapore', 'weather/singapore/forecasts-and-warnings', 'weather/charts-and-forecasts/models-and-ensembles'],
}

export default guide
