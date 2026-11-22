import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Living near the equator means heat that does not let up, humid air that makes it feel worse than the thermometer says, and sunshine strong enough to burn skin in minutes. This guide explains why temperature alone is a poor measure of how hot it feels, how the heat index and the wet-bulb globe temperature (WBGT) measure heat stress, how Singapore’s urban heat island adds to it, how the UV index is defined and why it so often reaches 10 to 12 here, how to calculate how long you can stay in the sun and what sunscreen does, and practical rules for staying safe in the heat.',
  nutshell: [
    'Sweat cools you only if it **evaporates**, so high humidity makes the same temperature feel hotter. **Heat index** and **WBGT** combine temperature and humidity (WBGT also sun and wind).',
    'Heat stress becomes dangerous when **WBGT** reaches about **31 to 33 °C**; official advisories use WBGT bands for outdoor work and activities.',
    'The **urban heat island** makes built-up parts of Singapore a few degrees warmer than green areas, especially at night, by trapping heat in buildings and roads and reducing evaporation.',
    'The **UV index** (UVI) scales sunburn-causing radiation: 3 to 5 moderate, 6 to 7 high, 8 to 10 very high, **11 or more extreme**. Singapore’s noon UVI is often 10 to 13.',
    '**Time to burn** at UVI 11 for fair skin is about **15 minutes**. SPF 30 filters about 97% of burning UV when applied properly (2 mg/cm²).',
  ],
  sections: [
    {
      id: 'feel',
      title: 'Why it feels hotter than it is',
      lead: 'Temperature, humidity, sun and wind.',
      blocks: [
        { t: 'wx-viz', viz: 'heat-stress' },
        {
          t: 'math',
          tex: String.raw`\text{WBGT}_{\text{outdoor}}=0.7\,T_{nw}+0.2\,T_g+0.1\,T_a,\qquad \text{WBGT}_{\text{indoor/shade}}=0.7\,T_{nw}+0.3\,T_g`,
          caption: 'The wet-bulb globe temperature: a weighted combination of natural wet-bulb, globe and air temperature.',
          where: [{ sym: 'T_{nw}', def: 'natural wet-bulb temperature (a wetted thermometer exposed to the wind): captures humidity and evaporation' }, { sym: 'T_g', def: 'black-globe temperature: captures solar and infrared radiation' }, { sym: 'T_a', def: 'air (dry-bulb) temperature' }],
          syntax: [{ sym: '0.7\\,T_{nw}', say: 'the biggest weight goes to wet-bulb temperature. Effect: humidity matters more than the air temperature. Why: the ability to lose heat by sweating is the main limit to exercise in the heat.' }, { sym: '0.2T_g+0.1T_a', say: 'sun and air temperature add to the load. Effect: strong sun can raise WBGT by 2 to 4 °C relative to shade. Why: radiation heats the body directly.' }],
          worked: {
            title: 'A midday outdoor reading',
            steps: ['Air 33 °C, 70% humidity, strong sun: natural wet-bulb ≈ 27.5 °C, globe temperature ≈ 41 °C.', 'WBGT = 0.7 × 27.5 + 0.2 × 41 + 0.1 × 33 = 19.25 + 8.2 + 3.3 = 30.8 °C.', 'In the shade (globe ≈ 33 °C): 0.7 × 27.5 + 0.3 × 33 = 29.2 °C.'],
            answer: 'The same air temperature gives a WBGT 1.6 °C lower in shade; those hours of difference matter for outdoor work and sport. Singapore’s official advisories (Meteorological Service Singapore, Ministry of Manpower and sports bodies) use WBGT bands to decide rest breaks and the suspension of strenuous activity.',
          },
        },
        {
          t: 'table',
          head: ['WBGT (approx.)', 'Heat stress', 'Typical guidance for exercise and work'],
          rows: [
            ['Below 28 °C', 'Lower', 'Normal activity with fluids; unacclimatised people take care'],
            ['28 to 30 °C', 'Moderate to high', 'Reduce intensity; hydrate; rest in shade'],
            ['30 to 32 °C', 'High to very high', 'Limit hard exertion; frequent breaks; acclimatised people only for long efforts'],
            ['Above 32 °C', 'Extreme', 'Avoid strenuous activity outdoors; for work, mandatory rest periods and cooling'],
          ],
          caption: 'A generic guide based on sports medicine and military practice; official bands and actions in Singapore are set by MSS, MOM and the relevant sports or safety authorities, so check the current advisory.',
        },
      ],
    },
    {
      id: 'uhi',
      title: 'The urban heat island',
      lead: 'Cities hold heat.',
      blocks: [
        { t: 'p', text: 'Concrete, asphalt and glass absorb solar radiation by day and release it at night; there are fewer plants to shade the ground and evaporate water; buildings block winds and trap heat in street canyons; and air conditioners and vehicles dump waste heat outdoors. As a result, the centre of a dense city can be several degrees warmer than green areas, an effect that is greatest on calm nights, when it can reach 4 °C or more in Singapore. This adds to the warming from climate change and raises night-time temperatures that matter for sleep and for health, especially for older people and those without air conditioning.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Green and blue', tag: 'cooling', body: 'Trees shade surfaces and evaporate water (a mature tree can cool by several hundred watts); parks, rooftop gardens and waterways reduce local temperatures by 1 to 3 °C. Singapore’s "City in Nature" plans expand these.' },
            { title: 'Cool surfaces', tag: 'reflect', body: 'Light-coloured roofs and cool paints reflect sunlight and lower roof surface temperatures; cool pavements and shaded walkways help pedestrians.' },
            { title: 'Urban design', tag: 'wind', body: 'Orienting buildings to allow breezes, adding shade and avoiding trapping heat in canyons; district cooling and efficient cooling systems reduce waste heat.' },
            { title: 'Individuals', tag: 'at home', body: 'Shade windows, use fans with air conditioning set at 25 to 26 °C, drink water, check on older neighbours, and avoid heavy exercise outdoors in the midday.' },
          ],
        },
      ],
    },
    {
      id: 'uv',
      title: 'Ultraviolet radiation',
      lead: 'The sun that burns.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{UVI}=40\ \text{m}^2\text{W}^{-1}\times E_{\text{er}},\qquad t_{\text{burn}}\approx\frac{\text{MED}}{E_{\text{er}}}=\frac{\text{MED}}{0.025\,\text{UVI}}`,
          caption: 'The UV index from the erythemally weighted irradiance, and the time to reach a minimal erythemal dose.',
          where: [{ sym: 'E_{\\text{er}}', def: 'erythemal (sunburn-weighted) irradiance in W/m²' }, { sym: '\\text{MED}', def: 'minimal erythemal dose: the UV dose that just reddens skin, about 200 to 300 J/m² for fair skin (skin type II), 450 to 600 for medium, 800 or more for dark skin' }],
          syntax: [
            { sym: '40\\times E_{\\text{er}}', say: 'the definition of the UV index. Effect: UVI 10 corresponds to 0.25 W/m² of burning UV. Why: a convenient scale from 0 to 11 or more.' },
            { sym: '\\text{MED}/(0.025\\,\\text{UVI})', say: 'the time to burn. Effect: the dose accumulates linearly with irradiance, so doubling the UV index halves the time to burn. Why: dose = irradiance × time.' },
          ],
          worked: {
            title: 'Noon in Singapore',
            steps: ['UVI 11 → irradiance 0.275 W/m². Fair skin (MED 250 J/m²): \\(t=250/0.275=909\\) s = 15 minutes.', 'Medium skin (MED 500): about 30 minutes. Dark skin (MED 900): about 55 minutes.', 'At UVI 6: fair skin 28 minutes.'],
            answer: 'The sun in Singapore can burn fair skin in 15 minutes around noon, though not every day is so strong. Skin cancer risk depends on cumulative exposure and on burns, and people of all skin types are at risk; people with darker skin burn more slowly but are not immune.',
          },
        },
        {
          t: 'table',
          head: ['UV index', 'Category', 'What to do'],
          rows: [
            ['0 to 2', 'Low', 'Minimal protection needed'],
            ['3 to 5', 'Moderate', 'Sun protection helpful when outside for more than an hour'],
            ['6 to 7', 'High', 'Hat, sunglasses and sunscreen; seek shade around midday'],
            ['8 to 10', 'Very high', 'Extra care; limit midday sun'],
            ['11 and above', 'Extreme', 'Avoid the sun in the hours around noon; cover up; reapply sunscreen'],
          ],
          caption: 'WHO and World Meteorological Organization UV index categories.',
        },
        {
          t: 'math',
          tex: String.raw`\text{transmitted fraction}=\frac1{\text{SPF}},\qquad \text{SPF}\,30\ \to\ 3.3\%\ \text{transmitted},\quad \text{SPF}\,50\ \to\ 2\%`,
          caption: 'What a sun protection factor means: the fraction of burning UV that reaches the skin under ideal application.',
          where: [{ sym: '\\text{SPF}', def: 'sun protection factor, measured at 2 mg of sunscreen per cm² of skin' }],
          syntax: [{ sym: '1/\\text{SPF}', say: 'the share of UV that gets through. Effect: SPF 30 blocks about 96.7% and SPF 50 98%; doubling the SPF gains only 1.3 percentage points. Why: the protection is a ratio; the gains diminish at high SPF. In practice most people apply only a quarter to a half of the tested amount, so the real SPF is lower; reapply every two hours and after swimming.' }],
          worked: {
            title: 'A day at the beach',
            steps: ['Fair skin, UVI 11, burn time 15 minutes unprotected. SPF 30 applied properly: protected time ≈ 15 × 30 = 450 minutes (the idealised value).', 'Real use at about one-third of the tested amount gives an effective SPF of about 3 to 5: 45 to 75 minutes.'],
            answer: 'Apply a generous amount (about 2 tablespoons for the body), reapply every two hours, and combine with shade, a hat and sunglasses. No sunscreen provides complete protection.',
          },
        },
      ],
    },
    {
      id: 'safe',
      title: 'Staying safe in the heat',
      lead: 'Practical rules.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Check the weather app for the day’s heat stress advisory, UV index and PSI before outdoor plans.',
            'Drink water regularly; do not wait for thirst during sweaty activity.',
            'Wear light, loose, light-coloured clothing, a hat or cap, and sunglasses that block UV.',
            'Rest in shade or air conditioning; schedule hard exertion for early morning or evening.',
            'Look after older people, children, pregnant women and people with chronic illnesses; never leave anyone in a parked car.',
            'Know the signs of heat exhaustion and heat stroke (see the fitness heat guide) and call 995 for a medical emergency.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Yaglou, C. P. & Minard, D. (1957). Control of heat casualties at military training centers. *AMA Archives of Industrial Health*, 16.',
    'World Health Organization et al. (2002). *Global Solar UV Index: A Practical Guide*.',
    'Roth, M. & Chow, W. T. L. (2012). A historical review and assessment of urban heat island research in Singapore. *Singapore Journal of Tropical Geography*, 33(3).',
    'Steadman, R. G. (1979). The assessment of sultriness. Part I: A temperature–humidity index based on human physiology and clothing science. *Journal of Applied Meteorology*, 18(7).',
    'Meteorological Service Singapore (weather.gov.sg): UV index, heat stress advisory and WBGT; Ministry of Manpower: heat stress measures.',
    'Faurschou, A. & Wulf, H. C. (2007). The relation between sun protection factor and amount of sunscreen applied in vivo. *British Journal of Dermatology*, 156(4).',
  ],
  related: ['fitness/endurance/training-in-the-heat', 'weather/atmosphere/moisture-and-clouds', 'weather/singapore/climate-change-and-singapore', 'weather/singapore/singapore-climate'],
}

export default guide
