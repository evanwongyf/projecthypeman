import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Astrophysics can seem remote from daily life, but it has given us the technology in our phones, cameras, hospitals and maps, and it protects us from real hazards from space. Its biggest gift may be perspective: understanding where the atoms in our bodies came from and how small and precious our planet is.',
  sections: [
    {
      id: 'gps',
      title: 'GPS needs relativity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta t_{\text{net}} = \underbrace{+45.7\ \mu\text{s}}_{\text{gravity}}\ \underbrace{-\,7.2\ \mu\text{s}}_{\text{speed}} = +38.5\ \mu\text{s per day}`,
          caption: 'How much faster GPS satellite clocks tick than ground clocks each day.',
          plain: 'GPS satellites orbit 20,200 km up, where gravity is weaker, so by general relativity their clocks run faster than ours. They also move at 3.9 km/s, and by special relativity moving clocks run slower. The gravity effect wins, so the satellite clocks gain about 38 microseconds a day. Because GPS works by timing radio signals that travel at the speed of light, that error would grow into kilometres of position error each day if it were not corrected.',
          where: [{ sym: String.raw`\mu\text{s}`, def: 'microseconds (millionths of a second)' }],
          syntax: [{ sym: String.raw`\underbrace{\;}_{\text{label}}`, say: 'a brace under a term with a note saying what it is' }],
          worked: {
            title: 'Position error without the correction',
            steps: [
              String.raw`Clock error per day: \(38.5\ \mu s = 3.85\times10^{-5}\) s.`,
              String.raw`Distance light travels in that time: \(3.00\times10^{8}\times3.85\times10^{-5} = 1.16\times10^{4}\) m.`,
              String.raw`So about 11.6 km of ranging error accumulates per day.`,
            ],
            why: [
              'micro means 10⁻⁶',
              'GPS turns time into distance by multiplying by the speed of light',
              'positions are computed from several such ranges, so they drift by kilometres',
            ],
            answer: String.raw`Without Einstein’s corrections, GPS would drift by about 10 km a day. The satellite clocks are deliberately set to tick slow before launch to compensate.`,
          },
        },
      ],
    },
    {
      id: 'spinoffs',
      title: 'Other gifts from astronomy',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Digital cameras and CCDs', body: 'Charge-coupled devices were adopted and refined by astronomers; the CMOS sensor in your phone camera came from NASA JPL research.' },
          { title: 'Wi-Fi', body: 'Australian radio astronomers’ techniques for sharpening blurred signals led to a key Wi-Fi patent (CSIRO).' },
          { title: 'Medical imaging', body: 'Image-processing methods from radio astronomy and space telescopes are used in MRI, CT and mammography.' },
          { title: 'Planetary defence', body: 'Surveys track near-Earth asteroids; NASA’s DART mission (2022) proved we can nudge one off course.' },
          { title: 'Space weather', body: 'Solar flares and storms can damage satellites and power grids; monitoring the Sun gives warnings.' },
          { title: 'Timekeeping and navigation', body: 'Distant quasars define the reference frame used to measure Earth’s rotation and tectonic drift.' },
        ] },
        { t: 'p', text: '**Careers**: astrophysics trains people in physics, programming, statistics and handling huge datasets, skills sought in data science, finance, engineering and aerospace. Singapore has growing space and satellite industries (the Office for Space Technology and Industry, OSTIn), and NUS and NTU run astronomy research.' },
      ],
    },
  ],
  sources: ['Ashby, N. (2003). Relativity in the Global Positioning System. Living Reviews in Relativity 6.', 'Fossum, E. R. (1997). CMOS image sensors: electronic camera-on-a-chip. IEEE Transactions on Electron Devices 44.', 'Daly, R. T. et al. (2023). Successful kinetic impact into an asteroid for planetary defence. Nature 616.'],
  related: ['astrophysics/stars/black-holes', 'astrophysics/start-here'],
}

export default guide
