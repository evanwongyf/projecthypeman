import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Where radar sees the rain from below and nearby, a weather satellite sees the clouds from above and everywhere. Geostationary satellites sit 35,786 km above the equator and look at the same part of the Earth continuously; over Singapore this is Japan’s Himawari satellite at about 141° East, which photographs the whole disc every ten minutes in sixteen wavelength bands. Each band answers a different question: visible light shows how thick cloud is, the thermal infrared shows how cold (and therefore how high) the cloud tops are, and the water-vapour bands show moisture in the upper air. This guide explains the channels, the brightness-temperature idea, how to turn a cloud-top temperature into a height, the colour-enhanced infrared table used to spot deep convection, and how to read a tropical scene.',
  nutshell: [
    '**Visible** imagery shows reflected sunlight (bright = thick cloud, daytime only); **infrared (IR)** shows emitted heat as **brightness temperature**; **water vapour** shows moisture in the upper troposphere.',
    'Cold IR cloud tops are **high**: in the tropics about **6.2 °C per kilometre**, so a −70 °C top is about **15 km** (near the tropopause).',
    'The **enhanced IR** colour table paints the coldest tops (below −50 °C or so) in yellow, orange, red and white: the places with the **deepest convection and heaviest rain**.',
    '**Himawari-9** (JMA) covers Singapore with a full-disc image every **10 minutes** and faster regional scans; it replaced Himawari-8 as the operational satellite in 2022.',
    'Satellite and radar are **complements**: the satellite shows the whole system and its growth; the radar shows the rain under it.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The satellite lab',
      lead: 'One scene, four channels.',
      blocks: [
        { t: 'wx-chart', viz: 'satellite' },
        {
          t: 'table',
          head: ['Channel', 'Wavelength (approx.)', 'What it shows', 'Best for'],
          rows: [
            ['Visible', '0.4 to 0.7 µm', 'Reflected sunlight: thick cloud is bright, sea is dark', 'Cloud texture and thickness by day; fog and smoke'],
            ['Near infrared', '0.86, 1.6, 2.3 µm', 'Cloud particle size, snow, ice and vegetation', 'Cloud phase; fire and haze'],
            ['Shortwave IR', '3.9 µm', 'A mix of reflected and emitted radiation', 'Low cloud and fog at night; fires'],
            ['Water vapour', '6.2, 6.9, 7.3 µm', 'Moisture and temperature in the upper and middle troposphere', 'Jet streams, dry slots and moist plumes'],
            ['Thermal (window) IR', '10.4, 11.2, 12.4 µm', 'Brightness temperature of the cloud top or the surface', 'Cloud-top height, storm intensity, day and night'],
          ],
          caption: 'Himawari carries 16 bands; this table groups them. The window infrared bands are the workhorse for tropical convection.',
        },
      ],
    },
    {
      id: 'tb',
      title: 'Brightness temperature and cloud-top height',
      lead: 'Cold is high.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`z_{\text{top}}\approx\frac{T_s-T_b}{\Gamma},\qquad T_b=\left[\frac{hc}{k\lambda}\Big/\ln\!\Big(1+\frac{2hc^{2}}{\lambda^{5}B_\lambda}\Big)\right]`,
          caption: 'Cloud-top height from brightness temperature (a lapse-rate estimate), where T_b is found by inverting the Planck function for the measured radiance.',
          where: [{ sym: 'T_s', def: 'the surface (or low-level air) temperature' }, { sym: 'T_b', def: 'the brightness temperature of the cloud top' }, { sym: '\\Gamma', def: 'the mean lapse rate (about 6.2 °C per km in the tropics)' }, { sym: 'B_\\lambda', def: 'the measured spectral radiance' }],
          syntax: [{ sym: '(T_s-T_b)/\\Gamma', say: 'the cooling divided by the lapse rate gives the height. Effect: a colder top means a higher cloud. Why: air cools with height, so the cloud-top temperature is a thermometer reading at that level.' }],
          worked: {
            title: 'A tropical thunderstorm top',
            steps: ['Surface air 27 °C; the IR image shows a minimum brightness temperature of −75 °C.', 'z ≈ (27 − (−75))/6.2 = 16.5 km.', 'The tropical tropopause is at about 16 to 17 km, so the top has reached the tropopause.'],
            answer: 'A cloud top at the tropopause is a very deep storm. The estimate is only rough: thin cirrus is partly transparent and reads warmer than its true top, and the lapse rate is not constant with height. Overshooting tops can punch a few kilometres into the stratosphere and read colder than the environment.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Enhanced IR table', tag: 'colours for cold', body: 'Warm temperatures are shown in grey; cold tops are coloured, typically blue (−30 to −40 °C), green, yellow (−50 to −60), orange and red (−60 to −80) and white below −80. The coloured area marks deep convection.' },
            { title: 'Anvils', tag: 'spread-out tops', body: 'High winds at the top spread the cloud downwind into a wide cirrus anvil, so the colder core is smaller than the cold area.' },
            { title: 'Overshooting top', tag: 'a strong updraft', body: 'A small cold spot on top of the anvil shows an updraft strong enough to push through the equilibrium level; it suggests a severe storm.' },
            { title: 'Cloud-top temperature and rain', tag: 'a rough link', body: 'Colder tops tend to mean heavier rain, but the link is loose: some very cold anvils produce little rain and warm clouds in the tropics can rain heavily.' },
          ],
        },
      ],
    },
    {
      id: 'read',
      title: 'Reading a tropical scene',
      lead: 'A checklist.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Use the loop, not the still', body: 'Several frames show movement, growth and decay: a growing cell has an expanding cold core.' },
            { title: 'Find the coldest tops', body: 'The red and white areas in enhanced IR are the deep convection; follow them for the next hour.' },
            { title: 'Check the water vapour', body: 'Dry intrusions (dark areas) can suppress convection; moist plumes feed it.' },
            { title: 'Compare with the radar', body: 'Match the cold tops with the radar echoes: where the cold top has no echo below, the cloud may be an anvil with little rain.' },
            { title: 'Look at the large scale', body: 'Cloud clusters along the monsoon trough, a line of cloud from Sumatra at dawn (a squall) or a surge of cloud from the South China Sea are visible long before they reach the island.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Singapore’s satellite view', text: 'Himawari-9 images are used by the Meteorological Service Singapore and the ASEAN Specialised Meteorological Centre. Satellite images are also the main tool for tracking smoke from fires in the region: the shortwave infrared band shows hotspots and the visible band shows the smoke plume (see the haze guide).' },
      ],
    },
  ],
  sources: [
    'Japan Meteorological Agency. Himawari-8/9 imager and band specifications (jma.go.jp; data.jma.go.jp/mscweb).',
    'Bessho, K. et al. (2016). An introduction to Himawari-8/9: Japan’s new-generation geostationary meteorological satellites. *Journal of the Meteorological Society of Japan*, 94(2), 151–183.',
    'Kidder, S. Q. & Vonder Haar, T. H. (1995). *Satellite Meteorology: An Introduction*. Academic Press.',
    'Meteorological Service Singapore (weather.gov.sg); ASEAN Specialised Meteorological Centre (asmc.asean.org).',
  ],
  related: ['weather/charts-and-forecasts/radar-and-satellite', 'weather/chart-atlas/radar-and-reflectivity', 'weather/singapore/haze-and-air-quality'],
}

export default guide
