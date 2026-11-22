import type { ArchiveNode } from '../topics'

// Astrophysics from the ground up: the scales and units of the universe, light and what it
// tells us, gravity and orbits, how stars shine, live and die, black holes, galaxies and dark
// matter, cosmology, exoplanets, telescopes, and why any of it is useful. Each formula has a
// plain story, its symbols spelled out, and a worked example whose every step gives its reason.

export const ASTROPHYSICS: ArchiveNode = {
  slug: 'astrophysics',
  title: 'Astrophysics',
  blurb: 'Stars, black holes, galaxies, exoplanets and the expanding universe, with the maths behind each idea worked through step by step for beginners, and what astronomy gives back to everyday life.',
  glyph: '✷',
  color: 'color-mix(in srgb, var(--lavender) 55%, var(--orange))',
  tags: ['astrophysics', 'astronomy', 'stars', 'black holes', 'galaxies', 'cosmology', 'exoplanets', 'big bang', 'gravity', 'telescopes', 'space'],
  children: [
    { slug: 'start-here', title: 'Start here: the universe by numbers', glyph: '★', blurb: 'Scientific notation, astronomical units, light-years and parsecs, and a tour from the Moon to the edge of the observable universe.', minutes: 14, tags: ['scales', 'scientific notation', 'light-year', 'parsec', 'astronomical unit'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      glyph: '◎',
      group: 'Physics of the sky',
      blurb: 'Distance by parallax, what light tells us (temperature, composition, motion), and gravity and orbits.',
      children: [
        { slug: 'distance-and-parallax', title: 'Measuring distance: parallax and the distance ladder', blurb: 'Parallax and the parsec, standard candles, the inverse-square law and magnitudes.', minutes: 15, tags: ['parallax', 'parsec', 'standard candle', 'inverse square', 'magnitude', 'cepheid'] },
        { slug: 'light-and-spectra', title: 'Light, temperature and spectra', blurb: 'Wavelength and frequency, Wien’s law, the Stefan–Boltzmann law, spectral lines and the Doppler shift.', minutes: 16, tags: ['light', 'spectrum', 'wien', 'stefan-boltzmann', 'doppler', 'redshift', 'blackbody'] },
        { slug: 'gravity-and-orbits', title: 'Gravity and orbits', blurb: 'Newton’s law of gravitation, orbital speed, Kepler’s third law and escape velocity, with the Earth, Moon and planets.', minutes: 16, tags: ['gravity', 'newton', 'kepler', 'orbit', 'escape velocity', 'satellite'] },
      ],
    },
    {
      slug: 'stars',
      title: 'Stars',
      glyph: '☀',
      group: 'Physics of the sky',
      blurb: 'How stars shine, how long they live, how they die, and the extreme objects they leave behind.',
      children: [
        { slug: 'how-stars-shine', title: 'How stars shine: fusion and E = mc²', blurb: 'The proton–proton chain, mass turning into energy, how much hydrogen the Sun burns, and the Hertzsprung–Russell diagram.', minutes: 15, tags: ['fusion', 'e=mc2', 'sun', 'hr diagram', 'main sequence', 'luminosity'] },
        { slug: 'lives-of-stars', title: 'The lives and deaths of stars', blurb: 'Lifetimes by mass, red giants, white dwarfs, supernovae, neutron stars and where the elements come from.', minutes: 15, tags: ['stellar evolution', 'red giant', 'white dwarf', 'supernova', 'neutron star', 'nucleosynthesis'] },
        { slug: 'black-holes', title: 'Black holes and gravitational waves', blurb: 'The Schwarzschild radius, time dilation, the black hole images, Hawking radiation and LIGO’s gravitational waves.', minutes: 16, tags: ['black hole', 'event horizon', 'schwarzschild', 'time dilation', 'gravitational waves', 'ligo'] },
      ],
    },
    {
      slug: 'cosmos',
      title: 'Galaxies and the universe',
      glyph: '🌌',
      group: 'The big picture',
      blurb: 'Galaxies and dark matter, the expanding universe and the Big Bang, and planets around other stars.',
      children: [
        { slug: 'galaxies-and-dark-matter', title: 'Galaxies and dark matter', blurb: 'The Milky Way, rotation curves, how we weigh a galaxy, dark matter and gravitational lensing.', minutes: 14, tags: ['galaxy', 'milky way', 'dark matter', 'rotation curve', 'lensing'] },
        { slug: 'cosmology', title: 'Cosmology: the expanding universe', blurb: 'Hubble’s law, the age of the universe, cosmological redshift, the cosmic microwave background, critical density and dark energy.', minutes: 18, tags: ['cosmology', 'hubble', 'big bang', 'cmb', 'dark energy', 'redshift', 'hubble tension'] },
        { slug: 'exoplanets', title: 'Exoplanets and the search for life', blurb: 'The transit and wobble methods, planet sizes and masses, the habitable zone and the Drake equation.', minutes: 15, tags: ['exoplanet', 'transit', 'radial velocity', 'habitable zone', 'drake equation', 'jwst'] },
      ],
    },
    {
      slug: 'practice',
      title: 'Observing and why it matters',
      glyph: '🔭',
      group: 'The big picture',
      blurb: 'How telescopes work and what limits them, and what astrophysics gives back to everyday life.',
      children: [
        { slug: 'telescopes', title: 'Telescopes and observing', blurb: 'Light-gathering power, resolution and the diffraction limit, magnification, and observing from Singapore.', minutes: 13, tags: ['telescope', 'resolution', 'aperture', 'magnification', 'jwst', 'stargazing'] },
        { slug: 'utility', title: 'Why astrophysics is useful', blurb: 'GPS and relativity, imaging and detector spin-offs, planetary defence, space weather, and careers.', minutes: 11, tags: ['gps', 'relativity', 'spin-off', 'space weather', 'careers'] },
      ],
    },
  ],
}
